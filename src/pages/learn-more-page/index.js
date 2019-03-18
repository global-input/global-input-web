import React from 'react';
import LighBlueBackground from '../../page-components/themes/ligh-blue-background';



import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../page-components/top-header-section";


import SideMenu from  "../../components/side-menu";

import ClientSideOnlySolution from './ClientSideOnlySolution';
import DeviceToDeviceCommunication from './DeviceToDeviceCommunication';
import PortableEncryptedStorage from './PortableEncryptedStorage';

import WatchIntroduction from "./watch-introduction";


const sideMenus=[ClientSideOnlySolution.menu, DeviceToDeviceCommunication.menu,
  PortableEncryptedStorage.menu];

export default class LearnMorePage extends React.Component{


  constructor(props){
    super(props);
    this.onWindowResize=this.onWindowResize.bind(this);
  }
   componentDidMount() {
       window.addEventListener("resize", this.onWindowResize);

   }


   componentWillUnmount() {
       window.removeEventListener("resize", this.onWindowResize);
   }
   onWindowResize(){
      this.forceUpdate();
   }

  render(){
      return(
        <LighBlueBackground.Page>

            
            <SideMenu menus={sideMenus}>
              <div style={styles.scrollContent}>
                  <WatchIntroduction/>
                  <ClientSideOnlySolution/>
                  <DeviceToDeviceCommunication/>
                  <PortableEncryptedStorage/>
              </div>
            </SideMenu>
        </LighBlueBackground.Page>
      )

  }


}
