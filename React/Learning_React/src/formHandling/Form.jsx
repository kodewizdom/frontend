import React, { useRef } from 'react'

const Form = () => {
    const name = useRef(null);
    const age = useRef(null);

    const handelSubmit = (event)=>{
        event.preventDefault();
        console.log(name.current.value,age.current.value);
    }

  return (
    <form action="" onSubmit={handelSubmit}>
        <input ref={name} placeholder='name' type='text'/>
        <input ref={age} placeholder='age' type='number'/>
        <input type="submit"/>
    </form>
  )
}

export default Form