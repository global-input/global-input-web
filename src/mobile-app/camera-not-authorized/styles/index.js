import {commonStyles} from "../../common-styles";
var stylesData={

    messageContainer:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    message:{
      fontSize: 18,
      fontFamily: 'Futura-Medium',
      textAlign:"center",
      flexWrap:"wrap",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      color:"rgba(72,128,237,1)",
    }

};
export const styles = Object.assign({},commonStyles,stylesData);
