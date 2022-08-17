export interface Comment {
	id: string;
	type: string;
	attributes: {
		bug_id: string;
		content: string;
		crated_at: string;
		updated_at: string;
		user: {
			id: number;
			first_name: string;
			last_name: string;
		};
	};
}
