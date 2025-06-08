import React from 'react';

function TopNavBar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <span className="font-bold text-lg">MyApp</span>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}

export default TopNavBar;
