import defaultImg from '../../images/noImageAvailable.jpg'
import { List, Description } from './MovieDetailsPageList.styles'
import PropTypes from 'prop-types';
// import Cast from '../../component/Cast'
// import Reviews from '../../component/Reviews'
const MoviePageList = ({ movi }) => {
   return <>
   
      <List> 
         <div>

      <li>{
            <img src={
               movi.poster_path ?
                  `https://image.tmdb.org/t/p/w500${movi.poster_path}` :
                  defaultImg
            } alt="movi.title" width={300} height={400}/>
      }</li>
         </div>
         <Description>

            <li>
               <h3>

         {movi.title}
         ({movi.release_date.substring(0, 4)})
               </h3>

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
     
         {movi.genres.map(({id,name}) => <p key={id}>{name}</p>)}
       </li>
         </Description>
      </List>
      
      {/* <Cast /> */}
      {/* <Reviews/> */}
   </>
   
  
}
MoviePageList.propTypes = {
   movi: PropTypes.object.isRequired
}

export default MoviePageList