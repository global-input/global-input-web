import {deviceDetector} from "../../components/menu/styles";


var styleData={

  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  header:{
    position:"absolute",
    minHeight: 25,
    display: "flex",
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    backgroundColor: 'rgba(255,255,255,0)',
    width:"100%"
  },
  titleContainer:{
    display: "flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center"
  },
  titleText: {
     fontSize: 20,
     fontWeight: 'bold',
     fontFamily: 'Futura-Medium',
     color:"rgba(72,128,237,1)"
   },
   buttonContainer:{
     padding:4,
     margin:2
   },
   lookingContainer:{
     display: "flex",
     flexDirection: 'row',
     justifyContent:"center",
     alignItems:"center",
     width:"80%"
   },

   lookingText:{
     width:"100%",
     backgroundColor: 'transparent',
     fontSize:14,
     color:"rgba(72,128,237,1)",
     textAlign:"center"
   },
   helpContainer:{
     backgroundColor: 'transparent',
     width:"auto",
     display:"flex",
     flexDirection:"row",
     justifyContent:"flex-end",
     alignItems:"flex-start",
     width:"100%",
     marginRight:25
   },


   footer:{
        backgroundColor: '#FFFFFF',
        height: 30,
        display: "flex",
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        width:"100%",
        position:"absolute",
        bottom:30,
        left:30,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width:"100%"
   },
   markerContainer:{
     flex: 1,
     display:"flex",
     flexDirection:"column",
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'transparent'
   },
   marker:{
        height: 250,
        width: 250,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(72,128,237,1)',        
        borderRadius: 15,
        backgroundColor: 'transparent',
        padding:0,
        marginTop:20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
   },
   codeDisplayContainer:{
     margin:0,
     padding:0,
     width:"100%",
     height: 190,
     backgroundColor: 'transparent',
     position:"absolute",
     bottom:80,
     display: "flex",
     flexDirection: 'column',
     justifyContent:"flex-end",
     alignItems:"center",
   },
   codeDisplayContent:{
     width:"95%",
     height:"100%",
     padding:0,
     backgroundColor: 'rgba(72,128,237,1)',
     borderWidth:0,
     borderRadius: 10,
     borderStyle: 'solid',
     display: "flex",
     flexDirection: 'column',
     justifyContent:"flex-start",
     alignItems:"center",
   },
   codeDisplayHeader:{
      minHeight: 25,
      display: "flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding:10
   },
   codeDisplayTitle:{
      color:"white",
   },
   condeDisplayCodeContent:{
      flex:1,
      backgroundColor: 'rgba(255,255,255,1)',
      width:"100%",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderStyle: 'solid',
      padding:10,
      overflow: "auto",
      margin:0,
   },
   codeDisplayText:{
     color:'rgba(72,128,237,1)'
   }


}
var markerSizeCalculated=deviceDetector.calculateMarkerSize();
if(markerSizeCalculated>10){
        styleData.marker.height=styleData.marker.width=markerSizeCalculated;
}
if(deviceDetector.isAndroid()){
    styleData.header.marginTop=0;
}
else if(deviceDetector.isIphoneX()){
    styleData.header.marginTop=40;
}
styleData.headerLandscape=Object.assign({},styleData.header,{
    marginTop:20
});
styleData.titleContainerLandscape=Object.assign({},styleData.titleContainer,{
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"flex-start",
    paddingLeft:5,
    width:"100%"
});



styleData.markerContainerLandscape=Object.assign({},styleData.markerContainer,{
    paddingTop:10
});
styleData.markerContainerOnMessage=Object.assign({},styleData.markerContainer,{
    paddingTop:10,
    justifyContent:"flex-start"
});
styleData.markerContainerOnMessageLandscape=Object.assign({},styleData.markerContainerOnMessage,{
    paddingTop:10,
    justifyContent:"flex-start"
});
if(deviceDetector.isIphoneX()){
  styleData.markerContainerOnMessage.paddingTop=100;
}


styleData.helpContainerLandscape=Object.assign({},styleData.helpContainer,{
    paddingRight:20,

});

styleData.titleTextSmall=Object.assign({},styleData.titleText,{
    fontSize:14,
});

styleData.codeDisplayContentLandscape=Object.assign({},styleData.codeDisplayContent,{
    height:"50%",
    width:"80%"
});





const styles = styleData;


const progressStyle={
    width:"100%",
    height:"10%",
    borderColor: 'rgba(102, 102, 0,1)',
    borderStyle: 'solid',
    borderBottomWidth:1,
}

export {styles,deviceDetector,progressStyle};
