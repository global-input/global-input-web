import {styleMatchingScreenSize} from "../../../components/screen-media";
export const styles={
  topcontainer:{
        get:styleMatchingScreenSize,
        default:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          width:"100%",
          paddingTop:120,
        },
        mobile:{
          flexDirection:"column",
          alignItems:"center"
        }
  },
  sideContainer:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        width:400,
        paddingTop:10,
      },
      mobile:{
        display:"none"  
      }

  },
  contentContainer:{
    get:styleMatchingScreenSize,
    default:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      width:"100%",
      marginBottom:50,

      overflow:"scroll",

    },
    mobile:{
      width:"90%",
      height:"auto",
      overflow: "visible",

    }
  },
  sideMenu:{
    get:styleMatchingScreenSize,
    default:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      color:"#5291CD", //#4880ED
      position:"fixed"
    }
  },

  menuItem:{
      whiteSpace:"noWrap",
      marginBottom:20,
      cursor:"pointer"
  },

  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",

      backgroundColor:"white",
      width:"100%",
      minHeight:window.innerHeight,
      color:"#5291CD",
      paddingTop:70,

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
      width:"100%",


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
          display:"block",

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
          flexDirection:"row",
          justifyContent:"center",
          width:"100%"
      },
      code:{
            backgroundColor:'rgba(169,200,230,0.1)',
            overflow:'scroll',
            width:"100%",
            color:"#5291CD"
      },

      concept:{

        borderBottomStyle:"dotted",
        borderBottomColor:'black',
        borderBottomWidth:1
      }
  },


}
