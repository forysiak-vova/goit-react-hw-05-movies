import styled from '@emotion/styled'

export const Button = styled.button`
display: block;
margin-left:auto;
margin-right: auto;
background-color:grey;
border: none;
padding:5px;
margin-top:20px;
margin-bottom: 20px;
color: #fff;
border-radius:4px;
font-size: 22px;
 transform: scale(1);
&:hover{
  transform: scale(1.05);
      transition-duration: 250ms;
      color: blue;
}
`;
