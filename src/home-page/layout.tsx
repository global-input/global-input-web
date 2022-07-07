
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
      padding-left:20px;
      padding-right:20px;
    }
    @media only screen and (min-width:800px){
      padding-left:80px;
      padding-right:80px;
    }
    @media only screen and (min-width:1258px){
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
      white-space: pre-wrap;
      color: white;
      height: 90vh;
      margin-left: 20vw;
`;

export  const Title=styled.div`
        font-size: 65px;
        font-weight: 1000;
        padding-bottom: 30px;
        line-height: 65px;
        width: 25vw;

        @media only screen and (max-width:1258px){
          font-size: 40px;
          line-height: 40px;
        }

        @media only screen and (max-width:900px){
          width: 50vw;
        }
    `;
export const Subtitle=styled.div`
      font-size: 20px;
      padding-bottom: 3px;
      line-height: 28px;
      width: 25vw;
      color: #fffe;

      @media only screen and (max-width:900px){
        width: 50vw;
      }
    `;


export const ButtonContainer=styled.div`
        display: flex;
        flex-direction: row;
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
    padding: 15px;
    margin-right:5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-weight: 700;
    &: hover{
        background-color: #e3e3e3;
    }
    `;


export const SecondaryButton = styled(LinkButton)`
    border-width:0;
    background-color: #0000;
    color: white;
    &: hover{
            background-color: #fff2;
    }
`
