import {commonStyles} from "../../../common-styles";

var stylesData={


    addAFieldContainer:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"flex-end",
      padding:10
   },



      itemText:{
        marginTop:3,
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize: 16,
      },
      itemTitle:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize: 24,
        fontWeight: 'bold',
      },
      settingItem:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          marginBottom:20,
          borderBottomWidth:5,
          borderStyle: 'solid',
          borderColor:"rgba(72,128,237,0.5)",
          backgroundColor:"#FFFFFF",
          padding:5
      },
      optionLabel:{
        fontFamily: 'Futura-Medium',
        color:"rgba(72,128,237,1)",
        marginRight:5
      },
      checkboxContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:30
      },
      inputContainer: {
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5,
        display:"flex",
        flexDirection:"row",
      },
      buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
      },
      button:{
        borderWidth:1,
        borderColor:"rgba(72,128,237,1)",
        borderStyle: 'solid',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        width:120,
        height:40,
        marginTop:50
      },
      errorMessage:{
        color:"red"
      }

};

var resultStyle=Object.assign({},commonStyles,stylesData);


export const styles = resultStyle;
