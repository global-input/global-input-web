
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import headerBackground1440 from './images/headerBackground-1440.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height:100vh;
  background-color: rgb(114,164,210);
  @media only screen and (min-width:880px){
    background-color: white;
    background-image: url(${headerBackground1440});
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

`;

export const Content=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex:1;
    @media only screen and (min-width:650px){
      padding-top:100px;
      padding-left:20px;
      padding-right:20px;
    }
    @media only screen and (min-width:800px){
      padding-left:80px;
      padding-right:80px;
    }
    @media only screen and (min-width:1258px){
      padding-top:250px;
      padding-left:80px;
      padding-right:80px;
    }
    @media only screen and (min-width:1700px){
      padding-left:120px;
      padding-right:120px;
    }

`;

 export   const TitleSection =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;

      padding:10px;
      @media only screen and (min-width:650px){
        justify-content:flex-start;
        align-items: flex-start;
        margin-left:20px;
      }
      @media only screen and (min-width:1200px){

        margin-left:50px;
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
        @media only screen and (min-width:300px){
          width: 260px;
        }
        @media only screen and (min-width:500px){
          width: 340px;
        }
        @media only screen and (min-width:650px){
          width: 370px;
        }
`

export const LinkButton=styled(Link)`
    text-decoration: none;

    font-size: 15px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 10px;
    margin-right:5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    &: hover{
        text-decoration: none;
        box-shadow: 0px 15px 20px rgba(38, 151, 226, 0.4);
        transform: translateY(-3px);
    }
    `;
