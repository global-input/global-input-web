import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import MobileIntegration from './MobileIntegration';





import {MobileAuthenticationAndBeyond}  from '../about-mobile-authentication';
import SupportTool from './SupportTool';

import OfflineEncryptedCommunication from './OfflineEncryptedCommunication';


import UserDataProtection from './UserDataProtection';



import GlobalInputPlatform from './GlobalInputPlatform';
import  GlobalInputJSExtension from './GlobalInputJSExtension';
import WebSocketProxyServer from './WebSocketProxyServer';

import {IntroducingMobileInputAndControl} from '../about-mobile-input-control';

import {SecondScreenExperience} from '../about-second-screen';


import {CopyAndPaste} from '../about-copy-and-paste';
import {PortablePersonalStorage} from '../about-portable-personal-storage';

import {ContentEncryption,ExportEncryptionKeys,ExportAppSettings} from '../about-print-scan-qr-codes';



const items=[MobileIntegration,
  MobileAuthenticationAndBeyond,
  IntroducingMobileInputAndControl,
    SecondScreenExperience,PortablePersonalStorage,CopyAndPaste,


ContentEncryption,ExportEncryptionKeys,ExportAppSettings,
OfflineEncryptedCommunication,
  SupportTool,
  UserDataProtection,
  GlobalInputPlatform, GlobalInputJSExtension,WebSocketProxyServer];




export default props=>(<SideMenuPage Items={items}/>);
