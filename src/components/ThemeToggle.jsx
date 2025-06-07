// components/ThemeToggle.js
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-lg "
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="text-gray-800 2xl:w-8 2xl:h-8"/>
      ) : (
        <Sun className=""/>
      )}
    </button>
  );
};

export default ThemeToggle;