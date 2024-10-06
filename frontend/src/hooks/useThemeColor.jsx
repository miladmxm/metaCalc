import { useEffect, useState } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
    autoChangeThemeColor(e.matches);
  };
  const manuallyChangeTheme = () => {
    setIsDarkTheme(prev => !prev)
    autoChangeThemeColor(!isDarkTheme)
    localStorage.setItem(
      "them",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (!localStorage.getItem("them")) {
      autoChangeThemeColor(darkThemeMq.matches);
    } else {
      document.documentElement.classList.add(localStorage.getItem("them"));
      setIsDarkTheme(localStorage.getItem("them") === "dark" ? true : false)
    }
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return { isDarkTheme, manuallyChangeTheme };
};
export default useThemeDetector;

export const autoChangeThemeColor = (isDarkTheme) => {
  if (isDarkTheme) {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    return "light";
  }
};
