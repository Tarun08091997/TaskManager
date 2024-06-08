import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";

export default function TaskCard({ item, deleteTask, isOverlapping, updateTaskPosition }) {
  const [pos, setPos] = useState([item.pos[0], item.pos[1]]);
  const [prevPos, setPrevPos] = useState([item.pos[0], item.pos[1]]);

  const [mousePos, setMousePos] = useState([0, 0]);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseDown) {
        const x = e.clientX - mousePos[0];
        const y = e.clientY - mousePos[1];
        setPos([x, y]);
      }
    };

    const handleMouseUp = () => {
      if (mouseDown) {
        if (isOverlapping(pos[0], pos[1])) {
          setPos(prevPos); // Revert to previous position if overlapping
        } else {
          setPrevPos(pos); // Update previous position if not overlapping
          updateTaskPosition(item, pos);
        }
        setMouseDown(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDown, mousePos, pos, prevPos, isOverlapping, item, updateTaskPosition]);

  const handleMouseDown = (e) => {
    setMousePos([e.clientX - pos[0], e.clientY - pos[1]]);
    setMouseDown(true);
  };

  return (
    <div
      className='bg-[#91C8E4] sm:text-[18px] absolute p-2 md:w-[300px] sm:w-[200px] w-[120px] m-[5px] rounded-lg'
      style={{ left: `${pos[0]}px`, top: `${pos[1]}px` }}
    >
      <MdDelete
        className='sm:text-[20px] text-[15px] text-red-600 cursor-pointer relative top-1 sm:left-[90%] left-[80%]'
        onClick={() => deleteTask(item)}
      />
      <div
        className='mt-1 font-bold text-white md:text-[20px] text-[12px] whitespace-normal break-all cursor-move'
        onMouseDown={handleMouseDown}
      >
        {item.task}
      </div>
    </div>
  );
}
