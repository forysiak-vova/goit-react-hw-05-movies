import { useParams, Link, useNavigate, useLocation, Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'
import MoviePageList from '../../component/MovieDetailsPageList'

const MovieDetailsPage = () => {
   // console.log(useParams())
   const { movieId } = useParams()
 
   console.log(useLocation())
   const navigate = useNavigate()
   const goBack = () => navigate(-1)

   const [movi, setMovi] = useState(null);
   useEffect(() => {
      
     
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US`)
         .then(response => response.json())
         .then(data => setMovi(data))
      
   },[])
   // console.log(movi)
   return (
      <>
         <button onClick={goBack}>Go back</button>
         {movi && <MoviePageList movi={movi} />}
         
         <Link to='reviews'>reviews</Link>
         
         <Link to='cast'>cast</Link>
         <Outlet />
      </>
      
   );
}

export default MovieDetailsPage;