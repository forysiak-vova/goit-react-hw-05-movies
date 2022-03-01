import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import CastList from '../CastList'


const Cast = () => {
   const [cast, setCast] = useState(null)
   const { slug } = useParams()
    const matchId = slug.match(/[a-z0-9]+$/)[0]

   useEffect(() => {
      if (!matchId) {
         return
      }
      fetch(`https://api.themoviedb.org/3/movie/${matchId}/credits?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US`)
         .then(response => response.json())
         .then(data => {
             if (!data) {
                toast.error('ERROR', {
          theme: 'colored',
        });
            }
            return setCast(data)
         })
   }, [matchId])


   return (
      <>
      
      {cast && <CastList cast={cast}/>}
      </>
   )
}

export default Cast;