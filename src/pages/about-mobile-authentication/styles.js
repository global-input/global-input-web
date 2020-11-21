import { styleMatchingScreenSize } from "../../components/screen-media";
export const images = {
  headerBackground: require("./images/top-background.svg"),
  extensionIcon: require("./images/extension.svg"),
  watchVideo: require("./images/watch-video-icon.png"),
  whitePaperIcon: require("./images/white-paper-icon.png"),
  wordpress: require("./images/wordpress.png"),
}

export const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#A9C8E6", //#4880ED
    width: "100%",
    backgroundImage: "url(" + images.headerBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    minHeight: window.innerHeight,

  },

  textContent: {
    paddingTop: 150,
    width: "100%",
  },
  linkText: {
    default: {
      color: "#FFFFFF",
      whiteSpace: "nowrap",
      marginBottom: 20
    },
    hover: {
      color: "#DDDDDD",
      whiteSpace: "nowrap",
      marginBottom: 20
    }
  },
  title: {
    default: {
      fontSize: "3vw",
      color: "white",
      paddingLeft: "7vw",
    },
    mobile: {

    },
    get: styleMatchingScreenSize
  },
  subtitle: {
    default: {
      fontSize: "2vw",
      color: "white",
      paddingLeft: "7vw",
    },
    mobile: {

    },
    get: styleMatchingScreenSize
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 100,
    paddingRight: 20,
    paddingTop: 20,
    fontSize: "1.3vw",
    width: "100%",

  },
  card: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "#FFFFFF",
      width: "90%",
      minHeight: 300,
      paddingBottom: 25,
      borderRadius: 5,
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 5,
      marginBottom: 50
    },
    title: {
      color: "#5291CD", //#4880ED
      fontSize: 30,
    },
    content: {
      color: "#5291CD", //#4880ED
      fontSize: 16,
    },
    paragraph: {
      marginBottom: 10
    },
  },
  cardContainer: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginTop: 100,
      marginBottom: 50
    },
  },
  code: {
    border: "2px dashed #888888",
    padding: 10
  },
  exampleContainer: {

  },


  selected: {
    color: "#002080",
    fontWeight: 500
  },
  hover: {
    color: "#66ccff",
    fontWeight: 300
  }


}
