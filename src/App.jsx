import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex justify-center rounded-lg p-6 
    items-center min-h ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className={`bg-white m-6  shadow-lg rounded-lg p-6 w-80 relative ${darkMode ? 'border-gray-800' : 'border-gray-300'}`}>
        {/* Watermark */}
        <div className="absolute top-0 right-0 text-xs text-gray-400 mt-1 mr-2 font-semibold">
           devloped by Rahul Choudhary
        </div>

        {/* Dark/Light Mode Toggle */}
        <button
          className={`absolute top-0 left-0 mt-2 mr-2 px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        
        <div className="text-right text-3xl font-bold py-4 text-gray-800">{display}</div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('9')}
          >
            9
          </button>
          
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('6')}
          >
            6
          </button>
         
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded`}
            onClick={() => handleClick('3')}
          >
            3
          </button>
          
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded col-span-2`}
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded col-span-2`}
            onClick={() => handleClick('+')}
          >
            +
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded col-span-2`}
            onClick={() => handleClick('-')}
          >
            -
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded col-span-2`}
            onClick={() => handleClick('*')}
          >
            *
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded col-span-2`}
            onClick={() => handleClick('/')}
          >
            /
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded`}
            onClick={handleCalculate}
          >
            =
          </button>
          
          <button
            className={`bg-${darkMode ? 'gray-800' : 'gray-200'} hover:bg-${darkMode ? 'gray-700' : 'gray-300'} text-${darkMode ? 'white' : 'gray-800'} font-bold py-2 px-4 rounded col-span-2`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
