import React, { useState } from 'react';

export default function AddTask({createTask}) {
  const [isPressed, setIsPressed] = useState(false);
  const [task,setTask] = useState("");
  const [order , setOrder] = useState();

  const sendTaskDetails=() =>{
    const newTask = {
      'task' : {task},
      'order' : {order}
    }
    createTask(newTask);
  }

  return (
    <div className='w-[80%] md:w-[500px] lg:w-[650px] h-[44px] 
      absolute top-[20%] left-1/2 -translate-x-1/2 self-center'>
      <input 
        type='text'
        onChange={e => {setTask(e.target.value)}} 
        className='w-[70%] rounded-l-xl h-full outline-none bg-gray-300 text-[15px] text-center'
      />
      <input 
        type='number' 
        onChange={e => {setOrder(e.target.value)}} 
        className='w-[15%] h-full hover:cursor-pointer text-center font-bold text-[11px] md:text-[15px] outline-none' 
        placeholder='Task Order'
      />
      <button 
        className={`h-full w-[15%] rounded-r-xl font-bold text-[15px] 
          ${isPressed ? 'bg-blue-500' : 'bg-red-500'} 
          text-white box-border hover:shadow-lg hover:shadow-black`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={sendTaskDetails}
      >
        Create
      </button>
    </div>
  );
}
