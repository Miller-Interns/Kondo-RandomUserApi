import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './components/router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import { WhiskeyLoungePreset } from './components/theme/whiskey-lounge-preset'

// PrimeVue components (optional, e.g., Button)
import Button from 'primevue/button';
import Card from 'primevue/card';
const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: WhiskeyLoungePreset,
    options: {
      darkModeSelector: '.app-dark', // optional dark mode class
    }
  }
});


app.component('Button', Button);
app.component('Card', Card);

app.use(createPinia())
app.use(router)
app.mount('#app')