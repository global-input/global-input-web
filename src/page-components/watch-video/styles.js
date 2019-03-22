import {styleMatchingScreenSize} from "../../components/screen-media";
export const images={
    watchVideoIcon:require("./images/watch-video.svg"),
}

export const styles={

  watchVideo:{
    get:styleMatchingScreenSize,
    default:{
      marginTop:12,
      marginBottom:20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-start"
    },
    mobile:{
      justifyContent:"center"
    }

  }



}
