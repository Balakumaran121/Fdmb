import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSearchText, setSearchText } from '../redux/searchslice'

const Header = () => {
  const { searchText } = useSelector((state) => state.search)
  const options = ["All", "Adventures", "Comedy", "Action", "Thiriller"]
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value))
  }

  return (
    <div className="w-full bg-zinc-900 px-4 py-3 flex flex-col lg:flex-row justify-between items-center gap-4">

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
        <p className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-md text-lg">IMDb</p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto relative">
          
          <select
            value={searchText}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
            className="text-black bg-zinc-300 px-3 py-2 rounded-md outline-none w-full sm:w-auto"
          >
            <option value="">Select category</option>
            {options.map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>

          
          <div className="relative w-full">
            <input
              value={searchText}
              onChange={handleChange}
              type="text"
              placeholder="Search movies..."
              className="w-full text-white bg-zinc-700 px-4 py-2 rounded-md outline-none"
            />
            {searchText && (
              <span
                onClick={() => dispatch(resetSearchText())}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-xl font-bold"
              >
                ×
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
