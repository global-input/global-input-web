import React, { useState, useEffect, useRef } from "react";

import { config } from "../configs";

import {
  Title,
  appTitle,
  AppLogo,
  Container,
  TopBar,
  Icon,
  MenuItem,
  CloseIcon,
  OpenIcon,
  DesktopMenuContainer,
  MobileMenuContainer,
  LogoAndName,
  CompanyLogo,
  LogoAndNameLink,
  LogoSection,
  Pipe
} from "./layout";

interface Props {
  selected?: string | null;
}
export const PageHeader: React.FC<Props> = ({ selected }) => {
  const [menuPressed, setMenuPressed] = useState(false);

  const menuRef = useRef(null);
  useClickedOutside(menuRef, () => {
    if (menuPressed) {
      setMenuPressed(false);
    }
  });
  const toggle = () => setMenuPressed((menuPressed) => !menuPressed);

  const listMenu = menus.map((menu, index) => (
    <MenuItem to={menu.link} key={`${index}_${menu.link}_${menu.linkText}`}>
      {menu.linkText}
    </MenuItem>
  ));

  return (
    <Container>
      <TopBar>
        <LogoSection>
        <LogoAndNameLink href="https://iterativesolution.co.uk">
          <CompanyLogo/>
          <Title>Iterative Solution</Title>          
        </LogoAndNameLink>
        <Pipe />
        <LogoAndNameLink href="/">          
          <AppLogo />
          <Title>{appTitle}</Title>
        </LogoAndNameLink>

        </LogoSection>
        
        <DesktopMenuContainer>{listMenu}</DesktopMenuContainer>
        <Icon onClick={toggle}>
          <CloseIcon show={menuPressed} />
          <OpenIcon show={!menuPressed} />
        </Icon>
      </TopBar>
      {menuPressed && (
        <MobileMenuContainer ref={menuRef}>{listMenu}</MobileMenuContainer>
      )}
    </Container>
  );
};

const useClickedOutside = (element, onClicked) => {
  useEffect(() => {
    const handleClick = (evt) => {
      if (element.current && !element.current.contains(evt.target)) {
        onClicked();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClicked, element]);
};

const menus = [
  {
    link: config.paths.home.path,
    linkText: "HOME",
  },
  {
    link: config.paths.privacy.path,
    linkText: "PRIVACY POLICY",
  },
  {
    link: config.paths.contactUs.path,
    linkText: "CONTACT US",
  },
  {
    link: config.paths.getAppScreen.path,
    linkText: "GET IT FREE",
  },
];
