import { deviceDetector } from "../../../common-styles";



var buttonBorderColor="rgba(80,80,80,0.5)";

const styles={

  container: {
    flex: 1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
    position:"absolute",
    top:0,
    backgroundColor: 'rgba(200,200,200,0.5)',
    zIndex:100
  },
  scrollStyle:{
      width:"100%"

  },
  dialog:{
      marginTop:50,
      marginLeft:5,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth:1,
      borderColor:'#333333',
      borderStyle:"solid",
      shadowColor:"#888888",
      shadowOffset:{ width: 10, height: 10 },
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 10,
      display:"flex",
      flexDirection: 'column',
      width:"95%",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    formHeader:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      flexWrap: 'wrap',
      width: "100%",
      marginTop:20,      
      marginBottom:10,


    },
  button:{

      padding:10,
      borderWidth:1,
      borderColor:buttonBorderColor,
      borderStyle: 'solid',
      flex:1,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
  },
  buttonSeparate:{

      borderWidth:1,
      borderColor:buttonBorderColor,
      borderStyle: 'solid',

      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      backgroundColor: "rgb(88, 139, 239)",
      width:"100%",
      padding:10,
      marginTop:10
  },

  buttonLeft:{

      padding:10,
      borderRightWidth:1,
      borderTopWidth:1,
      borderColor:buttonBorderColor,
      borderStyle: 'solid',
      flex:1,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderBottomLeftRadius:10,
      
  },
  buttonRight:{
      padding:10,
      borderLeftWidth:1,
      borderTopWidth:1,
      borderColor:buttonBorderColor,
      borderStyle: 'solid',
      flex:1,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderBottomRightRadius:10,
  },


  info:{
    marginRight:5
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    textAlign:"center",
    color:"#rgba(72,128,237,1)"
  },
  content:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"column",
    marginLeft:5,
    marginRight:5,
    width:"100%"
  },
  message:{
    fontFamily:"Arial",
    fontSize:15,
    margin:10,
    color:"rgba(72,128,237,1)"
  },

dialogHeader:{
  backgroundColor:"rgba(255,255,255,1)",
  width:"100%",
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
  height:50,
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"

},
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    width:"100%",
    marginTop:10,
    backgroundColor:"rgba(72,128,237,1)",
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10
  },

  buttonText:{
    color:"white",
    margin:5,
    fontSize:20,
    fontFamily:"Futura-Medium",


  },
  inputsContainer:{
        width:"90%",
        marginTop:5
  },
  inputContainer:{
         width:"90%",
         height:40,
         marginBottom:5,

  },
  endSpace:{
    height: 80,
    width:"100%",
  }

};
if(deviceDetector.isIphone()){
      styles.container.top=25;
}
if(deviceDetector.isAndroid()){
    styles.button.borderWidth=0;
    styles.buttonLeft.borderWidth=0;
    styles.buttonRight.borderWidth=0;
}

export {styles, deviceDetector};
