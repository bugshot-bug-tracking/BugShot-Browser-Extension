export default function dateFix(dateString: string) {
	if (dateString === "" || dateString === null) return "";
	if (dateString.match(/[z]$/i) == null) dateString += "Z";

	return new Date(dateString).toISOString();
}
