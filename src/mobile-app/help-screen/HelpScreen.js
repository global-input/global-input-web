import React from 'react';

import {styles} from './styles';
import menusConfig from '../configs/menusConfig';
import ViewWithTabMenu from '../components/menu/ViewWithTabMenu';

const HelpScreen = ({menuItems}) => {
  // Open the privacy policy URL safely
  
  return (
    <ViewWithTabMenu
      title={'Global Input App'}
      menuItems={menuItems}
      selected={menusConfig.help.menu}>
      <div style={styles.content}>
        <div style={styles.title}>Help & Support</div>
        <div style={styles.description}>
          This app allows you to store and manage confidential information on
          your mobile and use it to interact with various devices around you,
          leading to an array of useful features. When you are using computers,
          IoT devices, self-service machines, cloud services, or accessing
          company or public facilities, you can use your mobile to identify
          yourself, and then operate on them using your mobile.
        </div>
        <div style={styles.description}>
          You can see it in action by loading our product website{' '}
          https://globalinput.co.uk/ on a
          computer.
        </div>
        <div style={styles.description}>
          For more information on how we handle your data, please read our 
          <a href="https://globalinput.co.uk/global-input-app/privacy"         
            style={styles.linkContainer}>
            <span style={styles.link}> Privacy Policy</span>
          </a>
          .
        </div>
      </div>
    </ViewWithTabMenu>
  );
};

export default HelpScreen;
