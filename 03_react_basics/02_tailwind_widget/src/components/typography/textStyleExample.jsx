import React from 'react';

function TextStyleExample() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-500">Small muted text</p>
      <p className="text-base text-black">Normal body text</p>
      <p className="text-lg font-medium text-blue-700">Larger medium text</p>
      <p className="italic text-red-500">Italic red text</p>
      <p className="underline decoration-wavy decoration-pink-500">Underlined wavy pink text</p>
    </div>
  );
}

export default TextStyleExample;
