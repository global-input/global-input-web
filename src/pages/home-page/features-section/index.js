import React from 'react';
import {styles} from './styles';

import TwoButtonsCard from "../../../page-components/two-buttons-card";
import FeaturesContainer from "../../../page-components/section-containers/feature-container";

import FeatureCard from './feature-card';

import examples from '../../examples';
import pages from '../../../pages';
import {config} from '../../../configs';

const textContent={
      secondScreenInput:{
            title:"Second Screen Experience",
            content:"A simple solution for enabling big screen device applications to have second screen experience.",
            buttons:[{path:config.paths.examples.mediaPlayer.path, label:"TRY NOW"},{path:config.paths.secondScreen.path, label:"Read More"}]
      },

      mobileControl:{
            title:"Mobile Input & Control",
            content:"Enable IoT and web applications to have mobile input and control functionality without the need to develop separate mobile app.",
            buttons:[{path:config.paths.examples.gameControl.path, label:"TRY NOW"},{path:config.paths.mobileControl.path, label:"Read More"}]
      },
      formoperation:{
            title:"Mobile Form Automations",
            content:"Automate form operations using the data stored in the encrypted data storage provided by Global Input App. Allowing users have complete control over their personal data.",
            buttons:[{path:config.paths.examples.sendMessage.path, label:"TRY NOW"},{path:config.paths.mobileAuthentication.path, label:"Read More"}]
      },
      secureTransfer:{
            title:"Form Data Sharing & Editing",
            content:"Form Data Sharing and Editing Across Multiple devices. This covers not only mobile authentication, but also covers an useful IT support tool.",
            buttons:[{path:config.paths.examples.transferForm.path, label:"TRY NOW"},{path:config.paths.secureTransfer.path, label:"Read More"}]
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
              <div style={styles.row.get()}>

                <FeatureCard title={textContent.secondScreenInput.title} content={textContent.secondScreenInput.content}
                  tryItNow={examples.renderMediaPlayerExampleLink}
                  readMore={pages.readMore.secondScreen}/>


                <FeatureCard title={textContent.mobileControl.title} content={textContent.mobileControl.content}
                  tryItNow={examples.renderGameControlExampleLink}
                  readMore={pages.readMore.mobileControl}/>
              </div>

              <div style={styles.row.get()}>
                <FeatureCard title={textContent.formoperation.title} content={textContent.formoperation.content}
                  tryItNow={examples.renderSendMessageScreen}
                  readMore={pages.readMore.formOperation}/>

              <FeatureCard title={textContent.secureTransfer.title} content={textContent.secureTransfer.content}
                  tryItNow={examples.renderTransferFormDataExampleLink}
                  readMore={pages.readMore.secureTransferFormData}/>
              </div>


              <div style={styles.row.get()}>
                <FeatureCard title={textContent.copyAndPaste.title} content={textContent.copyAndPaste.content}
                  tryItNow={examples.renderContentTransferScreen}
                  readMore={pages.readMore.copyAndPaset}/>
                <FeatureCard title={textContent.printQRCodes.title} content={textContent.printQRCodes.content}
                  tryItNow={examples.renderQRPrintingScreen}
                  readMore={pages.readMore.printScanQRCodes}/>
              </div>

            </FeaturesContainer>




      );

    }

}
