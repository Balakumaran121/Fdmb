import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = () => {
  const {state:{name,image,dob,bio}} = useLocation()
  const navigate = useNavigate()
  return (
    <div className='bg-zinc-900 text-white h-screen'>
       <button className='pl-30 mt-10 text-lg font-medium cursor-pointer hover:text-red-500' onClick={() => navigate("/")}>Back</button>
        <div className='my-15 mx-30 grid grid-cols-2'>
          <img src={image} alt="is" className='w-96 h-96 rounded-xl' />
          <div className='flex flex-col gap-5'>

          <p className='text-3xl font-semibold'>{dob}</p>

          <p className='text-xl font-medium'>{name}</p>
          <p className='text-md font-normal leading-7 tracking-wider my-10 '>{bio}</p>
          </div>
        </div>
    </div>
  )
}

export default Profile
