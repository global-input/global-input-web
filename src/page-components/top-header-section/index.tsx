
import React from 'react';


import { TopMenu } from "../../components";
import { config } from "../../configs";
import { images } from './styles';
const textContent = {
  title: "Global Input App",
  companyTitle: "Iterative Solution Limited"
}
var menus = [{
  link: config.paths.home.path,
  linkText: "HOME"
}, {
  link: config.paths.privacy.path,
  linkText: "PRIVACY POLICY"
}, {
  link: config.paths.contactUs.path,
  linkText: "CONTACT US"
}, {
  link: config.paths.getAppScreen.path,
  linkText: "GET IT FREE"
}];

const getWebSiteConfig = () => {
  if (config.id === 'iterative') {
    return {
      webSiteTitle: textContent.companyTitle,
      websiteIcon: images.companyIcon
    };
  }
  return {
    webSiteTitle: textContent.title,
    websiteIcon: images.appIcon
  };
}

const { webSiteTitle, websiteIcon } = getWebSiteConfig();


interface Props {
  selected?: string | null;
}
const TopHeaderSection: React.FC<Props> = ({ selected }) => {
  const matched = menus.filter(m => m.link === selected);

  const first = matched.length ? matched[0] : null;

  return (<TopMenu appTitle={webSiteTitle}
    menus={menus}
    selected={first} appLogo={websiteIcon} />)
};

export default TopHeaderSection;