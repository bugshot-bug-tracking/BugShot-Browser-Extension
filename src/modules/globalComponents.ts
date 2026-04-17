import { VueDatePicker } from "@vuepic/vue-datepicker";
import { UserModule } from "~/types";

export const install: UserModule = ({ app }) => {
	app.component("Datepicker", VueDatePicker);
};

export default { install };
