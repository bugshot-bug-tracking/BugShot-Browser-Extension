import { User } from "./User";
import { Project } from "./Project";
import { Role } from "./Role";

export interface Company {
	id: string;
	type: string;
	attributes: {
		designation: string;
		color_hex: string;
		created_at: string;
		updated_at: string;
		creator?: User;
		projects?: Array<Project>;
		role?: Role;
		users?: User[];
	};
	pending?: any[];
}
