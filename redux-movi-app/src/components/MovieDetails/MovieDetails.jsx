import { useEffect } from "react";
import "./MovieDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchAsyncMovieOrShow, getSelectedMovieOrShow, removeSelectedMOvieOrShows } from "../../features/movies/movieSlice";
import BoltLoaders from "../LoaderComponents/BoltLoaders";

const MovieDetails = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log("data fetched:", data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShow(imdbID))
        return () => {
            dispatch(removeSelectedMOvieOrShows())
        }
    }, [dispatch, imdbID])
    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ? (
                <div> <BoltLoaders /> </div>
            ) : (
                <>
                    <div className="section-left">
                        <div className="section-right">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                        <div className="movie-title">{data.Title}</div>


                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {data.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {data.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {data.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}
//         <div>
//             {Object.keys(data).length === 0 ? (
//                 <div className="flex justify-center mt-[15%] ">
//                     <BoltLoaders />
//                 </div>) :
//                 (<>
//                     <div className=" flex flex-col items-start  text-white">
//                         <div className="text-2xl font-bold mb-2">{data.Title}</div>
//                         <div className=" flex flex-col space-y-2 text-black-Font_primary ">
//                             <span className="flex items-center">
//                                 IMDB Rating <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                                     <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//                                 </svg>: {data.imdbRating}

//                             </span>
//                             <span className="flex items-center">
//                                 IMDB Votes<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                                     <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
//                                 </svg>:{data.imdbVotes}

//                             </span>
//                             <span className="flex items-center">
//                                 Runtime<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                                     <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
//                                 </svg>:{data.Runtime}

//                             </span>
//                             <span className="flex items-center">
//                                 Year<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                                     <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
//                                     <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
//                                 </svg>: {data.Year}
//                             </span>

//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">
//                                 {data.Plot}
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-2 mt-4">
//                             <div>
//                                 <span className="font-bold flex items-center">Director :</span>
//                                 <span>{data.Director}</span>
//                             </div>
//                             <div>
//                                 <span className="font-bold flex items-center">Stars :</span>
//                                 <span>{data.Actors}</span>
//                             </div>
//                             <div>
//                                 <span className="font-bold flex items-center">Genres :</span>
//                                 <span>{data.Genre}</span>
//                             </div>
//                             <div>
//                                 <span className="font-bold flex items-center">Languages :</span>
//                                 <span>{data.Language}</span>
//                             </div>
//                             <div>
//                                 <span className="font-bold flex items-center">Awards :</span>
//                                 <span>{data.Awards}</span>
//                             </div>
//                         </div>
//                         <div className="w-full ">
//                             <img src={data.Poster} alt={data.Title} />
//                         </div>
//                     </div>

//                 </>)}
//         </div>
//     )
// }

export default MovieDetails