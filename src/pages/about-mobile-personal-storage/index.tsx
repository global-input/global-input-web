import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import RenderPageMetadata from "../RenderPageMetadata";
import { MobileConnect } from '../../mobile';
export default () => {
        const initData = {
                form: {
                        title: "About Mobile Secure Storage",
                        fields: []
                }
        };

        return (
                <theme.Page>
                        <MobileConnect initData={initData} />
                        <MobilePersonalStorage theme={theme} />
                        <RenderPageMetadata title="Mobile Personal Storage" />
                </theme.Page>

        )
};


export { MobilePersonalStorage };
