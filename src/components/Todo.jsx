import React, { useState } from 'react'

const Todo = () => {
  const [val,setval]=useState(" ");
  const [tasks,setTasks]=useState([]);
  const [editIndex,setEditindex]=useState(null);

  const handelSubmit=(e)=>{
    e.preventDefault()
    if(val.trim()){
      setTasks([...tasks,val])
      setval("")
    }
  }

  const handleEdit=(i)=>{
    setval(tasks[i]);
    setEditindex(i);
  }
  const handledelet=(i)=>{
    setTasks(tasks.filter((_, index) => index !== i));//click index
  }
  return (
    <div>
        <form action="" onSubmit={handelSubmit} >
          <input
          onChange={(e)=>setval(e.target.value)}
          value={val}
          type="text"
          placeholder='Enter text' 
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />  
          <button className='bg-red-300 px-3 py-2 rounded-md'> {editIndex !== null ? "Update Task" : "Add Task"}</button>
        </form>
        
        <ul className="list-disc pl-5">
          {tasks.map((v,i)=>(
            <li key={i} className='mt-6'>{v} 
             <button  onClick={() => handleEdit(i)}
              className="px-3 py-1 text-white font-medium rounded-md bg-yellow-500 hover:bg-yellow-600 transition duration-300 mr-2 ">Edit</button>
             <button
              onClick={() => handledelet(i)}
                className="px-3 py-1 text-white font-medium rounded-md bg-yellow-500 hover:bg-yellow-600 transition duration-300 mr-2">delete</button>
            </li>
            
          ))}
          
        </ul>
    </div>
  )
}

export default Todo

