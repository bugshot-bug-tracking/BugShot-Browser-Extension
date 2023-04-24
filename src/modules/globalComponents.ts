import Datepicker from "@vuepic/vue-datepicker";
import { UserModule } from "~/types";

export const install: UserModule = ({ app }) => {
	app.component("Datepicker", Datepicker);
};

export default { install };
