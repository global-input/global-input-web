import React from 'react';
import { config } from '../../configs';
import { WhiteRoundButton, ImageButton, TransparentButton } from '../../page-components/round-buttons';

const images = {
  chrome: require("./images/web-store.png"),
  firefox: require("./images/firefox-addons.png"),
  payIcon: require("./images/play.svg"),
  wordpress: require("./images/wordpress.png"),
  watchIntroVideo: require("./images/watch-intro-video.svg"),
  watchDemoVideo: require("./images/watch-demo.svg"),

}
export const externalsLinks = {


  JSExtension: props => {
    const { A } = props.theme;
    return (<A href={config.links.jsExtension.url}>{props.children}</A>);
  },
  ReactJSExtension: props => {
    const { A } = props.theme;
    return (<A href={config.links.reactJSExtension.url}>{props.children}</A>);
  },
  ReactJSFiddle: props => {
    const { A } = props.theme;
    return (<A href="https://jsfiddle.net/dilshat/3crLw63v/">{props.children}</A>);
  },

  SupportedWebsites: props => {
    const { A } = props.theme;
    return (<A href={config.links.chromeExtension.websites}>{props.children}</A>);
  },
  listForWatchVideos: [{ href: config.links.authenticationDemo.url, linkText: "Watch Demo Video" }, { href: config.links.tutorialP1.url, linkText: "Watch Tutorial Video" }],
  WatchAuthenticationVideos: props => {
    const { ListLinks } = props.theme;
    return (<ListLinks items={externalsLinks.listForWatchVideos} />);
  },
  AuthenticationDemoVideo: props => {
    const { A } = props.theme;
    return (<A href={config.links.authenticationDemo.url}>{props.children}</A>);
  },
  WordPressPlugin: props => {
    const { A } = props.theme;
    return (<A href={config.links.wordpressPlugin.url}>{props.children}</A>);
  },



};

export const examplesLinks = {
  TransferFormData: props => {
    const { Link } = props.theme;
    return (<Link to={config.paths.examples.transferForm.path}>{props.children}</Link>);
  },
  ContentTransfer: props => {
    const { Link } = props.theme;
    return (<Link to={config.paths.examples.contentTransfer.path}>{props.children}</Link>);
  },

  SecondScreen: props => {
    const { Link } = props.theme;
    return (<Link to={config.paths.examples.mediaPlayer.path}>{props.children}</Link>);
  },
  MobileEncryption: props => {
    const { Link } = props.theme;
    return (<Link to={config.paths.examples.mobileEncryption.path}>{props.children}</Link>);
  },
  SendMessageExample: props => {
    const { Link } = props.theme;
    return (<Link to={config.paths.examples.sendMessage.path}>{props.children}</Link>);
  },
  listAllExamples: [
    { path: config.paths.examples.mobileEncryption.path, linkText: "Mobile Encryption Application" },
    { path: config.paths.examples.contentTransfer.path, linkText: "Content Transfer Example" },
    { path: config.paths.examples.transferForm.path, linkText: "Transfer Form Data Example" },
    { path: config.paths.examples.mediaPlayer.path, linkText: "Media Application Example" },
    { path: config.paths.examples.gameControl.path, linkText: "Game Control Example" },
    { path: config.paths.examples.sendMessage.path, linkText: "Send Message Example" }],
  ListAllExamples: props => {
    const { ListLinks } = props.theme;
    return (<ListLinks items={examplesLinks.listAllExamples} />)
  },
};



export const pagesLinks = {
  buttons: {

    FirefoxExtensionButton: props => (<ImageButton image={images.firefox} href={config.links.firefox.url} />),
    LearnMoteWhiteButton: props => (<WhiteRoundButton to={config.paths.learnMore.path}>{props.children}</WhiteRoundButton>),
    GetAppButton: props => (<WhiteRoundButton to={config.paths.getAppScreen.path}>{props.children}</WhiteRoundButton>),
    MobileAuthentication: props => (<WhiteRoundButton to={config.paths.mobileAuthentication.path}>{props.children}</WhiteRoundButton>),


    TransferFormDataButton: props => (<TransparentButton to={config.paths.examples.transferForm.path}>{props.children}</TransparentButton>),
    WordPressButton: props => (<ImageButton image={images.wordpress} href={config.links.wordpressPlugin.url} />),
    MobileGameControlButton: props => (<TransparentButton to={config.paths.examples.gameControl.path}>{props.children}</TransparentButton>),
    SecondScreenButton: props => (<TransparentButton to={config.paths.examples.mediaPlayer.path}>{props.children}</TransparentButton>),
    SendMessageAppButton: props => (<TransparentButton to={config.paths.examples.sendMessage.path}>{props.children}</TransparentButton>),
    MobileEncryptionAppButton: props => (<TransparentButton to={config.paths.examples.mobileEncryption.path}>{props.children}</TransparentButton>),
    CopyContentAppButton: props => (<TransparentButton to={config.paths.examples.contentTransfer.path}>{props.children}</TransparentButton>),
  },
  links: {
    AboutContentEncryption: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.aboutContentEncryption.path}>{props.children}</Link>);
    },
    AboutMobileInputControl: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.mobileControl.path}>{props.children}</Link>);
    },
    AboutMobilePersonalStorage: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.mobilePersonalStorage.path}>{props.children}</Link>);
    },
    AboutMobileAuthentication: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.mobileAuthentication.path}>{props.children}</Link>);
    },
    AboutSecondScreenExperience: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.secondScreen.path}>{props.children}</Link>);
    },
    AboutMobileContentTransfer: props => {
      const { Link } = props.theme;
      return (<Link to={config.paths.mobileContentTransfer.path}>{props.children}</Link>);
    },
  }





};
