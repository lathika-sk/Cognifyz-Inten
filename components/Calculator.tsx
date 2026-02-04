
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(isNaN(sum) ? null : sum);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input 
          type="number" 
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Value 1"
        />
        <input 
          type="number" 
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Value 2"
        />
      </div>
      <button 
        onClick={calculate}
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md active:translate-y-0.5"
      >
        Calculate Sum
      </button>
      {result !== null && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-100 rounded-xl text-center font-bold text-xl animate-in zoom-in duration-300">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
