import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { config } from "../web-config";
import appIcon from "./images/small-app-icon.png";
import companyIcon from "./images/company-icon.png";
import menuSymbol from "./images/menu-symbol.svg";
import closeSymbol from "./images/close.png";
import { LinkButton } from "../home-page/layout";

const dropDown = keyframes`
  0% {
    transform:translateY(-100%)
  }
  100%{
    transform:translateY(0%)
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const LogoSection= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 5vw;
`;
export const Title = styled.h3`
  font-size: 20px;
  color: #5291cd;
  white-space: nowrap;
  font-weight: 300;
  padding-left: 10px;
  font-family: Tisa-Sans-Pro, Elysio-Light, Helvetica, Arial, sans-serif;
  @media only screen and (min-width: 250px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 300px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 400px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 500px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Pipe=styled.div`
  border-left: 1px solid ;
  height: 50px;
  margin: 0 10px;
  
`;
export const appTitle ="Global Input App";

export const LogoAndName = styled.div`
  
  display: flex;
  flex-direction: row;    
`;

export const LogoAndNameLink = styled.a`
  
  display: flex;
  flex-direction: row;    
  text-decoration: none;
`;

export const AppLogo = styled.img.attrs({
  alt: "App Logo",
  src: appIcon,
})`
  object-fit: none;
`;
export const CompanyLogo = styled(AppLogo).attrs({
  alt: "Company Logo",
  src: companyIcon,
})``;

// export let Logo = config.id === "iterative" ? CompanyLogo : AppLogo;

export const Container = styled.div`
  display: flex;
  @media only print {
    display: none;
  }
  flex-direction: column;
  background-color: white;
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
  z-index: 5;
`;

export const MenuItem = styled(Link)`
  background-color: white;
  text-decoration: none;
  color: #5291cd;
  text-align: left; /* Change this line */
  white-space: nowrap;
  padding-left: 10px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start; /* Change this line */
  width: 100%; /* Add this line */
  border-bottom: 1px solid #5291cd; /* Add this line */
  &: hover {
    color: #74b3fe;
  }
  @media only screen and (min-width: 950px) {
    padding: 0;
    justify-content: center;
    margin-left: 30px;
    border-bottom: none; /* Remove border for desktop view */
    width: auto; /* Reset width for desktop view */
    text-align: center; /* Reset text alignment for desktop view */
    align-items: center; /* Reset alignment for desktop view */
  }
`;

export const Icon = styled.button`
  margin-right: 5vw;
  font-weight: normal;
  color: #5291cd;
  font-style: normal;
  text-decoration: none;
  border: none;
  background-color: white;
  &: focus {
    outline: 0;
    box-shadow: 0 0 50px #ffff;
  }
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

interface IconProps {
  $show: boolean;
}

export const CloseIcon = styled.img.attrs({
  alt: "Close Menu",
  src: closeSymbol,
  width: 22,
  height: 20,  
})<IconProps>`
  display: ${(props) => (props.$show ? "block" : "none")};
`;

export const OpenIcon = styled.img.attrs({
  alt: "Open Menu",
  src: menuSymbol,
  width: 22,
  height: 20,
})<IconProps>`
  display: ${(props) => (props.$show ? "block" : "none")};
`;

export const DesktopMenuContainer = styled.div`
  display: none;
  flex-direction: row;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 950px) {
    display: flex;
    margin-right: 5vw;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 15vw;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Change this line */  
  width: 100%;
`;

export const MobileMenuContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 4;
  flex-direction: column;
  background-color: white;
  top: 54px;
  right: 0;
  width: 100%;
  animation: ${slideIn} 300ms ease-out;
  @media only screen and (min-width: 950px) {
    display: none;
  }
`;
