import React from "react";

const Buttons = ({ filtered, setfiltered }) => {
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-8">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
        Extensions List
      </h2>
      <div className="inline-flex p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
        {filterOptions.map((opt) => {
          const isSelected = filtered === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setfiltered(opt.value)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                isSelected
                  ? "bg-white text-indigo-600 shadow-sm dark:bg-indigo-600 dark:text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
