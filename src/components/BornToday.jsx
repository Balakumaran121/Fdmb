import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
const BornToday = () => {
  const todayDate = new Date()
  const formatDate = todayDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
  })
  const { users } = useSelector((state) => state.movie)
  const navigate = useNavigate()
  const handleChanges = (val)=>{
    navigate(`/actor/${val.id}`,{state:val})
  }
  return (
    <div className=' contianer mx-auto w-[80%]   '>
      <h1 className='text-3xl font-bold my-2 text-white '>Born Today</h1>
      <h5 className='text-white text-lg my-4 font-medium'>People born on {formatDate}</h5>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640:{
            slidesPerView:2,
          },
          768:{
            slidesPerView:3
          },
          1024:{
            slidesPerView:4
          }
        }}
        autoplay={true}
        navigation
        modules={[Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          users.map((val) => (

            <SwiperSlide key={val.id} onClick={()=>handleChanges(val)}>
              <img alt='fe' src={val.image} className='rounded-full h-60 w-60' />
              <p className='text-white ml-16 my-2'>{val.name}</p>
            </SwiperSlide>
          ))
        }


      </Swiper>

    </div>
  )
}

export default BornToday
