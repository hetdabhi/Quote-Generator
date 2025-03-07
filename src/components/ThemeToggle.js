import React, { useState, useEffect } from "react";
import "./../styles/Theme.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${darkMode ? "dark" : "light"}`}>
        <span className="toggle-icon">{darkMode ? "🌞" : "🌙"}</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
