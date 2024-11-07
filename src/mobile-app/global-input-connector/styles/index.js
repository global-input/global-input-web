import {
  StyleSheet,Dimensions
} from 'react-native';

import {commonStyles} from "../../common-styles";

var stylesData ={
content:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    flex:1,

    backgroundColor:"#FFFFFF",
    padding:0,

},
formFields:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    flex:1
},
contentCenter:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"100%",
  width:"100%",
  padding:5,
  paddingTop:20
},
  subtitleText:{
    fontSize: 12,
    fontFamily: 'Futura-Medium',
    color:"white"
  },

  centerHeader:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  fourColumnHeader:{
    flex:4,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },


  rightHeader:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end"
  },

  formTitle:{
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"column",
    flexWrap:"wrap",
    width:"100%",
    marginTop:10,
    marginBottom:10,
    paddingTop:5
  },
  formtitleText:{
        fontSize: 20,
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


fieldContainer:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  width:"100%",
},
labelContainer:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  width:"100%",
},
fieldItemContainer:{
  width:"100%",

},
sliderContentContainer:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-start",
  width:"100%",
},
sliderContainer:{
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   width:"100%"
},
sliderRangeValues:{
  flexDirection: 'row',
  display:"flex",
  flexDirection:"row",
  width:"100%",
  justifyContent: 'space-between',
},

rangeValue:{
  color:"rgba(72,128,237,1)",
  fontSize: 12,

  fontFamily:"Futura-Medium",
},
picker:{
  height: 150,
  marginLeft:40,
  marginRight:40,
  marginTop:10,
  marginBottom:10,
},

fieldView:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  flexWrap:"wrap",
  alignItems:"center",
  padding:2
},


errorMessageContainer:{
    display: "flex",
    flexDirection: "row",
    width:"80%"
},
errormessage:{
    color:"rgba(72,128,237,1)",
    fontSize: 20,
    fontFamily: 'Futura-Medium',
},
dialog:{

  height:"50%"
},

buttonContainer:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  margin:15,
},

button:{
  borderWidth:1,
  borderColor:"#4880ED",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
  minWidth:36,
  minHeight:36,
  padding:5
},
hiddenButton:{
  minWidth:36,
  minHeight:36,
},
buttonText:{
  color:"rgba(72,128,237,1)"
},
emptyText:{
  color:"rgba(255,255,255,0)"
},






  inputContainer: {

    marginLeft:40,
    marginRight:40,
    marginTop:15,
    marginBottom:15,
    display:"flex",
    flexDirection:"row",
  },


  input: {
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize:20,
    height:28,
    width:"100%"
  },
  footer:{
       margin:8,
       height: 60,
       display: "flex",
       flexDirection: 'row',
       justifyContent:"flex-start",
       alignItems:"center",
       backgroundColor:'rgba(240, 240, 240, 0.5)',
       width:"100%"

  },

    list:{
        padding:0,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
    },
    selectedItem:{
      backgroundColor:'rgba(188, 188, 188, 1.0)',

    },
    notSelectedItem:{
      backgroundColor:'rgba(255, 255, 255, 1.0)',
      flex:1

    },
    listContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      marginBottom:10
    },
    label:{
      marginRight:10,
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"center",
      color:"#4880ED",

    },
    labelRow:{
      marginRight:10,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    topBar:{
      position:"absolute",
      top:0,
      margin:8,
      backgroundColor: 'rgba(255,255,255,0)',
      display: "flex",
      flexDirection: 'row',
      justifyContent:"flex-start",
      alignItems:"center",
      marginTop:25,
      height:50,
      width:"100%"
    },

    fieldControlButtons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    itemIcon:{
          marginRight:5
    },
    iconContainer:{
          margin:10
    }




};


export const styles = StyleSheet.create(Object.assign({},commonStyles,stylesData));
export {stylesData};

export function stylesWithNumberOfLines(nlines=1){
  return StyleSheet.create({
    textarea:{
          backgroundColor: '#ffffff',
          paddingLeft: 15,
          paddingRight: 15,
          fontSize:20,
          flex:1,
          borderColor:"#888888",
          borderWidth:1,
          borderStyle:"solid"
        },
        textAreaContainer: {
          display:"flex",
          flexDirection:"column",
          height:20*nlines,
          marginLeft:40,
          marginRight:40,
          marginTop:10,
          marginBottom:10,


        },
  });
}
