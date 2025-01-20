import type { StateCreator } from "zustand";

export type ImmerStateCreator<SharedState, State = SharedState> = StateCreator<
	SharedState,
	[["zustand/immer", never], never],
	[],
	State
>;
