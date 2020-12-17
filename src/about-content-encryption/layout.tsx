import React from 'react';
import styled from 'styled-components';

import encryptedQRCode200 from './images/encrypted-qr-code-200.png';
import encryptedQRCode250 from './images/encrypted-qr-code-250.png';
import encryptedQRCode350 from './images/encrypted-qr-code-350.png';


import mobileEncryption400 from './images/mobile-encryption-400.png';
import mobileEncryption350 from './images/mobile-encryption-350.png';
import mobileEncryption250 from './images/mobile-encryption-250.png';
import mobileEncryption200 from './images/mobile-encryption-200.png';


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
        padding-top:50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex: 1;
        max-width: 100%;
        margin-top:30px;
        margin-bottom:20px;
        @media only screen and (min-width:900px){
            flex-direction: row;
            align-items:flex-start;
            justify-content:space-between;
        }
`;

export const Row2=styled(Row)`
    @media only screen and (min-width:900px){
        & picture {
            order:-1;
        }
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
    margin-bottom:20px;
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


const PictureAtLeft=styled.picture`
    order:-1;
`;


export const EncryptedQRCodeGraph=()=>(
    <picture>
        <source media="(max-width:250px)" srcSet={encryptedQRCode200}/>
        <source media="(max-width:350px)" srcSet={encryptedQRCode250}/>
        <img  alt="Sign In Architecture" src={encryptedQRCode350}/>
    </picture>
);

const PictureAtRight=styled.picture`
    order:2;
`;

export const MobileEncryptionGraphGraph=()=>(
    <picture>
        <source media="(max-width:250px)" srcSet={mobileEncryption200}/>
        <source media="(max-width:350px)" srcSet={mobileEncryption250}/>
        <source media="(max-width:400px)" srcSet={mobileEncryption350}/>
        <img  alt="Mobile Encryption" src={mobileEncryption400}/>
    </picture>
);



const Tick=styled.div`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right:10px;
    &: before{
        position: absolute;
        left: 0;
        top: 50%;
        height: 50%;
        width: 3px;
        background-color: rgb(56,160,68);
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }
    &: after{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: rgb(56,160,68);
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }


`;


const Text = styled.div`
    color: rgb(82, 145, 205);
    margin-top:10px;
    margin-bottom:5px;
    @media only screen and (min-width:900px){
        margin-bottom:15px;
    }
`;

const TickContainer=styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:flex-start;
    align-items:center;
`;

export const TickText:React.FC=({children})=>(
    <TickContainer>
        <Tick/>
        <Text>
        {children}
        </Text>
    </TickContainer>
);