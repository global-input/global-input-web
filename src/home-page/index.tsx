import React,{useEffect} from "react";
import { Helmet } from 'react-helmet';
import { config } from "../web-config";
import { PageFooter } from "../page-footer";
import { PageHeader } from "../page-header";
import {
  useConnectToMobile,
  ConnectWindow,
  ConnectButton,
  DisconnectButton,
} from "./mobile-ui";
import { usePageTitle } from "../page-metadata";
import { PosterImage } from "./poster-image";
import { HowItWorks } from "./how-it-works";
import { CardSection } from "./card-section";

import {
  Container,
  Content,
  TitleSection,
  Title,
  Subtitle,
  ButtonContainer,
  LinkButton,
} from "./layout";

const headerTextContent = {
  title: "Mobile Integration",
  subtitle:
    "Use your phone to authenticate, encrypt data, and remotely control applications running on other devices.",
};

interface HomePageProps {
  
}
export const HomePage: React.FC<HomePageProps> = () => {
  const [canonicalPage, setCanonicalPage] = React.useState(false);
  usePageTitle(
    "Global Input App - Introducing Mobile Interoperability into Web and Device Applications"
  );
  const mobile = useConnectToMobile();

  useEffect(()=>{
    
    if(window.location.search){
      setCanonicalPage(true); 
    }
    if(window.location.pathname && window.location.pathname !== "/" && window.location.pathname !== "/index.html"){
      setCanonicalPage(true); 
    }

    if (window.location) {
      const { protocol, hostname } = window.location;
      
      if (protocol === "https:" && hostname === "globalinput.co.uk") {
        return; // Skip setting canonical page if it's already the correct page
      }
    
      console.log("Canonical page is set to true");
      console.log(`Protocol: ${protocol}, Hostname: ${hostname}`);
      setCanonicalPage(true);
    }

  }, []);

  return (
    <>
    {canonicalPage && <Helmet>
      <link rel="canonical" href="https://globalinput.co.uk/" />
      </Helmet>
      }
    <Container>
      <PageHeader selected={config.paths.home.path} />
      <Content>
        <PosterImage />
        <TitleSection>
          <Title>{headerTextContent.title}</Title>
          <Subtitle>{headerTextContent.subtitle}</Subtitle>
          <ButtonContainer>            
            <ConnectButton label="Try Now" mobile={mobile} />
            <ConnectWindow mobile={mobile} />
            <DisconnectButton mobile={mobile} />
          </ButtonContainer>
        </TitleSection>

        <CardSection />

        <HowItWorks />
        
      </Content>
      <PageFooter />
    </Container>
    </>
  );
};


