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
     content:{
        display:"flex",
        flexDirection: 'column',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,        
     },
     textContent:{
        display:"flex",
        flexDirection: 'column',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#EEEEEE"
     },
     keySelectionContainer:{
        display:"flex",
        flexDirection: 'column',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginTop:10
     },
  
      dialog:{
          display:"flex",
          flexDirection: 'column',
          width:"90%",
          justifyContent:"flex-start",
          alignItems:"center",
        },
  
        itemText:{
          marginTop:3,
          marginBottom:3,
          color:"rgba(72,128,237,1)",
          fontFamily: 'Futura-Medium',
          fontSize: 18,
        },
        inputContainer: {
  
          marginLeft:40,
          marginRight:40,
          marginTop:10,
          marginBottom:10,
          display:"flex",
          flexDirection:"row",
        },
        buttonContainer:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          width:"100%",
          marginTop:20
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
        errorMessage:{
          color:"red",
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
        itemIcon:{
            marginRight:5
        },
        keyText:{
          color:"rgba(72,128,237,2)",
          fontFamily: 'Futura-Medium',
          fontSize:18
        },
        formTitle:{
          display:"flex",
          justifyContent:"center",
          alignItems:"flex-start",
          flexDirection:"column",
          flexWrap:"wrap",
          width:"100%",
          marginTop:10,
          paddingTop:5
        },
        formtitleText:{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'Helvetica',
              textAlign:"center",
              flexWrap:"nowrap",
              display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center",
              width:"100%",
              color:"rgba(72,128,237,1)",
      
      
        },
  
  };
  
  var resultStyle=Object.assign({},commonStyles,stylesData);
  
  
  export const styles = StyleSheet.create(resultStyle);
  