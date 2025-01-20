import type { UseDisclosure } from "../../hooks/use-disclosure.ts";
import type { ImmerStateCreator } from "../utils/immer-state-creator.ts";

export interface LayoutSlice {
	isNavOpen: boolean;
	navDisclosure: UseDisclosure[1];
}

export const createLayoutSlice: ImmerStateCreator<LayoutSlice> = (set) => ({
	isNavOpen: false,
	navDisclosure: {
		open: () =>
			set((state) => {
				state.isNavOpen = true;
			}),
		close: () =>
			set((state) => {
				state.isNavOpen = false;
			}),
		toggle: () =>
			set((state) => {
				state.isNavOpen = !state.isNavOpen;
			}),
	},
});
