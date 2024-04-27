import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify'; // Import createVuetify
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);

app.use(router);

// Instantiate Vuetify using createVuetify
const vuetify = createVuetify();

// Use Vuetify plugin
app.use(vuetify);

app.mount('#app');
