<template src="./OnCallApplication.html"></template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { generateClient } from 'aws-amplify/api';
import { listOnCallEntries, listContacts } from '@/graphql/queries';
import { createOnCallEntry, updateOnCallEntry, deleteOnCallEntry } from '@/graphql/mutations';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import type { GraphQLResult } from '@aws-amplify/api-graphql'; // Use type-only import

// Create the client instance
const client = generateClient();

// Define the OnCallEntry interface
interface OnCallEntry {
  id?: string;
  groupName: string;
  day: string;
  contact: string;
  phone: string;
  contactID: string;
}

// Define the Contact interface
interface Contact {
  id: string;
  email: string;
  phone: string;
  name: string;
  onCall: boolean;
}

// Define props
const props = defineProps<{ signOut: () => void, user: any }>();

// Define refs for reactive data
const activeTab = ref('schedule');
const showModal = ref(false);
const editIndex = ref<number | null>(null);
const form = ref<Contact>({ id: '', email: '', phone: '', name: '', onCall: false });
const errorMessage = ref('');
const contacts = ref<Contact[]>([]);
const onCallList = ref<OnCallEntry[]>([]);
const timeOptions = ref(generateTimeOptions());
const timezoneOptions = ref(['GMT', 'EST', 'PST', 'BST', 'CET']);
const selectedTimezone = ref('GMT');
const startTime = ref('');
const selectedMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());
const isAdmin = ref(false); // Add a ref to track if the user is an admin

// Define months and years arrays
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

// Generate time options
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

// Fetch data from the backend
const fetchContacts = async () => {
  console.log("Fetching contacts...");
  const result = await client.graphql({
    query: listContacts
  }) as GraphQLResult<any>;
  if (result.data) {
    contacts.value = result.data.listContacts.items;
    console.log("Contacts fetched:", contacts.value);
  } else {
    console.error("Error fetching contacts:", result.errors);
  }
};

const fetchOnCallEntries = async () => {
  console.log("Fetching on-call entries...");
  const result = await client.graphql({
    query: listOnCallEntries
  }) as GraphQLResult<any>;
  if (result.data) {
    onCallList.value = result.data.listOnCallEntries.items;
    console.log("On-call entries fetched:", onCallList.value);
  } else {
    console.error("Error fetching on-call entries:", result.errors);
  }
};

// Save contact to the backend
const saveContact = async () => {
  const e164Regex = /^\+?[1-9]\d{1,14}$/;
  if (!e164Regex.test(form.value.phone)) {
    errorMessage.value = 'Please enter a valid E.164 phone number.';
    return;
  }
  try {
    if (editIndex.value !== null) {
      await client.graphql({
        query: updateOnCallEntry,
        variables: { input: { ...form.value, contactID: form.value.id, groupName: 'DefaultGroupName', day: '2021-01-01', id: form.value.id! } } // Ensure all required fields are included, ensure id is present
      });
    } else {
      await client.graphql({
        query: createOnCallEntry,
        variables: { input: { ...form.value, contactID: form.value.id, groupName: 'DefaultGroupName', day: '2021-01-01' } } // Ensure all required fields are included
      });
    }
    showModal.value = false;
    await fetchContacts();
  } catch (error) {
    console.error("Error saving contact:", error);
    errorMessage.value = 'An error occurred while saving the contact.';
  }
};

// Delete contact from the backend
const deleteContact = async (index: number) => {
  try {
    await client.graphql({
      query: deleteOnCallEntry,
      variables: { input: { id: contacts.value[index].id } }
    });
    await fetchContacts();
  } catch (error) {
    console.error("Error deleting contact:", error);
    errorMessage.value = 'An error occurred while deleting the contact.';
  }
};

// Update phone number based on selected contact
const updatePhoneNumber = (index: number) => {
  const contact = contacts.value.find(c => c.name === onCallList.value[index].contact);
  if (contact) {
    onCallList.value[index].phone = contact.phone;
  }
};

// Generate the calendar
const generateCalendar = async () => {
  const now = new Date(selectedYear.value, selectedMonth.value);
  const start = startOfMonth(now);
  const end = endOfMonth(now);
  const days = eachDayOfInterval({ start, end });
  onCallList.value = days.map(day => ({
    groupName: 'Terneuzen',
    day: format(day, 'EEEE dd-MM-yyyy'),
    contact: '',
    phone: '',
    contactID: '' // Initialize contactID
  }));
  await fetchOnCallEntries();
};

// Check if the user is an admin
const checkAdmin = () => {
  if (props.user && props.user.signInUserSession && props.user.signInUserSession.accessToken) {
    const payload = props.user.signInUserSession.accessToken.payload;
    console.log("Access Token Payload:", payload);
    isAdmin.value = payload["cognito:groups"] && payload["cognito:groups"].includes("TerneuzenAdmin");
  }
};

// Open modal for adding or editing contact
const openModal = (event: Event, index: number | null = null) => {
  editIndex.value = index;
  if (index !== null) {
    form.value = { ...contacts.value[index] };
  } else {
    form.value = { id: '', email: '', phone: '', name: '', onCall: false };
  }
  showModal.value = true;
};

// Save schedule to the backend
const saveSchedule = async () => {
  try {
    const promises = onCallList.value.map(entry => {
      if (entry.id) {
        return client.graphql({
          query: updateOnCallEntry,
          variables: { input: { ...entry, contactID: entry.contactID || '', groupName: entry.groupName || 'DefaultGroupName', day: entry.day || '2021-01-01', id: entry.id! } } // Ensure all required fields are included, ensure id is present
        });
      } else {
        return client.graphql({
          query: createOnCallEntry,
          variables: { input: { ...entry, contactID: entry.contactID || '', groupName: entry.groupName || 'DefaultGroupName', day: entry.day || '2021-01-01' } } // Ensure all required fields are included
        });
      }
    });
    await Promise.all(promises);
    console.log("Schedule saved successfully.");
  } catch (error) {
    console.error("Error saving schedule:", error);
  }
};

// Lifecycle hook
onMounted(() => {
  console.log('Component mounted');
  fetchContacts();
  generateCalendar();
  checkAdmin(); // Check if the user is an admin
});
</script>
<style src="./OnCallApplication.css" scoped></style>