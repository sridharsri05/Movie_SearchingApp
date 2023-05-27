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
    isLoading: false,
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
            .addCase(fetchMoviesAsync.pending, (state) => {
                console.log("pending");
                state.isLoading = true;
            })
            .addCase(fetchMoviesAsync.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.isLoading = false;
                state.movies = payload;
            })
            .addCase(fetchMoviesAsync.rejected, (state) => {
                console.log("rejected");
                state.isLoading = false;
            })
            .addCase(fetchShowsAsync.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.isLoading = false;
                state.shows = payload;
            })
            .addCase(fetchAsyncMovieOrShow.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully");
                state.isLoading = false;
                state.selectedMovieOrShow = payload;
            });
    },
});

export const { removeSelectedMOvieOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows                    /// selectors
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export const getIsLoading = (state) => state.movies.isLoading


export default movieSlice.reducer;