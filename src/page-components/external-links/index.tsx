import React from 'react';
import { ImageButton } from '../round-buttons';
import { config } from '../../configs';
import webStoreImage from './images/web-store.png';
import fireFoxAddOn from './images/firefox-addons.png';
import appStore from './images/app-store.png';
import playStore from './images/play-store.png';
import jsModule from './images/js-module.png';
import reactModule from './images/react-module.png';
export const ChromeExtensionButton = () => (
    <ImageButton image={webStoreImage} href={config.links.chromeExtension.url} />
);

export const FirefoxExtensionButton = () => (
    <ImageButton image={fireFoxAddOn} href={config.links.firefox.url} />
);

export const AppStoreButton = () => (
    <ImageButton image={appStore} href={config.links.appdownload.appStore} />
);
export const PlayStoreButton = () => (
    <ImageButton image={playStore} href={config.links.appdownload.playStore} />
);

const globalInputMessageNPM = "https://github.com/global-input/global-input-message";


export const JSModuleButton = () => (
    <ImageButton image={jsModule} href={globalInputMessageNPM} />
);

const globalInputReactNPM = "https://github.com/global-input/global-input-react";

export const ReactModuleButton = () => (
    <ImageButton image={reactModule} href={globalInputReactNPM} />
);
