<template>
  <main>
    <header>
      <img src="@/assets/logo.png" alt="Barry-Wehmiller Logo" class="logo" />
    </header>
    <Authenticator>
      <template #default="{ signOut, user }">
        <div>
          <!-- Check if user belongs to specified groups -->
          <div v-if="isTernuezenAdmin">
            <Suspense>
              <template #default>
                <TernuezenSchedule :signOut="signOut" :user="user" :isReadOnly="false" />
              </template>
            </Suspense>
          </div>
          <div v-else-if="isTernuezenReadOnly">
            <Suspense>
              <template #default>
                <TernuezenSchedule :signOut="signOut" :user="user" :isReadOnly="true" />
              </template>
            </Suspense>
          </div>
          <div v-else-if="isITAdmin">
            <Suspense>
              <template #default>
                <ITSchedule :signOut="signOut" :user="user" :isReadOnly="false" />
              </template>
            </Suspense>
          </div>
          <div v-else-if="isITReadOnly">
            <Suspense>
              <template #default>
                <ITSchedule :signOut="signOut" :user="user" :isReadOnly="true" />
              </template>
            </Suspense>
          </div>
          <div v-else>
            <p>Loading.</p>
          </div>
          <!-- Removed the Sign Out button -->
        </div>
      </template>
    </Authenticator>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { Authenticator } from '@aws-amplify/ui-vue';
import TernuezenSchedule from './components/TerneuzenSchedule.vue';
import ITSchedule from './components/ITSchedule.vue';
import { fetchAuthSession } from 'aws-amplify/auth';

export default defineComponent({
  components: {
    Authenticator,
    TernuezenSchedule,
    ITSchedule,
  },
  setup() {
    const userGroups = ref<string[]>([]);

    const getUserGroups = async () => {
      try {
        const session = await fetchAuthSession();
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
      }
    };

    onMounted(() => {
      getUserGroups();
    });

    const isTernuezenAdmin = computed(() => userGroups.value.includes('TerneuzenAdmin'));
    const isTernuezenReadOnly = computed(() => userGroups.value.includes('TerneuzenReadOnly'));
    const isITAdmin = computed(() => userGroups.value.includes('ITAdmin'));
    const isITReadOnly = computed(() => userGroups.value.includes('ITReadOnly'));

    return {
      userGroups,
      isTernuezenAdmin,
      isTernuezenReadOnly,
      isITAdmin,
      isITReadOnly,
    };
  },
});
</script>

<style>
@import '@aws-amplify/ui-vue/styles.css';

header {
  display: flex;
  align-items: center; /* Center vertically */
  padding: 0px; /* Add some padding */
  background-color: #5A6770; /* Grey background color */
}

.logo {
  height: 150px; /* Adjust height appropriately */
  width: auto; /* Maintain aspect ratio */
}
main {
  margin-top: 10px; /* Create space between header and main content */
  padding: 0px; /* Padding around the main content */
  background-color: #f8f8f8; /* Background color for main section */
}
</style>