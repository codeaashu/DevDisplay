const ProgrammingCourses = () => {
    const [showLanguages, setShowLanguages] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  
    const languages = ["Python", "JavaScript", "Java", "C++"];
    const resources = {
      Python: ["Python Course 1", "Python Course 2"],
      JavaScript: ["JavaScript Course 1", "JavaScript Course 2"],
      Java: ["Java Course 1", "Java Course 2"],
      Cpp: ["C++ Course 1", "C++ Course 2"]
    };
  
    return (
      <div className="mt-8">
        <button
          className="bg-[#00a6fb] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:border-[#00a6fb] hover:text-[#00a6fb] border-2 border-[#00a6fb] transition-all duration-500"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          Show Programming Languages
        </button>
  
        {showLanguages && (
          <ul className="mt-4">
            {languages.map((language) => (
              <li key={language}>
                <button
                  className="text-blue-400 hover:underline"
                  onClick={() => setSelectedLanguage(language)}
                >
                  {language}
                </button>
              </li>
            ))}
          </ul>
        )}
  
        {selectedLanguage && (
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{selectedLanguage} Resources</h3>
            <ul>
              {resources[selectedLanguage].map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ProgrammingCourses;
  