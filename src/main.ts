import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Import your global styles
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import '@aws-amplify/ui-vue/styles.css';

Amplify.configure(amplifyconfig);

createApp(App).mount('#app');