import { useState, useEffect } from "react";

export const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Sync theme on mount
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
    <label className="flex items-center cursor-pointer">
      {/* Hidden checkbox that controls the toggle */}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />

      <div className="relative w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-primary transition">
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </div>

      <span className="ml-3 text-gray-700 dark:text-gray-300">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
};
