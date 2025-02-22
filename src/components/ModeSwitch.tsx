import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Tooltip } from "react-tooltip";

export const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <button
        className="p-2 rounded-md bg-slate-50 dark:bg-slate-700 shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 active:bg-slate-300 dark:active:bg-slate-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        onClick={() => setDarkMode(!darkMode)}
        data-tooltip-id="mode-tooltip"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <Tooltip id="mode-tooltip">
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </Tooltip>
    </>
  );
};
