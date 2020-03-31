
import {styleMatchingScreenSize} from '../../../components/screen-media';


export var styles={

 card:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        backgroundColor:"#FFFFFF",
        color:"#5291CD",        
        width:400,
        minHeight:300,
        

        paddingBottom:25,
        borderRadius:5,
        padding:10,        
        position:"relative",
        
        marginRight:100,
        marginBottom:20
      },
      screen1080:{

      },
      narrowMobile:{
        width:"100%",   
        marginRight:0,
        marginBottom:50,        
      },
      mobile:{        
        marginBottom:50,
        marginRight:0     
      },
 },
 
 icon:{
      container:{width:"100%", marginBottom:20},
      img:{
        display:"block",
        marginLeft:"auto",
        marginRight:"auto"
      }

 },
 title:{
        default:{
           fontSize:20,
           display:"flex",
           flexDirection:"row",
           width:"100%",
           justifyContent:"center",
        },
        desktop:{
          fontSize:"2.5vw",
        },
        smallScreen:{
          fontSize:20,
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
     alignItems:"center",
     paddingLeft:20,
     paddingRight:20,
     paddingTop:20,
     fontSize:14,
     width:"100%",
     position:"relative"
   },
   desktop:{
     fontSize:"1.5vw",
   },
   smallScreen:{
     fontSize:"1.4vw",
   },
   screen1080:{
     fontSize:14,
   },

   mobile:{
      fontSize:14,
   },
   get:styleMatchingScreenSize
 },
 
 footer:{
   
   buttons:{
    get:styleMatchingScreenSize,
     default:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",      
      width:"100%",       
      bottom:5, 
      
     },
     narrowMobile:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      
    },
      
   }
    
 },
 cardContainer:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
      },
      screen1080:{
        flexDirection:"row",
      },
 }

 
};
