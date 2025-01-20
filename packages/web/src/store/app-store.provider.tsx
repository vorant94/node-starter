import { type PropsWithChildren, memo, useRef } from "react";
import type { StoreApi } from "zustand/index";
import { immer } from "zustand/middleware/immer";
import { type Mutate, createStore } from "zustand/vanilla";
import { type AppStore, AppStoreContext } from "./app.store.ts";
import { LayoutSliceConsumer } from "./consumers/layout-slice.consumer.tsx";
import { createLayoutSlice } from "./slices/layout.slice.ts";

export const AppStoreProvider = memo(({ children }: PropsWithChildren) => {
	const storeRef =
		useRef<Mutate<StoreApi<AppStore>, [["zustand/immer", never], never]>>();
	if (!storeRef.current) {
		storeRef.current = createStore<AppStore>()(
			immer((...args) => ({
				...createLayoutSlice(...args),
			})),
		);
	}

	return (
		<AppStoreContext.Provider value={storeRef.current}>
			<LayoutSliceConsumer>{children}</LayoutSliceConsumer>
		</AppStoreContext.Provider>
	);
});
