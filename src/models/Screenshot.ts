export interface Screenshot {
	id: number;
	type: string;
	attributes: {
		base64: string;
		bug_id: string;
		position_x?: number;
		position_y?: number;
		web_position_x?: number;
		web_position_y?: number;
		device_pixel_ratio?: number;
		url: string;
	};
}
