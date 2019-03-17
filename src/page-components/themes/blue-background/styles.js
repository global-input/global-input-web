import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
    background:require("./images/background.svg"),
}

export const styles={
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",
      backgroundImage: "url("+images.background+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      minHeight:window.innerHeight,
      paddingTop:100,
      color:"white",

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
          minHeight:300,
          borderRadius:5,
          paddingBottom:20,

          paddingLeft:20,
          paddingRight:10,
          marginBottom:20,
          marginTop:70
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
          marginBottom:50
        },
        mobile:{
          fontSize:25,
        }
      },
      paragraph:{
        get:styleMatchingScreenSize,
        default:{
          marginBottom:10,
          fontSize:16,
          display:"block",
          marginBottom:30
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
      code:{
            border:"2px dashed #888888",
            padding:10
      },
      concept:{

        borderBottomStyle:"dotted",
        borderBottomColor:'black',
        borderBottomWidth:1
      }
  },



}
