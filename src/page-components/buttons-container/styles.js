import { styleMatchingScreenSize } from "../../app-layout/screen-media";

export var styles = {

  buttonsContainer: {
    default: {
      paddingBottom: 10,

      display: "flex",
      flexDirection: "row",
      marginTop: 5,
      marginLeft: 50,
    },
    smallScreen: {

    },
    mobile: {

      flexDirection: "column",
      justifyContent: "space-between",
      width: "80%",
      minheight: 130,
    },
    bigScreen: {

    },
    get: styleMatchingScreenSize
  },

};
