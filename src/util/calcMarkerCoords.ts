export default function calcMarkerCoords(
	markerX: number,
	markerY: number,
	originalElementX: number,
	originalElementY: number,
	originalElementWidth: number,
	originalElementHeight: number,
	originalElementScrollX: number,
	originalElementScrollY: number,
	currentElementX: number,
	currentElementY: number,
	currentElementWidth: number,
	currentElementHeight: number,
	currentElementScrollX: number,
	currentElementScrollY: number
) {
	let x = 0,
		y = 0;

	// calculate the distance on the x axis within the element (relative to the element) and transform it to %
	let offsetX =
		(markerX - originalElementX - originalElementScrollX) /
		originalElementWidth;

	// using the element current x position account for the scroll if present and add value relative to the width of the element to account for changes in width
	x = currentElementX + currentElementScrollX + currentElementWidth * offsetX;

	let offsetY =
		(markerY - originalElementY - originalElementScrollY) /
		originalElementHeight;

	y =
		currentElementY +
		currentElementScrollY +
		currentElementHeight * offsetY;

	return {
		x: x,
		y: y,
	};
}
