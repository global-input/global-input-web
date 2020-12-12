import React from 'react';
import * as theme from '../page-components/themes/light-blue-background';

import ContentEncryption from './ContentEncryption';



import { useMobile } from '../mobile-ui/aboutEncryption';
import { usePageTitle } from '../page-metadata';
import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container, Content} from './layout';


const AboutContentEncryption = () => {
  const MobileConnect = useMobile();

  usePageTitle('Mobile Encryption');
  return (
    <Container>
      <PageHeader selected={config.paths.aboutContentEncryption.path} />
      <Content>

      <ContentEncryption theme={theme} />
      <MobileConnect />
      </Content>
      <PageFooter />
    </Container>
  );
};
export default AboutContentEncryption;
