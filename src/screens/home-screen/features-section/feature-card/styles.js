import {styleMatchingScreenSize} from "../../../../components/screen-media";
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
     minHeight:200,
     position:"relative",

   },
   desktop:{
     width:"45%",
     minHeight:270,
   },
   smallScreen:{
     width:"45%",
     minHeight:210,
   },
   screen1080:{
     width:"40%",
   },
   screen1245:{width:"30%"},


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
   get:styleMatchingScreenSize,
   default:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"center",

     paddingTop:10,
     fontSize:14,
     width:"100%",
     position:"relative"
   }


 },
 line:{
   textAlign:"center",
   width:"100%"
 },
 footer:{
   get:styleMatchingScreenSize,
   default:{
     textAlign:"center",
     width:"100%",

     position:"absolute",
     bottom:30,
     color:"#A8A8A8"
   },
   mobile:{
     position:"static",
     marginBottom:50,
     marginTop:5
   }

 },

};
