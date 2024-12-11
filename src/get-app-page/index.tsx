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
  ExtensionIcon,
  AppStoreButton,
  PlayStoreButton,
  WebStoreButton,
  FirefoxButton,
  ModuleIcon,
  JSModuleButton,
  ReactModuleButton,
  WebAppContainer
} from "./layout";
export const GetAppPage: React.FC = () => {
  useConnectToMobile();
  usePageTitle("Global Input App -  Get It Free");

  return (
    <Container>
      <PageHeader selected={config.paths.getAppScreen.path} />
      <Content>
        <Card>
          <AppIcon />
          <CardTitle>Global Input App</CardTitle>
          <CardContent>
          Free and open-source mobile app to seamlessly operate and control multi-device environments.
          </CardContent>
          <WebAppContainer>
            
            <WebAppLink />
            
          </WebAppContainer>
          <CardFooter>
            <AppStoreButton />
            
            <PlayStoreButton />
          </CardFooter>
        </Card>
        </Content>
        <Content>
        
        <Card>
          <ModuleIcon />
          <CardTitle>NPM Modules</CardTitle>
          <CardContent>
          JavaScript modules to integrate mobile interoperability into your applications seamlessly.
          </CardContent>
          <CardFooter>
            <JSModuleButton />
            <ReactModuleButton />
          </CardFooter>
        </Card>
        <Card>
          <ExtensionIcon />
          <CardTitle>Browser Extensions</CardTitle>
          <CardContent>
          Install the extension to securely interact with desktop browsers using your phone.
          </CardContent>
          <CardFooter>
            <WebStoreButton />
            <FirefoxButton />
          </CardFooter>
        </Card>
      </Content>

      <PageFooter />
    </Container>
  );
};
