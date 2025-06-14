"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    //let's check for saved theme right?
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // What does the system prefer?
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};
