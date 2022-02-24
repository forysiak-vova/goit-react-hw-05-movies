import { Button } from './HomePage.styles'
import { useState, useEffect } from 'react'
import HomePageList from '../../component/HomePageList'
const BASE_URl = 'https://api.themoviedb.org'


const HomePage = () => {
   const [searchQuery, setSearchQuery] = useState([]);
   const [page, setPage] = useState(1)

   useEffect(() => {
      fetch(`${BASE_URl}/3/trending/movie/day?api_key=0754829cbe2d4a3d2043b315bf2671de&language=ru-US&page=${page}`)
         .then(response => response.json())
      .then(({results}) => {setSearchQuery(prev => [...prev, ...results])} )
   }, [page])

   const addImg = () => {
      setPage(prev => prev + 1)
   }

 const btn = (searchQuery.length >= 20)
   return (
      <>
         <HomePageList items={searchQuery} />
         {btn && <Button onClick={addImg}>Load more</Button>}
         
      </>
   
   )
}

export default HomePage;