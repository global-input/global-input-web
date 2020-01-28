import {styleMatchingScreenSize} from "../../../components/screen-media";
export const styles={
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
  },

  concept:{
    borderBottomStyle:"dotted",
    borderBottomColor:'black',
    borderBottomWidth:1
  },
  centerContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        margin:50
  },
  textArea:{
    get:()=>{
      return{
        width:"80%",
        height:window.innerHeight*2/3
      }
    }

},
     
}