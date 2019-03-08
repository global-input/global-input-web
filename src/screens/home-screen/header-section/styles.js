import {styleMatchingScreenSize} from "../../../utils/screenMedia";

const images={
    path50:require("./path-50.svg"),

}
export var styles={
headerContainer:{
  backgroundImage: "url("+images.path50+")",
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover",
  width:"100%",
  position:"relative",
  top:49,
  paddingBottom:200
},
  rightImage:{
     default:{
            position:"absolute",
            top:100,
            paddingRight:50,
            height: "auto",
            marginRight:10,
          },
          bigScreen:{
            right:0
          },
          screen1245:{
            right:0
          },
          screen1080:{
            right:0,
            top:30,
            width:"40vw",


          },
          smallScreen:{
            right:0,
            top:40,
            width:"35vw",

          },
          desktop:{
            right:0,
            top:40,
            width:"45vw"
          },
          mobile:{
            position:"static",
            height: "auto",
            marginTop:30,
            width:450,
          },
      get:styleMatchingScreenSize
  },


  headerSection:{
      get:styleMatchingScreenSize,
      default:{
              height:530,
              marginTop:"5vw",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"flex-start",
              color:"white",
              width:"100%",
              zIndex:50,
              marginBottom:30,
      },
      mobile:{
        justifyContent:"flex-start",
      }

  },


  title:{
    default:{
      fontSize:40,
      marginLeft:70,
    },
    mobile:{
      fontSize:"6vw",
      marginLeft:30,
    },
    get:styleMatchingScreenSize

  },
  subtitle:{
    default:{
      fontSize:20,
      marginLeft:70,
    },
    mobile:{
      fontSize:20,
      marginLeft:30,
    },
    get:styleMatchingScreenSize
  },
  listContent:{
    default:{
      marginLeft:30,
      fontSize:14,
      marginTop:20
    },
    smallScreen:{
      fontSize:14,
    },
    mobile:{
      fontSize:14,
      marginLeft:10,
    },
    bigScreen:{
      fontSize:14,
    },
    get:styleMatchingScreenSize

  },

  appSelection:{
    default:{
          maxWidth: "50%",
        },
    mobile:{
      maxWidth: "100%",
    },
    get:styleMatchingScreenSize

  },
  appDescription:{
      default:{
        paddingBottom:10,
        fontSize:"2vw",
        display:"flex",
        flexDirection:"row",
        marginTop:20,
        marginLeft:50,
      },
      smallScreen:{
        fontSize:"4vw",
      },
      mobile:{
        fontSize:"4.5vw",
        marginLeft:10,
        marginRight:10
      },
      bigScreen:{
        fontSize:26,
      },
      get:styleMatchingScreenSize
  },
  watchVideoText:{
      default:{
          color:"white",

          fontSize:20,
          marginLeft:80,
          whiteSpace:"nowrap"

      },
      hover:{
        color:"white",
        boxShadow:"0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
        fontSize:20,
        marginLeft:80,
        whiteSpace:"nowrap"
      }
  },
  appDownload:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",


  },
  appStoreImage:{
    marginLeft:10
  }

};
