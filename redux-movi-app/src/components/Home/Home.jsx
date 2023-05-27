
// import { APIkey } from '../../common/Apis/MovieApiKeys';
// import movieApi from '../../common/Apis/movieApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { addMovies } from '../../features/movies/movieSlice';
import { MovieListing } from '../MovieListing/MovieListing';
import { fetchMoviesAsync, fetchShowsAsync } from '../../features/movies/movieSlice';

const Home = () => {
    // const movieText = 'Harry Potter'
    const dispatch = useDispatch()
    useEffect(() => {
        const movieText = "harry";
        const movieShows = "harry";
        dispatch(fetchMoviesAsync(movieText))
        dispatch(fetchShowsAsync(movieShows))
        // const fetchMovies = async () => {
        //     const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
        //         .catch(
        //             (err) => {
        //                 console.log('Error', err)
        //             }
        //         )
        //     dispatch(addMovies(response.data))
        // }
        // fetchMovies();
    }, [dispatch])


    return (
        <div className='overflow-hidden' >
            <MovieListing />
        </div>
    )
}


export default Home;