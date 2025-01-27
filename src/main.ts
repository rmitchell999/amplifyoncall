import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Import your global styles
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";


Amplify.configure(outputs);

createApp(App).mount('#app');