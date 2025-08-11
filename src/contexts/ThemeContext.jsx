import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  purple: {
    name: 'Purple Galaxy',
    primary: 'from-purple-600 to-blue-600',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'from-purple-400 to-blue-400',
    background: 'from-slate-900 via-purple-900 to-slate-900',
    glass: 'rgba(139, 92, 246, 0.1)',
    glow: 'rgba(168, 85, 247, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#a855f7',
    },
  },
  blue: {
    name: 'Ocean Depths',
    primary: 'from-blue-600 to-cyan-600',
    secondary: 'from-blue-500 to-teal-500',
    accent: 'from-cyan-400 to-blue-400',
    background: 'from-slate-900 via-blue-900 to-slate-900',
    glass: 'rgba(59, 130, 246, 0.1)',
    glow: 'rgba(59, 130, 246, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#3b82f6',
    },
  },
  green: {
    name: 'Forest Matrix',
    primary: 'from-green-600 to-emerald-600',
    secondary: 'from-green-500 to-teal-500',
    accent: 'from-emerald-400 to-green-400',
    background: 'from-slate-900 via-green-900 to-slate-900',
    glass: 'rgba(34, 197, 94, 0.1)',
    glow: 'rgba(34, 197, 94, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#22c55e',
    },
  },
  orange: {
    name: 'Sunset Glow',
    primary: 'from-orange-600 to-red-600',
    secondary: 'from-orange-500 to-pink-500',
    accent: 'from-yellow-400 to-orange-400',
    background: 'from-slate-900 via-orange-900 to-slate-900',
    glass: 'rgba(249, 115, 22, 0.1)',
    glow: 'rgba(249, 115, 22, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#f97316',
    },
  },
  pink: {
    name: 'Cherry Blossom',
    primary: 'from-pink-600 to-rose-600',
    secondary: 'from-pink-500 to-purple-500',
    accent: 'from-rose-400 to-pink-400',
    background: 'from-slate-900 via-pink-900 to-slate-900',
    glass: 'rgba(236, 72, 153, 0.1)',
    glow: 'rgba(236, 72, 153, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#ec4899',
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('purple');
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
    const theme = themes[currentTheme];
    const root = document.documentElement;
    const body = document.body;

    // Toggle light mode class
    if (isDarkMode) {
      body.classList.remove('light-mode');
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
    } else {
      // Light mode colors
      body.classList.add('light-mode');
      root.style.setProperty('--theme-primary', theme.primary);
      root.style.setProperty('--theme-secondary', theme.secondary);
      root.style.setProperty('--theme-accent', theme.accent);
      root.style.setProperty(
        '--theme-background',
        'from-gray-50 via-white to-gray-100'
      );
      root.style.setProperty('--theme-glass', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--theme-glow', theme.glow);
      root.style.setProperty('--theme-text-primary', '#1f2937');
      root.style.setProperty('--theme-text-secondary', '#374151');
      root.style.setProperty('--theme-text-muted', '#6b7280');
      root.style.setProperty('--theme-text-accent', theme.text.accent);
    }
  }, [currentTheme, isDarkMode]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    currentTheme,
    isDarkMode,
    theme: themes[currentTheme],
    themes,
    changeTheme,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
