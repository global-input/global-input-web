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

  cardContainer:{
      get:styleMatchingScreenSize,
      default:{
        marginTop:200,
        marginLeft:100,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
      },
      mobile:{
        flexDirection:"column",
        justifyContent:"flex-start",
      }
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
  card:{
       get:styleMatchingScreenSize,
       default:{
         display:"flex",
         flexDirection:"column",
         justifyContent:"flex-start",
         alignItems:"flex-start",
         backgroundColor:"#FFFFFF",
         minWidth:350,
         minHeight:300,
         paddingBottom:25,
         borderRadius:5,
         paddingTop:80,

       },
       mobile:{
         width:"100%",
         marginBottom:30
       },



  },
  title:{
         default:{
            fontSize:"2vw",
            display:"flex",
            flexDirection:"row",
            width:"100%",
            justifyContent:"center"
         },
         mobile:{
           fontSize:"6vw",
         },
         get:styleMatchingScreenSize
  },
  cardContent:{
    default:{
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20,
      fontSize:"1.3vw",


    },
    mobile:{
       fontSize:"4vw",
    },
    get:styleMatchingScreenSize

  },
  appDownload:{

    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end",
    width:"100%",
  }





}
