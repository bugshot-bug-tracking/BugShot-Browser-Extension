export interface Attachment {
	id: number;
	type: string;
	attributes: {
		bug_id: string;
		designation: string;
	};
}
