import React from 'react';

const Output = ({ refinedText }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Refined Text:</h2>
      <p className="p-4 bg-gray-100 rounded">{refinedText}</p>
    </div>
  );
};

export default Output;