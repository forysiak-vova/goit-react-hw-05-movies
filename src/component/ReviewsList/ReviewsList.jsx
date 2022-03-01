import { Item } from './ReviewsList.styles'
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
   return (
      <ul>
        {
            reviews.map(({ author, content, id }) =>
               <Item key={id}>
                  <b>Author: {author}</b>
                  <p>{content}</p>
         </Item>
         
         )}

      </ul>
   )
}

ReviewsList.propTypes = {
   reviews: PropTypes.arrayOf(
     PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
     })
  )
   // reviews: PropTypes.array
}

export default ReviewsList;