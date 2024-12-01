// src/store/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=665b20a47630bd2a42fa007a04ddbfb2');
    return response.data.results;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default movieSlice.reducer;