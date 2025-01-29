import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) => 
          index === editIndex ? val : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, val]);
      }
      setVal("");
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setVal(tasks[index]);
    setEditIndex(index);
  };

  const filteredTasks = tasks.filter(task => 
    task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="w-[400px] bg-sky-300 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Todo List</h2>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setVal(e.target.value)}
            value={val}
            type="text"
            placeholder="Enter a task"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </form>
        <div className="mt-5 space-y-3">
          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="bg-green-300 w-full h-[40px] rounded-lg flex justify-between items-center px-4"
            >
              <h1 className="text-sm font-semibold">{task}</h1>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 text-white font-medium rounded-md bg-yellow-500 hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-white font-medium rounded-md bg-red-500 hover:bg-red-600 ml-2 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
