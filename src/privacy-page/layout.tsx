import styled from 'styled-components';
import backgroundImage from './images/background.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height:100%;
  background-color:rgb(66,132,196);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  color:white;
`;

export const Content=styled.div`
    display: flex;
    flex-direction: column;
    justifyContent: flex-start;
    alignItems: center;
    width:90%;
    margin:20px;
`;


export const Title=styled.div`
    font-size: 25px;
    margin-top: 30px;
    display: block;
    @media only screen and (min-width:600px){
        font-size:40px;
    }
`;

export const P = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
`;
