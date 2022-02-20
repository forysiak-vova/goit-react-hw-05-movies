import MoviesForm from "component/MoviesForm";
import HomePageList from "component/HomePageList";
import {Button} from './MoviesPage.styles'
import { toast } from 'react-toastify';
import { useEffect, useState, useRef } from "react";
const API_KEY = '0754829cbe2d4a3d2043b315bf2671de'
const MoviesPage = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const [page, setPage] = useState(1);
   const [movie, setMovie] = useState([]);
 


   const firstFetch = useRef(true);

   useEffect(() => {
 if (firstFetch.current) {
      firstFetch.current = false;
      return;
    }
   //    if (!searchQuery) {
   //    return;
   //  }

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-US&query=${searchQuery}&page=${page}&include_adult=false`)
         .then(response => response.json())
         .then(({ results }) => {
              if (results.length === 0) {
        toast.error('ERROR', {
          theme: 'colored',
        });
      }
            
          return setMovie(prev => [...prev, ...results])
         })
   }, [searchQuery, page])
   
   const addFilm = () => {
setPage(prev => prev + 1)
   }

    const handelFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
   //  setStatus('pending');
     setMovie([]);
    setPage(1);
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