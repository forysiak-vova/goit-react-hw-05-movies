import styled from '@emotion/styled'

export const Item = styled.li`
background-color:grey;
border-radius: 6px;
 transform: scale(1);
 &:hover,
 &:focus{
     transform: scale(1.05);
      transition-duration: 500ms;
 }
`;

export const Title = styled.h1`
display: flex;
text-align: center;
aline-items: center;
justify-content: center;
font-size:22px;
color: #fff;
`;

export const Img = styled.img`
width: 100%;
height: 80%;
border-radius: 6px;
`; 