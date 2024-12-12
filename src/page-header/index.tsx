import React, { useState, useEffect, useRef } from "react";
import { config } from "../web-config";
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
  Pipe,
  MobileMenuContent,
} from "./layout";

interface Props {
  selected?: string | null;
}

export const PageHeader: React.FC<Props> = ({ selected }) => {
  const [menuPressed, setMenuPressed] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    
      setMenuPressed(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
  
    if (menuPressed) {
      
      timer = setTimeout(() => {
      
        document.addEventListener("click", handleClickOutside);
      }, 0); // Delay activation
    } else {
      
      document.removeEventListener("click", handleClickOutside);
    }
  
    return () => {
      clearTimeout(timer);
      
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuPressed]);

  const toggleMenu = () => {
    
    setMenuPressed((prev) => !prev);
  };

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
            <CompanyLogo />
            <Title>Iterative Solution</Title>
          </LogoAndNameLink>
          <Pipe />
          <LogoAndNameLink href="/">
            <AppLogo />
            <Title>{appTitle}</Title>
          </LogoAndNameLink>
        </LogoSection>

        <DesktopMenuContainer>{listMenu}</DesktopMenuContainer>
        <Icon onClick={toggleMenu} aria-expanded={menuPressed}>
          <CloseIcon $show={menuPressed} />
          <OpenIcon $show={!menuPressed} />
        </Icon>
      </TopBar>
      {menuPressed && (
        <MobileMenuContainer ref={menuRef}>
          <MobileMenuContent>{listMenu}</MobileMenuContent>
        </MobileMenuContainer>
      )}
    </Container>
  );
};

const menus = [
  { link: config.paths.home.path, linkText: "HOME" },
  { link: config.paths.privacy.path, linkText: "PRIVACY POLICY" },
  { link: config.paths.contactUs.path, linkText: "CONTACT US" },
  { link: config.paths.getAppScreen.path, linkText: "GET IT FREE" },
];