import React from 'react';

function FlexGridExample() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Flex & Grid Layout</h2>
      <div className="flex gap-4">
        <div className="w-1/2 bg-blue-100 p-4 rounded">Left Panel</div>
        <div className="w-1/2 bg-green-100 p-4 rounded">Right Panel</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-yellow-100 p-4 rounded">Box 1</div>
        <div className="bg-yellow-200 p-4 rounded">Box 2</div>
        <div className="bg-yellow-300 p-4 rounded">Box 3</div>
      </div>
    </div>
  );
}

export default FlexGridExample;
