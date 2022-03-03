import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import axios from 'axios';
import ReviewsList from "component/ReviewsList"

const Reviews = () => {
   const { slug } = useParams();
     const matchId = slug.match(/[a-z0-9]+$/)[0]
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      async function fetchReviews() {
         try {
            const axiosRew = await axios.get(`https://api.themoviedb.org/3/movie/${matchId}/reviews?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US&page=1`)
          const res = axiosRew.data.results
            setReviews(res)
            
         } catch (error) {
             toast.error('ERROR', {
           theme: 'colored',
         })
         }
      }
      fetchReviews()
      // fetch(`https://api.themoviedb.org/3/movie/${matchId}/reviews?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US&page=1`)
      //    .then(response => response.json())
      //    .then(({ results }) => {
      //       if (results.length === 0) {
      //   toast.error('We do not have any reviews for this movie', {
      //     theme: 'colored',
      //   });
      // }
      //       return setReviews(results)
      //    })
   }, [matchId])
   return (
      <>
         {reviews.length === 0 ? 
            
            <h3>We don't have any reviews for this movie.</h3>
            :
            <ReviewsList reviews={reviews} />
            
         }
      
      </>
   ) 
}

export default Reviews