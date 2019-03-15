import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
    background:require("./images/background.svg"),
}

export const styles={
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",
      backgroundImage: "url("+images.background+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight:window.innerHeight,
      color:"white",
      paddingTop:100,
      position:"relative"
  },
  content:{
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",

  },
  card:{
      container:{
        get:styleMatchingScreenSize,
        default:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          backgroundColor:"#FFFFFF",
          width:"90%",
          minHeight:300,
          borderRadius:5,
          paddingBottom:20,
          color:"#5291CD", //#4880ED
          paddingLeft:20,
          paddingRight:10,
          marginBottom:20
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
          marginTop:20
        },
        mobile:{
          fontSize:25,
        }
      },
      paragraph:{
        get:styleMatchingScreenSize,
        default:{
          marginBottom:10,
          fontSize:20,
          display:"block"
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
      }
  },



}
