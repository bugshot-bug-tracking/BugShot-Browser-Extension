import { Attachment } from "./Attachment";
import { BugUserRole } from "./BugUserRole";
import { Comment } from "./Comment";
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
		url: string;
		done_at: string;
		archived_at: string;
		deleted_at: string;

		users?: BugUserRole[];
		screenshots?: Screenshot[];
		attachments?: Attachment[];
		comments?: Comment[];

		time_estimation?: number;
		time_estimation_type?: "m" | "h" | "d" | "w";

		approval_status: {
			id: string;
			designation?: "approved" | "declined" | "pending";
		};

		guest_creator?: {
			name?: string;
			email?: string;
		};
	};
}
