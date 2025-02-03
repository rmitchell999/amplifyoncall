<template>
  <main>
    <Authenticator>
      <template #default="{ signOut, user, authState }">
        <div v-if="isLoading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <header>
            <h1 v-if="isGlobalAdmin" class="dashboard-title">Global Admin Dashboard</h1>
          </header>
          <component
            :is="selectedComponent"
            :key="componentKey"
            :signOut="signOut"
            :user="user"
            :isReadOnly="isReadOnly" 
          />
        </div>
      </template>
    </Authenticator>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Authenticator } from '@aws-amplify/ui-vue';
import TernuezenSchedule from './components/TerneuzenSchedule.vue';
import ITSchedule from './components/ITSchedule.vue';
import GlobalAdminView from './components/GlobalAdminView.vue';
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession } from 'aws-amplify/auth';


export default defineComponent({
  components: {
    Authenticator,
    TernuezenSchedule,
    ITSchedule,
    GlobalAdminView,
  },
  setup() {
    const userGroups = ref<string[]>([]);
    const isLoading = ref(true);
    const componentKey = ref(0);
    const isReadOnly = ref(false); // Define the isReadOnly property

    const isGlobalAdmin = computed(() => userGroups.value.includes('GlobalAdmin'));
    const isTerneuzenAdmin = computed(() => userGroups.value.includes('TerneuzenAdmin'));
    const isTerneuzenReadOnly = computed(() => userGroups.value.includes('TerneuzenReadOnly'));
    const isITAdmin = computed(() => userGroups.value.includes('ITAdmin'));
    const isITReadOnly = computed(() => userGroups.value.includes('ITReadOnly'));

    const selectedComponent = computed(() => {
  console.log('User Groups:', userGroups.value); // Log user groups for debugging
  if (isGlobalAdmin.value) {
    return 'GlobalAdminView';
  } else if (isTerneuzenAdmin.value || isTerneuzenReadOnly.value) {
    return 'TernuezenSchedule';
  } else if (isITAdmin.value || isITReadOnly.value) {
    return 'ITSchedule';
  } else {
    return null; // Handle cases where no group matches
  }
});

// Fetch user groups
const fetchUserGroups = async () => {
  try {
    const session = await fetchAuthSession(); // Fetch the current session
    console.log("Session:", session); // Log the session for debugging
    const groups = session.tokens?.accessToken.payload['cognito:groups'] || [];
    
    userGroups.value = Array.isArray(groups) 
      ? groups.filter((group) => typeof group === 'string') 
      : (typeof groups === 'string' ? [groups] : []);
    
    console.log("User Groups after fetch:", userGroups.value); // Log the fetched user groups

    // Debug the selected component
    console.log("Selected Component after fetch:", selectedComponent.value);
  } catch (error) {
    console.error("Error fetching user groups:", error);
  } finally {
    isLoading.value = false; // Set loading to false after attempting to fetch user groups
  }
};


    // Set up an Amplify Hub listener for auth events
    const handleAuthEvents = (data: { payload: { event: string } }) => {
      const { payload } = data; // Destructure payload from event data
      switch (payload.event) {
        case 'signedIn':
          console.log("User has signed in.");
          fetchUserGroups(); // Fetch user groups on sign-in
          componentKey.value += 1; // Update the component key to trigger a re-render
          break;
        case 'signedOut':
          console.log("User has signed out.");
          userGroups.value = []; // Clear user groups when signed out
          componentKey.value += 1; // Update the component key to trigger a re-render
          break;
        default:
          break;
      }
    };

    // Subscribe to auth events on mounted
    onMounted(() => {
      const hubListenerCancelToken = Hub.listen('auth', handleAuthEvents); // Start listening for auth events
      fetchUserGroups(); // Initial fetch of user groups when component is mounted

      // Cleanup listener on unmounted
      onBeforeUnmount(() => {
        hubListenerCancelToken(); // Remove the listener using the token returned
      });
    });

    return {
      userGroups,
      isGlobalAdmin,
      isTerneuzenAdmin,
      isTerneuzenReadOnly,
      isITAdmin,
      isITReadOnly,
      selectedComponent,
      isLoading,
      componentKey,
      isReadOnly, // Make isReadOnly available in the template
    };
  },
});
</script>

<style>
@import '@aws-amplify/ui-vue/styles.css';

.dashboard-title {
  color: #ffffff;
  padding: 0px; /* Reduced padding */
  flex-grow: 1; /* Occupy remaining space */
  text-align: center; /* Center the title */
}

main {
  margin-top: 0px;
  padding: 10px;
  background-color: #3ab0b3; /* Set the background color */
}

/* Additional list styles */
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  gap: 1px;
  border-radius: 8px;
  overflow: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
li {
  background-color: #f9f9f9;
  padding: 0px;
  transition: background-color 0.3s;
}

a {
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
}
a:hover {
  color: #3ab0b3;
}
</style>

