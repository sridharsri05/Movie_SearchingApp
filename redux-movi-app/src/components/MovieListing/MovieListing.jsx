import { useSelector } from "react-redux"
import { getAllMovies, getAllShows, getIsLoading } from "../../features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard"
import Slider from 'react-slick';
import { Settings } from "../../common/Apis/Slider";
import BoltLoaders from "../LoaderComponents/BoltLoaders";
export const MovieListing = () => {

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    const isLoading = useSelector(getIsLoading)
    let renderMovies, renderShows = "";

    renderMovies =
        movies.Response === "True" ?
            (movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
            ) : (
                <div className=" flex justify-center ml-[30rem] text-2xl text-red-600">
                    <h1> {movies.Error}</h1>
                </div>)

    renderShows =
        shows.Response === "True" ?
            (shows.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
            ) : (
                <div className=" flex justify-center ml-[30rem] text-2xl text-red-600">
                    <h1> {shows.Error}</h1>
                </div>)
    return (
        <div className=" m-6 ">
            <h1 className=" text-white ml-2 text-2xl  "> Movies </h1>
            <div>
                {isLoading ? (
                    <div className=" flex justify-center">
                        <BoltLoaders />
                    </div>
                ) : (
                    <Slider {...Settings} > {renderMovies} </Slider>
                )}

            </div>
            <h2 className=" text-white ml-2 text-2xl"> Shows </h2>
            <div>
                {isLoading ? (
                    <div className=" flex justify-center">
                        <BoltLoaders />
                    </div>
                ) : (
                    <Slider {...Settings}> {renderShows} </Slider>
                )}


            </div>

        </div>
    )
}
