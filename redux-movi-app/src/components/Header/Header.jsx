import { Link } from "react-router-dom"
import User from '../../images/User-Profile.png'
import pngwing from '../../images/pngwing.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMoviesAsync, fetchShowsAsync } from "../../features/movies/movieSlice"

const Header = () => {
    const [term, searchTerm] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchMoviesAsync(term))
        dispatch(fetchShowsAsync(term))
        searchTerm('')
    };

    return (
        <div className=" flex justify-between bg-black-1  p-3  pl-5 pr-5 overflow-auto" >

            <div className=" h-24 w-24 ">
                <Link to='/' > <img src={pngwing} alt="pngwing" /></Link>
            </div>
            <div className="  mt-[1.5rem] sm:w-[19rem] md:w-[26rem] lg:w-[29rem]">
                <form onSubmit={submitHandler}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Movies ,Shows..." required
                            value={term}
                            onChange={(e) => searchTerm(e.target.value)} />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5
                        bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

            </div>
            <div className=" h-24 w-24 ">
                <img src={User} alt="user" />
            </div>
        </div >
    )
}

export default Header


{/* <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='searchMoviesorShows' onChange={(e) => searchTerm(e.target.value)} />
                </form> */}
