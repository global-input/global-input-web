import {
  StyleSheet,Dimensions
} from 'react-native';
import {commonStyles} from "../../common-styles";
var stylesData={
  scrollContent:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      height:"100%",
      paddingTop:20
  },
  formContainer:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      width:"90%",
      marginBottom:10
  },

    itemRecord:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      borderBottomWidth:1,
      borderColor:"rgba(72,128,237,0.2)",
      paddingBottom:5,
      marginLeft:10,
      marginRight:10,
      marginTop:5
    },
    itemRow:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      marginTop:20
    },
    qrCodeSection:{

    },
    qrcodeContainer:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      marginBottom:10,
      marginLeft:5,
      marginRight:5,
      padding:5,
      backgroundColor:"#FFFFFF"
    }

};
export const styles = StyleSheet.create(Object.assign({},commonStyles,stylesData));
