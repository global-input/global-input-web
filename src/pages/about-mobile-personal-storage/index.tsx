import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import { usePageTitle } from '../../page-metadata';
import { MobileConnect } from '../../mobile';
export default () => {
        const initData = {
                form: {
                        title: "About Mobile Secure Storage",
                        fields: []
                }
        };
        usePageTitle('Mobile Personal Storage');

        return (
                <theme.Page>
                        <MobileConnect initData={initData} />
                        <MobilePersonalStorage theme={theme} />
                </theme.Page>

        )
};


export { MobilePersonalStorage };
