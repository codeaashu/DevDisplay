import React from "react";

const CompanyWiseDSA = () => {
  const companies = [
    { name: "Google",  tricks: "Focus on backtracking and dynamic programming." },
    { name: "Microsoft",  tricks: "Practice binary search, greedy algorithms." },
    { name: "Amazon",  tricks: "Work on sliding window, heap, and DFS/BFS." },
    // Add other companies here
    
    { name: "Nvidia",  tricks: "Practice bit manipulation and backtracking." },
    { name: "FaceBook",  tricks: "Master recursion, graphs, and bit manipulation." },
    { name: "Apple",  tricks: "Prioritize dynamic programming and divide and conquer." },
    { name: "Adobe",  tricks: "Practice sorting and searching techniques." },
    { name: "Goldman Sachs",  tricks: "Focus on arrays, hashing, and string manipulation." },
    { name: "Uber",  tricks: "Work on graphs, BFS/DFS, and Dijkstra's algorithm." },
    { name: "LinkedIn",  tricks: "Focus on two-pointer and sliding window techniques." },
    { name: "Netflix",  tricks: "Prioritize dynamic programming and DP on trees." },
    { name: "X(Twitter)",  tricks: "Work on greedy algorithms and interval problems." },
    { name: "Dropbox",  tricks: "Master recursion and binary search on sorted arrays." },
    { name: "Airbnb",  tricks: "Practice graph traversal and backtracking." },
    { name: "Salesforce",  tricks: "Work on greedy algorithms and dynamic programming." },
    { name: "Oracle",  tricks: "Focus on matrix traversal and dynamic programming." },
    { name: "PayPal",  tricks: "Prioritize binary search and sorting problems." },
    { name: "Walmart",  tricks: "Focus on hashing, prefix sums, and arrays." },
    { name: "Expedia",  tricks: "Practice stack-based problems and recursion." },
    { name: "Snap",  tricks: "Snap DSA Problems	Focus on graphs and dynamic programming." },
    { name: "Yahoo",  tricks: "Work on linked lists and recursion." },
    { name: "DoorDash",  tricks: "Master binary trees and backtracking" },
    { name: "Stripe",  tricks: "Practice greedy algorithms and string manipulation." },
    { name: "Lyft",  tricks: "Focus on two-pointer and sliding window techniques." },
    { name: "Intuit",  tricks: "Work on backtracking and dynamic programming." },
    { name: "IBM",  tricks: "Master dynamic programming and recursion problems." },
    { name: "Atlassian",  tricks: "Focus on graph traversal and dynamic programming." },
    { name: "Reddit",  tricks: "Work on hashing and bit manipulation." },
    { name: "Pinterest",  tricks: "Master recursion and divide and conquer techniques." },
    { name: "Spotify",  tricks: "Focus on sorting, searching, and heaps." },
    { name: "Bloomberg",  tricks: "Work on arrays, dynamic programming, and graphs" },
    { name: "Cisco",  tricks: "Focus on linked lists and dynamic programming." },
    { name: "ByteDance",  tricks: "Master sorting algorithms and binary search." },
    { name: "Tesla",  tricks: "Work on graph traversal and dynamic programming." },
    { name: "TikTok",  tricks: "Prioritize dynamic programming and recursion." },
    { name: "VMware",  tricks: "Focus on arrays and dynamic programming." },
    { name: "Zillow",  tricks: "Work on binary search and sorting algorithms." },
    { name: "Square",  tricks: "Master hashing and greedy algorithms." },
    { name: "Quora",  tricks: "Focus on graphs and dynamic programming." },
    { name: "Cisco",  tricks: "Work on arrays and dynamic programming." },
    { name: "Dell",  tricks: "Master recursion and backtracking." },
    { name: "HP",  tricks: "Focus on dynamic programming and greedy algorithms." },
    { name: "Intel",  tricks: "Work on graphs and binary search." },
    { name: "HCL",  tricks: "Practice arrays and string manipulation." },
    { name: "Infosys",  tricks: "Focus on linked lists and dynamic programming." },
    { name: "TCS",  tricks: "Master recursion and backtracking." },
    { name: "Wipro",  tricks: "Work on dynamic programming and greedy algorithms." },
    { name: "Accenture",  tricks: "Focus on graphs and binary search." },
    { name: "Capgemini",  tricks: "Practice arrays and string manipulation." },
    { name: "Cognizant",  tricks: "Master linked lists and dynamic programming." },
    { name: "Tech Mahindra",  tricks: "Focus on recursion and backtracking." },
    { name: "L&T Infotech",  tricks: "Work on dynamic programming and greedy algorithms." },
    { name: "Mindtree",  tricks: "Focus on graphs and binary search." },
    { name: "Persistent",  tricks: "Practice arrays and string manipulation." },
    { name: "Mphasis",  tricks: "Master linked lists and dynamic programming." },
    { name: "Hexaware",  tricks: "Focus on recursion and backtracking." },
    { name: "Honeywell",  tricks: "Work on dynamic programming and greedy algorithms." },
    { name: "LTI",  tricks: "Focus on graphs and binary search." },
    { name: "Tata Elxsi",  tricks: "Practice arrays and string manipulation." },
    { name: "Mindtree",  tricks: "Master linked lists" },
   

    
  ];

  return (
<div className="bg-gray-100 min-h-screen p-8">
  <h1 className="text-2xl font-bold text-center mb-8">Company-wise DSA Problems Topics </h1>
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Company Name</th>
        <th className="border border-gray-300 px-4 py-2">Tricks for Solving Patterns</th>
      </tr>
    </thead>
    <tbody>
      {companies.map((company, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">{company.name}</td>
          <td className="border border-gray-300 px-4 py-2">{company.tricks}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default CompanyWiseDSA;
