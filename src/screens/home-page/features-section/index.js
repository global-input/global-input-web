import React from 'react';
import {styles} from './styles';
import FeatureCard from './feature-card';
import examples from '../../examples';
import screens from '../../../screens';

const textContent={
      secondScreenInput:{
            title:"Second Screen Input & Control",
            content:"Enable big screen device applications to have second screen experience, mobile input & control without developing separate mobile app."
      },

      mobileControl:{
            title:"Mobile Input & Control",
            content:"Enable IoT and web applications to have mobile input and control functionality without the need to develop separate mobile app."
      },
      formoperation:{
            title:"Form Automations",
            content:"Automate form operations using the data stored in the encrypted data storage provided by Global Input App. Allowing users have complete control over their personal data."
      },
      secureTransfer:{
            title:"Secure Transfer Form Data",
            content:"This end-to-end security solution ensures the confidential information will not be compromised during the entire process.Transfers form data securely to your users’ mobile for editing collaboratively."
      },
      copyAndPaste:{
            title:"Copy And Paste Securely Across Devices",
            content:"Copy and paste securely a text content from your mobile to any computer or vice versa.Transfer content between applications using end-to-end encryption."
      },
      printQRCodes:{
            title:"Mobile Content Encryption",
            content:"Encrypting content within the mobile device and push the encrypted content to applications. Encryption keys stays encrypted within the mobile device."
      }
}
export default class FeaturesSection extends React.Component{

    render(){
      return(
            <div style={styles.container}>
                <div style={styles.title}>Try Our Features</div>
                <div style={styles.row.get()}>
                  <FeatureCard title={textContent.secondScreenInput.title} content={textContent.secondScreenInput.content}
                    tryItNow={examples.renderMediaPlayerExampleLink}
                    readMore={screens.readMore.secondScreen}/>
                  <FeatureCard title={textContent.mobileControl.title} content={textContent.mobileControl.content}
                    tryItNow={examples.renderGameControlExampleLink}
                    readMore={screens.readMore.mobileControl}/>
                </div>

                <div style={styles.row.get()}>
                  <FeatureCard title={textContent.formoperation.title} content={textContent.formoperation.content}
                    tryItNow={examples.renderSendMessageScreen}
                    readMore={screens.readMore.formOperation}/>

                <FeatureCard title={textContent.secureTransfer.title} content={textContent.secureTransfer.content}
                    tryItNow={examples.renderTransferFormDataExampleLink}
                    readMore={screens.readMore.secureTransferFormData}/>
                </div>


                <div style={styles.row.get()}>
                  <FeatureCard title={textContent.copyAndPaste.title} content={textContent.copyAndPaste.content}
                    tryItNow={examples.renderContentTransferScreen}
                    readMore={screens.readMore.copyAndPaset}/>
                  <FeatureCard title={textContent.printQRCodes.title} content={textContent.printQRCodes.content}
                    tryItNow={examples.renderQRPrintingScreen}
                    readMore={screens.readMore.printScanQRCodes}/>
                </div>

            </div>
      );

    }

}
