import React from 'react';

import IconHeaderCard from "../../../page-components/icon-header-card";
import BasicCardsContainer from '../../../page-components/section-containers/bacics-cards-container';
import {config} from '../../../configs';
const images={
  encryption:require('./images/encryption.png'),
  mobilePersonStorage:require('./images/personal-storage.png'),
  mobileContentTransfer:require('./images/transfer.png'),
}


const textContent={
  encryption:{
        title:"Mobile Encryption",
        content:["Applications send content to your mobile device for encryption/decryption, so your encryption keys never leaves your device."],
    },
    mobilePersonStorage:{
        title:"Mobile Personal Storage",
        content:["Applications does not have store personal in their databases, because they can request on-demand from the connected mobile app"],
    },
    mobileContentTransfer:{
      title:"Mobile Content Transfer",
      content:["You can transfer content securely from your mobile device over to computers or other smart devices or vise versa"],
    }

}
const CardSection= props =>(
  
          <BasicCardsContainer>
              <IconHeaderCard titleIcon={images.encryption}
                  title={textContent.encryption.title}
                  content={textContent.encryption.content}
                  link={config.paths.aboutContentEncryption.path}
                  />

                  <IconHeaderCard titleIcon={images.mobilePersonStorage}
                      title={textContent.mobilePersonStorage.title}
                      content={textContent.mobilePersonStorage.content}
                      link={config.paths.mobilePersonalStorage.path}
                      />

                      <IconHeaderCard titleIcon={images.mobileContentTransfer}
                          title={textContent.mobileContentTransfer.title}
                          content={textContent.mobileContentTransfer.content}
                          link={config.paths.mobileContentTransfer.path}
                          />
          </BasicCardsContainer>
        );
export default CardSection;
