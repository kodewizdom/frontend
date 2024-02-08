/* eslint-disable no-unused-vars */
import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
            <div className=' w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
            </div>
            <div className='w-full py-4 px-3'>
                <h2 className='font-medium text-slate-900'>Amaxon</h2>
                <p className='text-xs mt-3'>lorem ipsum, fafem nfai najn njaffn nfewib dfj </p>
            </div>
        </div>
    </div>
  )
}

export default Card;
