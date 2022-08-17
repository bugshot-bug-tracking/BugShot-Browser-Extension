import { createApp } from "vue";
import App from "./Popup.vue";

import "uno.css";

const app = createApp(App);

// install all modules under `modules/`
Object.values(import.meta.glob("~/modules/*.ts", { eager: true })).forEach(
	(i: any) => i.install?.({ app })
);

app.mount("#app");
