import React from 'react';
import { ImageButton } from '../round-buttons';
import { config } from '../../configs';
import webStoreImage from './images/web-store.png';
import fireFoxAddOn from './images/firefox-addons.png';


export const ChromeExtensionButton = () => (
    <ImageButton image={webStoreImage} href={config.links.chromeExtension.url} />
);
export const FirefoxExtensionButton = () => (<ImageButton image={fireFoxAddOn} href={config.links.firefox.url} />);
