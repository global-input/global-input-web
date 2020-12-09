import React, { useState, useEffect,useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from "../configs";
import appIcon from './images/app-icon.png';
import menuSymbol from './images/menu-symbol.svg';
import closeSymbol from './images/close.png';

interface Props {
  selected?: string | null;
}
export const PageHeader: React.FC<Props> = ({ selected }) => {
  const [menuPressed, setMenuPressed] = useState(false);

  const menuRef=useRef(null);
  useClickedOutside(menuRef, ()=>{
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
          <Logo />
          <Title>{appTitle}</Title>
        <DesktopMenuContainer>
              {listMenu}
        </DesktopMenuContainer>
        <Icon onClick={toggle}>
                <CloseIcon show={menuPressed}/>
                <OpenIcon show={!menuPressed}/>
          </Icon>
      </TopBar>
      {menuPressed && (<MobileMenuContainer ref={menuRef}>
              {listMenu}
      </MobileMenuContainer>)}
    </Container>
  );
};






const Title = styled.div`
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
const appTitle = config.id === 'iterative' ? 'Iterative Solution Limited' : 'Global Input App';


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
      @media only print{
        display:none;
      }
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
`;

const TopBar = styled.div`

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
      border:1px solid red;
      @media only screen and (min-width: 600px){
        padding-right: 10px;
      }
      @media only screen and (min-width: 700px){
        padding-right: 50px;
      }

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
      display: block;
      text-decoration: none;
      font-size: 15px;
      font-weight: ${props => props.selected ? 500 : 300};
      margin-bottom: 0;
      white-space: nowrap;
      &:hover{
        color: #66ccff;
        fontWeight: 300;
      }
      text-align: left;
      border-bottom-color: #BBBBBB;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      padding: 30px 16px;
      @media only screen and (min-width: 600px){
        padding: 0px 16px;
        border-bottom-width: 0;
        text-align: center;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        font-size: 12px;
        color: #5291CD;
      }
      @media only screen and (min-width: 800px){
        font-size: 15px;
      }
      @media only screen and (min-width: 800px){
        padding: 0px 30px;
      }
      @media only screen and (min-width: 1444px){
        padding: 0px 45px;
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
    min-width:60px;
    &: focus {
        outline:0;
    }
    display:none;
    @media only screen and (max-width: 599px) {
      display:block;
    }
`;

const CloseIcon = styled.img.attrs({
  alt:'Close Menu',
  src:closeSymbol,
  width:22,
  height:20
})`
display:${props=>props.show?'block':'none'};
`;

const OpenIcon = styled.img.attrs({
    alt:'Open Menu',
    src:menuSymbol,
    width:22,
    height:20
})`
display:${props=>props.show?'block':'none'};
`;



const DesktopMenuContainer = styled.div`
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

const MobileMenuContainer = styled.div`
    display: none;
    flex-direction: column;
    position:absolute;
    background-color: white;
    top:54px;
    right:0;
    min-width:300px;
    @media only screen and (max-width: 599px){
        display: flex;

    }
`;
