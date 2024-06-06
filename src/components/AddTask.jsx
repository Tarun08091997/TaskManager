import React from 'react'

export default function AddTask() {
  return (
    <div className='w-[80%] md:w-[500px] lg:w-[650px] h-[44px] 
    absolute top-[20%] left-1/2 -translate-x-1/2 self-center'>
        <input type='text' 
        className='w-[70%] rounded-l-xl h-full outline-none bg-gray-300 text-[15px] text-center'/>
        <input type='number' className='w-[15%] h-full 
        hover:cursor-pointer text-center font-bold text-[11px] md:text-[15px] outline-none' placeholder='Task Order'/>
        <button className={`h-full w-[15%] rounded-r-xl font-bold text-[15px]
         bg-blue-500 text-white 
         box-border hover:shadow-lg hover:shadow-black`}>Create</button>
    </div>
  )
}
