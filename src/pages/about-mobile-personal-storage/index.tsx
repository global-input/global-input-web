import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../../page-metadata';
import { useConnectToMobile } from '../../mobile/use-connect-to-mobile';
import * as mobileUI from '../../mobile-ui';

const AboutMobilePersonalStorage = () => {
        const { DisplayMobileConnect } = useConnectToMobile(mobileUI.aboutStorage.initData, mobileUI.aboutStorage.onFieldChange);
        usePageTitle('Mobile Personal Storage');

        return (
                <theme.Page>
                        <MobilePersonalStorage theme={theme} />
                        <DisplayMobileConnect />
                </theme.Page>

        )
};


export default AboutMobilePersonalStorage;
