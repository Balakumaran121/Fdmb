import React from 'react'


const AllMoviesCard = ({ movies, handleNavigate, showText }) => {
    return (
        <>
            <h1 className={`text-white lg:pl-65 pl-10 text-lg font-medium ${showText ? "sr-only" : "not-sr-only"}`}>Here you're filter movie list</h1>
            <section className='grid grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-2 mx-auto container py-10'>
                {
                    movies?.length ?
                        movies.map((movie) => (
                            <div key={movie.id} onClick={() => handleNavigate(movie?.id)}>
                                <img src={movie.img} alt="Def" className='w-72 h-72 rounded-xl' />
                                <p className='text-center text-md my-3'>{movie.title}</p>
                            </div>
                        )) :
                        <h1 className='text-white text-lg text-center pl-10 whitespace-nowrap lg:pl-0 '>No Movies Found</h1>
                }
            </section>
        </>
    )
}

export default AllMoviesCard
