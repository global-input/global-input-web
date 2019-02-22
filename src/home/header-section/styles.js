import {styleWithNarrow} from "../../styles";

export var styles={

  rightImage:{
     desktop:{
            position:"absolute",
            right:0,
            maxWidth: "60%",
            height: "auto",
            marginRight:10,
          },
      mobile:{
        maxWidth: "100%",
        height: "auto",
        marginTop:30
      },
      get:styleWithNarrow
  },


  headerSection:{
      desktop:{
              height:530,
              paddingTop:80,
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"flex-start",
              color:"white",
              width:"100%",
              zIndex:50,
              marginBottom:30
      },
      mobile:{

        paddingBottom:50,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        color:"white",
        width:"100%",
        zIndex:100,

      },
      get:styleWithNarrow
  },


  title:{
    desktop:{
      color:"white",
      fontSize:"3vw",
      marginLeft:10,
    },
    mobile:{
      color:"white",
      fontSize:30,
      marginLeft:30,
    },
    get:styleWithNarrow


  },
  listContent:{
    desktop:{
      marginLeft:30,
      color:"white",
      fontSize:"2vw",
    },
    mobile:{
      marginLeft:30,
      color:"white",
      fontSize:"3vw",
    },
    get:styleWithNarrow

  },

  appSelection:{
    desktop:{
          maxWidth: "50%",
        },
    mobile:{
      maxWidth: "100%",
    },
    get:styleWithNarrow

  },
  appDescription:{
      desktop:{
        paddingBottom:10,
        fontSize:"2vw",
      },
      mobile:{
        paddingBottom:10,
        fontSize:"3vw",
      },
      get:styleWithNarrow
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
