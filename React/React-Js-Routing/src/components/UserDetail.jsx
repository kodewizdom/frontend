import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} = useParams();


    const navigate = useNavigate();
    const GoBackHandler=()=>{
        // navigate(-1);
        navigate("/user");
    }
  return (
    <div className=' w-1/2 m-auto mt-10'>
        <h1 className='text-5xl'>User Detail</h1>

        <h1 className='text-3xl'>Hi, {name}</h1>
        <button onClick={GoBackHandler} className="mt-5 px-3 py-1 bg-red-300 hover:bg-red-500 text-sm text-white rounded-md">
        Go back
      </button>
    </div>
  )
}

export default UserDetail