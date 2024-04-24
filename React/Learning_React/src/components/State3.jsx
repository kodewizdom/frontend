// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const State3 = () => {

    const [val,setVal] = useState({name:"harsh", age:24});
  return (
    <div>
        <button onClick={()=>{
            setVal({...val, gender:"male"});
            console.log(val);
        }}>
            click
        </button>
    </div>
  )
}

export default State3