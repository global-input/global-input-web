import {styleMatchingScreenSize} from "../../components/screen-media";
export const images={
    headerBackground:require("./images/top-background.svg"),
    computer:require("./images/computer.png")
}

export const styles={


  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      color:"#A9C8E6", //#4880ED
      width:"100%",

      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight:window.innerHeight,

  },
  scrollContent:{

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
      }
    },
    title:{
         color:"#5291CD", //#4880ED
         fontSize:30,
    },
    content:{
      color:"#5291CD", //#4880ED
      fontSize:16,
      width:"90%"
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
      overflow:"scroll"
    },
    mobile:{
      width:"90%",
    }

  },
  exampleItem:{
    marginBottom:10
  },








}
