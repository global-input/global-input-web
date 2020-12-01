import { styleMatchingScreenSize } from "../../app-layout/screen-media";
export const images = {
  footerBackground: require("./images/footer-background.svg"),
  footerBackground2: require("./images/footer-background2.svg"),
}

export const styles = {
  container: {
    paddingTop: 100,
    backgroundImage: "url(" + images.footerBackground2 + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    width: "100%",
    minHeight: 400,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  footer: {
    container: {
      flex: 1,
      backgroundImage: "url(" + images.footerBackground + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width: "100%",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 20,

    },
    content: {
      get: styleMatchingScreenSize,
      default: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF", //#4880ED
        paddingTop: 20,
        paddingBottom: 20,
        width: "95%",

      },
      bigScreen: {
        width: 1200
      },
      screen1245: {
        width: 1000
      },
      narrowMobile: {
        fontSize: 12
      },
      mobile: {
        fontSize: 14
      }

    },
    items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    item: {
      get: styleMatchingScreenSize,
      default: {
        paddingLeft: 10,
        width: 250,
        borderRight: "1px solid white",
        paddingBottom: 10,

      },
      mobile: {
        width: 190,
      },
      narrowMobile: {
        width: 150,
        paddingLeft: 5,
      }


    },
    lastItem: {
      get: styleMatchingScreenSize,
      default: {
        width: 250,
        paddingLeft: 5,
      },
      mobile: {
        width: 180,
      },
      narrowMobile: {
        width: 150,

      }

    },
    link: {
      color: "#FFFFFF"
    }


  }




}
