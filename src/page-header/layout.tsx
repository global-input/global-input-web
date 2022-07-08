import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from "../configs";
import appIcon from './images/app-icon.png';
import companyIcon from './images/company-icon.png';
import menuSymbol from './images/menu-symbol.svg';
import closeSymbol from './images/close.png';
import { LinkButton } from '../home-page/layout';


const dropDown = keyframes`
  0% {
    transform:translateY(-100%)
  }
  100%{
    transform:translateY(0%)
  }
`;




export const Title = styled.h3`
    font-size: 20px;
    color: #5291CD;
    white-space: nowrap;
    font-weight: 300;
    padding-left: 10px;
    font-family: Tisa-Sans-Pro, Elysio-Light, Helvetica, Arial, sans-serif;
`;
export const appTitle = config.id === 'iterative' ? 'Iterative Solution' : 'Global Input App';



export const LogoAndName = styled.p`
    margin: 0 0 0 5vw;
    display: flex;
    flex-direction: row;
    @media only screen and (min-width: 1024px){
      margin-left: 15vw
    }
`


export const AppLogo = styled.img.attrs({
  alt: 'App Logo',
  src: appIcon,
})`
  object-fit: none;
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
      background-color:white;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
`;

export const TopBar = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 12px;
      z-index: 20;
`;




export const MenuItem = styled(Link)`
      background-color: white;
      text-decoration: none;
      color: #5291CD;
      text-align: center;
      white-space: nowrap;
      padding-left: 10px;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      &: hover{
        color: #74b3fe;
      }
      @media only screen and (min-width: 800px){
        padding: 0;
        justify-content:center;
        margin-left: 30px;
      }
`;

export const Icon = styled.button`
    margin-right: 5vw;
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
    @media only screen and (max-width: 800px) {
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
  display: none;
  flex-direction:row;
  margin:0;
  padding:0;
  @media only screen and (min-width: 800px){
    display:flex;
    margin-right: 5vw
  }
  @media only screen and (min-width: 1024px){
    margin-right: 15vw;
  }
`;

export const MobileMenuContainer = styled.div`
    display: flex;
    position: absolute;
    z-index: 19;
    flex-direction: column;
    background-color: white;
    top:54px;
    right:0;
    width:100%;
    animation: ${dropDown} 300ms ease-out;
    @media only screen and (min-width: 800px){
        display: none;
    }
`;
