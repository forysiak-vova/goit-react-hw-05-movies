import { Item, Title, Img } from './HomePageItem.styles'
const non = 'default name'
const HomePageItem = ({ poster_path, title, id }) => {
   // console.log(id)
   return (<Item to={`/movies/${id}`}>
                  <Img src={poster_path} alt={title} />
                  <Title>{title ? title : non}</Title>
   </Item>)
}
export default HomePageItem;