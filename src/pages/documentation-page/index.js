import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import MobileIntegration from './MobileIntegration';

import PortableEncryptedStorage from './PortableEncryptedStorage';


import MobileAuthentication from './MobileAuthentication';
import {MobileAuthenticationAndBeyond}  from '../about-mobile-authentication';
import SupportTool from './SupportTool';

import OfflineEncryptedCommunication from './OfflineEncryptedCommunication';


import UserDataProtection from './UserDataProtection';



import GlobalInputPlatform from './GlobalInputPlatform';
import  GlobalInputJSExtension from './GlobalInputJSExtension';
import WebSocketProxyServer from './WebSocketProxyServer';

import {IntroducingMobileInputAndControl} from '../about-mobile-input-control';

import {SecondScreenExperience} from '../about-second-screen';

import {MobileTransferFormData} from '../about-secure-content-transfer';
import {CopyAndPaste} from '../about-copy-and-paste';
import {MobileFormAutomation} from '../about-form-operation';

import {ContentEncryption,ExportEncryptionKeys,ExportAppSettings} from '../about-print-scan-qr-codes';



const items=[MobileIntegration,PortableEncryptedStorage,
  MobileAuthenticationAndBeyond,
  IntroducingMobileInputAndControl,
    SecondScreenExperience,MobileTransferFormData,CopyAndPaste,
    MobileFormAutomation,

ContentEncryption,ExportEncryptionKeys,ExportAppSettings,
OfflineEncryptedCommunication,
  SupportTool,
  UserDataProtection,
  GlobalInputPlatform, GlobalInputJSExtension,WebSocketProxyServer];




export default props=>(<SideMenuPage Items={items}/>);
