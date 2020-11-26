import { styleMatchingScreenSize } from "../../app-layout/screen-media";
export var styles = {

  card: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      color: "#5291CD",
      width: "30%",
      position: "relative",
      marginBottom: 120
    },
    desktop: {
      width: "45%",
      minHeight: 280,
    },
    smallScreen: {
      width: "45%",
    },
    screen1080: {
      width: "40%",
    },
    screen1245: { width: "30%" },


    mobile: {
      width: "100%",
      maxWidth: "90%",
    }

  },
  title: {

    fontSize: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  content: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 10,
      fontSize: 14,
      width: "100%",
      minHeight: 80
    },
    desktop: {

    },
    smallScreen: {

    },
    screen1080: {

    },
    screen1245: {

    },
    bigScreen: {
      minHeight: 30
    }



  },

  footer: {
    get: styleMatchingScreenSize,
    default: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 20,
    },

  },

};
