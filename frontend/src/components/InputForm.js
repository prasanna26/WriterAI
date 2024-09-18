import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [writingRules, setWritingRules] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText, writingRules);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="inputText" className="block mb-2 font-bold">
          Input Text:
        </label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
      </div>
      <div>
        <label htmlFor="writingRules" className="block mb-2 font-bold">
          Writing Rules:
        </label>
        <textarea
          id="writingRules"
          value={writingRules}
          onChange={(e) => setWritingRules(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refine Text
      </button>
    </form>
  );
};

export default InputForm;