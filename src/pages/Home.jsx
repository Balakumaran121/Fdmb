import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import BornToday from '../components/BornToday'
import Footer from '../components/Footer'
import Movies from './Movies'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../redux/moviesSlice'
import AddMovie from '../components/AddMovie'

const Home = () => {
  const modalRef = useRef()
  const [openPopup, setOpenPopup] = useState(false)

  const { users, movies } = useSelector((state) => state.movie)

  const dispatch = useDispatch()
  const [err, setErr] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [addMovieData, setAddmovieData] = useState({ movieName: "", hero: "", heroine: "", })
  const options = users.map((item) => (
    {
      label: item?.name,
      value: item
    }
  ))
  const handleReset = () => {
    setAddmovieData({ movieName: "", hero: "", heroine: "", })
  }
  const handleAddMovies = () => {
    setSubmitted(true)
    const hasAtLeastOneValue = Object.values(addMovieData).every(val => val.toString().trim() !== "")
    if (hasAtLeastOneValue) {
      const data = {
        id: movies.length + 1,
        img: "https://picsum.photos/200/300?random=50",
        director: "Ravi",
        genre: "Adventure",
        hero: addMovieData.hero,
        heroine: addMovieData.heroine,
        title: addMovieData.movieName,
        release_date: "2024-11-12",
        language: "Tamil",

      }
      dispatch(addMovies(data))
      setOpenPopup(false)
    }
    setTimeout(() => {
      setSubmitted(false)
    }, 500000);
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setAddmovieData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenPopup(false)
        setErr(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [])

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openPopup])

  useEffect(() => {
    if (addMovieData && submitted) {
      const hasAtLeastOneValue = Object.values(addMovieData).every(val => val.toString().trim() !== "")
      setErr(!hasAtLeastOneValue)
    }
  }, [addMovieData, submitted])

  return (
    <div className='bg-zinc-900 cursor-pointer relative '>
      <Header />
      <button className='text-black ml-[60%] lg:ml-[90%]  w-fit text-sm font-bold bg-amber-400 px-4 py-3 rounded-md cursor-pointer' onClick={() => setOpenPopup(true)}>Add Movies</button>
      <Movies />
      <BornToday />
      <Footer />

      {
        openPopup &&
        <AddMovie err={err} handleChange={handleChange} handleReset={handleReset} modalRef={modalRef} setAddmovieData={setAddmovieData} addMovieData={addMovieData} handleAddMovies={handleAddMovies} options={options} />

      }
    </div>
  )
}

export default Home
