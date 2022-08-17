export interface Image {
	id: string;
	type: string;
	attributes: {
		base64: string;
		url: string;
	};
}
