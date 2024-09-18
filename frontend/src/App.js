import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Output from './components/Output';

function App() {
  const [refinedText, setRefinedText] = useState('');

  const handleSubmit = async (inputText, writingRules) => {
    try {
      const response = await fetch('http://localhost:8000/refine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_text: inputText, writing_rules: writingRules }),
      });
      const data = await response.json();
      setRefinedText(data.refined_text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <InputForm onSubmit={handleSubmit} />
        {refinedText && <Output refinedText={refinedText} />}
      </main>
    </div>
  );
}

export default App;