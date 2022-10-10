export default function calcMarkerCoords(
	markerX,
	markerY,
	originalElementX,
	originalElementY,
	originalElementWidth,
	originalElementHeight,
	originalElementScrollX,
	originalElementScrollY,
	currentElementX,
	currentElementY,
	currentElementWidth,
	currentElementHeight,
	currentElementScrollX,
	currentElementScrollY
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
