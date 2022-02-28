import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import CastList from '../CastList'


const Cast = () => {
   const [cast, setCast] = useState(null)
   const {movieId} = useParams()

   useEffect(() => {
      if (!movieId) {
         return
      }
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US`)
         .then(response => response.json())
         .then(data => setCast(data))
   }, [])


   return (
      <>
      
      {cast && <CastList cast={cast}/>}
      </>
   )
}

export default Cast;