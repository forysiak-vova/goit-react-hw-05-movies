import { Routes ,Route } from 'react-router-dom';
// import { Title } from './App.styles' 
import Navigation from './component/Navigation'
import MovieDetailsPage from './view/MovieDetailsPage'
import HomePage from 'view/HomePage';
import MoviesPage from 'view/MoviesPage';
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
         
          <Route path="movies/:slug" element={<MovieDetailsPage />}> 
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
           </Route>

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