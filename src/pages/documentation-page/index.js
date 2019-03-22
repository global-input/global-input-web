import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import ClientSideOnlySolution from './ClientSideOnlySolution';
import DeviceToDeviceCommunication from './DeviceToDeviceCommunication';
import PortableEncryptedStorage from './PortableEncryptedStorage';


import ChromeExtensionHelp from './ChromeExtensionHelp';
import SignInAcrossMultipleDevices from './SignInAcrossMultipleDevices';
import SupportToolForCreatingAccount from './SupportToolForCreatingAccount';
import SupportToolForSharingAccounts from './SupportToolForSharingAccounts';
import OfflineEncryptedCommunication from './OfflineEncryptedCommunication';
import ContentTransferBetweenCompters from './ContentTransferBetweenCompters';

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

const items=[ClientSideOnlySolution,DeviceToDeviceCommunication,PortableEncryptedStorage,
  ChromeExtensionHelp,SignInAcrossMultipleDevices,
  IntroducingMobileInputAndControl,
    SecondScreenExperience,MobileTransferFormData,CopyAndPaste,
    MobileFormAutomation,

ContentEncryption,ExportEncryptionKeys,ExportAppSettings,
  SupportToolForCreatingAccount,SupportToolForSharingAccounts,
  OfflineEncryptedCommunication,ContentTransferBetweenCompters,UserDataProtection,
  GlobalInputPlatform, GlobalInputJSExtension,WebSocketProxyServer];




export default props=>(<SideMenuPage Items={items}/>);
