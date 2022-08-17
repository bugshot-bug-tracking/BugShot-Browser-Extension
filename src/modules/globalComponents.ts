import vSelect from "vue-select";
import Datepicker from "@vuepic/vue-datepicker";
import { UserModule } from "~/types";

export const install: UserModule = ({ app }) => {
	app.component("v-select", vSelect);
	app.component("Datepicker", Datepicker);
};
