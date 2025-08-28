import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeBase';

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedMode = localStorage.getItem('portfolio-dark-mode');

    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }

    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
    localStorage.setItem('portfolio-dark-mode', JSON.stringify(isDarkMode));

    // Apply theme variables to CSS
    const theme = isDarkMode ? themes.dark : themes.light;
    const root = document.documentElement;
    const body = document.body;

    // Toggle light mode class
    if (isDarkMode) {
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
    }

    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-background', theme.background);
    root.style.setProperty('--theme-glass', theme.glass);
    root.style.setProperty('--theme-glow', theme.glow);
    root.style.setProperty('--theme-text-primary', theme.text.primary);
    root.style.setProperty('--theme-text-secondary', theme.text.secondary);
    root.style.setProperty('--theme-text-muted', theme.text.muted);
    root.style.setProperty('--theme-text-accent', theme.text.accent);
  }, [currentTheme, isDarkMode]);

  const changeTheme = (themeName) => {
    if (themeName === 'dark') {
      setIsDarkMode(true);
      setCurrentTheme('dark');
    } else if (themeName === 'light') {
      setIsDarkMode(false);
      setCurrentTheme('light');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    currentTheme,
    isDarkMode,
    theme: isDarkMode ? themes.dark : themes.light,
    themes,
    changeTheme,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
