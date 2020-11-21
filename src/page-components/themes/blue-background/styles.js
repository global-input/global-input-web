import { styleMatchingScreenSize } from "../../../components/screen-media";
export const images = {
  background: require("./images/background.svg"),
  background1245: require("./images/background-1245.svg"),
  backgroundMobile: require("./images/background-mobile.svg"),
}

export const styles = {
  container: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#A9C8E6", //#4880ED
      width: "100%",
      backgroundImage: "url(" + images.background + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight: window.innerHeight,

      color: "white",

    },
    screen1245: {

      backgroundImage: "url(" + images.background1245 + ")",
    },


    mobile: {
      backgroundImage: "url(" + images.backgroundMobile + ")",


    }
  },

  titleCenter: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 40,
  },

  rowColumn: {
    get: styleMatchingScreenSize,
    default: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 50,
      marginBottom: 100,
    },
    mobile: {
      flexDirection: "column",
    }

  },
  card: {
    container: {
      get: styleMatchingScreenSize,
      default: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        minHeight: 300,
        borderRadius: 5,
        paddingBottom: 20,
        marginBottom: 20,
        paddingTop: 70
      },
    },
    title: {
      get: styleMatchingScreenSize,
      default: {
        fontSize: 40,
        marginTop: 20,
        display: "block",

        marginBottom: 50
      },
      mobile: {
        fontSize: 25,
      }
    },
    paragraph: {
      get: styleMatchingScreenSize,
      default: {
        fontSize: 18,
        display: "block",
        marginBottom: 30
      },
      mobile: {
        fontSize: 16,
      }
    },
    link: {
      fontWeight: 50,
      color: "#6666ff"
    },
    item: {
      marginBottom: 10
    },
    code: {
      border: "2px dashed #888888",
      padding: 10
    },
    concept: {

      borderBottomStyle: "dotted",
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
  },
  pageContainer: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: 900,
      padding: 20,

    }
  },

  footer: {
    container: {
      paddingTop: 100,
      backgroundImage: "url(" + images.footerBackground + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width: "100%",
      minHeight: 300,
      color: "white",
      paddingLeft: 50,
      paddingBottom: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"

    },
    content: {
      get: styleMatchingScreenSize,
      default: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        color: "#FFFFFF", //#4880ED
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20

      },
      bigScreen: {
        width: 1200
      },
      screen1245: {
        width: 1000
      },
      desktop: {
        width: "90%"
      }
    },
    items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    item: {
      paddingLeft: 20,
      width: 250,
      borderRight: "2px solid white",
      paddingBottom: 10
    },
    lastItem: {
      paddingLeft: 20,
      width: 250,
    },
    link: {
      fontWeight: 50,
      color: "#FFFFFF"

    }


  }



}
