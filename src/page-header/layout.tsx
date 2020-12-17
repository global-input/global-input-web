import React, { useState, useEffect,useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from "../configs";
import appIcon from './images/app-icon.png';
import companyIcon from './images/company-icon.png';
import menuSymbol from './images/menu-symbol.svg';
import closeSymbol from './images/close.png';


export const Title = styled.div`
    font-size: 20px;
    color: #5291CD;
    white-space: nowrap;
    font-weight: 300;
    padding-left: 10px;
    font-family: Tisa-Sans-Pro, Elysio-Light, Helvetica, Arial, sans-serif;
    @media only screen and (min-width:600px){
        position:absolute;
        top:15px;
        left:50px;
        font-size: 15px;
    }
    @media only screen and (min-width:720px){
        font-size: 20px;
    }
`;
export const appTitle = config.id === 'iterative' ? 'Iterative Solution' : 'Global Input App';



export const AppLogo = styled.img.attrs({
  alt: 'App Logo',
  src: appIcon,
})`
  max-width: 80px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 4px;
  margin-top: 4px;
  `;
  const CompanyLogo=styled(AppLogo).attrs({
    alt: 'Company Logo',
    src: companyIcon,
  })``;


  export let Logo=config.id==='iterative'?CompanyLogo:AppLogo;



export const Container = styled.div`
      display: flex;
      @media only print{
        display:none;
      }
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
`;

export const TopBar = styled.div`

      padding-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom-color: #EEEEEE;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      box-shadow: 0 -5px 5px -5px #333;
      background-color:white;
      padding-top: 5px;
      @media only screen and (min-width: 600px){
        padding-right: 10px;
      }
      @media only screen and (min-width: 700px){
        padding-right: 50px;
      }

`;




export const MenuItem = styled(Link)`
      color: #5291CD;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-decoration: none;
      white-space: nowrap;
      padding-left: 10px;
      border-bottom:1px solid #EEEEEE;
      font-size: 15px;
      height:   60px;
      width: 100%;
      font-weight: ${props => props.selected ? 500 : 300};
      &: hover{
        text-decoration: none;
        fontWeight: 300;
        border-color: rgb(52,121,186);
      }
      @media only screen and (min-width: 600px){
        justify-content:center;
        height: 30px;
        width: 110px;
        border-bottom:1px solid #FFFFFF;
        font-size: 12px;
      }
      @media only screen and (min-width: 800px){
        font-size: 15px;
        width: 130px;
      }
      @media only screen and (min-width: 1024px){
        width: 150px;
      }

      @media only screen and (min-width: 1444px){
        width: 230px;
      }

`;

export const Icon = styled.button`
    font-weight: normal;
    color: #5291CD;
    font-style: normal;
    text-decoration: none;
    border: none;
    background-color:white;

    &: focus {
        outline:0;
    }
    display:none;
    @media only screen and (max-width: 599px) {
      display:block;
    }
`;

export const CloseIcon = styled.img.attrs({
  alt:'Close Menu',
  src:closeSymbol,
  width:22,
  height:20
})`
display:${props=>props.show?'block':'none'};
`;

export const OpenIcon = styled.img.attrs({
    alt:'Open Menu',
    src:menuSymbol,
    width:22,
    height:20
})`
display:${props=>props.show?'block':'none'};
`;



export const DesktopMenuContainer = styled.div`
  flex-direction:row;
  margin:0;
  padding:0;
  display:none;


  @media only screen and (min-width: 600px){
    display:flex;
  }
  @media only screen and (min-width: 1024px){
    margin-right:150px;
  }

`;

export const MobileMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    top:54px;
    right:0;
    border:2px solid #EEEEEE;
    width:100%;
    @media only screen and (min-width: 600px){
        display: none;

    }
`;
