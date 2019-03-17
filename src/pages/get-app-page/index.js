import React from 'react';


import BlueBackground from "../../page-components/themes/blue-background";



import {PageTitleSection} from '../../page-components/text-title-sections';
import {externalsLinks,pagesLinks} from '../../links-components';

import ButtonsContainer from '../../page-components/buttons-container';


const {Title,P,Page}=BlueBackground;

const {DownloadGIAButtons} =externalsLinks;

const {MobileAuthentication}=pagesLinks.buttons;


export default class GetAppPage extends React.Component{

  render(){
      return(
        <Page>
                <PageTitleSection title="1. Get GIA App Free"
                                    subtitle="Install this open-source mobile app for free on App Store or Play Store.">
                        <DownloadGIAButtons/>

                </PageTitleSection>

                <PageTitleSection title="2. Try Authentication"
                                    subtitle="You may try out the mobile authentication">
                        <ButtonsContainer>
                          <MobileAuthentication>Mobile Authentication</MobileAuthentication>
                        </ButtonsContainer>


                </PageTitleSection>



        </Page>
      )

  }

}
