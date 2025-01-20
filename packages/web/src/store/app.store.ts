import { createContext } from "react";
import type { StoreApi } from "zustand";
import type { Mutate } from "zustand/vanilla";
import type { LayoutSlice } from "./slices/layout.slice.ts";

export type AppStore = LayoutSlice;

export const AppStoreContext = createContext<Mutate<
	StoreApi<AppStore>,
	[["zustand/immer", never], never]
> | null>(null);
