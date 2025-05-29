"use client";

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const initialState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "flightticket-theme",
}) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedTheme = window.localStorage.getItem(storageKey);
        if (storedTheme) {
          return storedTheme;
        }
      } catch (e) {
        console.error("Error reading theme from localStorage", e);
      }
    }
    return defaultTheme;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (e) {
        console.error("Error saving theme to localStorage", e);
      }
    }
  }, [theme, storageKey]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
