import SingleCard from "./SingleCard";

const Cards = ({ filteredExtensions, handleRemove, handleToggle }) => {
  if (filteredExtensions.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400 dark:text-slate-500">
        No extensions found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredExtensions.map((extension) => (
        <SingleCard
          key={extension.name}
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Cards;
