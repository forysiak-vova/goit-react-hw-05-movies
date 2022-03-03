import MoviesForm from "component/MoviesForm";
import HomePageList from "component/HomePageList";
import {Button} from './MoviesPage.styles'
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import {movieQuery} from "servises/api";


const MoviesPage = () => {
  //  const [searchQuery, setSearchQuery] = useState('');
   const [page, setPage] = useState(1);
   const [movie, setMovie] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   
 
  const paramsQuery = searchParams.get('query') ?? '';


 
  //  const firstFetch = useRef(true);

   useEffect(() => {
//  if (firstFetch.current) {
//       firstFetch.current = false;
//       return;
//     }
      if (!paramsQuery) {
      return;
     }
        movieQuery(paramsQuery, page)
         .then(response => response.json())
         .then(({ results }) => {
              if (results.length === 0) {
        toast.error('ERROR', {
          theme: 'colored',
        });
      }
            
          return setMovie(prev => [...prev, ...results])
         })
   }, [paramsQuery, page])
  
   const addFilm = () => {
setPage(prev => prev + 1)
   }

    const handelFormSubmit = searchQuery => {
    // setSearchQuery(searchQuery);
     setMovie([]);
      setPage(1);
      setSearchParams({ query: searchQuery })
  };

   const btn = (movie.length >= 20)
   return (
      <>
      <MoviesForm onSubmit={handelFormSubmit}/>
       <HomePageList items={movie} />
       {btn && <Button onClick={addFilm}>Load more</Button>}
      
      </>
      )
}

export default MoviesPage;