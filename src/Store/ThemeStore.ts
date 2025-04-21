import { create } from "zustand";

type Theme = "light" | "dark";

type Themestore = {
  theme: Theme;
  fetchTheme: () => void;
  toggleTheme: () => void;
}

const useThemeStore = create<Themestore>((set) => ({
  theme: "light",
  fetchTheme: () => {
    // fetch theme from local-storage or user preference
    const theme = localStorage.getItem("theme");
    if (theme) {
      set({ theme: theme as Theme });
    }
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    });
  }
}));

export default useThemeStore;
