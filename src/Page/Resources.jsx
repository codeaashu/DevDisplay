import React from 'react';

const resources = [
  // Add resources here
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Tech Resources</h1>
      </header>
      <main className="mt-4">
        {resources.map((resource, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-bold">{resource.title}</h2>
            <ul className="mt-2">
              {resource.items.map((item, index) => (
                <li key={index} className="mb-2 rounded-lg bg-white p-4 shadow">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ResourcesPage;
