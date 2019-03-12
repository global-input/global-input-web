
import {styleMatchingScreenSize} from "../../components/screen-media";
const images={
    screen1440:require("./images/headbackground-1440.svg"),
    screen1080:require("./images/headbackground-1080.svg"),
    screen1245:require("./images/headbackground-1245.svg"),
    screen800:require("./images/headbackground-800.svg"),
    screen600:require("./images/headbackground-600.svg"),
    background:require("./images/headbackground.svg"),
    backgroundMobile:require("./images/headbackground-mobile.svg"),

}
export var styles={

firstHalf:{
    get:styleMatchingScreenSize,
    default:{
      backgroundImage: "url("+images.screen1440+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      backgroundColor:"#A9C8E6", //#4880ED
      backgroundColor:"white", //#4880ED
    },
    desktop:{
      backgroundImage: "url("+images.screen600+")",
      backgroundSize: "auto",
    },
    smallScreen:{
      backgroundImage: "url("+images.screen800+")",

    },
    screen1080:{
      backgroundImage: "url("+images.screen1080+")",
    },
    screen1245:{
      backgroundImage: "url("+images.screen1245+")",
    },
    bigScreen:{
      backgroundImage: "url("+images.screen1440+")"
    },
    mobile:{
      backgroundImage: "url("+images.backgroundMobile+")"
    }


},
  title:{
      color:"white",
      fontSize:"3vw",
      marginLeft:30,
  },

  appContent:{
    fontSize: 17,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "none",
    fontWeight: 300,
    color: "white",
    lineHeight: 1.5
  },
  content:{
    paddingTop:10,
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
    //  backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",

  },

 itemSection:{
    marginTop:20,
    marginBottom:10,
    padding:10,

    backgroundColor:"white",
    width:"95%",
    borderRadius:25,

 },





 installSection:{
   width:"100%",
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
   alignItems:"center",
   paddingBottom:25

 },
 imageLink:{

   textDecoration:"underline",
   marginRight:20,
   marginBottom:10,

 },
 features:{
   container:{
     color:"#5291CD",
     border:"1px solid red",
     width:"100%"
   },
   title:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"center",
     fontSize:40
   }

 }


};
