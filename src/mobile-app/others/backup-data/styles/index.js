import {commonStyles} from "../../../common-styles";
var stylesData={

  exportContainer:{
    margin:5

  },

    exportTitle:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      margin:0,
      paddingBottom:10,
    },
    formContent:{
        marginLeft:10,
        marginRight:10,
        borderColor:"black",
        borderStyle: 'solid',
        borderWidth:1,
        padding:2,
        backgroundColor:"#FFFFFF"
    },
    buttonContainer:{
      marginTop:10,
      marginBottom:10,
      display:"flex",
      flexDirection:"column",
      width:"100%",
      justifyContent:"flex-start",
      alignItems:"center"

    }



};
export const styles = Object.assign({},commonStyles,stylesData);
