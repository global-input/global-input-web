
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
     paddingLeft:30,
     paddingTop:20,
     fontSize:"1.3vw",
   },
   mobile:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"flex-start",
     paddingLeft:30,
     paddingTop:20,
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



};
