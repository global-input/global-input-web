import React from 'react';
import styled from 'styled-components';
import oneClickSignIn200 from './images/one-click-sign-in-200.png';
import oneClickSignIn250 from './images/one-click-sign-in-250.png';
import oneClickSignIn350 from './images/one-click-sign-in-350.png';
import oneClickSignIn400 from './images/one-click-sign-in-400.png';

import tick from './images/tick.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height:100vh;
  background-color: rgba(169, 200, 230, 0.3);

`;

export const Content=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    width: 95%;
    max-width:1100px;
`;

export const Row = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex: 1;
        max-width: 100%;
        margin-top:30px;
        @media only screen and (min-width:900px){
            flex-direction: row;
            align-items:flex-start;
            justify-content:space-between;
        }

`;

export const Column = styled.div`
 flex: 1;

 @media only screen and (min-width:600px){
    width:500px;
 }
 @media only screen and (min-width:900px){
    max-width:400px;

 }
 @media only screen and (min-width:1100px){
    max-width:600px;
 }
`;

export const Title = styled.div`
    font-size:20px;
    text-align:center;
    margin-top:50px;
    margin-bottom:20px;
    width:95%;
    color: rgb(82, 145, 205);
    @media only screen and (min-width: 280px){
        font-size:22px;
    }
    @media only screen and (min-width: 400px){
        font-size:28px;
    }
    @media only screen and (min-width: 400px){
        font-size:28px;
    }
    @media only screen and (min-width: 900px){
        font-size:32px;
    }

`;

export const SignInGraph=()=>(
    <picture>
        <source media="(max-width:250px)" srcSet={oneClickSignIn200}/>
        <source media="(max-width:350px)" srcSet={oneClickSignIn250}/>
        <source media="(max-width:400px)" srcSet={oneClickSignIn350}/>
        <img  alt="Sign In Architecture" src={oneClickSignIn400}/>
    </picture>
);
const TickImage=styled.img.attrs({
    src: tick,
    alt: 'tick',
    width: 30,
    height: 30
  })``;

export const Tick=styled(TickImage)`

  margin-right:5px;
`;


export const Text = styled.div`
    color: rgb(82, 145, 205);
    margin-top:10px;
    margin-bottom:5px;
    @media only screen and (min-width:900px){
        margin-bottom:15px;
    }

`;
