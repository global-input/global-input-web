import { styleMatchingScreenSize } from "../../app-layout/screen-media";

export const styles = {

  footer: {

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
