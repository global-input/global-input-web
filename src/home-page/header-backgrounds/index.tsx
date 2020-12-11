
import styled from 'styled-components';
import headerBackground1440 from './images/headerBackground-1440.svg';
export const HeadBackGround=styled.div`
    background-image: url(${headerBackground1440});
    background-color: rgb(114,164,210);
    background-repeat: no-repeat;
    background-size: auto;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex:1;

    @media only screen and (min-width: 700px){
      background-size: cover;
    }
`
