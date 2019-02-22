
let screeMedia={
  narrawScreen:null,
  narrow:function(){
      if(!this.narrawScreen){
        this.narrawScreen=window.matchMedia(`(min-width: 800px)`)
      }
      return this.narrawScreen.matches;
  },
};
var styleWithNarrow=function(){
  if(screeMedia.narrow()){
       return this.desktop;
  }
  else{
    return this.mobile;
  }
}



export var styles={
  cardContainer:{
    desktop:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      width:"100%"
    },
    mobile:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"100%"
    },
    get:styleWithNarrow

 },
 card:{
      desktop:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        backgroundColor:"#FFFFFF",
        width:"30%",

        height:300,
        borderRadius:25,
        paddingTop:30
      },
      mobile:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        backgroundColor:"#FFFFFF",
        width:"100%",

        height:300,
        borderRadius:25,
        paddingTop:30,
        marginBottom:30
      },
      get:styleWithNarrow


 },
 title:{
        desktop:{
           fontSize:"2vw",
           display:"flex",
           flexDirection:"row",
           width:"100%",
           justifyContent:"center"
        },
        mobile:{
          fontSize:"6vw",
          display:"flex",
          flexDirection:"row",
          width:"100%",
          justifyContent:"center"
        },
        get:styleWithNarrow
 },
 content:{
   desktop:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"flex-start",
     paddingLeft:20,
     paddingRight:20,
     paddingTop:20,
     fontSize:"1.3vw",
     width:"100%"
   },
   mobile:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"flex-start",
     paddingRight:20,
     paddingLeft:20,
     paddingTop:20,
     width:"100%",

     fontSize:"4vw",
   },
   get:styleWithNarrow

 },
 description:{
    marginBottom:10
 },
 iconStyle:{
   marginRight: 10
 },
 linkText:{
     default:{
         color:"#888888",
         fontSize:20,
         width:"100%",
         whiteSpace:"nowrap",

     },
     hover:{
       color:"blue",
       boxShadow:"0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
       fontSize:20,
       whiteSpace:"nowrap",
       width:"100%"
     }
 }



};
export var images={
    watchVideo:require('./images/watch-video-icon.png'),
    paper:require('./images/paper.png'),
    extension:require('./images/extension-icon.png'),
    demo:require('./images/demo-icon.png'),
}
