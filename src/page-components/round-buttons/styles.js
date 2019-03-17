import {styleMatchingScreenSize} from "../../components/screen-media";
export const styles={
buttonLinks:{
    get:styleMatchingScreenSize,
    default:{
      textDecoration: "none",
      fontSize: 15,
      borderRadius:25,
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
  imageButton:{
      margin:20,
  }
};
