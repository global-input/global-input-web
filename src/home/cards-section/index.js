import React from 'react';
import {styles} from "./styles";
import AuthenticationDeviceSection from "./authentication-device";
import MobileInputControlSection from "./mobile-input-control";
import SecondScreenSection from "./second-screen";

export default class CardSection extends React.Component{

    render(){
      return(
            <div style={styles.cardContainer.get()}>              
              <AuthenticationDeviceSection/>
              <MobileInputControlSection/>
              <SecondScreenSection/>
            </div>
      );

    }

}
