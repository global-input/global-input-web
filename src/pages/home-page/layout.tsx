
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color:rgb(66,132,196);
`;

 export   const TitleSection =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      color: white;
      width: 100%;
      padding:10px;
      margin-top:70px;
      margin-bottom:50px;
      @media only screen and (min-width:1258px){
        margin-bottom:220px;
      }
`;





export  const Title=styled.div`
        font-size: 40px;
    `;
export  const Subtitle=styled.div`
      font-size: 20px;
    `;
export const SmallTitle=styled.div`
      font-size: 14px;
      margin-top:10px;
      margin-bottom:10px;
    `;


export const ButtonContainer=styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 5px;
`

export const LinkButton=styled(Link)`
    text-decoration: none;
    &: hover{
      text-decoration: none;
      font-weight: 500;
    }
    font-size: 15px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 10px;
    min-width: 120px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;
