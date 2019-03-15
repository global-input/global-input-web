import {styleMatchingScreenSize} from "../../components/screen-media";

export const styles={


  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      color:"#A9C8E6", //#4880ED
      width:"100%",
      paddingTop:80,
      minHeight:window.innerHeight,
  },
  scrollContent:{
    get:styleMatchingScreenSize,
    default:{
        width:"90%",
        maxWidth:900
    }

  },
  chapter:{
    container:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginBottom:50
      },
      mobile:{
        width:"auto",
        alignItems:"center",

        width:"90%"
      }
    },
    title:{
        get:styleMatchingScreenSize,
        default:{
          color:"#5291CD", //#4880ED
          fontSize:30,
        },
        mobile:{
          fontSize:"6vw",
        }

    },
    content:{
      get:styleMatchingScreenSize,
      default:{
        color:"#5291CD", //#4880ED
        fontSize:16,

      },
      mobile:{
        width:"90%",

      }

    },
    paragraph:{
       marginBottom:10
    },

  },

  code:{
    get:styleMatchingScreenSize,
    default:{
      border:"1px solid #EEEEEE",
      backgroundColor:'#E6F7FC',
      color:"#5291CD",
      padding:10,
      overflow:"scroll",
      marginTop:20,
      marginBottom:20
    },
    mobile:{
      width:"90%",
    }

  },
  exampleItem:{
    marginBottom:10
  },








}
