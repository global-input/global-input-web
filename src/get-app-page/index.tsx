import React from "react";

import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";

import { useConnectToMobile } from "./mobile-ui";
import { config } from "../configs";
import { usePageTitle } from "../page-metadata";
import {
  Container,
  Content,
  Card,
  AppIcon,
  CardTitle,
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
            Get the free and open-source mobile app for operating in
            multi-device environments.
          </CardContent>
          <CardFooter>
            <AppStoreButton />
            <PlayStoreButton />
          </CardFooter>
        </Card>
        <Card>
          <ModuleIcon />
          <CardTitle>NPM Modules</CardTitle>
          <CardContent>
            Use these JavaScript modules to add mobile interoperability to your
            own applications.
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
            Get the extension to interact with your desktop browser on your
            phone.
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
