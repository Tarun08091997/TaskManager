import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTask'
import TaskCard from './components/TaskCard';

function App() {
  const [task , setTask] = useState([]);
  const createTask = (newTask) =>{
    console.log(newTask);
  }
  return (
    <div className=' bg-white w-full h-[100vh]'>
        <AddTask createTask = {createTask}/>
        {task.map((item,index) => {
          <TaskCard key = {index}/>
        })}

    </div>
  )
}

export default App
