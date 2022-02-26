import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ReviewsList from "component/ReviewsList"

const Reviews = () => {
   console.log(useParams())
   const { movieId } = useParams()
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US&page=1`)
         .then(response => response.json())
         .then(({results}) => setReviews(results))
   }, [])
  console.log(reviews)
   return (
      <>
         {reviews === [] ? 
            
            <p>rrrrr</p>
            :
            <ReviewsList reviews={reviews} />
            
         }
      
      </>
   ) 
}

export default Reviews