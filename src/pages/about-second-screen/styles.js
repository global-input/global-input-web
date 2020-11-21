import { styleMatchingScreenSize } from "../../components/screen-media";
export const images = {
  headerBackground: require("./images/top-background.svg"),

  computer: require("./images/computer.png")
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


  tv: {
    container: {
      get: styleMatchingScreenSize,
      default: {
        width: 500,
        height: 250,
        position: "absolute",
        top: 100,
        right: 100,
      },
      smallScreen: {
        right: 0,

      },
      desktop: {
        position: "relative",
        top: 100,
        left: 20
      },


      mobile: {
        position: "relative",
        top: 100,
        left: 20

      }

    },
    inner: {
      display: "static"
    },
    screen: {
      width: 405,
      position: "relative",
      top: 23,
      left: 25
    },
    img: {
      position: "absolute",
      top: 0,
      left: 0,
    },

  },
  textContent: {
    paddingTop: 150,
    width: "100%",
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
  description: {
    default: {
      fontSize: "2vw",
      color: "white",
      paddingLeft: "7vw",
      width: "50%",
      marginTop: 10,

    },
    mobile: {
      fontSize: "6vw",

    },
    get: styleMatchingScreenSize
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
