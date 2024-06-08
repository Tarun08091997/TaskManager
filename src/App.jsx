import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskCard from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load initial tasks from localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Function to check if the new position overlaps with any existing task or the task bar
  const isOverlapping = (left, top) => {
    const taskCardWidth = 300; 
    const taskCardHeight = 110;
    const taskBarHeight = 44; 
    const taskBarTop = window.innerHeight * 0.20 - (taskBarHeight / 2); 
    const taskBarBottom = taskBarTop + taskBarHeight;

    const overlapsTaskBar = (
      top < taskBarBottom &&
      top + taskCardHeight > taskBarTop &&
      left < window.innerWidth - 10 &&
      left + taskCardWidth > 10
    );

    if (overlapsTaskBar) return true;

    return tasks.some(task => {
      const [taskLeft, taskTop] = task.pos;
      return (
        left < taskLeft + taskCardWidth &&
        left + taskCardWidth > taskLeft &&
        top < taskTop + taskCardHeight &&
        top + taskCardHeight > taskTop
      );
    });
  };

  const createTask = (newTask) => {
    const taskCardWidth = 300; 
    const taskCardHeight = 110;
    
    // Get the dimensions of the window
    const maxWidth = window.innerWidth - taskCardWidth - 10; 
    const maxHeight = window.innerHeight - taskCardHeight - 10; 

    let randomLeft, randomTop;
    let maxAttempts = 100; // maximum number of attempts to find a non-overlapping position
    let attempts = 0;
    let foundPosition = false;

    // Generate random positions until a non-overlapping position is found or maxAttempts is reached
    do {
      randomLeft = Math.floor(Math.random() * maxWidth);
      randomTop = Math.floor(Math.random() * maxHeight);
      attempts++;
      if (!isOverlapping(randomLeft, randomTop)) {
        foundPosition = true;
        break;
      }
    } while (attempts < maxAttempts);

    if (foundPosition) {
      const updatedTasks = [...tasks, { 'task': newTask, 'pos': [randomLeft, randomTop] }];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } else {
      // alert the user or log that no position was found
      console.warn('Could not find a non-overlapping position for the new task.');
    }
  };

  const updateTaskPosition = (task, newPos) => {
    const updatedTasks = tasks.map(t => 
      t === task ? { ...t, pos: newPos } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (deltask) => {
    const updatedTasks = tasks.filter(item => item !== deltask);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className='bg-white w-full h-[100vh]'>
      <AddTask createTask={createTask} />
      {tasks.map((item, index) => (
        <TaskCard key={index} item={item} deleteTask={deleteTask} updateTaskPosition={updateTaskPosition} isOverlapping={isOverlapping} />
      ))}
    </div>
  );
}

export default App;
