import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import './components/MovieDetails/MovieDetail.scss'
const App = () => {
  return (

    <div className=' bg-black-2'>
      <BrowserRouter>
        <Header />
        <div >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>


  )
}

export default App;


// primary - #0f171e
// secondary- #1a242f
// font primary- #fffffff
// #79b8f3
