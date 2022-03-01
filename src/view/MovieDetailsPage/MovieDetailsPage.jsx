import { useParams, Link, useNavigate, useLocation, Outlet} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Button } from './MovieDetailsPage.styles'
import { toast } from 'react-toastify';
import MoviePageList from '../../component/MovieDetailsPageList'

const MovieDetailsPage = () => {
   const { slug } = useParams()
   const location = useLocation()
   const matchId = slug.match(/[a-zA-Z0-9]+$/)[0]
   const page = useRef(location?.state?.from ?? '/');
   
   const navigate = useNavigate()

   const goBack = () => {
    
      navigate(page.current);
      }

   const [movi, setMovi] = useState(null);
   
   useEffect(() => {
      
     
      fetch(`https://api.themoviedb.org/3/movie/${matchId}?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US`)
         .then(response => response.json())
         .then(data => {
            if (!data) {
                toast.error('ERROR', {
          theme: 'colored',
        });
            }
          return  setMovi(data)
         })
      
         
   },[matchId])
   return (
      <>
         <Button type='button' onClick={goBack}>Go back</Button>
         {movi && <MoviePageList movi={movi} />}
         <p>Additional information</p>
         <ul>
            <li>
                <Link to='cast'>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
         

         </ul>
         <Outlet />
      </>
      
   );
}

export default MovieDetailsPage;