import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CounterState = {
	count: number;
	// interval: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

export const useCounterStore = create<CounterState>()(
	devtools(
		persist(
			(set) => ({
				count: 0,
				// interval: 1,
				increment: () => set((state) => ({ count: state.count + 1 })),
				decrement: () =>
					set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
				reset: () => set({ count: 0 }),
			}),
			{
				name: "counter",
			},
		),
	),
);

export default useCounterStore;
