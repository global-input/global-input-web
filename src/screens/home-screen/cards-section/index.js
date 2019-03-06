import React from 'react';
import {styles} from "./styles";
import AuthenticationDeviceSection from "./AuthenticationDeviceCard";
import MobileInputControlSection from "./MobileInputControlCard";
import SecondScreenSection from "./SecondScreenCard";

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
