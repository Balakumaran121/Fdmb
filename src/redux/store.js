import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";


import movieSlice from "./moviesSlice";
import searchSlice from './searchslice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['search','movie']
}

const rootReducer = combineReducers({
    movie: movieSlice,
    search: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store);
