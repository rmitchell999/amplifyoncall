<template>
  <div class="login-container">
    <div v-if="isAdmin" class="button-container">
      <button class="terneuzen-button" @click="selectSchedule('Terneuzen')">Terneuzen Schedule</button>
      <button class="it-button" @click="selectSchedule('IT')">IT Schedule</button>
    </div>
    <div v-if="selectedSchedule === 'Terneuzen'">
        <TernuezenSchedule :signOut="signOut" :user="user" />
    </div>
    <div v-else-if="selectedSchedule === 'IT'">
        <ITSchedule :signOut="signOut" :user="user"/>
    </div>
    <div v-else>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
  </div>
</template>

  
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import TernuezenSchedule from './TerneuzenSchedule.vue';
  import ITSchedule from './ITSchedule.vue';
  import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
  
  export default defineComponent({
    components: {
      TernuezenSchedule,
      ITSchedule,
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
      signOut: { //Added this line
      type: Function,
      required: true,
    }
    },
    setup(props) {
      const selectedSchedule = ref<string | null>(null);
      const isAdmin = ref(false);
  
      const selectSchedule = (schedule: string) => {
        selectedSchedule.value = schedule;
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
            isAdmin.value = groups.includes("TerneuzenAdmin") || groups.includes("GlobalAdmin");
          } else {
            console.error("Groups is not an array:", groups);
          }
        } catch (error) {
          console.error("Error checking if user is admin:", error);
        }
      };
  
      onMounted(async () => {
        await checkAdmin();
      });
  
      return {
        selectedSchedule,
        selectSchedule,
        isAdmin,
      };
    },
  });
  </script>
  
  <style scoped>
  
.button-container {
  display: flex; /* Change to flex for proper alignment */
  justify-content: center; /* Center the buttons horizontally */
  gap: 5px; /* Space between buttons */
  width: 100%; /* Ensure the container is full width */
  margin: 10px 0; /* Optional: Add margin for spacing above and below */
}

.terneuzen-button {
  
  background-color: #ffffff; /* Example: Green background */
  color: rgb(0, 0, 0);            /* White text */
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.it-button {
  background-color: #ffffff; /* Example: Red background */
  color: rgb(0, 0, 0);             /* White text */
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Add hover effects if desired: */
.terneuzen-button:hover {
  background-color: #5A6770; /* Darker green on hover */
  color: rgb(255, 255, 255);
}

.it-button:hover {
  background-color: #5A6770; /* Darker red on hover */
  color: rgb(255, 255, 255);
}
</style>