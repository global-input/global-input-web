import {commonStyles} from "../../common-styles";
var stylesData={


    formContent:{
        marginLeft:10,
        marginRight:10,
        borderColor:"black",
        borderWidth:1,
        padding:2,
        backgroundColor:"#FFFFFF"
    },


    contentContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:'rgba(255, 255, 255, 1)',
        padding:0,
        display:"flex",
        flexDirection: 'column',
        justifyContent:"flex-start",
        alignItems:"center"
    },


    iconContainer:{
         display:"flex",
         flexDirection:"row",
         flexWrap: "wrap",
         backgroundColor:"#FFFFFF",
         width:"100%",
         padding:10
   },
   icon:{
     margin:10,
     minWidth:120
   }


};
export const styles = Object.assign({},commonStyles,stylesData);
