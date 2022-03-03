import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import CastList from '../CastList'
import {castQuery} from '../../servises/api'


const Cast = () => {
   const [cast, setCast] = useState(null)
   const { slug } = useParams()
    const matchId = slug.match(/[a-z0-9]+$/)[0]

   useEffect(() => {
      if (!matchId) {
         return
      }
     castQuery(matchId)
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