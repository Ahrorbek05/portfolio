import { createContext } from "react";

interface ThemeContextType {
  darkmode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkmode: false,
  setDarkMode: () => {},
});
