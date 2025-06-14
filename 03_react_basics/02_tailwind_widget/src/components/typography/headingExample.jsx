import React from 'react';

function HeadingExample() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Typography Examples</h2>

      <div>
        <h1 className="text-4xl font-extrabold text-blue-600">Heading 1 (text-4xl)</h1>
        <p className="text-sm text-gray-500">This is usually used as a main title.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-green-600">Heading 2 (text-3xl)</h2>
        <p className="text-sm text-gray-500">Sub-section title with slightly smaller text.</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-purple-600">Heading 3 (text-2xl)</h3>
        <p className="text-sm text-gray-500">Useful for section headers or titles.</p>
      </div>

      <div>
        <h4 className="text-xl font-medium text-red-600">Heading 4 (text-xl)</h4>
        <p className="text-sm text-gray-500">Small heading, e.g., card titles or labels.</p>
      </div>
    </div>
  );
}

export default HeadingExample;
