import { createContext, useContext, useState } from "react";

// create Context
const ThemeContext = createContext();

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("access to theme before themeProvider to wrap");
  }
  return context;
}

export function ThemeToggleButton() {
  const { theme, toggleTheme, isDark } = useTheme();
  return <button onClick={toggleTheme}>{isDark ? "🌙" : "☀️"}</button>;
}

export default function ThemeToggler() {
  return (
    <div>
      <ThemeToggleButton />
    </div>
  );
}
