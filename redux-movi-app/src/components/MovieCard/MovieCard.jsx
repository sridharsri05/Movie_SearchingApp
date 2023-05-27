/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {

    return (
        <div className=" bg-black-1 cursor-pointer m-3 transition-all   hover:scale-110 hover:transition-all duration-300 rounded-t-3xl rounded-b-2xl  ">
            <Link to={`/movie/${data.imdbID}`} >
                <div className="  max-w-full ">
                    <img src={data.Poster} alt={data.Title} className="h-[300px] w-full   rounded-t-3xl    " />
                </div>
                <div className=" text-base text-center font-normal p-3   text-white   ">
                    <div> {data.Title}</div>
                    <div> {data.Year}</div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard;