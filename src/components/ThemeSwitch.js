import { useState } from "react";
import PropTypes from "prop-types";
import "./ThemeSwitch.css";

const ThemeSwitch = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (onChange) {
      onChange(!isDarkMode);
    }
  };

  return (
    <div className="theme-switch" onClick={toggleTheme}>
      <img
        className="theme-icon"
        alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        src={isDarkMode ? "/tablericonsun.svg" : "/tablericonmoon.svg"}
      />
    </div>
  );
};

ThemeSwitch.propTypes = {
  onChange: PropTypes.func,
};

export default ThemeSwitch;
