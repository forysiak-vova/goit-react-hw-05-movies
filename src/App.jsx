import { Routes ,Route } from 'react-router-dom';
// import { Title } from './App.styles' 
import Navigation from './component/Navigation'
import MovieDetailsPage from './view/MovieDetailsPage'
import HomePage from 'view/HomePage';
import MoviesPage from 'view/MoviesPage';
import Cast from './component/Cast'
import Reviews from './component/Reviews'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

     <>
      {/* <Navigation /> */}
      
    <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage/>}/>
         
          <Route path="movies/:movieId" element={<MovieDetailsPage />}> 
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
              {/* <Route path='movies/:movieId/reviews' element={<Reviews />} />
          
          <Route path='movies/:movieId/cast' element={<Cast />} /> */}
        
          

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
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