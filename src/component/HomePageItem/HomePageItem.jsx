import { Item, Title, Img } from './HomePageItem.styles'
import PropTypes from 'prop-types'


const non = 'default name'
const HomePageItem = ({ poster_path, title, id }) => {
   return (<Item to={`/movies/${id}`} >
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