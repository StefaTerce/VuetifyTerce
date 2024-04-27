import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Create a new Vuetify instance
const vuetify = new Vuetify();

// Create the Vue app instance and use Vuetify and router
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
