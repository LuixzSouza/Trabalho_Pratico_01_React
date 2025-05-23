import { useEffect, useState } from "react";

export function DarkLight() {
  // Checar tema no momento da inicialização (em runtime, window precisa existir)
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false; // fallback para SSR
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="w-20 h-20 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-0 left-0 w-20 h-20 transition-all duration-700 ease-in-out"
        >
          {/* ☀️ Sol */}
          <img
            src="/icons/sun.png"
            alt="Sol"
            className={`absolute top-2 left-2 w-6 h-6 transition-all duration-700
              ${darkMode ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"}
            `}
          />

          {/* 🌙 Lua */}
          <img
            src="/icons/moon.png"
            alt="Lua"
            className={`absolute top-2 right-2 w-6 h-6 transition-all duration-700
              ${darkMode ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
            `}
          />

          {/* 🛡️ Leona */}
          <img
            src="/icons/leona.png"
            alt="Leona"
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 transition-all duration-700
              ${darkMode ? "translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
            `}
          />

          {/* 🌘 Diana */}
          <img
            src="/icons/diana.png"
            alt="Diana"
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 transition-all duration-700
              ${darkMode ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
            `}
          />
        </button>
      </div>
    </div>
  );
}
