// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaCircleDot } from "react-icons/fa6";

const DiffCard = () => {
    const [val,setVal]= useState(false)
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
        <div className="w-60 relative h-32 flex bg-zinc-500 rounded-md overflow-hidden">
        <img
          className={`w-full h-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform ease-out duration-300 object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="card"
        />
        <img
          className={`w-full h-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform ease-out duration-300 object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fHww"
          alt="card"
        />

        <span
        onClick={()=>{setVal(()=>!val)}}
          className="w-10 h-10 bg-[#dadada8b] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaCircleDot size={"1em"} />
        </span>
        </div>
    </div>
  )
}

export default DiffCard