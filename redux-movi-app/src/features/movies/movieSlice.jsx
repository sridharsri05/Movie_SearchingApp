import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIkey } from '../../common/Apis/MovieApiKeys';
import movieApi from '../../common/Apis/movieApi';


export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync',
    async (term) => {

        const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=movie`)

        return response.data;
    });

export const fetchShowsAsync = createAsyncThunk('shows/fetchShowsAsync',
    async (term) => {

        const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=series`)

        return response.data;
    });

export const fetchAsyncMovieOrShow = createAsyncThunk('movies/fetchAsyncMovieOrShow',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`)

        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

// const movieSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//         addMovies: (state, { payload }) => {
//             state.movies = payload;          // immer packgae for mutable
//         },
//     },
//     extraReducers: {
//         [fetchMoviesAsync.pending]: () => {
//             console.log("pending");
//         },
//         [fetchMoviesAsync.fulfilled]: (state, { payload }) => {
//             console.log("Fetched successfully");
//             return  {...state, movies: payload };
//         },
//         [fetchMoviesAsync.rejected]: () => {
//             console.log("rejected");
//         },
//         [fetchShowsAsync.fulfilled]: (state, { payload }) => {
//             console.log("Fetched successfully");
//             return { ...state, shows: payload };
//         },
//         [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
//             console.log("Fetched successfully");
//             return { ...state, selectedMovieOrShow: payload };
//         },
//     }
// });

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMOvieOrShows: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesAsync.pending, () => {
                console.log("pending");
            })
            .addCase(fetchMoviesAsync.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.movies = payload;
            })
            .addCase(fetchMoviesAsync.rejected, () => {
                console.log("rejected");
            })
            .addCase(fetchShowsAsync.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.shows = payload;
            })
            .addCase(fetchAsyncMovieOrShow.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.selectedMovieOrShow = payload;
            });
    },
});

export const { removeSelectedMOvieOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows                    /// selectors
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;