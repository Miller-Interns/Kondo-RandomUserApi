import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./components/router";
import "./assets/main.css";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

import { WhiskeyLoungePreset } from "./components/theme/whiskey-lounge-preset";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: WhiskeyLoungePreset,
    options: {
      darkModeSelector: ".app-dark", // optional dark mode class
    },
  },
});

app.use(createPinia());
app.use(router);
app.mount("#app");
