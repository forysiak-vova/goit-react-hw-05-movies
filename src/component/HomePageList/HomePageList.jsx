// import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import HomePageItem from '../HomePageItem'
import { List } from './HomePage.styles'
import defaultImg from '../../images/noImageAvailable.jpg'
import PropTypes from 'prop-types'

const HomePageList = ({ items }) => {
   
   return (
      <List>
         {items.map(({ poster_path, id, title }) =>

   
            <HomePageItem
               key={
                  id
                     
                 
               }
               id={id}
               poster_path={
                  poster_path ?
                     `https://image.tmdb.org/t/p/w500${poster_path}`
                     : defaultImg
               }
               title={title}
            />
            )}
      </List>
  
   )

}

HomePageList.protoType = { 
   items: PropTypes.arrayOf(
      PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
      
   })
   )
}

export default HomePageList;

