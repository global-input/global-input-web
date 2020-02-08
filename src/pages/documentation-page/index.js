import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import MobileIntegration from './MobileIntegration';





import {MobileAuthenticationAndBeyond}  from '../about-mobile-authentication';








import HowItWorks from './HowItWorks';


import {IntroducingMobileInputAndControl} from '../about-mobile-input-control';

import {SecondScreenExperience} from '../about-second-screen';


import {MobileContentTransfer} from '../about-mobile-content-transfer';
import {MobilePersonalStorage} from '../about-mobile-personal-storage';

import {ContentEncryption} from '../about-content-encryption';



const items=[
  MobileIntegration,
  ContentEncryption,
  MobileAuthenticationAndBeyond,
  
  IntroducingMobileInputAndControl,
    SecondScreenExperience,MobilePersonalStorage,
    
    MobileContentTransfer,
    HowItWorks];




export default props=>(<SideMenuPage Items={items}/>);
