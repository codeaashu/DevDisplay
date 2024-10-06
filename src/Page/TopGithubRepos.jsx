const TopGithubRepos = () => {
    const repos = [
      { name: "React", link: "https://github.com/facebook/react" },
      { name: "Vue.js", link: "https://github.com/vuejs/vue" },
      { name: "TensorFlow", link: "https://github.com/tensorflow/tensorflow" },
    ];
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Top GitHub Repositories</h2>
        <ul className="mt-4">
          {repos.map((repo) => (
            <li key={repo.name}>
              <a href={repo.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopGithubRepos;
  