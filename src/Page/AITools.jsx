const AITools = () => {
    const categories = {
      "Image Creation": ["Tool 1", "Tool 2"],
      "Sales Automation": ["Tool 1", "Tool 2"],
      "Text and Code Generation": ["GPT-3", "Codex"],
      "Data Analysis": ["Tool 1", "Tool 2"],
    };
  
    const [selectedCategory, setSelectedCategory] = React.useState(null);
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Top AI Tools</h2>
        <ul className="mt-4">
          {Object.keys(categories).map((category) => (
            <li key={category}>
              <button
                className="text-blue-400 hover:underline"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
  
        {selectedCategory && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">{selectedCategory}</h3>
            <ul>
              {categories[selectedCategory].map((tool, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {tool}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default AITools;
  