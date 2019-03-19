import React from 'react';
import SideMenuPage from '../../page-components/themes/side-menu-page';



import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../page-components/top-header-section";




import ClientSideOnlySolution from './ClientSideOnlySolution';
import DeviceToDeviceCommunication from './DeviceToDeviceCommunication';
import PortableEncryptedStorage from './PortableEncryptedStorage';

import WatchIntroduction from "./watch-introduction";


const Items=[ClientSideOnlySolution];

export default props=>(<SideMenuPage Items={Items}/>);
