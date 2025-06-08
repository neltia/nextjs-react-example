import React, { useState } from 'react';

function BasicForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Form Example</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your name"
        />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
}

export default BasicForm;
