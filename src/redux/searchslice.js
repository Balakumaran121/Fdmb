import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        searchText: ''
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        resetSearchText:(state)=>{
            state.searchText=""
        }
    }
})


export const { setSearchText,resetSearchText } = searchSlice.actions;
export default searchSlice.reducer