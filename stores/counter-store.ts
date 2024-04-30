import { createStore } from "zustand";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const initialCounterStore = (): CounterState => {
  return { count: new Date().getFullYear() };
};

export const defaultInitialState: CounterState = {
  count: 0,
};

export const createCounterStore = (
  initialState: CounterState = defaultInitialState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initialState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
