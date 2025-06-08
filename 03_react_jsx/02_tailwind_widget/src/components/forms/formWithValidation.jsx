import React, { useState } from 'react';

function FormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Email must include @ symbol');
    } else {
      setError('');
      alert('Submitted: ' + email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Validation Form</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}

export default FormWithValidation;
