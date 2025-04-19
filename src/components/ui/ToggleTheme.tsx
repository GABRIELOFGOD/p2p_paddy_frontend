'use client';
import { useTheme } from '@/app/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-colors duration-300 bg-gray-300 dark:bg-primary flex items-center p-1"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          theme === 'dark' ? 'translate-x-8' : ''
        }`}
      />
    </button>
  );
}
