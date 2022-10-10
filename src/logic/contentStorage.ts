import { useStorageLocal } from "~/composables/useStorageLocal";
import { Position } from "~/models/settings-store";

export const position = useStorageLocal(
	"bugshot-sidebar-position",
	Position.BottomRight,
	{
		listenToStorageChanges: true,
	}
);

export const locale = useStorageLocal("bugshot-locale", "auto", {
	listenToStorageChanges: true,
});

export const markers = useStorageLocal("bugshot-markers", true, {
	listenToStorageChanges: true,
});
