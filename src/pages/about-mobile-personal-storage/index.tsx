import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../../page-metadata';
import * as mobile from '../../mobile';
import * as mobileUI from '../../mobile-ui';

const AboutMobilePersonalStorage = () => {

        usePageTitle('Mobile Personal Storage');

        return (
                <theme.Page>
                        <mobile.MobileConnect initData={mobileUI.aboutStorage.initData} onFieldChange={mobileUI.aboutStorage.onFieldChange} />
                        <MobilePersonalStorage theme={theme} />
                </theme.Page>

        )
};


export default AboutMobilePersonalStorage;
