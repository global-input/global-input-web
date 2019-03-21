import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';

import ChromeExtensionHelp from './ChromeExtensionHelp';
import SignInAcrossMultipleDevices from './SignInAcrossMultipleDevices';
import SupportToolForCreatingAccount from './SupportToolForCreatingAccount';
import SupportToolForSharingAccounts from './SupportToolForSharingAccounts';
import OfflineEncryptedCommunication from './OfflineEncryptedCommunication';
import ContentTransferBetweenCompters from './ContentTransferBetweenCompters';

import UserDataProtection from './UserDataProtection';

import MobileInputAndControl from './MobileInputAndControl';
import SecondScreenExperience from './SecondScreenExperience';
import GlobalInputPlatform from './GlobalInputPlatform';
import  GlobalInputJSExtension from './GlobalInputJSExtension';
import WebSocketProxyServer from './WebSocketProxyServer';
const items=[ChromeExtensionHelp,SignInAcrossMultipleDevices,SupportToolForCreatingAccount,SupportToolForSharingAccounts,
  OfflineEncryptedCommunication,ContentTransferBetweenCompters,UserDataProtection,MobileInputAndControl,SecondScreenExperience,
  GlobalInputPlatform, GlobalInputJSExtension,WebSocketProxyServer];

export default props=>(<SideMenuPage Items={items}/>);
