import React from "react";

const SingleCard = ({
  name,
  logo,
  description,
  isActive,
  handleRemove,
  handleToggle,
}) => {
  return (
    <div className="flex flex-col justify-between p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2">
          <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <button
          type="button"
          onClick={() => handleRemove(name)}
          className="text-xs font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          Remove
        </button>

        <button
          type="button"
          onClick={() => handleToggle(name)}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isActive ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
          }`}
          title={isActive ? "Deactivate" : "Activate"}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
              isActive ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
