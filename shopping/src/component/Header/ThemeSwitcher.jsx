import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  // State for managing settings visibility, dark mode, and RTL
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#0da487"); // Initial color
  const [isRtl, setIsRtl] = useState(false);

  // Toggle the visibility of the settings
  const toggleThemeSettings = () => {
    setIsSettingsActive(!isSettingsActive);
  };

  // Handle color change from the color picker
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    document.body.style.setProperty("--theme-color", e.target.value);
    document.body.style.setProperty("--theme-color-rgb", e.target.value);
  };

  // Toggle dark and light theme
  const toggleTheme = (mode) => {
    setIsDarkMode(mode === "dark");
  };

  // Handle RTL toggle
  const toggleRtl = (direction) => {
    if (direction === "rtl") {
      setIsRtl(true);
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      setIsRtl(false);
      document.documentElement.setAttribute("dir", "");
    }
  };

  // Effect to update the CSS file when dark mode changes
  useEffect(() => {
    const linkElement = document.getElementById("color-link");

    if (isDarkMode) {
      linkElement.setAttribute("href", "../assets/css/dark.css");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      linkElement.setAttribute("href", "../assets/css/style.css");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="theme-option">
      <div className="setting-box">
        <button className="btn setting-button" onClick={toggleThemeSettings}>
          <i className={isSettingsActive ? "fa-xmark" : "fa-solid fa-gear"}></i>
        </button>

        {isSettingsActive && (
          <div className={`theme-setting-2 ${isSettingsActive ? "active" : ""}`}>
            <div className="theme-box">
              <ul>
                {/* Color Picker */}
                <li>
                  <div className="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div className="theme-setting-button color-picker">
                    <form className="form-control">
                      <label htmlFor="colorPick" className="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="colorPick"
                        value={selectedColor}
                        onChange={handleColorChange}
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>

                {/* Dark Mode */}
                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button
                      className="btn btn-2 outline"
                      onClick={() => toggleTheme("dark")}
                    >
                      Dark
                    </button>

                    <button
                      className="btn btn-2 unline"
                      onClick={() => toggleTheme("light")}
                    >
                      Light
                    </button>
                  </div>
                </li>

                {/* RTL Toggle */}
                <li>
                  <div className="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div className="theme-setting-button rtl">
                    <button
                      className={`btn btn-2 ${!isRtl ? "rtl-unline" : ""}`}
                      onClick={() => toggleRtl("ltr")}
                    >
                      LTR
                    </button>
                    <button
                      className={`btn btn-2 ${isRtl ? "rtl-outline" : ""}`}
                      onClick={() => toggleRtl("rtl")}
                    >
                      RTL
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top">
        <a id="back-to-top" href="#">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
