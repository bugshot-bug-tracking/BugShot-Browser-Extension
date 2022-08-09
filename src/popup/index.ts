import { createApp } from "vue";
import App from "./Popup.vue";

import "uno.css";

import i18n from "~/modules/i18n";
import pinia from "~/modules/pinia";

import { useI18nStore } from "~/stores/i18n";

const app = createApp(App);

i18n.install({ app });
pinia.install({ app });

app.mount("#app");

// global stores initializations
useI18nStore().init();
