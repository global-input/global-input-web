import React from 'react';

import * as theme from '../../page-components/themes/light-blue-background';

import MobilePersonalStorage from './MobilePersonalStorage';

import RenderPageMetadata from "../RenderPageMetadata";
import { useMobile } from '../../mobile';
export default () => {
        const initData = {
                form: {
                        title: "About Mobile Secure Storage",
                        fields: []
                }
        };
        const mobile = useMobile(initData);
        mobile.setOnFieldChange((field) => { });

        return (
                <theme.Page>
                        <MobilePersonalStorage theme={theme} />
                        <RenderPageMetadata title="Mobile Personal Storage" />
                </theme.Page>

        )
};


export { MobilePersonalStorage };
