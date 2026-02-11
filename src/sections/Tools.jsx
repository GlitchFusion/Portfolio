import tools from "../data/tools";

const Tools = () => {
  return (
    <section className="w-full py-6 bg-bg-dark text-text-dark">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-bg-surface rounded-xl p-6 flex flex-col items-center justify-center
                       shadow-md hover:shadow-xl hover:scale-105 hover:border-accent border border-border
                       transition-transform duration-300 cursor-pointer relative"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-text-muted text-center">{tool.name}</p>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 bg-accent blur-xl transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
