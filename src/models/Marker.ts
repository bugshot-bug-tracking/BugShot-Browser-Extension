export interface Marker {
	id: string;
	type: string;
	attributes: {
		position_x: number;
		position_y: number;
		web_position_x: number;
		web_position_y: number;

		target_x: number;
		target_y: number;
		target_height: number;
		target_width: number;

		scroll_x: number;
		scroll_y: number;

		screenshot_height: number;
		screenshot_width: number;

		target_full_selector: string;
		target_short_selector: string;
		target_html: string;
	};
}
