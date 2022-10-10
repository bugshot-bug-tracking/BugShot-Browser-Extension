import { useI18n } from "vue-i18n";

export default function timeToText(time: string | Date) {
	let i18n = useI18n();

	if (!(time && time != "")) return i18n.t("some_time");

	let now = new Date();
	let then = new Date(time);

	// get total seconds between the times
	var delta = Math.abs(then.getTime() - now.getTime()) / 1000;

	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400);
	delta -= days * 86400;
	if (days > 0) return i18n.t("x_day", { x: days }, days);

	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	if (hours > 0) return i18n.t("x_hour", { x: hours }, hours);

	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	if (minutes > 0) return i18n.t("x_minute", { x: minutes }, minutes);

	// what's left is seconds
	var seconds = Math.floor(delta % 60); // in theory the modulus is not required
	if (seconds > 0) return i18n.t("x_second", { x: seconds }, seconds);

	// just to have something in case no prior return was triggered
	return i18n.t("some_time");
}
