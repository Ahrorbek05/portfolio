import { useState, useEffect } from "react";
import { ThemeContext } from "../context/Theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkmode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <ThemeContext.Provider value={{ darkmode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
