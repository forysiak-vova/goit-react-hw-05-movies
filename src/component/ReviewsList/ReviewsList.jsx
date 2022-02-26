import {Item} from './ReviewsList.styles'

const ReviewsList = ({ reviews }) => {
   console.log(reviews)
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

export default ReviewsList;