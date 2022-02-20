import { Link, Nav } from './Navigation.styles'
import { Outlet } from 'react-router-dom';


const Navigation = () => {
   return (
     <>
     <Nav>
         <Link to="/">Home</Link>
         <Link to="/movies">Movies</Link>
       </Nav>
       <Outlet/>
       </>
   )
}

export default Navigation;