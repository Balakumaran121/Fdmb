import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const ProducerProfile = () => {
    const { state: { name, image, movies: Movies } } = useLocation()
    const navigate = useNavigate()
    const handleNavigate = (val) => {
        navigate(`/movie/${val}`)
    }
    const { movies } = useSelector((state) => state.movie)
    const producedMovies = movies.filter((val) => val.producer === name)
    return (
        <div className='bg-zinc-900 text-white h-screen'>
            <button className='pl-30 mt-10 text-lg font-medium cursor-pointer hover:text-red-500' onClick={() => navigate("/")}>Back</button>
            <div className='my-15 mx-30 grid grid-cols-2'>
                <img src={image} alt="is" className='w-96 h-96 rounded-xl' />
                <div className='flex flex-col gap-5'>
                    <p className='text-3xl font-bold cursor-text'>{name}</p>
                    <ul className='flex flex-col gap-4 my-10 font-extrabold'>
                        {
                            Movies?.map((movie) => (
                                <li key={movie} className=' tracking-wider hover:text-amber-500 hover:cursor-pointer'>{movie}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
            <h1 className='container mx-auto text-lg font-semibold m-10 underline decoration-2 underline-offset-8 hover:animate-spin cursor-pointer'>Produced Movies List</h1>
            <ul className='flex gap-4 container mx-auto'>

                {
                    producedMovies ? producedMovies.map((movie) => (
                        <div key={movie.id} onClick={() => handleNavigate(movie?.id)} className='hover:scale-90 cursor-pointer'>
                            <img src={movie.img} alt="Def" className='w-72 h-72 rounded-xl' />
                            <p className='text-center text-md my-3'>{movie.title}</p>
                        </div>
                    )) : ""
                }
            </ul>
        </div>
    )
}

export default ProducerProfile
