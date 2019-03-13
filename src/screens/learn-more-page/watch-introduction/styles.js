import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
    videoIcon:require("./images/video-icon.svg"),
}

export const styles={

  video:{
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
