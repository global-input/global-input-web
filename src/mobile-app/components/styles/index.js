
var styles = {
    header:{
      margin:8,
      backgroundColor: '#FFFFFF',
      minHeight: 30,
      display: "flex",
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
      marginTop:25
    },

    circleButton:{
	         borderRadius: 26,
	         width: 52,
	         height: 52,
           backgroundColor:"rgba(29,20,20,0.5)",
           borderWidth:1,
           borderColor:"black",
           borderStyle: 'solid',
           display:"flex",
           flexDirection:"row",
           justifyContent:"center",
           alignItems:"center"

     },
     iconContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        marginTop:5
     },
     iconText:{
       color:"blue",
       fontWeight:"normal",
       fontSize:16,
       fontFamily:"Futura-Medium"
     },
     circleText:{
       backgroundColor:"#rgba(0,0,0,0)",
       color:"#FFFFFF",
       fontWeight:"bold",
       fontSize:16,
       fontFamily:"Futura-Medium"
     },
    titleText: {
       fontSize: 20,
       fontWeight: 'bold',
       fontFamily: 'Futura-Medium',
       textAlign:"center"
     },

    buttonContainer:{
      padding:4,
      margin:2
    },

  footer:{

       backgroundColor: '#FFFFFF',
       display: "flex",
       flexDirection: 'row',
       justifyContent:"flex-start",
       alignItems:"center",
       position:"absolute",
       width:"100%",
       bottom:0,
       height:50,



  },

  buttonText:{
    color:"blue",
    margin:20
  },
  textBarContainer:{
    margin:0,
    backgroundColor: 'rgba(226,228,230,1)',
    maxHeight: 200,
    display: "flex",
    flexDirection: 'column',
    justifyContent:"flex-start",
    alignItems:"flex-start",
    position:"absolute",
    width:"95%",
    bottom:70,
    borderWidth:1,
    borderStyle: 'solid',
    borderColor:"black",
  },
  textBarHeader:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
  },
  textBarTitleText:{
    marginLeft:5,
    marginRight:5
  },
  textBarContentContainer:{
    flex:1,
    margin:4,
  },
  textBarText:{
    fontSize: 20,
    marginLeft:5,
    marginRight:5
  },

  messageContainer:{
       position:"absolute",
       bottom:175,
       display:"flex",
       flexDirection:"row",
       justifyContent:"flex-start",
       alignItems:"flex-start",
       margin:10,

       backgroundColor: 'rgba(0,0,0,0.5)',
       width:"95%",
  },

  messageText:{
    fontSize: 20,
    color:"#FFFFFF",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  inputEye:{
    marginRight:40,
    marginBottom:7
  },
  subtitle:{
      backgroundColor: '#FFFFFF',
      display: "flex",
      flexDirection: 'row',
      justifyContent:"flex-end",
      alignItems:"center",
      width:"100%"
  },
  subtitleText:{
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium'
  },
  subtitleContainer:{
    width:"100%",
    paddingRight:20,
    marginBottom:10
  },



  urlContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:"100%"
  },

  textBlockContainer:{
    marginLeft:5
  },
  blockText:{
      fontFamily: 'Futura-Medium',
      fontSize:14
  },
  blockParagraph:{
    marginBottom:5
  },
  blockTitleContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    marginLeft:5
  },
  blockTitle:{
    fontFamily: 'Futura-Medium',
    fontSize:16,
    fontWeight:"bold"
  }
};


export {styles};
