import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import MoviesCard from '../components/MoviesCard'
import AllMoviesCard from '../components/AllMoviesCard'

const Movies = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { searchText } = useSelector((state) => state.search)
  const handleNavigate = (id) => {
    navigate(`movie/${id}`)
  }
  const singleMovieId = pathname.split('/').pop();
  const { movies } = useSelector((state) => state.movie);

  const searchTextData = searchText==="All"?movies: movies.filter(movie => Object.values(movie).some(value => String(value).toLowerCase().includes(searchText.toLowerCase())))
  const filterMovies = movies.filter((val) => val.id === parseInt(singleMovieId));


  const renderMovies = searchText ? searchTextData : movies
  return (
    <div className='bg-zinc-900 text-white'>
      {
        pathname.includes('movie') ?


          <MoviesCard movies={filterMovies} /> :
          <AllMoviesCard movies={renderMovies} handleNavigate={handleNavigate} showText={searchTextData?.length ? true : false} />
      }
    </div>
  )
}

export default Movies
