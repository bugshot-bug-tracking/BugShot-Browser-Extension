import { useStorageLocal } from "~/composables/useStorageLocal";
import { Theme } from "~/models/settings-store";

export const user = useStorageLocal("user", "", {
	listenToStorageChanges: true,
});

export const token = useStorageLocal("token", "", {
	listenToStorageChanges: true,
});

export const guestToken = useStorageLocal("guestToken", "", {
	listenToStorageChanges: true,
});

export const settings = useStorageLocal("settings", "settings", {
	listenToStorageChanges: true,
});

export const locale = useStorageLocal("locale", "auto", {
	listenToStorageChanges: true,
});

export const theme = useStorageLocal("theme", Theme.Light, {
	listenToStorageChanges: true,
});
