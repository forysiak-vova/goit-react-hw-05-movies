import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
   display: inline-block;
 padding: 12px;
 text-decoration: none;
 font-weight: 500;
 color: #fff;
 font-size: 23px; 
   &.active {
    color: blue;

`; 
export const Nav = styled.nav`
height: 50px;
background-color:gray;
display:flex;
justify-content:center;
`;