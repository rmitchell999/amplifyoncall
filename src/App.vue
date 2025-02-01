
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
import { defineComponent, ref, computed, onMounted, watchEffect } from 'vue';
import { Authenticator } from '@aws-amplify/ui-vue';
import TernuezenSchedule from './components/TerneuzenSchedule.vue';
import ITSchedule from './components/ITSchedule.vue';
import GlobalAdminView from './components/GlobalAdminView.vue';
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
    const isLoggedIn = ref(false);
    const isLoading = ref(true);
    const isReadOnly = ref(false);
    const componentKey = ref(0);
    const authStateRef = ref<string>(); //Added ref for authState
    const getUserGroups = async () => {
      try {
        const session = await fetchAuthSession();
        isLoggedIn.value = !!session.tokens?.accessToken;
        if (session.tokens?.accessToken) {
          const groups = session.tokens.accessToken.payload['cognito:groups'];
          userGroups.value = Array.isArray(groups)
            ? groups.filter((group: any) => typeof group === 'string')
            : (typeof groups === 'string' ? [groups] : []);
        } else {
          userGroups.value = [];
        }
      } catch (error) {
        console.error("Error fetching user groups:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const isGlobalAdmin = computed(() => userGroups.value.includes('GlobalAdmin'));
    const isTernuezenAdmin = computed(() => userGroups.value.includes('TerneuzenAdmin'));
    const isTernuezenReadOnly = computed(() => userGroups.value.includes('TerneuzenReadOnly'));
    const isITAdmin = computed(() => userGroups.value.includes('ITAdmin'));
    const isITReadOnly = computed(() => userGroups.value.includes('ITReadOnly'));
    const selectedComponent = computed(() => {
      console.log('User Groups:', userGroups.value);
      if (isGlobalAdmin.value) return 'GlobalAdminView';
      else if (isTernuezenAdmin.value) return 'TernuezenSchedule';
      else if (isTernuezenReadOnly.value) return 'TernuezenSchedule';
      else if (isITAdmin.value) return 'ITSchedule';
      else if (isITReadOnly.value) return 'ITSchedule';
      else return null;
    });
    // Watch for changes in authState
    watchEffect(async () => {
      if (authStateRef.value === 'signedOut') {
        userGroups.value = [];
      } else if (authStateRef.value === 'signedIn'){
        await getUserGroups();
      }
      componentKey.value += 1;
    });
    onMounted(async () => {
      await getUserGroups();
    });
    return {
      userGroups,
      isGlobalAdmin,
      isTernuezenAdmin,
      isTernuezenReadOnly,
      isITAdmin,
      isITReadOnly,
      selectedComponent,
      isLoggedIn,
      isReadOnly,
      isLoading,
      componentKey,
      authStateRef, //Make authStateRef available in template
    };
  },
});
</script>



<style>
@import '@aws-amplify/ui-vue/styles.css';


.dashboard-title {
  color: white;
  padding: 0px; /* Reduced padding */
  flex-grow: 1; /* Occupy remaining space */
  text-align: center; /* Center the title */
}

main {
  margin-top: 0px;
  padding: 0px;
  background-color: #f8f8f8;
}

/* List Styles */
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
  padding: 8px;
  transition: background-color 0.3s;
}


a {
  font-weight: 800;
  text-decoration: none;
  color: #4dc1d2;
}

a:hover {
  color: #3ab0b3;
}
</style>
