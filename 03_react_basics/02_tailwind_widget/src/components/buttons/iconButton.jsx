import React from 'react';

function IconButton() {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800">Icon Button Example</h2>
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        <span>🔍</span>
        <span>Search</span>
      </button>
    </div>
  );
}

export default IconButton;
