import {styleMatchingScreenSize} from "../../utils/screenMedia";
export const images={
    headerBackground:require("./images/top-background.svg"),
}

export const styles={
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",
      backgroundImage: "url("+images.headerBackground+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight:window.innerHeight,
      color:"white",
      paddingTop:100
  },

  content:{
    get:styleMatchingScreenSize,
    default:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          width:"80%",
          minHeigth:100,
          position:"relative",
          top:-100,
          maxWidth:830,
          fontSize:16
    },
    screen1080:{
          width:"70%",
    }

  },
  title:{
    fontSize:30
  },
  paragraph:{
      marginTop:50,
  }







}
