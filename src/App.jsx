import { Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {lazy, Suspense} from 'react'
// import { Title } from './App.styles' 
import Loader from './component/Loader'
import Navigation from './component/Navigation';

const HomePage = lazy(() =>
  import('view/HomePage' /* webpackChunkName: 'home-page' */))
const MoviesPage = lazy(() =>
  import('view/MoviesPage' /* webpackChunkName: 'movies-page' */))
const MovieDetailsPage = lazy(() =>
  import('view/MovieDetailsPage' /* webpackChunkName: 'movie-details-page' */))
const Cast = lazy(() =>
  import('component/Cast' /* webpackChunkName: 'cast' */))
const Reviews = lazy(() =>
  import('component/Reviews' /* webpackChunkName: 'reviews' */))


function App() {
  return (

     <>
      {/* <Navigation /> */}
      <Suspense fallback={<Loader/>}>


      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage/>}/>
         
          <Route path="movies/:slug" element={<MovieDetailsPage />}> 
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      </Suspense>
         <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </>
  )
}

export default App;