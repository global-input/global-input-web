import { styleMatchingScreenSize } from "../../../app-layout/screen-media";
const images = {
  simple: {
    background: require("./images/simple/background.svg"),
    mobile: require("./images/simple/background-mobile.svg")
  },
  home: {
    screen1440: require("./images/home/headbackground-1440.svg"),
    screen1080: require("./images/home/headbackground-1080.svg"),
    screen1245: require("./images/home/headbackground-1245.svg"),
    screen800: require("./images/home/headbackground-800.svg"),
    screen600: require("./images/home/headbackground-600.svg"),
    background: require("./images/home/headbackground.svg"),
    backgroundMobile: require("./images/home/headbackground-mobile.svg"),
  }

};
export var styles = {
  headerContainer: {
    get: styleMatchingScreenSize,
    default: {
      backgroundImage: "url(" + images.simple.background + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width: "100%",
      position: "relative",
      top: 49,
    },
    mobile: {
      backgroundImage: "url(" + images.simple.mobile + ")",
    }

  },
  homeHeaderContainer: {
    get: styleMatchingScreenSize,
    default: {
      backgroundImage: "url(" + images.home.screen1440 + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "white", //#4880ED,

    },
    desktop: {
      backgroundImage: "url(" + images.home.screen800 + "), url(" + images.home.screen600 + ")",
      backgroundPosition: "left top, left bottom",
    },
    smallScreen: {
      backgroundImage: "url(" + images.home.screen800 + ")",


    },
    screen1080: {
      backgroundImage: "url(" + images.home.screen800 + ")",
    },
    screen1245: {
      backgroundImage: "url(" + images.home.screen800 + ")",

    },
    bigScreen: {
      backgroundImage: "url(" + images.home.screen1440 + ")",
    },
    mobile: {
      backgroundImage: "url(" + images.home.backgroundMobile + ")"
    }
  },
};
