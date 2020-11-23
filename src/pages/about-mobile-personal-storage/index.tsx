import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../../page-metadata';
import * as mobile from '../../mobile';
const AboutMobilePersonalStorage = () => {

        usePageTitle('Mobile Personal Storage');

        return (
                <theme.Page>
                        <mobile.MobileConnect initData={mobile.aboutStorage.initData} onFieldChange={mobile.aboutStorage.onFieldChange} />
                        <MobilePersonalStorage theme={theme} />
                </theme.Page>

        )
};


export default AboutMobilePersonalStorage;
