// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const State = () => {

  const [score, setScore]=useState(0);
  const [banned, setBanned]=useState(false);
  
  
  return (
    <div className='p-4'>
      <h1 className='text-5xl'>{score}</h1>
      <button onClick={()=>setScore(200)} className='px-2 py-2 text-xs mt-2 rounded-full bg-blue-500 text-white'>change</button>
      
      <h1 className='text-5xl mt-10'>{banned.toString()}</h1> 
      {/* here banned is boolean so we have to change it to string other wise it will not visible on screen */}
      {/* <button onClick={()=>{setBanned(true)}} className='px-2 py-2 text-xs mt-2 rounded-full bg-blue-500 text-white'>banned</button> */}
      <button onClick={()=>{setBanned(!banned)}} className='px-2 py-2 text-xs mt-2 rounded-full bg-blue-500 text-white'>banned</button>
    </div>
  )
}

export default State
