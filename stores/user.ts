import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: "solo",
    age: 24,
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
}));
