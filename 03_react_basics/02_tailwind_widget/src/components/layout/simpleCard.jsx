import React from 'react';

function SimpleCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Card Title</h3>
      <p className="text-gray-600">This is a simple card with some descriptive text inside.</p>
      <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        Action
      </button>
    </div>
  );
}

export default SimpleCard;
