import React from 'react';
// import { FaFrown } from 'react-icons/fa';

export default function NoResultFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex items-center gap-9 p-5">
        {/* Icon Section */}
        <div className="icon-container">
          <img
            src="https://private-user-images.githubusercontent.com/146618499/380475741-bee5c0c2-f728-4d93-a53e-be0d46980df7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAwMTQxMzAsIm5iZiI6MTczMDAxMzgzMCwicGF0aCI6Ii8xNDY2MTg0OTkvMzgwNDc1NzQxLWJlZTVjMGMyLWY3MjgtNGQ5My1hNTNlLWJlMGQ0Njk4MGRmNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyN1QwNzIzNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NzNmOTk3MmM1OGVhOGZhNDAyNzIzYzJlYTFiMGVkMDZjNWFlY2FiYjMyMTJjZDQ4NjgxMzY3NWM0M2JlN2Q1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.WfZTSgt9SqgAK0ZFtMBeEXDQu067YCkMQv4LZJHXXUI"
            alt="Not Found Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h2 className="mb-4 text-4xl font-bold text-gray-800">No Results Found</h2>
          <p className="mb-2 text-lg text-gray-600">We couldn't find any results for your search.</p>
          <p className="mb-8 text-sm text-gray-500">Try a different search or use the links below.</p>
          <div className="mb-8 flex flex-col gap-5 space-x-4">
            <button
              // onClick={handleGoBack}
              className="text-customTeal rounded px-6 py-2 transition hover:text-blue-600"
            >
              Go Back
            </button>
            <button
              // onClick={handleSearchAgain}
              className="text-customTeal rounded px-6 py-2 transition hover:text-blue-600"
            >
              Search Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
