
import {styleMatchingScreenSize} from "../../styles";



export var styles={
  cardContainer:{
    get:styleMatchingScreenSize,
    default:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      width:"100%",
    },
    mobile:{
      flexDirection:"column",
      justifyContent:"flex-start",
    }
 },
 card:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        backgroundColor:"#FFFFFF",
        width:"30%",
        minHeight:300,
        paddingBottom:25,
        borderRadius:25,
        paddingTop:30
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
 content:{
   default:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"flex-start",
     paddingLeft:20,
     paddingRight:20,
     paddingTop:20,
     fontSize:"1.3vw",
     width:"100%",

   },
   mobile:{
      fontSize:"4vw",
   },
   get:styleMatchingScreenSize

 },
 description:{
    marginBottom:10,
    color:"#888888"
 },
 iconStyle:{
   marginRight: 10
 },
 linkText:{
     default:{
         color:"#888888",
         width:"100%",
         whiteSpace:"nowrap",
     },
     hover:{
       color:"blue",
       boxShadow:"0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
       whiteSpace:"nowrap",
       width:"100%"
     }
 }



};
export var images={
    watchVideo:require('./images/watch-video-icon.png'),
    paper:require('./images/paper.png'),
    extension:require('./images/extension-icon.png'),
    demo:require('./images/demo-icon.png'),
}
