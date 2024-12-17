import React from "react";

import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile } from "./mobile-ui";
import { config } from "../web-config";
import { usePageTitle } from "../page-metadata";
import {
  Container,
  Content,
  Card,
  AppIcon,
  CardTitle,
  WebAppLink,
  CardContent,
  CardFooter,
  GIAFooter,
  GIACard,
  ExtensionIcon,
  AppStoreButton,
  PlayStoreButton,
  WebStoreButton,
  FirefoxButton,
  ModuleIcon,
  JSModuleButton,
  ReactModuleButton,
  WebAppContainer,
  WebAppContainer2
} from "./layout";
export const GetAppPage: React.FC = () => {
  useConnectToMobile();
  usePageTitle("Global Input App -  Get It Free");

  return (
    <Container>
      <PageHeader selected={config.paths.getAppScreen.path} />
      <Content>
        <GIACard>
          <AppIcon />
          <CardTitle>Global Input App</CardTitle>
          <CardContent>
          Free and open-source mobile app to seamlessly operate and control multi-device environments.
          </CardContent>
          <WebAppContainer>
            
            <WebAppLink />
            
            
            
          </WebAppContainer>
          <GIAFooter>
            <AppStoreButton />
            <WebAppContainer2>
            <WebAppLink />
            </WebAppContainer2>
            
            <PlayStoreButton />
          </GIAFooter>
        </GIACard>
        </Content>
        <Content>
        
        <Card>
          <ExtensionIcon />
          <CardTitle>Extensions</CardTitle>
          <CardContent>
          Explore extension modules and example code for extending applications to achieve mobile interoperability.
          </CardContent>
          <CardFooter>
            <JSModuleButton />
            
            <WebStoreButton />
          </CardFooter>
        </Card>
        
      </Content>

      <PageFooter />
    </Container>
  );
};
