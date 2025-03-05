import { create } from "zustand";

type CounterState = {
	count: number;
	interval: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
	count: 0,
	interval: 1,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () =>
		set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
	reset: () => set({ count: 0 }),
}));

export default useCounterStore;

export type CounterStore = typeof useCounterStore;
