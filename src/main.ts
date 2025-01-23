import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Import your global styles
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

createApp(App).mount('#app');