import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MoviePageList from '../../component/MovieDetailsPageList'

const MovieDetailsPage = () => {
   // console.log(useParams())
   const { movieId } = useParams()
   // console.log(movieId)
   const [movi, setMovi] = useState('');
   useEffect(() => {
      
     
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US`)
         .then(response => response.json())
         .then(data => setMovi(data))
      
   },[])
   console.log(movi)
   return (
      <>
         {movi && <MoviePageList movi={movi}/>}
         
      </>
      
   );
}

export default MovieDetailsPage;