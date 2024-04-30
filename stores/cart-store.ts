import { create } from "zustand";

type State = {
  cart: Array<{ id: number; name: string; price: number }>;
  addToCart: (item: { id: number; name: string; price: number }) => void;
  removeFromCart: (id: number) => void;
};

export const useStore = create<State>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
