import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';
import examples from '../examples';


export default class PortableEncryptedStorage extends React.Component{

  static menu={
        id:"portableEncryptedStorage",
        label:"Portable Encrypted Storage",
        title:"Portable Encrypted Storage"
  }
  render(){
    return(
      <div style={styles.chapter.container.get()} id={PortableEncryptedStorage.menu.id}>
          <div style={styles.chapter.title.get()}>
                {PortableEncryptedStorage.menu.title}
          </div>
          <div style={styles.chapter.content.get()}>
                <div style={styles.chapter.paragraph}>
              Global Input App provides applications with encrypted storage on user mobiles. The data are encrypted with encryption keys that are in turn encrypted with a <b>master encryption key</b> generated from the user app password. In this encryption keys hierarchy, sits on the top is the app user password, which is <b>not stored anywhere</b>. Hence, on the start of each session, the user has to provide the password, which is used for encrypting/decrypting the encryption keys. The encryption keys, in turn, are used for encrypting/decrypting the data stored in the encrypted storage.
              </div>
              <div style={styles.chapter.paragraph}>
                This means that even if somebody has physically got hold of the device, and bypassed the device security such as biometric authentication or device password authentication somehow, the data is still secure.
              </div>
              <div style={styles.chapter.paragraph}>
                  Also data will always stay encrypted until to the point of actual use and the decrypted data will be discarded immediately after the use, minimizing the reliance on the system security.
              </div>
              <div style={styles.chapter.paragraph}>
                Confidential data such as user credentials, personal information, user preferences for personalized experiences etc. can be stored in the mobile storage securely. The connected application can send data to the user for storing for later use. When this happens, the user will be presented with an option of saving the data into the storage. Later when the application requires the data, he/she can select and inspect the selected data content and push it to the application on demand.
              </div>


          </div>



      </div>
    );
  }


}
