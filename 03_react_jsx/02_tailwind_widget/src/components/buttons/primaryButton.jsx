import React from 'react';

function PrimaryButton() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Button Example</h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
        Click Me
      </button>
    </div>
  );
}

export default PrimaryButton;
