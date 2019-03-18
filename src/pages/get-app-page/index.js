import React from 'react';


import BlueBackground from "../../page-components/themes/blue-background";




import {externalsLinks,pagesLinks} from '../../links-components';

import ButtonsContainer from '../../page-components/buttons-container';
import MiddlePageContainer from '../../page-components/section-containers/middle-page-container';
import {PageTitleSection} from '../../page-components/text-title-sections';

import AppLogo from '../../page-components/app-logo';
const {Title,P,Page}=BlueBackground;

const {DownloadGIAButtons} =externalsLinks;

const {MobileAuthentication}=pagesLinks.buttons;


export default class GetAppPage extends React.Component{

  render(){
      return(
        <Page>

                        <MiddlePageContainer>
                            <AppLogo/>
                            <PageTitleSection title="Download Global Input App Now !" subtitle="Install this open-source mobile app for free on App Store or Play Store."/>



                        <ButtonsContainer>
                            <DownloadGIAButtons/>
                        </ButtonsContainer>
                        </MiddlePageContainer>






        </Page>
      )

  }

}
