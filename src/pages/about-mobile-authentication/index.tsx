import React from 'react';
import { Page, Items, Item } from './layout';
import { config } from '../../configs';



import { useMobile } from '../../mobile-ui/aboutAuthentication';
import { usePageTitle } from '../../page-metadata';



import oneClickSignIn from './images/one-click-sign-in.png';
import tick from './images/tick.png';

const oneClickSignInImage = {
  src: oneClickSignIn,
  alt: 'One Click Sign In',
  width: 403,
  height: 477
};

const tickImage = {
  src: tick,
  alt: 'tick',
  width: 30,
  height: 30
}
const title = "Use Mobile for Subscription, Signing in and Beyond";

export const AboutMobileAuthentication: React.FC = () => {
  usePageTitle('Mobile Authentication');
  const MobileConnect = useMobile();

  return (
    <Page selected={config.paths.mobileAuthentication.path} title={title}
      image={oneClickSignInImage}>

      <Items>
        <Item image={tickImage}>Enhancing the security of the existing password-based authentications — No Architectural changes required </Item>
        <Item image={tickImage}>Randomising passwords or using key-based authentications.</Item>
        <Item image={tickImage}>Securing data transfer between mobile and applications with the end-to-end encryption.</Item>
        <Item image={tickImage}>Users manage their own data on their own mobile device.</Item>
        <Item image={tickImage}>One-click subscription</Item>
        <Item image={tickImage}>One-click sign In</Item>
        <Item image={tickImage}>Secure mobile operation on devices</Item>
      </Items>
      <MobileConnect />

    </Page >
  )
};
