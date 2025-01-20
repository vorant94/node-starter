import { useContext } from "react";
import { useStore } from "zustand/react";
import { useShallow } from "zustand/react/shallow";
import { AppStoreContext } from "../app.store.ts";
import type { LayoutSlice } from "../slices/layout.slice.ts";

export function useLayoutSlice(): LayoutSlice {
	const store = useContext(AppStoreContext);
	if (!store) {
		throw new Error("Missing StoreProvider");
	}

	return useStore(
		store,
		useShallow(({ isNavOpen, navDisclosure }) => ({
			isNavOpen,
			navDisclosure,
		})),
	);
}
