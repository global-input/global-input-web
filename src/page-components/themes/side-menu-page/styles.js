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
        paddingTop:10
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
      height:window.innerHeight-100,
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
    }
  },

  menuItem:{
      whiteSpace:"noWrap",
      marginBottom:20,
      cursor:"pointer"
  },



}
