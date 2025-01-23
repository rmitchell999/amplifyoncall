import "./assets/main.css";
import { createApp } from 'vue';
import App from './App.vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

createApp(App).mount('#app');