import {styleMatchingScreenSize} from "../styles";
export const styles={
  title:{
    desktop:{
      color:"white",
      fontSize:"3vw",
      marginLeft:10,
    },
    mobile:{
      color:"white",
      fontSize:"5vw",
      marginLeft:30,
    },
    get:styleMatchingScreenSize
  },
  subtitle:{
    desktop:{
      color:"#888888",
      fontSize:"3vw",
      marginLeft:10,
    },
    mobile:{
      color:"#888888",
      fontSize:"4vw",
      marginLeft:30,
    },
    get:styleMatchingScreenSize
  },
  description:{
    desktop:{
      color:"#888888",
      fontSize:"1.7vw",
      marginLeft:10,
      marginTop:5,
      marginBottom:5,
    },
    mobile:{
      color:"#888888",
      fontSize:"3vw",
      marginLeft:30,
    },
    get:styleMatchingScreenSize
  },



  content:{
      paddingLeft:  20,
      paddingTop:   100,
      paddingRight: 20,
      display:      "flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:    "flex-start",
      backgroundColor:"#5291CD",
      width:"100%",
      minHeight:window.innerHeight
  },
  itemSection:{
     marginTop:20,
     marginBottom:10,
     padding:10,
     backgroundColor:"white",
     width:"95%",
     borderRadius:25,
  },
  linkText:{
      default:{
          color:"#888888",
          fontSize:20,

          whiteSpace:"nowrap",


      },
      hover:{
        color:"blue",
        boxShadow:"0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
        fontSize:20,
        whiteSpace:"nowrap",

      }
  },
  textContainer:{
    width:"100%"
  },
  textFooter:{
    display:"flex",
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-start",
    marginLeft:"20vw"



  }
};

export var images={

    demo:require('./images/demo-icon.png'),
}
