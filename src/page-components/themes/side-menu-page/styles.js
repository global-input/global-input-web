import {styleMatchingScreenSize} from "../../../components/screen-media";
export const styles={

  desktopMenu:{
      container:{
            get:styleMatchingScreenSize,
            default:{
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"flex-start",
              width:"100%",
              paddingTop:20,
              paddingRight:20,
              paddingLeft:20,
            }
      },
      sideMenu:{
              menu:{
                get:styleMatchingScreenSize,
                default:{
                  position:"fixed",
                  color:"#5291CD", //#4880ED
                  transition: '0.5s',
                  backgroundColor: 'white',
                  height:'90%',
                  left:"2.5vw",
                  overflow:"scroll",
                },
              },
              menuItem:{
                  whiteSpace:"noWrap",
                  marginBottom:20,
                  cursor:"pointer"
              },

            },
            content:{
              get:styleMatchingScreenSize,
              default:{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                alignItems:"flex-start",
                marginBottom:50,
                overflow:"scroll",
                marginLeft:350,
                width:'60vw'
              },
            }
  },
  mobileMenu:{
      container:{
              display:"flex",
              flexDirection:"column",
              justifyContent:"flex-start",
              alignItems:"center",
              width:"100%",
              paddingTop:0,
              paddingRight:20,
              paddingLeft:20,
      },
      icon:{
        fontSize:35,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"flex-start",
        position:"fixed",
        paddingRight:20,

      },

      menu:{
                color:"#5291CD", //#4880ED
                transition: '0.5s',
                backgroundColor: 'white',
                height:'90%',
                overflow:"scroll",

      },
      menuItem:{
                  whiteSpace:"noWrap",
                  marginBottom:20,
                  cursor:"pointer"
      },
      content:{
              get:styleMatchingScreenSize,
              default:{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                alignItems:"flex-start",
                marginBottom:50,
                overflow:"scroll",
                marginLeft:350,
                width:'60vw'
              },
      }
  },


  closedMenu:{
    container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"100%",
    },
    icon:{
      container:{
        position:"fixed",
        top:70,
        width:"100%",
      },
      symbol:{
        marginRight:10,
        fontSize:30,
        float:"right",
        backgroundColor:"white"
      }

    },
    content:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      marginBottom:50,

      overflow:"scroll",
      width:'90%',
      marginTop:60
    }


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
      alignItems:"flex-start",
      width:"100%",
      backgroundColor:"white"
  },
  firstSection:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
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
      title2:{
        get:styleMatchingScreenSize,
        default:{
          fontSize:24,
          display:"block",

        },
        mobile:{
          fontSize:20,
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
          width:"80%",
          paddingLeft:10
      },
      code:{
            backgroundColor:'rgba(169,200,230,0.1)',
            overflow:'scroll',
            width:"100%",
            color:"#5291CD",
            paddingLeft:10
      },

      concept:{

        borderBottomStyle:"dotted",
        borderBottomColor:'black',
        borderBottomWidth:1
      },
      diagram:{
        get:styleMatchingScreenSize,
        default:{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth:window.innerWidth-50
        },
        screen1245:{
            float:"right",
            maxWidth: "50%",
        },

      }
  },
  bookmark:{
      position:"relative",
      top:-75,


  }



}
