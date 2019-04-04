import React from 'react';


import TwoButtonsCard from "../../../page-components/two-buttons-card";
import FeaturesContainer from "../../../page-components/section-containers/feature-container";
import FeatureRow from "../../../page-components/section-containers/feature-row";






import {config} from '../../../configs';

const textContent={
      mobileAuthentication:{
        title:"Mobile Authentication",
        content:"A client-side solution for mobile authentication, allowing users to sign in on shared devices in public view without compromising passwords to prying eyes and hidden cameras.",
        buttons:[{path:config.paths.examples.transferForm.path, label:"TRY NOW"},{path:config.paths.mobileAuthentication.path, label:"Read More"}]
      },
      secondScreenInput:{
            title:"Second Screen Experience",
            content:"A simple solution for enabling big screen device applications to have second screen experience.",
            buttons:[{path:config.paths.examples.mediaPlayer.path, label:"TRY NOW"},{path:config.paths.secondScreen.path, label:"Read More"}]
      },

      mobileControl:{
            title:"Mobile Input & Control",
            content:"Enable web and device applications to have mobile input and control functionality without the need to develop separate mobile apps.",
            buttons:[{path:config.paths.examples.gameControl.path, label:"TRY NOW"},{path:config.paths.mobileControl.path, label:"Read More"}]
      },
      portablePersonalStorage:{
            title:"Portable Personal Storage",
            content:"Store personal data in mobile devices securely with the ability to push the data on demand to applications. A Solution to allow users to have complete control over their data.",
            buttons:[{path:config.paths.examples.sendMessage.path, label:"TRY NOW"},{path:config.paths.portablePersonalStorage.path, label:"Read More"}]
      },

      copyAndPaste:{
            title:"Copy And Paste Securely Across Devices",
            content:"Copy and paste securely a text content from your mobile to any computer or vice versa.Transfer content between applications using end-to-end encryption.",
            buttons:[{path:config.paths.examples.contentTransfer.path, label:"TRY NOW"},{path:config.paths.copyAndPaste.path, label:"Read More"}]
      },
      printQRCodes:{
            title:"Mobile Content Encryption",
            content:"Encrypting and signing content within mobile devices and push the encrypted and signed content to applications. Encryption keys stays encrypted within mobile apps.",
            buttons:[{path:config.paths.examples.qrPrinting.path, label:"TRY NOW"},{path:config.paths.printScanQRCodes.path, label:"Read More"}]
      }
}
export default class FeaturesSection extends React.Component{

    render(){
      return(
            <FeaturesContainer title="Try Our Features">
              <FeatureRow>

                <TwoButtonsCard data={textContent.secondScreenInput}/>
                <TwoButtonsCard data={textContent.mobileControl}/>
              </FeatureRow>

              <FeatureRow>
                  <TwoButtonsCard data={textContent.portablePersonalStorage}/>
                  <TwoButtonsCard data={textContent.mobileAuthentication}/>
              </FeatureRow>

              <FeatureRow>
                        <TwoButtonsCard data={textContent.copyAndPaste}/>
                        <TwoButtonsCard data={textContent.printQRCodes}/>
              </FeatureRow>
            </FeaturesContainer>

      );

    }

}
