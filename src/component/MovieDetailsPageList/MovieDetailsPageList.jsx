import defaultImg from '../../images/noImageAvailable.jpg'
import Cast from '../../component/Cast'
import Reviews from '../../component/Reviews'
const MoviePageList = ({ movi }) => {
   
   return <>
   
   <ul> 
      <li>{
         <img src={
          movi.poster_path ?
               `https://image.tmdb.org/t/p/w500${movi.poster_path}` :
               defaultImg
         } alt="" />
      }</li>
      <li>
         {movi.title}

         ({movi.release_date.substring(0, 4)})
         <p>
            
        use Score: {movi.vote_average * 10}%
      </p>
      </li>
      <li>
         <h3>Overview</h3>
        
         {movi.overview}
      </li>
      <li>
         <h3>Genres</h3>
     
         {movi.genres.map(({id,name}) => <span key={id}>{name}</span>)}
       </li>
      </ul>
      
      <Cast />
      <Reviews/>
   </>
   
  
}

export default MoviePageList