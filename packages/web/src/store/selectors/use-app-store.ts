import { useContext } from "react";
import { useStore } from "zustand/react";
import { type AppStore, AppStoreContext } from "../app.store.ts";

export function useAppStore(): AppStore {
	const store = useContext(AppStoreContext);
	if (!store) {
		throw new Error("Missing StoreProvider");
	}

	return useStore(store);
}
