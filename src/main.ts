import { createApp } from 'vue';
import App from './App.vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Ensure this path is correct

Amplify.configure(awsconfig);

createApp(App).mount('#app');