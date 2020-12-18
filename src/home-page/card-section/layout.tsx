import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import authenticationImage from './images/authentication.svg'
import mobileControlImage from './images/control.svg';
import secondScreenImage from './images/second-screen.svg';
import encryptionImage from './images/encryption.png';
import mobilePersonStorageImage from './images/personal-storage.png';
import mobileContentTransferImage from './images/transfer.png';
import arrow from './images/arrow.svg';

const Icon=styled.img`
    margin-top:20px;
`;
export const AuthenticationIcon=styled(Icon).attrs({
    src:authenticationImage,
    alt:'Authentication Icon',
})``;

export const ControlIcon=styled(Icon).attrs({
    src:mobileControlImage,
    alt:'Mobile Control Icon',
})``;

export const SecondScreenIcon=styled(Icon).attrs({
    src:secondScreenImage,
    alt:'Second Screen Icon',
})``;

export const EncryptionIcon=styled(Icon).attrs({
    src:encryptionImage,
    alt:'Encryption Icon',
})``;


export const StorageIcon=styled(Icon).attrs({
    src:mobilePersonStorageImage,
    alt:'Storage Icon',
})``;
export const TransferIcon=styled(Icon).attrs({
    src:mobileContentTransferImage,
    alt:'Transfer Icon',
})``;
const ArrowImage=styled.img.attrs({
    src:arrow,
    alt:'Arrow',
})``;


export const Title=styled.div`
      font-size: 20px;
      margin-top:20px;
      @media only screen and (min-width:300px){
        font-size: 25px;
      @media only screen and (min-width:600px){
        font-size: 20px;
`;
export const Card =styled (Link)`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #FFFFFF;
      color: #5291CD;
      height: 250px;
      border-radius: 5px;

      margin-top:10px;
      margin-bottom:10px;

      width: 95%;
      padding-bottom:30px;
      max-width: 370px;
      text-decoration:none;
      &: hover{
        box-shadow:
          0 0 50px #ffff;
      }

`;


export const Content= styled.div`
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      font-size: 14px;
      width: 90%;
  `;


  export const Footer=styled.div`
    width: 100%;
    color: #A8A8A8;
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
`;


const MoreText=styled.div`
      color: #5291CD;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-end;
      text-decoration: none;
      white-space: nowrap;
      font-size: 15px;
`;



export const More=() => (
    <MoreText> MORE <ArrowImage/></MoreText>
);


export const Cards=styled.div`
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   width:100%;
   margin-top:60px;
`;
export const CardsContent=styled.div`
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   width:100%;

   @media only screen and (min-width:800px){
     flex-wrap: wrap;
     flex-direction:row;
     justify-content: space-between;
     padding:20px;
   }


   @media only screen and (min-width:800px){
    max-width:800px;

  }
  @media only screen and (min-width:1024px){
    max-width:900px;
  }
  @media only screen and (min-width:1400px){
    max-width:1350px;
  }


`;