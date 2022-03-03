import { Item, Title, Img } from './HomePageItem.styles'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import slugify from 'slugify'
 

const non = 'default name'
const HomePageItem = ({ poster_path, title, id }) => {
   const makeSlag = string => slugify(string, {lower: true})
   const location = useLocation();
   return (<Item to={`/movies/${makeSlag(`${title} ${id}`)}`}  state={{ from: location }}>
                  <Img src={poster_path} alt={title} />
                  <Title>{title ? title : non}</Title>
   </Item>)
}

HomePageItem.propTypes = {
   poster_path: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired
}

export default HomePageItem;


// const makeSlag = () =>
//     slugify(`${title} ${id}`, {
//       lower: true,
//     });