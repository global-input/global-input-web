
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
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
      align-items: center;
      color: white;
      width: 100%;
      @media only screen and (min-width:650px){
        justify-content:flex-start;
        align-items: flex-start;
        height:300px;
        margin-left:20px;
        margin-top:100px;
      }
      @media only screen and (min-width:800px){
          margin-left:80px;
      }


      @media only screen and (min-width:1258px){
        margin-left:80px;
        margin-top:250px;
      }

`;





export  const Title=styled.div`
        font-size: 40px;
        text-align:center;
    `;
export  const Subtitle=styled.div`
      font-size: 16px;
      text-align:center;
      margin-top:10px;
      @media only screen and (min-width:650px){
        font-size: 20px;
      }
    `;
export const SmallTitle=styled.div`
      font-size: 14px;
      margin-top:25px;
      margin-bottom:10px;
      text-align:center;
    `;


export const ButtonContainer=styled.div`
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-top: 30px;
        width: 260px;

        @media only screen and (min-width:500px){
          width: 340px;
        }
        @media only screen and (min-width:650px){
          width: 370px;
        }
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

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;
