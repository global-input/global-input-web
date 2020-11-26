import { styleMatchingScreenSize } from "../../../app-layout/screen-media";
export const styles = {
  cardContainer: {
    get: styleMatchingScreenSize,
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      marginBottom: 50,
    },
    desktop: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    }

  },
};
