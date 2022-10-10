export interface SettingsState {
	position: Position;
	sidebar: boolean;
	theme: Theme;
	locale: string;
	markers: boolean;
}

export enum Position {
	TopLeft = 1, // not used
	TopRight = 2,
	BottomLeft = 3, // not used
	BottomRight = 4,
}

// not implemented
export enum Theme {
	System = 0,
	Light = 1,
	Dark = 2,
}
