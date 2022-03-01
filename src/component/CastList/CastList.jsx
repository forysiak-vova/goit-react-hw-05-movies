import { width } from "@mui/system";
import defaultImg from '../../images/noImageAvailable.jpg'
import PropTypes from 'prop-types';


const CastList = ({ cast }) => {
   // const res = (cast.cast)
   // console.log(cast.cast)
   return (
      <ul>
        
         {cast.cast.map(({ profile_path, id, character, name }) => <li key={id}>

            <img src={
            profile_path ?
               
                  `https://image.tmdb.org/t/p/w500/${profile_path}`
                  :
                  defaultImg
            
            }  width={200} />
            <p>{name}</p>
            <p>Character: {character}</p>
           
         </li>)}
         
      </ul>
      )
}

CastList.propTypes = {
   cast: PropTypes.object.isRequired
}

export default CastList;