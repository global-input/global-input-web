import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
    background:require("./images/background.svg"),
    footerBackground:require("./images/footer-background.svg"),
}

export const styles={
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",

      backgroundColor:"rgba(169, 200, 230, 0.1)",
      width:"100%",
      minHeight:window.innerHeight,
      color:"#5291CD",
      paddingTop:70,
      position:"relative",      
  },
  content:{
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
  },

  nextSection:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"100%",
      backgroundColor:"white"
  },
  firstSection:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"100%"


  },
  card:{
      container:{
        get:styleMatchingScreenSize,
        default:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          width:"90%",
          paddingBottom:20,
          color:"#5291CD", //#4880ED
          paddingLeft:20,
          paddingRight:10,
          paddingTop:20,
          paddingBottom:20,

        },
        bigScreen:{
          width:1200
        },
        screen1245:{
          width:1000
        },
        desktop:{
          width:"90%"
        }
      },
      title:{
        get:styleMatchingScreenSize,
        default:{
          fontSize:30,
          marginTop:20,
          display:"block",
          marginLeft:"auto",
          marginRight:"auto",

        },
        mobile:{
          fontSize:25,
        }
      },
      paragraph:{
        get:styleMatchingScreenSize,
        default:{
          fontSize:16,
          display:"block",
          marginBottom:20,
          marginTop:20,
          

        },
        mobile:{
          fontSize:16,
        }
      },
      link:{
          fontWeight:50,
          color:"#6666ff"
      },
        item:{
        marginBottom:10
      },
      codeContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"95%",
        paddingLeft:10,        
      },
      code:{
        backgroundColor:'rgba(169,200,230,0.1)',
        overflow:'scroll',
        width:"100%",
        color:"#5291CD",
      },

      concept:{

        borderBottomStyle:"dotted",
        borderBottomColor:'black',
        borderBottomWidth:1
      }
  }

  



}
