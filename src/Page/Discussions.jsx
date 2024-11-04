import React from 'react';

const DiscussionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Discussions</h1>
      </header>
      <main className="mt-4">
        <section className="mb-8">
          <h2 className="text-xl font-bold">Discussion Threads</h2>
          {/* Add discussion threads here */}
        </section>
        <section>
          <h2 className="text-xl font-bold">Inbox</h2>
          {/* Add inbox messages here */}
        </section>
      </main>
    </div>
  );
};

export default DiscussionsPage;
