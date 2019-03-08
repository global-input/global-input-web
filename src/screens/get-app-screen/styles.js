import {styleMatchingScreenSize} from "../../utils/screenMedia";
export const images={
    headerBackground:require("./top-background.svg"),
    rightposter:require("./global-input-app.png"),
    appStore:require("./app-store.png"),
    playStore:require("./play-store.png"),
}

export const styles={

  content:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",
      backgroundImage: "url("+images.headerBackground+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight:window.innerHeight,
      color:"#5291CD"
  },


  rightImage:{
     default:{
            position:"absolute",
            top:100,
            paddingRight:50,
            maxWidth: "60%",
            marginRight:10,

          },

        desktop:{
                 right:0,
                 maxWidth: "55%",
                 marginRight:10,
               },
          mobile:{
            position:"static",
            maxWidth: "100%",
            marginTop:30,
            paddingLeft:20
          },
          get:styleMatchingScreenSize
  },

  title:{
         default:{
            fontSize:"3vw",
            color:"white",
            paddingLeft:"7vw",
         },
         mobile:{

         },
         get:styleMatchingScreenSize
  },
  smallp:{
         default:{
            fontSize:"16",
            color:"white",
            width:"40vw",
            paddingLeft:20,
         },
         mobile:{
            width:"100%",
         },
         get:styleMatchingScreenSize
  },

  description:{
    default:{
       paddingLeft:"7vw",
       width:"42vw",
       marginTop:10,
       minHeight:50
    },
    mobile:{
      fontSize:"6vw",

    },
    get:styleMatchingScreenSize
  },
  textContent:{
    paddingTop:150,
    width:"100%",
  },
  appStoreImage:{
    marginLeft:20,
    marginTop:20,
  },
  appStoreLink:{



  },
  nextLinkContainer:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"flex-start",
     marginTop:20,
     marginLeft:50
  },

  nextContainer:{
      marginTop:100,
      marginLeft:20
  },
  subtitle:{
         default:{
            fontSize:30,
            color:"white",
            width:"40vw",
            paddingLeft:20,
         },
         mobile:{
            width:"100%",
         },
         get:styleMatchingScreenSize
  },



}
