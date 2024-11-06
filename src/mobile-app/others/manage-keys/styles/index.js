import {
  StyleSheet,Dimensions
} from 'react-native';

import {commonStyles} from "../../../common-styles";

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
    helpContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        marginBottom:10,
        marginTop:20
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
        marginTop:20,
        width:"100%"
      },
      keyFieldRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:20,
        marginRight:20

      },
      nameFieldContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        width:"90%"
      },
      itemIcon:{
          marginRight:5
      },
      keyText:{
        color:"rgba(72,128,237,2)",
        fontFamily: 'Futura-Medium',
        fontSize:18
      },
      formLabelText:{
        color:"rgba(72,128,237,2)",
        fontFamily: 'Futura-Medium',
        fontSize:18

      },
      activeKeyContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginTop:20,
        marginBottom:30,
        borderWidth:1,
        borderColor:"rgba(72,128,237,1)",


      },
      keyvalueContainer:{
        borderBottomWidth:1,
        margin:10,
        borderColor:"rgba(72,128,237,1)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:5,

      },

      buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        margin:10
      },
      button:{
        borderWidth:1,
        borderColor:"rgba(72,128,237,1)",

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
      titleContainer:{
        width:"100%",
        backgroundColor: "rgba(72,128,237,0.8)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        flexWrap:"wrap",
        paddingLeft:10,
        paddingRight:10
      },
      title:{
        color:"white",
        fontFamily: 'Futura-Medium',
        fontSize:18,
      },

      errorMessageContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingBottom:5,
        marginLeft:10,
        marginRight:10,
        marginTop:5
      },
      errorMessage:{
        width:"100%",
        fontSize: 12,
        fontFamily: 'Futura-Medium',
        color:"red",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        marginRight:20,
        marginLeft:20,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:5,

        flexWrap:"wrap"

      },
      labelContainer:{
        display:"flex",
        flexDirection:"row",
        width:80,
        marginRight:5,
        justifyContent:"flex-end",
        alignItems:"flex-end"
      },
      label:{
        color:"rgba(72,128,237,1)",
        fontFamily: 'Futura-Medium',
        fontWeight: 'bold',


      },
      fieldValueContainer:{
        borderBottomWidth:1,
        borderColor:"rgba(72,128,237,1)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:5
      },
      textFieldContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        margin:20
      },
      listContainer:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"flex-end",
          width:"100%"
      },
      listvalue:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-end"
      },
      fieldValue:{
        color:"rgba(72,128,237,1)",
      },
      help:{
        marginTop:10
      },
      errorMessage:{
        color:"red"
      },
      content:{
          marginTop:20,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          width:"100%"
      }


};

var resultStyle=Object.assign({},commonStyles,stylesData);


export const styles = StyleSheet.create(resultStyle);
