import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editMovies, removeMovies } from '../redux/moviesSlice'

const MoviesCard = ({ movies }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(removeMovies({ id: id }))
        navigate("/")
    }
    const [selectedData, setSelectedData] = useState({})
    const [openEditForm, setOpenEditForm] = useState(false)

    const handleEdit = () => {
        setOpenEditForm((prev)=>!prev)
    }
    useEffect(() => {
        if (movies) {
            setSelectedData(movies[0])
        }
    }, [movies])

    const handleChange = (e) => {
        const { name, value } = e.target
        setSelectedData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = () => {
        dispatch(editMovies(selectedData))
        setOpenEditForm(false)
    }
    return (
        <div className='h-screen'>
            <div className='w-[90%]  flex justify-between items-center'>
                <button className='pl-30 mt-10 text-lg font-medium cursor-pointer hover:text-red-500' onClick={() => navigate("/")}>Back</button>
                <div className='inline-flex gap-3'>

                    <button className='ml-[60%] text-amber-400 text-xl font-medium cursor-pointer ' onClick={handleEdit}>{openEditForm?"Close":"Edit"}</button>
                    <button className='ml-[70%] text-amber-400 text-xl font-medium cursor-pointer' onClick={() => handleDelete(movies[0]?.id)}>Delete</button>
                </div>
            </div>

            <section className='grid grid-cols-2 mx-auto container py-10'>
                {
                    movies.map((movie) => (
                        <>

                            <div key={movie.id}>
                                <img src={movie.img} alt="Def" className='w-72 h-72 rounded-xl mb-10' />
                                {
                                    !openEditForm ?
                                        <p className='text-center w-fit  text-2xl my-3 font-extrabold '>{movie.title}</p> :
                                        <input type="text" name='title' value={selectedData.title} onChange={handleChange} className='border border-amber-500 px-2 outline-none py-2 rounded-xl' />
                                }
                            </div>
                            {!openEditForm ?
                                <div className='flex flex-col gap-5 justify-center '>
                                    <h3 className={`text-lg ${movie.producer?"not-sr-only":"sr-only"}`}>Producer : <span className='font-medium'>{movie?.producer}</span></h3>
                                    <h2 className='text-lg'>Director   : <span className='font-medium'>{movie?.director}</span></h2>
                                    <h2 className='text-lg'>Cast  : <span className='font-medium'>{movie.hero},{movie.heroine}</span></h2>
                                    <h2 className='text-lg'>Genere : <span className='font-medium'>{movie.genre}</span></h2>
                                    <h2 className='text-lg'>Language : <span className='font-medium'>{movie.language}</span></h2>
                                    <h2 className='text-lg'>Release Date : <span className='font-medium'>{movie.release_date}</span></h2>
                                </div> :
                                <div className='flex flex-col gap-5 justify-center '>
                                    <h2 className='text-lg'>Director   </h2>
                                    <input type="text" name='director' value={selectedData?.director} onChange={handleChange} className='border border-amber-500 outline-none  px-2 py-2 rounded-xl' />
                                    <h2 className='text-lg'>Cast</h2>
                                    <input type="text" name='hero' value={selectedData?.hero} onChange={handleChange} className='border border-amber-500 px-2  outline-none py-2 rounded-xl' />
                                    <input type="text" name='heroine' value={selectedData?.heroine} onChange={handleChange} className='border border-amber-500 outline-none px-2 py-2 rounded-xl' />
                                    <h2 className='text-lg'>Genere
                                    </h2>
                                    <input type="text" name='genre' value={selectedData.genre} onChange={handleChange} className='border border-amber-500 outline-none px-2 py-2 rounded-xl' />
                                    <h2 className='text-lg'>Language</h2>
                                    <input type="text" name='language' value={selectedData.language} onChange={handleChange} className='border border-amber-500 outline-none px-2 py-2 rounded-xl' />
                                    <h2 className='text-lg'>Release Date</h2>
                                    <input type="text" name='release_date' value={selectedData?.release_date} onChange={handleChange} className='border border-amber-500 outline-none px-2 py-2 rounded-xl' />
                                    <div className='w-full gap-10 flex'>

                                        <button className='bg-amber-500 px-10 py-4 rounded-xl text-lg font-bold cursor-pointer' onClick={handleSubmit}>Submit</button>
                                        <button className='border border-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer px-10 py-4 rounded-xl text-lg font-bold' onClick={handleEdit}>Close</button>
                                    </div>
                                </div>

                            }
                        </>
                    ))
                }
            </section>

        </div>
    )
}

export default MoviesCard
