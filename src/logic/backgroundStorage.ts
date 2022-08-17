import { useStorageLocal } from "~/composables/useStorageLocal";

export const user = useStorageLocal("user", "", {
	listenToStorageChanges: true,
});

export const token = useStorageLocal("token", "", {
	listenToStorageChanges: true,
});

export const settings = useStorageLocal("settings", "settings", {
	listenToStorageChanges: true,
});
