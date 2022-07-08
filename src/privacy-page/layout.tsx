import styled from 'styled-components';
import backgroundImage from './images/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  min-height:100vh;
  background-color: rgb(97,136,204);
  padding: 100px 8vw 0 8vw;
  @media only screen and (min-width:880px){
    background-color: white;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-left: 20vw;
    padding-right: 20vw;
  }
  @media only screen and (min-width:1900px){
    background-size: 150%;
  }

`;


export const Content=styled.div`
    color:white;
`;

export const Title=styled.div`
    font-size: 65px;
    font-weight: 1000;
    padding-bottom: 50px;
    line-height: 65px;

    @media only screen and (max-width:1258px){
      font-size: 40px;
      line-height: 40px;
    }
      
`;

export const P = styled.div`
    font-size: 18px;
    margin-bottom: 30px;
`;
