import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../../page-metadata';
import { useMobile } from '../../mobile-ui/aboutSecureStorage';

const AboutMobilePersonalStorage = () => {
        const MobileConnect = useMobile();
        usePageTitle('Mobile Personal Storage');

        return (
                <theme.Page>
                        <MobilePersonalStorage theme={theme} />
                        <MobileConnect />
                </theme.Page>

        )
};


export default AboutMobilePersonalStorage;
