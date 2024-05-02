import React from 'react'
import {useForm} from 'react-hook-form'

const Form2 = () => {
    const {register,handleSubmit}=useForm();
    console.log(register());
  return (
    <div>
        <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
            <input {...register('name')} type='text' placeholder='name'/>
            <input {...register('email')} type='email' placeholder='email'/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Form2