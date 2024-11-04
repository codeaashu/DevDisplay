import React from 'react';

const opportunities = [
  // ... (same as provided)
];

const OpportunitiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Opportunities</h1>
      </header>
      <main className="mt-4">
        {opportunities.map((category) => (
          <section key={category.title} className="mb-8">
            <h2 className="text-xl font-bold">{category.title}</h2>
            <ul className="mt-2">
              {category.items.map((item, index) => (
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

export default OpportunitiesPage;
