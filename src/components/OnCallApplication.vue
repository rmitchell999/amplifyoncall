
<template src="./OnCallApplication.html"></template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { generateClient } from 'aws-amplify/api';
import { listOnCallEntries, listContacts } from '@/graphql/queries';
import {
  createContact,
  updateContact,
  deleteContact as deleteContactMutation,
  createOnCallEntry,
  updateOnCallEntry,
} from '@/graphql/mutations';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import type { GraphQLResult } from '@aws-amplify/api-graphql';
const client = generateClient();
interface OnCallEntry {
  id?: string;
  groupName: string;
  day: string;
  contactID: string;
  contact?: Contact;
  phone: string;
  startTime?: string;
  timezone?: string;
  selected?: boolean; // Add this property
}
interface Contact {
  id: string;
  email: string;
  phone: string;
  name: string;
  onCall: boolean;
}
const props = defineProps<{ signOut: () => void, user: any }>();
const activeTab = ref('schedule');
const showModal = ref(false);
const editIndex = ref<number | null>(null);
const form = ref<Contact>({ id: '', email: '', phone: '', name: '', onCall: false });
const errorMessage = ref('');
const contacts = ref<Contact[]>([]);
const onCallList = ref<OnCallEntry[]>([]);
const timeOptions = ref(generateTimeOptions());
const timezoneOptions = ref(['GMT', 'EST', 'PST', 'BST', 'CET']);
const selectedMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());
const isAdmin = ref(false);
// State to hold timezone and start time for each month
const monthlySettings = ref<Record<number, { timezone: string; startTime: string }>>({});
// Initialize default settings for each month
for (let i = 0; i < 12; i++) {
  monthlySettings.value[i] = {
    timezone: 'GMT',   // Default timezone
    startTime: '07:30' // Default start time
  };
}
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
function generateTimeOptions() {
  const times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i < 10 ? `0${i}` : i;
      const minute = j < 10 ? `0${j}` : j;
      times.push(`${hour}:${minute}`);
    }
  }
  return times;
}
const fetchContacts = async () => {
  console.log("Fetching contacts...");
  try {
    const result = await client.graphql({ query: listContacts }) as GraphQLResult<any>;
    if (result.data) {
      contacts.value = result.data.listContacts.items;
      console.log("Contacts fetched:", contacts.value);
    } else {
      console.error("Error fetching contacts:", result.errors);
      throw new Error("Error fetching contacts");
    }
  } catch (error) {
    console.error("Error in fetchContacts:", error);
  }
};
const fetchOnCallEntries = async () => {
  console.log("Fetching on-call entries...");
  try {
    const result = await client.graphql({ query: listOnCallEntries }) as GraphQLResult<{ listOnCallEntries: { items: OnCallEntry[] } }>;
    if (result.data) {
      onCallList.value = result.data.listOnCallEntries.items;
      console.log("On-call entries fetched:", onCallList.value);
    } else {
      console.error("Error fetching on-call entries:", result.errors);
      throw new Error("Error fetching on-call entries");
    }
  } catch (error) {
    console.error("Error in fetchOnCallEntries:", error);
  }
};
const saveContact = async () => {
  const e164Regex = /^\+?[1-9]\d{1,14}$/; // E.164 format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  
  // Check if email format is valid
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address.';
    return;
  }
  // Check for duplicate names
  const duplicateName = contacts.value.find(contact => contact.name.toLowerCase() === form.value.name.toLowerCase());
  if (duplicateName) {
    errorMessage.value = 'Contact with this name already exists.';
    return;
  }
  // Check for duplicate phone numbers
  const duplicatePhone = contacts.value.find(contact => contact.phone === form.value.phone);
  if (duplicatePhone) {
    errorMessage.value = 'Contact with this phone number already exists.';
    return;
  }
  try {
    const contactInput = {
      email: form.value.email,
      phone: form.value.phone,
      name: form.value.name,
      onCall: form.value.onCall
    };
    
    if (editIndex.value !== null) {
      await client.graphql({
        query: updateContact,
        variables: { input: { ...contactInput, id: form.value.id } }
      });
    } else {
      await client.graphql({
        query: createContact,
        variables: { input: contactInput }
      });
    }
    showModal.value = false;
    await fetchContacts();
  } catch (error) {
    console.error("Error saving contact:", error);
    errorMessage.value = 'An error occurred while saving the contact.';
  }
};
const deleteContact = async (index: number) => {
  const contactIdToDelete = contacts.value[index].id; // Get the ID of the contact to be deleted
  try {
    // Delete the contact from the database
    await client.graphql({
      query: deleteContactMutation,
      variables: { input: { id: contactIdToDelete } }
    });
    
    // Update the onCallList to remove references to the deleted contact
    onCallList.value.forEach(entry => {
      if (entry.contactID === contactIdToDelete) {
        entry.contactID = ''; // Clear the contactID
        entry.phone = ''; // Clear the associated phone number
      }
    });
    await fetchContacts();
  } catch (error) {
    console.error("Error deleting contact:", error);
    errorMessage.value = 'An error occurred while deleting the contact.';
  }
};
const updatePhoneNumber = (index: number) => {
  const contactName = onCallList.value[index].contact;
  if (typeof contactName === 'string') {
    const contact = contacts.value.find(c => c.name === contactName);
    if (contact) {
      onCallList.value[index].phone = contact.phone;
    }
  }
};
const generateCalendar = async () => {
  onCallList.value = []; 
  const now = new Date(selectedYear.value, selectedMonth.value);
  const start = startOfMonth(now);
  const end = endOfMonth(now);
  const days = eachDayOfInterval({ start, end });
  onCallList.value = days.map(day => ({
    id: undefined,
    groupName: 'Terneuzen',
    day: format(day, 'EEEE dd-MM-yyyy'),
    contactID: '',
    phone: '',
    startTime: monthlySettings.value[selectedMonth.value].startTime, // Use monthly settings
    timezone: monthlySettings.value[selectedMonth.value].timezone, // Use monthly settings
    selected: false // Initialize selected property
  }));
  try {
    const result = await client.graphql({ query: listOnCallEntries }) as GraphQLResult<{ listOnCallEntries: { items: OnCallEntry[] } }>;
    if (result.data?.listOnCallEntries?.items) {
      // Merge existing entries for the current month
      onCallList.value = onCallList.value.map((newEntry) => {
        const existingEntry = result.data.listOnCallEntries.items.find(
          (item) => item.day === newEntry.day
        );
        return existingEntry || newEntry;
      });
    }
  } catch (error) {
    console.error('Error fetching on-call entries:', error);
  }
};
const selectDay = (entry: OnCallEntry) => {
  entry.selected = !entry.selected;
  // Clear selection from other entries if only one can be active
  onCallList.value.forEach(item => {
    if (item !== entry) item.selected = false;
  });
};
const checkAdmin = async () => {
  try {
    const user = await getCurrentUser();
    const session = await fetchAuthSession();
    if (!session.tokens) {
      console.error("No tokens found in the session.");
      return;
    }
    const groups = session.tokens.accessToken.payload["cognito:groups"];
    if (Array.isArray(groups)) {
      isAdmin.value = groups.includes("TerneuzenAdmin");
    } else {
      console.error("Groups is not an array:", groups);
    }
  } catch (error) {
    console.error("Error checking if user is admin:", error);
  }
};
const openModal = (index: number | null = null) => {
  editIndex.value = index;
  if (index !== null) {
    form.value = { ...contacts.value[index] }; // Load contact details for editing
  } else {
    form.value = { id: '', email: '', phone: '', name: '', onCall: false }; // Reset for new contact
  }
  showModal.value = true; // Open the modal
};
// Function to fetch on-call entries
const fetchAndReloadSchedule = async () => {
  await fetchOnCallEntries();
  await generateCalendar(); // Update the calendar after fetching
};
onMounted(async () => {
  console.log('Component mounted');
  try {
    await fetchContacts();
    await fetchAndReloadSchedule(); // Fetch contacts and reload the schedule
    loadSettings(); // Load monthly settings
    await checkAdmin();
  } catch (error) {
    console.error("Error during mounted hook:", error);
  }
});
const loadSettings = async () => {
  try {
    const result = await client.graphql({ query: listOnCallEntries });
    if (result.data) {
      const entries = result.data.listOnCallEntries.items;
      entries.forEach(entry => {
        const month = new Date(entry.day).getMonth(); // Get the month from the entry day
        monthlySettings.value[month] = {
          timezone: entry.timezone || 'GMT', // Use saved timezone or default to GMT
          startTime: entry.startTime || '07:30' // Use saved start time or default to 07:30
        };
      });
    }
  } catch (error) {
    console.error("Error loading settings:", error);
  }
};
const saveSchedule = async () => {
  if (!confirm('Are you sure you want to save the schedule?')) return;
  try {
    const updatedEntries = onCallList.value.map(entry => ({
      id: entry.id,
      groupName: entry.groupName,
      day: entry.day,
      contactID: entry.contactID,
      phone: entry.phone,
      startTime: monthlySettings.value[selectedMonth.value].startTime, // Get the start time for the selected month
      timezone: monthlySettings.value[selectedMonth.value].timezone // Get the timezone for the selected month
    }));
    // Efficiently update or create entries based on ID
    await Promise.all(updatedEntries.map(async (entry) => {
      if (entry.id) {
        await client.graphql({
          query: updateOnCallEntry,
          variables: { input: { ...entry, id: entry.id! } },
        });
      } else {
        await client.graphql({
          query: createOnCallEntry,
          variables: { input: entry },
        });
      }
    }));
    alert('Schedule saved successfully!');
    await fetchAndReloadSchedule(); // Refetch after saving d
  } catch (error) {
    console.error("Error saving schedule:", error);
    alert('An error occurred while saving the schedule.');
  }
};
</script>
<style src="./OnCallApplication.css" scoped></style>
