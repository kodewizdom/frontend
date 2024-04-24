import React, { useState } from 'react'

const State4 = () => {
    const [val, setVal] = useState([1,2,3,4,5,6,7])
  return (
    <div className='p-5'>
    {/* print and remove elem 1 by 1 */}

    {/* {val.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal(()=>{
       return val.filter((item,index)=> index!=val.length-1)
      })} className={`px-2 py-2 text-xs mt-2 rounded-full bg-green-500 text-white`}>click</button> */}
    
    {/* print and remove elem at position 2 */}
    
    {/* {val.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal(()=>{
       return val.filter((item,index)=> index!=2)
      })} className={`px-2 py-2 text-xs mt-2 rounded-full bg-green-500 text-white`}>click</button>
    </div> */}

    {/* print and remove elem at position 2 */}
    {val.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal(()=>{
       return val.filter(item=> item%2!==0)
      })} className={`px-2 py-2 text-xs mt-2 rounded-full bg-green-500 text-white`}>click</button>
    </div>
  )
}

export default State4