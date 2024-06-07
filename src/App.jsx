import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTask'
import TaskCard from './components/TaskCard';

function App() {
  const [tasks , setTasks] = useState([1,2,3,4,5,6]);
  const createTask = (newTask) =>{
    setTasks([...tasks , newTask]);
  }
  return (
    <div className=' bg-white w-full h-[100vh]'>
        <AddTask createTask = {createTask}/>
        <div className='flex flex-col'>
          {tasks.map((item,index) =>(
            <TaskCard key = {index} item = {item} />
          ))}
        </div>

    </div>
  )
}

export default App
