import { Attachment } from "./Attachment";
import { BugUserRole } from "./BugUserRole";
import { Priority } from "./Priority";
import { Screenshot } from "./Screenshot";
import { User } from "./User";

export interface Bug {
	id: string;
	type: string;
	attributes: {
		ai_id: number;
		browser: string;
		created_at: string;
		creator: User;
		deadline: string;
		description: string;
		designation: string;
		operating_system: string;
		order_number: number;
		priority: Priority;
		project_id: string;
		resolution: string;
		selector: string;
		status_id: string;
		updated_at: string;
		url: URL | string;
	};
	users?: BugUserRole[];
	screenshots?: Screenshot[];
	attachments?: Attachment[];
	comments?: Comment[];
}
