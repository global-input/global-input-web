import React from 'react';


import BlueBackground from "../../page-components/themes/blue-background";




import {externalsLinks,pagesLinks} from '../../links-components';

import ButtonsContainer from '../../page-components/buttons-container';
import MiddlePageContainer from '../../page-components/section-containers/middle-page-container';
import {PageTitleSection} from '../../page-components/text-title-sections';

import AppLogo from '../../page-components/app-logo';

import {withScrollToTop} from "../../components/screen-media";

const {Title, P, Page}=BlueBackground;

const {DownloadGIAButtons} = externalsLinks;

const {MobileAuthentication}=pagesLinks.buttons;


const GetAppPage=props=>(
        <Page>

                        <MiddlePageContainer>
                            <AppLogo/>
                            <PageTitleSection title="Download Global Input App" subtitle="Open-source mobile app &amp; browser extensions"/>
                            <DownloadGIAButtons/>

                        </MiddlePageContainer>






        </Page>
      );
export default withScrollToTop(GetAppPage,'topContent');
