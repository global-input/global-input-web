import {styleMatchingScreenSize} from "../../utils/screenMedia";
export const images={
    headerBackground:require("./top-background.svg"),
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
  subtitle:{
         default:{
            fontSize:"2vw",
            color:"white",
            paddingLeft:"7vw",
         },
         mobile:{

         },
         get:styleMatchingScreenSize
  },
  description:{
    default:{
       fontSize:"2vw",
       color:"white",
       paddingLeft:"7vw",
       width:"50%",
       marginTop:10,

    },
    mobile:{
      fontSize:"6vw",

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
         width:"90%",
         minHeight:300,
         paddingBottom:25,
         borderRadius:5,
         paddingTop:20,
         paddingLeft:15,
         paddingRight:5,
         marginBottom:50
       },
       title:{
          color:"#5291CD", //#4880ED
          fontSize:30,
       },
       content:{
         color:"#5291CD", //#4880ED
         fontSize:16,
       },
       paragraph:{
          marginBottom:10
       },
  },
  cardContainer:{
    get:styleMatchingScreenSize,
    default:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
      marginTop:100,
      marginBottom:50
    },
 },
 code:{
   border:"2px dashed #888888",
   padding:10
 },
 exampleContainer:{

 },
 examplelink:{
   get:styleMatchingScreenSize,
   default:{
     float: "left",
     display: "block",
     textAlign: "center",
     textDecoration: "none",
     fontSize: 15,
     borderRadius:25,
     backgroundColor: "#4281BD",
     color:"white",
     whiteSpace:"nowrap",
     fontWeight:300,
     padding:10,
     maxHeight:40,
     marginLeft:20
   },

   selected:{
       color:"#002080",
       fontWeight:500
   },
   hover:{
       color:"#66ccff",
       fontWeight:300
   }
 },






}
