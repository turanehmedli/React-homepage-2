import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist((set) => ({
    isDarkModeOn: false,
    toggleDarkMode: () =>
      set((state) => ({ isDarkModeOn: !state.isDarkModeOn })),
  }),{name:"theme"}
),
);
