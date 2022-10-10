import { Company } from "./Company";
import { Image } from "./Image";
import { Role } from "./Role";
import { Status } from "./Status";
import { User } from "./User";

export interface Project {
	id: string;
	type: string;
	attributes: {
		designation: string;
		company: Company;
		color_hex: string;
		url: string;
		created_at: string;
		updated_at: string;
		creator?: User;
		bugsDone: number;
		bugsTotal: number;
		image?: Image;
		statuses?: Status[];
		users?: User[];
		role?: Role;
	};
	pending?: any;
}
