// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function State1() {
    
    const [val,setVal] = useState(12)
  
  return (

    <div>
      <h1 className='text-5xl'>{val}</h1>
      {/* lets say you want previous value to work */}
      <button onClick={()=>setVal((prev)=>prev+1)} className='px-2 py-2 text-xs mt-2 rounded-full bg-blue-500 text-white'>change</button>
      
    </div>
  )
}

export default State1
