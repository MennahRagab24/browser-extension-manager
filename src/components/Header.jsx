import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ isDarkMode, toggletheme }) => {
  return (
    <header className="flex justify-between items-center pb-6 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          icon={faFan}
          className="text-3xl text-indigo-600 dark:text-indigo-400"
        />
        <h1 className="text-2xl font-bold tracking-tight">Extensions</h1>
      </div>
      <button
        type="button"
        onClick={toggletheme}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-amber-400 dark:hover:bg-slate-700 transition-all cursor-pointer"
        title="Toggle Theme"
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className="text-lg"
        />
      </button>
    </header>
  );
};

export default Header;
