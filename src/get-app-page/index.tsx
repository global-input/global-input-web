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
          Free, open-source mobile app for secure device control and data management.
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
          <CardTitle>Developer Resources</CardTitle>
          <CardContent>
          Complete toolkit for adding mobile capabilities to your applications.
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
