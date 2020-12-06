import React, { useState, useEffect,useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from "../../configs";
import appIcon from './images/app-icon.png';
import menuSymbol from './images/menu-symbol.svg';

interface Props {
  selected?: string | null;
}
export const TopHeaderSection: React.FC<Props> = ({ selected }) => {
  const [menuPressed, setMenuPressed] = useState(false);

  const mobileMenuContainer=useRef(null);
  useClickedOutside(mobileMenuContainer, ()=>{
    if(menuPressed){
      setMenuPressed(false);
    }
  });
  const toggle = () => setMenuPressed(menuPressed => !menuPressed);

  const listMenu=(menus.map((menu, index) => (
    <MenuItem to={menu.link}
        selected={menu.link === selected}
        key={`${index}_${menu.link}_${menu.linkText}`}>
        { menu.linkText}
   </MenuItem >
  )));

  return (
    <Container>
      <TopBar>
          <Icon onClick={toggle}>
                <CloseIcon show={menuPressed}>X</CloseIcon>
                <OpenIcon show={!menuPressed}/>
          </Icon>
          <Logo />
          <AppTitle />
        <Desktop>
              {listMenu}
        </Desktop>
      </TopBar>
      {menuPressed && (<Mobile ref={mobileMenuContainer}>
              {listMenu}
      </Mobile>)}
    </Container>
  );
};






const Title = styled.div`
    font-size: 20;
    color: #5291CD;
    white-space: nowrap;
    font-weight: 300;
    padding-left: 10px;
    font-family: Tisa-Sans-Pro, Elysio-Light, Helvetica, Arial, sans-serif;
`;
const appTitle = config.id === 'iterative' ? 'Iterative Solution Limited' : 'Global Input App';
export const AppTitle: React.FC = () => (
  <Title>{appTitle}</Title>
);


export const Logo = styled.img.attrs({
  alt: 'App Logo',
  src: appIcon,
})`
  max-width: 80px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 4px;
  margin-top: 4px;
  `;



const Container = styled.div`
      display: flex;
      @media print{
        display:none;
      }
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
`;

const TopBar = styled.div`
      padding-right: 30px;
      position: static;
      padding-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
      padding-right: 50px;
      border-bottom-color: #EEEEEE;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      box-shadow: 0 -5px 5px -5px #333;
      background-color:white;
`;



const useClickedOutside = (element, onClicked) => {
  useEffect(() => {
      const handleClick = (evt) => {
          if (element.current && (!element.current.contains(evt.target))) {
              onClicked();
          }
      }
      document.addEventListener('click', handleClick);
      return () => {
          document.removeEventListener('click', handleClick);
      }
  }, [onClicked, element]);
};

const menus = [{
  link: config.paths.home.path,
  linkText: "HOME"
}, {
  link: config.paths.privacy.path,
  linkText: "PRIVACY POLICY"
}, {
  link: config.paths.contactUs.path,
  linkText: "CONTACT US"
}, {
  link: config.paths.getAppScreen.path,
  linkText: "GET IT FREE"
}];
const MenuItem = styled(Link)`
      float: left;
      display: block;
      text-align: center;
      padding: 8px 16px;
      text-decoration: none;
      font-size: 15px;
      font-weight: ${props => props.selected ? 500 : 300};
      margin-bottom: 0;
      white-space: nowrap;
      &:hover{
        color: "#66ccff",
        fontWeight: 300,
        textDecoration: "underline"
      }
      @media (min-width: 601px){
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #5291CD;
      }
      @media (min-width: 800px){
        font-size: 15px;
      }
      @media (max-width: 599px){
        text-align: left;
        background-color: #FFFFFF;
        border-bottom-color: #BBBBBB;
        border-bottom-style: solid;
        border-bottom-width: 1px;
      }
`;




export const listMenus = ({ selected }) => menus.map((menu, index) => (
                <MenuItem to={menu.link}
                    selected={menu.link === selected}
                    key={`${index}_${menu.link}_${menu.linkText}`}>
                    { menu.linkText}
                </MenuItem >));

const Icon = styled.button`
    font-weight: normal;
    color: #5291CD;
    font-style: normal;
    text-decoration: none;
    border: none;
    background-color:white;
    min-width:50px;
    &: focus {
        outline:0;
    }
    display:none;
    @media only screen and (max-width: 599px) {
      display:block;
    }
`;
const CloseIcon = styled.div`
    font-size:24px;
    display:${props=>props.show?'block':'none'};
`;
const OpenIcon = styled.img.attrs({
    alt:'Menu',
    src:menuSymbol,
    width:22,
    height:20
})`
display:${props=>props.show?'block':'none'};
`;



const Desktop = styled.div`
  flex-direction:row;
  margin:0;
  padding:0;
  display:none;
  @media only screen and (min-width: 600px){
    display:flex;
  }
`;

const Mobile = styled.div`
    display: none;
    flex-direction: column;
    right: 0;
    top: 24px;
    justify-content: flex-end;
    padding-right: 10vw;
    @media (max-width: 599px){
        display: flex;
        background-color: rgba(0,0,0,0);
    }
`;
