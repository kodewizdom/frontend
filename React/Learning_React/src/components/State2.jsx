// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function State2() {
    
    const [val,setVal] = useState({name:"sk", isBanned:false})
  
  return (

    <div className='p-4'>
      <h1 className='text-5xl'>name: {val.name}</h1>
      <h2 className='text-3xl'>banned: {val.isBanned.toString()}</h2>
      
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className={`px-2 py-2 text-xs mt-2 rounded-full ${val.isBanned?"bg-green-500":"bg-red-500"} text-white`}>change</button>
      
    </div>
  )
}

export default State2