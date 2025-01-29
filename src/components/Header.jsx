import React, { useState } from "react";

function Header() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Add an element to the array
  const addElement = () => setVal([...val, val.length + 1]);

  // Remove the last element from the array
  const removeLast = () => setVal(val.slice(0, -1));

  // Update a specific element
  const updateElement = (index, newValue) => {
    setVal(val.map((item, idx) => (idx === index ? newValue : item)));
  };

  // Filter the array
  const filterArray = () => setVal(val.filter((item) => item % 2 === 0)); // Keep only even numbers

  // Clear the array
  const clearArray = () => setVal([]);

  // Reset to initial array
  const resetArray = () => setVal([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-xl font-bold mb-4">Array Operations in React</h1>
      <div className="mb-4">
        <p className="text-gray-700">Array: {JSON.stringify(val)}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={addElement}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Add Element
        </button>
        <button
          onClick={removeLast}
          className="bg-red-500 text-white px-4 py-2 rounded shadow"
        >
          Remove Last
        </button>
        <button
          onClick={() => updateElement(2, 99)} // Update the 3rd element to 99
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow"
        >
          Update 3rd Element
        </button>
        <button
          onClick={filterArray}
          className="bg-green-500 text-white px-4 py-2 rounded shadow"
        >
          Filter Even Numbers
        </button>
        <button
          onClick={clearArray}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow"
        >
          Clear Array
        </button>
        <button
          onClick={resetArray}
          className="bg-indigo-500 text-white px-4 py-2 rounded shadow"
        >
          Reset Array
        </button>
      </div>
    </div>
  );
}

export default Header;