import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import MobileIntegration from './MobileIntegration';





import {MobileAuthenticationAndBeyond}  from '../about-mobile-authentication';
import SupportTool from './SupportTool';




import UserDataProtection from './UserDataProtection';



import GlobalInputPlatform from './GlobalInputPlatform';
import  GlobalInputJSExtension from './GlobalInputJSExtension';
import WebSocketProxyServer from './WebSocketProxyServer';

import {IntroducingMobileInputAndControl} from '../about-mobile-input-control';

import {SecondScreenExperience} from '../about-second-screen';


import {MobileTools} from '../about-mobile-tools';
import {PortablePersonalStorage} from '../about-portable-personal-storage';

import {ContentEncryption} from '../about-content-encryption';



const items=[MobileIntegration,
  MobileAuthenticationAndBeyond,
  IntroducingMobileInputAndControl,
    SecondScreenExperience,PortablePersonalStorage,
    ContentEncryption,
    MobileTools,




  SupportTool,
  UserDataProtection,
  GlobalInputPlatform, GlobalInputJSExtension,WebSocketProxyServer];




export default props=>(<SideMenuPage Items={items}/>);
