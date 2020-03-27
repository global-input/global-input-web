import {styleMatchingScreenSize} from "../../components/screen-media";
export const styles={
buttonLinks:{
    get:styleMatchingScreenSize,
    default:{
      textDecoration: "none",
      fontSize: 15,
      borderRadius:8,
      color:"white",
      backgroundColor:"#4281BD",
      whiteSpace:"nowrap",
      padding:10,
      minWidth:120,
      marginLeft:20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    white:{
      color:"#4281BD",
      backgroundColor:"white",
    },    
    transparent:{
      color:"#4281BD",
      backgroundColor:"rgba(256, 256, 256, 0)",
      height:42,
      margin:20,
      boxShadow: '3px 3px 3px #cccccc',
      border:"1px solid #eeeeee",
      borderRadius:8,
      maxWidth:190
    },

    selected:{
        color:"#002080",
        fontWeight:500
    },
    hover:{
        color:"#66ccff",
        fontWeight:300
    },
    mobile:{
      width:"90%",
    }
},
  imageLink:{
      margin:20,
  },
  imageLinkText:{
    fontSize:15,
    color:'#8652CD'
  },
  imageButton:{
      margin:20,
      boxShadow: '3px 3px 3px #cccccc',
      border:"1px solid #eeeeee",
      borderRadius:8
  },
};
