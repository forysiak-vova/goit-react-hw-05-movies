import { Button } from './HomePage.styles'
import { useState, useEffect } from 'react'
import HomePageList from '../../component/HomePageList'
import { toast } from 'react-toastify';
import axios from 'axios';
const BASE_URl = 'https://api.themoviedb.org'


const HomePage = () => {
   const [searchQuery, setSearchQuery] = useState([]);
   const [page, setPage] = useState(1)

   useEffect(() => {
      async function homefetch() {
         try {
          
             const resAxios = await axios.get(`${BASE_URl}/3/trending/movie/week?api_key=0754829cbe2d4a3d2043b315bf2671de&language=ru-US&page=${page}`)
       const result = resAxios.data.results
       setSearchQuery(prev => [...prev, ...result])
         } catch (error) {
           toast.error('ERROR', {
           theme: 'colored',
         })  
       }
      }
      homefetch()
      // fetch(`${BASE_URl}/3/trending/movie/week?api_key=0754829cbe2d4a3d2043b315bf2671de&language=ru-US&page=${page}`)
      //    .then(response => response.json())
      //    .then(({ results }) => {
      //       if (results.length === 0) {
      //   toast.error('ERROR', {
      //     theme: 'colored',
      //   });
      // }
            
      //      return setSearchQuery(prev => [...prev, ...results])
      //    })
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