import { createSlice } from "@reduxjs/toolkit";
import { movies, users } from "../data/data";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movies,
        users
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        addMovies :(state,action) =>{
            state.movies.push(action.payload)
        },
        removeMovies :(state,action)=>{
            state.movies = state.movies.filter((val)=>val.id!==Number(action.payload.id))
        },
        editMovies :(state,action)=>{
            const updatedMovie = action.payload;
            state.movies=state.movies.map((movie)=>
            movie.id===Number(updatedMovie.id)?updatedMovie:movie)
        }
    }
})


export const { setMovies,addMovies,removeMovies,editMovies } = movieSlice.actions;
export default movieSlice.reducer;