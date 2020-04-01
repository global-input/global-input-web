import styleMatchingScreenSize from "./styleMatchingScreenSize";
export const styles = {

  pageContainer: {
    display: "flex",  
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#5291CD",
    width: "100%"    
  },
  pageContent: {
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    
  },

  bodyContent: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",    
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    fontSize: 22,
    color: "#5291CD",
    marginBottom: "20",
    marginLeft: "4vw"
  },
  playHeadInfo: {
    fontSize: 20,
    color: "#5291CD",
  },

  videoContainer: {
    position: "relative"
  },
  barcodeContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(200,200,200,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  barcode: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  reconnectConnectainer: {
    width: "100%"
  },
  reconnectButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  videoContainer: {
    position: "relative"
  },
  paragraph: {
    get: styleMatchingScreenSize,
    default: {
      fontSize: 16,
      display: "block",
      marginBottom: 20,
      marginTop: 20,
      color: "#5291CD",
      maxWidth:900
      
    },
    mobile: {
      fontSize: 16,
    }
  },
  link: {
    fontWeight: 50,
    color: "#6666ff"
  },

  errorMessage:{
    get:styleMatchingScreenSize,
    default:{
      fontSize:16,
      display:"block",
      marginBottom:20,
      marginTop:20,
      color:'red',
    },
    mobile:{
      fontSize:16,
    }
  },


  codeContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    width:"80%",
    paddingLeft:10
  },
  code:{
    backgroundColor:'rgba(169,200,230,0.1)',
    overflow:'scroll',
    width:"100%",
    color:"#5291CD",
  },

  concept:{
    borderBottomStyle:"dotted",
    borderBottomColor:'black',
    borderBottomWidth:1
  },
  
  form:{
          row:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            width:"90%"       
          },
          label:{
            color:"#5291CD",
            position:"relative",        
            top:+10        
          },
          input:{
              width:"100%"
          },
          textArea:{
            get:()=>{
              return{
                width:"100%",
                minHeight:200,
                border:"1px solid #888888"
              }
            }
        
          },
          textButton:{
            backgroundColor:"#5291CD",
            borderRadius:5,
            margin:"5vw",
            color:"white",
            padding:10,
            minWidth:150,
         },
 },
 canvas:{    
    backgroundColor:"#FFFFFF",
    borderRadius: 25,
 },
 contentContainer:{
  left:{
    get:styleMatchingScreenSize,
    default:{      
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",      
      width:'100%',
      padding:30,
    }
  },
  center:{
    get:styleMatchingScreenSize,
    default:{      
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",      
      width:'100%',
      padding:30,
    }
  },

       
},

 
 
   
};




