import {
  StyleSheet
} from 'react-native';


const stylesData ={
  blockTitleContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    marginLeft:5
  },
  textBlockContainer:{
    marginLeft:5
  },

  blockParagraph:{
    marginBottom:5
  },

  blockText:{
      fontFamily: 'Futura-Medium',
      fontSize:16,
      color:"rgba(72,128,237,1)"
  },

  blockTitle:{
    fontFamily: 'Futura-Medium',
    fontSize:20,
    fontWeight:"bold",
    color:"rgba(72,128,237,1)"
  },
  urlContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },


  notificationContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  notificationText:{
    fontFamily: 'Futura-Medium',
    fontSize:10,
    borderWidth:1,
    color:"#rgba(72,128,237,1)",
    padding:5,
    borderColor:"rgba(36,66,156,0.5)",
    backgroundColor:"transparent"
  },
  notificationTextLight:{
    fontFamily: 'Futura-Medium',
    fontSize:10,

    color:"#FFFFFF",
    padding:5,
    borderColor:"#rgba(72,128,237,0.5)",
      borderWidth:1,
    backgroundColor:"transparent"
  },
  viewStyle:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:5
  },
  columnStyle:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    width:"100%",
    padding:5
  },
  rowStyle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    flexWrap:"wrap",
    backgroundColor:"red"
  },


  contentText:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      fontFamily: 'Futura-Medium',
      fontSize:16,
      color:"rgba(72,128,237,1)",
      padding:5
  },

};

stylesData.linkText=Object.assign({},stylesData.contentText,{
    color:"blue",
});

stylesData.blockContentText=Object.assign({},stylesData.contentText,{
    paddingBottom:10,
});

var styles = StyleSheet.create(stylesData);

export {stylesData,styles};
