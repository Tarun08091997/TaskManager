import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
export default function TaskCard({item , deleteTask , left , top}) {
  const [pos , setPos] = useState([left,top]);
  const [mousePos , setMousePos] = useState([0,0]);
  const [mouseDown , setMouseDown] = useState(false);

  const moveElement =(e) =>{
    if(mouseDown){
      setPos([e.clientX-mousePos[0] , e.clientY-mousePos[1]])
    }
  }
  return (
    <div className={`bg-[#91C8E4] sm:text-[18px] absolute left-${pos[0]} top-${pos[1]} p-2
    md:w-[300px] sm:w-[200px] w-[120px]  m-[5px] rounded-lg`}>
      <MdDelete className='sm:text-[20px] text-[15px] text-red-600 
      cursor-pointer relative top-1 sm:left-[90%] left-[80%]' onClick={()=>deleteTask(item)} />
      <div className='mt-1 font-bold text-white md:text-[20px] text-[12px] whitespace-normal break-all
      cursor-move' onMouseDown={(e)=>{setMousePos([e.clientX , e.clientY]); setMouseDown(true)}} onMouseMove={moveElement}>
          {item.task}
      </div>
    </div>
  )
}
