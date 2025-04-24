import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editMovies, removeMovies } from '../redux/moviesSlice'
import { ArrowLeft } from 'lucide-react'
import { languageOptions } from '../data/data'

const MoviesCard = ({ movies }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedData, setSelectedData] = useState({})
    const [openEditForm, setOpenEditForm] = useState(false)

    useEffect(() => {
        if (movies && movies.length) {
            setSelectedData(movies[0])
        }
    }, [movies])

    const handleChange = (e) => {
        const { name, value } = e.target
        setSelectedData(prev => ({ ...prev, [name]: value }))
    }

    const handleEditToggle = () => {
        setOpenEditForm(prev => !prev)
    }

    const handleDelete = (id) => {
        dispatch(removeMovies({ id }))
        navigate('/')
    }

    const handleSubmit = () => {
        dispatch(editMovies(selectedData))
        setOpenEditForm(false)
    }

    const renderEditInput = (label, name) => (
        <>
        {
            label !=="Language"?
            <>

            <h2 className='text-lg'>{label}</h2>
            <input
                type="text"
                name={name}
                value={selectedData[name] || ''}
                onChange={handleChange}
                className='border border-amber-500 outline-none px-2 py-2 rounded-xl'
            />
            </>
            
            :
            <> 
            <h2>{label}</h2>
            <select name={name} value={selectedData[name]} onChange={handleChange} className='border border-amber-500 outline-none px-2 py-2 rounded-xl' id="">
                <option value="" className='bg-black text-white'></option>
                {
                    languageOptions.map((item,index)=>(
                            <option key={index} value={item} className='bg-black text-white'>{item}</option>
                    ))
                }
            </select>
            </>


        }
        </>
    )
    const data =["Director","Hero","Heroine","Genre","Language","Release Date"]
    return (
        <div className='h-screen'>
            <div className='w-[90%] flex justify-between items-center'>
                <button
                    className='pl-30 flex gap-2 items-center mt-10 text-lg font-medium cursor-pointer hover:text-red-500'
                    onClick={() => navigate("/")}
                >
                    <ArrowLeft size={20} />
                    Back
                </button>

                <div className='inline-flex gap-10'>
                    <button
                        className='text-amber-400 text-xl font-medium cursor-pointer hover:scale-150'
                        onClick={handleEditToggle}
                    >
                        {openEditForm ? "Close" : "Edit"}
                    </button>
                    <button
                        className='text-amber-400 text-xl font-medium cursor-pointer hover:scale-150'
                        onClick={() => handleDelete(movies[0]?.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <section className='grid grid-cols-2 mx-auto container py-10'>
                {movies.map((movie) => (
                    <div key={movie.id} className='flex gap-10'>
                        <div>
                            <img src={movie.img} alt={movie.title} className='w-72 h-72 rounded-xl mb-10' />
                            {openEditForm ? (
                                <input
                                    type="text"
                                    name="title"
                                    value={selectedData.title || ''}
                                    onChange={handleChange}
                                    className='border border-amber-500 px-2 outline-none py-2 rounded-xl'
                                />
                            ) : (
                                <p className='text-center w-fit text-2xl my-3 font-extrabold'>{movie.title}</p>
                            )}
                        </div>

                        {!openEditForm ? (
                            <div className='flex flex-col gap-5 justify-center'>
                                {movie.producer && (
                                    <h3 className='text-lg'>
                                        Producer : <span className='font-medium'>{movie.producer}</span>
                                    </h3>
                                )}
                                <h2 className='text-lg'>Director : <span className='font-medium'>{movie.director}</span></h2>
                                <h2 className='text-lg'>Cast : <span className='font-medium'>{movie.hero}, {movie.heroine}</span></h2>
                                <h2 className='text-lg'>Genre : <span className='font-medium'>{movie.genre}</span></h2>
                                <h2 className='text-lg'>Language : <span className='font-medium'>{movie.language}</span></h2>
                                <h2 className='text-lg'>Release Date : <span className='font-medium'>{movie.release_date}</span></h2>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-5 justify-center'>
                                {
                                    data.map((item)=>(
                                        item===
                                        renderEditInput(item, item?.toLowerCase )
                                    ))
                                }
                                {renderEditInput('Hero', 'hero')}
                                {renderEditInput('Heroine', 'heroine')}
                                {renderEditInput('Genre', 'genre')}
                                {renderEditInput('Language', 'language')}
                                {renderEditInput('Release Date', 'release_date')}
                                <div className='w-full gap-10 flex mt-4'>
                                    <button
                                        className='bg-amber-500 px-10 py-4 rounded-xl text-lg font-bold cursor-pointer'
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className='border border-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer px-10 py-4 rounded-xl text-lg font-bold'
                                        onClick={handleEditToggle}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default MoviesCard
