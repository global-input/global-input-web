import React from 'react';
import styled from 'styled-components';

import TwoButtonsCard from "../../../page-components/two-buttons-card";
import FeaturesContainer from "../feature-container";
import FeatureRow from "../feature-row";






import { config } from '../../../configs';

const textContent = {
      mobileAuthentication: {
            title: "Mobile Authentication",
            content: "A client-side solution for mobile authentication, allowing users to sign in on shared devices in public view without compromising passwords to prying eyes and hidden cameras.",
            buttons: [{ path: config.paths.examples.transferForm.path, label: "TRY NOW" }, { path: config.paths.mobileAuthentication.path, label: "Read More" }]
      },
      secondScreenInput: {
            title: "Second Screen Experience",
            content: "A simple solution for enabling big screen device applications to have second screen experience.",
            buttons: [{ path: config.paths.examples.mediaPlayer.path, label: "TRY NOW" }, { path: config.paths.secondScreen.path, label: "Read More" }]
      },

      mobileControl: {
            title: "Mobile Input & Control",
            content: "Enable web and device applications to have mobile input and control functionality without the need to develop separate mobile apps.",
            buttons: [{ path: config.paths.examples.gameControl.path, label: "TRY NOW" }, { path: config.paths.mobileControl.path, label: "Read More" }]
      },
      mobilePersonalStorage: {
            title: "Mobile Personal Storage",
            content: "Store personal data in mobile devices securely with the ability to push the data on demand to applications. A Solution to allow users to have complete control over their data.",
            buttons: [{ path: config.paths.examples.sendMessage.path, label: "TRY NOW" }, { path: config.paths.mobilePersonalStorage.path, label: "Read More" }]
      },

      mobileContentTransfer: {
            title: "Mobile Content Transfer",
            content: "Transferring content securely across devices without using an intermediate network or cloud drives. Copy and Paste Content securely across devices via the end-to-end encrypted communication.",
            buttons: [{ path: config.paths.examples.contentTransfer.path, label: "TRY NOW" }, { path: config.paths.mobileContentTransfer.path, label: "Read More" }]
      },
      mobileEncryption: {
            title: "Mobile Encryption",
            content: "Use your mobile to encrypt or decrypt content that are stored on cloud, on your computer or on other devices. You encryption keys will never leave your mobile device.",
            buttons: [{ path: config.paths.examples.mobileEncryption.path, label: "TRY NOW" }, { path: config.paths.aboutContentEncryption.path, label: "Read More" }]
      }
}
interface Props {
      scWidth: number
}
export const FeaturesSection: React.FC<Props> = ({ scWidth }) => (
      <Container>
                  <Title>Examples</Title>
            <FeatureRow>
                  <TwoButtonsCard data={textContent.mobileEncryption} scWidth={scWidth} />
                  <TwoButtonsCard data={textContent.mobileAuthentication} scWidth={scWidth} />
            </FeatureRow>
            <FeatureRow>
                  <TwoButtonsCard data={textContent.secondScreenInput} scWidth={scWidth} />
                  <TwoButtonsCard data={textContent.mobileControl} scWidth={scWidth} />
            </FeatureRow>

            <FeatureRow>
                  <TwoButtonsCard data={textContent.mobilePersonalStorage} scWidth={scWidth} />

                  <TwoButtonsCard data={textContent.mobileContentTransfer} scWidth={scWidth} />
            </FeatureRow>
      </Container>


);

const Container=styled.div`
      color:#5291CD;
      width:100%;
      padding-top:50px;
`;
const Title=styled.div`
display:flex;
flex-direction:row;
justify-content: center;
font-size:40px;
margin-bottom:80px;
`;


const Feature=styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: #5291CD;
      width: 30%;
      position: relative;
      margin-bottom: 120px;

      mobile: {
            width: "100%",
            maxWidth: "90%",
          }
          desktop: {
            width: "45%",
            minHeight: 280,
          },
`

    },

    smallScreen: {
      width: "45%",
    },
    screen1080: {
      width: "40%",
    },
    screen1245: { width: "30%" },




  },