import {styleMatchingScreenSize} from "../../../components/screen-media";
export var styles={
   container:{
     color:"#5291CD",
     width:"100%",
     paddingTop:50
   },
   title:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"center",
     fontSize:40,
     marginBottom:80
   },
   row:{
     get:styleMatchingScreenSize,
     default:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around",

     },
     mobile:{
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center"
     }
   }

};
