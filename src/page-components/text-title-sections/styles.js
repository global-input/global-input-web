import {styleMatchingScreenSize} from "../../components/screen-media";

export var styles={

  homeTitleSection:{
      get:styleMatchingScreenSize,
      default:{
              height:530,
              marginTop:"5vw",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"flex-start",
              color:"white",
              width:"100%",
              zIndex:50,
              marginBottom:30,
      },
      desktop:{
        height:330,

      },
      smallScreen:{
        height:530,
      },
      mobile:{
        justifyContent:"flex-start",

        height:"auto",
        marginBottom:50,
      }

  },
  pageTitleSection:{
    container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      color:"white",
      width:"100%",



    },
    title:{
      fontSize:30,
      fontFamily:"Tisa Sans Pro"
    },
    subtitle:{
      fontSize:14,
      fontFamily:"Tisa Sans Pro"
    }

 },


 readMorePage:{
   container:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"center",
     color:"white",
     width:"100%",



   },
   title:{
     fontSize:30,
     fontFamily:"Tisa Sans Pro"
   },
   subtitle:{
     fontSize:14,
     fontFamily:"Tisa Sans Pro"
   }

 },


  title:{
    default:{
      fontSize:40,
      marginLeft:70,
    },
    mobile:{
      fontSize:"8vw",
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:50

    },
    get:styleMatchingScreenSize

  },
  subtitle:{
    default:{
      fontSize:20,
      marginLeft:70,
    },
    mobile:{
      fontSize:"4vw",
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
      marginBottom:20
    },
    get:styleMatchingScreenSize
  },
};
