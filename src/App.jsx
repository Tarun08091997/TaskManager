import { useEffect, useState } from 'react';
import './App.css'
import AddTask from './components/AddTask'
import TaskCard from './components/TaskCard';

function App() {
  const [tasks , setTasks] = useState([]);

  const createTask = (newTask) =>{
    setTasks([...tasks , newTask]);
  }
  const deleteTask = (deltask) =>{
    setTasks(tasks.filter(item => item !== deltask));
  }
  return (
    <div className=' bg-white w-full h-[100vh]'>
        <AddTask createTask = {createTask}/>
        {tasks.map((item,index) =>(
            <TaskCard key = {index} item = {item} deleteTask = {deleteTask} left={1} top={3} />
          ))}
    </div>
  )
}

export default App
