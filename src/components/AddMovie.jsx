import React from 'react'

const AddMovie = ({options,modalRef,handleChange,addMovieData,err,handleAddMovies,handleReset}) => {
  return (
    <div className='bg-zinc-800/90 fixed inset-0 z-50 flex w-full h-screen items-center justify-center'>
    <div className='bg-white/70 rounded-xl w-96 hover:shadow-2xl hover:shadow-amber-300' ref={modalRef}>

      <h1 className='text-center py-4'>Add Movie</h1>
      <div className='p-4 flex flex-col'>

        <label htmlFor="MovieName">Movie Name</label>
        <input type="text" value={addMovieData?.movieName} autoComplete='Off' onChange={handleChange} name="movieName" id="" className='outline-none text-black border-b-2 border-black/15 backdrop-blur-2xl shadow-2xl' />
      </div>
      <div className='p-4 flex flex-col'>

        <label htmlFor="Hero">
          Hero
        </label>
        <select name="hero" id="#h1" className='outline-none border-b-2 border-black/15'  value={addMovieData?.hero} onChange={handleChange}>
          <option value=""></option>
          {
            options.map((item)=>(
              <option key={item.id} value={item?.value?.name}>{item?.label}</option>
            ))
          }
        </select>
      </div>
      <div className='p-4 flex flex-col'>
        <label htmlFor="Heroine">
          Heroine
        </label>
        <select name="heroine" id="#h2" className='outline-none border-b-2 border-black/15' value={addMovieData?.heroine} 
        onChange={handleChange}>
          <option value=""></option>
        {
            options.map((item)=>(
              <option key={item.id} value={item?.value?.name}>{item?.label}</option>
            ))
          }
        </select>
      </div>
      {err && <span className='text-[#ff0000] px-5'>Please fill in all fields.</span>}
      <button className='px-10 py-2 my-4 bg-amber-500 text-lg font-medium cursor-pointer hover:bg-amber-600 rounded-md mx-28' onClick={handleAddMovies}>
        Submit
      </button>
      <p className='text-end pr-5 underline hover:text-amber-900' onClick={handleReset}>Reset</p>
    </div>
  </div>
  )
}

export default AddMovie
