// DarkModeToggle.js
import React, { useState } from 'react';
import './DarkModeToggle.css'; // Import file CSS eksternal
import moonImage from './crescent-moon.png'; // Import gambar bulan
import sunImage from './contrast.png'; // Import gambar matahari

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
          style={{ display: 'none' }} // Sembunyikan checkbox
        />
        <img
          src={isDarkMode ? moonImage : sunImage}
          alt={isDarkMode ? 'contrast' : 'crescent-moon'}
          className="toggle-image"
        />
      </label>
    </div>
  );
};

export default DarkModeToggle;
