import {styleMatchingScreenSize} from "../../../../utils/screenMedia";
export var styles={

 card:{
   get:styleMatchingScreenSize,
   default:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"flex-start",
     color:"#5291CD",
     width:"30%",
     maxWidth:400,
     minHeight:200,
     position:"relative",
   },
   mobile:{
     width:"100%",
     maxWidth:"90%",
   }

 },
 title:{

           fontSize:20,
           display:"flex",
           flexDirection:"row",
           width:"100%",
           justifyContent:"flex-start",
 },
 content:{

     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"center",

     paddingTop:10,
     fontSize:14,
     width:"100%",
     position:"relative"

 },
 line:{
   textAlign:"center",
   width:"100%"
 },
 footer:{
    textAlign:"center",
    width:"100%",

    position:"absolute",
    bottom:30,
    color:"#A8A8A8"
 },

};
