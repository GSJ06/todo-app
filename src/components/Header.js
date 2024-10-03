import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`${styles.header} ${darkMode ? styles.darkMode : ''}`}>
      <h1 className={styles.title}>Todo List</h1>
      <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
