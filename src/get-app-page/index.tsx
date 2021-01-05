import React from 'react';

import {PageHeader} from '../page-header';
import {PageFooter} from '../page-footer';



import { useConnectToMobile } from './mobile-ui';
import { config } from '../configs';
import { usePageTitle } from '../page-metadata';
import {Container,Content,Card,AppIcon,CardTitle,CardContent,CardFooter,
  ExtensionIcon,AppStoreButton,PlayStoreButton, WebStoreButton,FirefoxButton,
  ModuleIcon,JSModuleButton,ReactModuleButton} from './layout';
;

export const GetAppPage: React.FC = () => {

  useConnectToMobile();
  usePageTitle('Global Input App -  Get It Free');

  return (
    <Container>
      <PageHeader selected={config.paths.getAppScreen.path}/>
      <Content>

      <Card>
          <AppIcon/>
          <CardTitle>Global Input App</CardTitle>
          <CardContent>
              Free and open-source mobile app for operating on multi-device environments.
          </CardContent>
          <CardFooter>
                <AppStoreButton/>
                <PlayStoreButton/>
            </CardFooter>
        </Card>
        <Card>
          <ModuleIcon/>
          <CardTitle>NPM Modules</CardTitle>
          <CardContent>
          Modules for enabling applications to have mobile app interoperability.
          </CardContent>
          <CardFooter>
                <JSModuleButton/>
                <ReactModuleButton/>
            </CardFooter>
        </Card>
        <Card>
          <ExtensionIcon/>
          <CardTitle>Browser Extensions</CardTitle>
          <CardContent>
          Browser extensions for using mobiles to operate on the websites loaded on computers.
          </CardContent>
          <CardFooter>
                <WebStoreButton/>
                <FirefoxButton/>
            </CardFooter>
        </Card>



      </Content>

        <PageFooter/>
    </Container>

  )


};
