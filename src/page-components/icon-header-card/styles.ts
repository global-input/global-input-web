
import React from 'react';
import { styleMatchingScreenSize } from "../../app-layout/screen-media";


export const images = {
  arrow: require('./images/arrow.svg')
}
export var styles = {

  card: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "#FFFFFF",
      color: "#5291CD",
      width: 300,
      maxWidth: 370,
      minHeight: 300,

      paddingBottom: 25,
      borderRadius: 5,
      paddingTop: 20,
      position: "relative"
    },
    screen1080: {
      width: 400,
    },
    smallScreen: {
      width: 400,
    },
    desktop: {
      width: 280,
    },

    mobile: {
      width: "90%",
      marginBottom: 50
    },
  },

  icon: {
    container: { width: "100%", marginBottom: 20 },
    img: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }

  },
  title: {
    default: {
      fontSize: 20,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
    desktop: {
      fontSize: 20,

    },
    smallScreen: {
      fontSize: 20,
    },
    mobile: {
      fontSize: 25,
    },
    get: styleMatchingScreenSize
  },
  content: {
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      fontSize: 14,
      width: "100%",
      position: "relative"
    },
    desktop: {
      fontSize: 14,
    },
    smallScreen: {
      fontSize: 14,
    },
    screen1080: {
      fontSize: 14,
    },

    mobile: {
      fontSize: 14,
    },
    get: styleMatchingScreenSize
  },
  line: {
    textAlign: "left",
    width: "100%"
  } as React.CSSProperties,
  footer: {
    text: {
      textAlign: "center",
      width: "100%",
      position: "absolute",
      bottom: 30,
      color: "#A8A8A8"
    } as React.CSSProperties,
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    } as React.CSSProperties

  },

  arrow: {

  }
};
