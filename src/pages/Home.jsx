import Header from "../components/Header";
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";
import intialData from "../data/data.json";
import { useState } from "react";

const Home = () => {
  const [extensions, setExtensions] = useState(intialData);
  const [filtered, setfiltered] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggletheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (filtered === "active") return extension.isActive;
    if (filtered === "inactive") return !extension.isActive;
    return true;
  });

  const handleRemove = (name) => {
    setExtensions((prev) =>
      prev.filter((extension) => extension.name !== name),
    );
  };

  const handleToggle = (name) => {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Header isDarkMode={isDarkMode} toggletheme={toggletheme} />
          <Buttons filtered={filtered} setfiltered={setfiltered} />
          <Cards
            filteredExtensions={filteredExtensions}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
