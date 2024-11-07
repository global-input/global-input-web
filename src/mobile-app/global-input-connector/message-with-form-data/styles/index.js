import {
    StyleSheet,Dimensions
  } from 'react-native';
  
  import {commonStyles} from "../../../common-styles";
  
  var stylesData={
  
      addAFieldContainer:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"flex-end",
        padding:10
     },
  
      formdataList:{
  
      },
  
    formEditor: {
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#FFFFFF",
        padding:2
      },
  
  
  
      valueText:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize:18
      },
  
      formRecord: {
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        display:"flex",
        flexDirection:"column",
        borderBottomWidth:5,
        borderColor:"rgba(80,80,80,0.5)",
        backgroundColor:"#FFFFFF",
        padding:2
      },
      fieldControlButtons:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-start",
          alignItems:"center"
      },
      field:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        flex:1,
  
      },
      formEditRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        flexWrap:"wrap"
  
      },
      searchStringContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        marginLeft:5,
        borderBottomWidth:1,
        borderColor:"white"
      },
      searchString:{
      color:"#FFFFFF"
      },
      searchBlockItemContainer:{
        flex:3,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft:10,
        marginRight:10,
        marginTop:5,
      },
      searchField:{
          marginRight:5
      },
      content:{
          display:"flex",
          flexDirection:"column",
          marginTop:20,
          paddingLeft:5,
          paddingRight:5
      },
      backIcon:{
        marginLeft:10
      },
      buttonsContainer:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-start"
      },
  
      qrcodeContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
      },
      qrCodeHelp:{
        fontFamily: 'Futura-Medium',
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize:14,
        marginBottom:8
  
      },
      disconnectButton:{
        marginTop:10
      },
      errorMessage:{
        fontSize: 18,
        fontFamily: 'Futura-Medium',
        color:"red"
      },
      addNewLineControls:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-end"
      },
      multiLineContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
        marginLeft:20
      },
      multilineLabel:{
        fontFamily: 'Futura-Medium',
        color:"rgba(72,128,237,1)"
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
        marginTop:20,
        flex:1
  
      },
      labelIcon:{
        marginRight:5
      },
      labelIcon:{
        marginRight:5
      },
      label:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontWeight: 'bold',
  
      },
      itemRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
      },
  
      fieldRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        width:"100%",
        marginTop:15
      },
      itemIcon:{
          marginRight:5
      },
      formIdText:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize:18
      },
      formLabelText:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize:18
      },
      textarea:{
          color:"rgba(72,128,237,1)",
          width:"100%",
          borderBottomWidth:1,
          borderColor:"rgba(72,128,237,0.2)",
      },
      valueContainer:{
          width:"90%",
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          borderBottomWidth:1,
          borderColor:"rgba(72,128,237,0.2)",
      },
      showFieldContainer:{
        maxHeight:200,
        display:"flex",
        padding:10,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        flex:1,
  
      },
  
  
  
      createNewFieldRow:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginTop:20,
  
      },
      newFieldTitle:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontSize:18
      }
  
  };
  
  export const styles = StyleSheet.create(Object.assign({},commonStyles,stylesData));
  