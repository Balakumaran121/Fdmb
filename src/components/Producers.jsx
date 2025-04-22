import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Producers = () => {
  const { producers } = useSelector((state) => state.movie)
  const navigate = useNavigate()
  const handleNavigate = (val)=>{
    navigate(`/producer/${val.id}`,{state:val})
  }
  return (
    <>
      <h2 className='text-3xl font-semibold text-white container mx-auto m-10'>Producer</h2>
      <div className='flex gap-5 container mx-auto m-10'>
        {
          producers ? producers?.map((item) => (
            <div className='flex flex-col gap-10 hover:animate-pulse' onClick={()=>handleNavigate(item)}>
              <img src={item.image} alt="producer" className='w-62 h-62 rounded-xl' />
              <h1 className='text-3xl text-white pl-20'>{item?.name}</h1>

            </div>
          )) :
            <h1 className='text-2xl text-white'>No Producers Found</h1>
        }

      </div>
    </>
  )
}

export default Producers
