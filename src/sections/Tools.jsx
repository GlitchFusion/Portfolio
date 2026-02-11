import tools from "../data/tools";

const ToolsGrid = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {tools.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110"
            title={name}
          >
            <img
              src={icon}
              alt={name}
              className="w-20 h-20 object-contain"
              draggable={false}
            />
            <span className="mt-2 text-text-muted font-brand text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;
