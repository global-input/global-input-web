
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
  card:{
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
  title:{
          fontSize:"2vw",
          display:"flex",
          flexDirection:"row",
          width:"100%",
          justifyContent:"center"
  },
  content:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    paddingLeft:30,
    paddingTop:20
  },
  iconStyle:{
    marginRight: 10
  },



};
