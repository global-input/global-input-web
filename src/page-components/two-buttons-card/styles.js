import {styleMatchingScreenSize} from "../../components/screen-media";
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
     position:"relative",
     border:"1px solid red",
     minHeight:200,
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

 footer:{
   get:styleMatchingScreenSize,
   default:{
     width:"100%",
     position:"absolute",
     bottom:0,
     color:"#A8A8A8",
     border:"1px solid blue",
     display:"flex",
     flexDirection:"row",
     justifyContent: "flex-start",
     alignItems:"center"
   },
   mobile:{
     position:"static",
     marginBottom:50,
     marginTop:5
   }

 },

};
