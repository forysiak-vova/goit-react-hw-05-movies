import { useParams } from "react-router-dom"

const Reviews = () => {
   console.log(useParams())
   const {movieId} = useParams()
   return <div> Reviews {movieId}</div>
}

export default Reviews