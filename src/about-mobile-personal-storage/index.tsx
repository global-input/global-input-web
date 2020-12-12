import React from 'react';

import * as theme from '../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../page-metadata';
import { useMobile } from '../mobile-ui/aboutSecureStorage';

import { config } from '../configs';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container, Content} from './layout';



const AboutMobilePersonalStorage = () => {
        const MobileConnect = useMobile();
        usePageTitle('Mobile Personal Storage');

        return (
<Container>
      <PageHeader selected={config.paths.mobilePersonalStorage.path} />
      <Content>
                        <MobilePersonalStorage theme={theme} />
                        <MobileConnect />
      </Content>
      <PageFooter />
</Container>

        )
};


export default AboutMobilePersonalStorage;
