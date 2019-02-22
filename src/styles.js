
let screeMedia={
  narrawScreen:null,
  narrow:function(){
      if(!this.narrawScreen){
        this.narrawScreen=window.matchMedia(`(min-width: 800px)`)
      }
      return this.narrawScreen.matches;
  },
};
export function styleWithNarrow(){
  if(screeMedia.narrow()){
       return this.desktop;
  }
  else{
    return this.mobile;
  }
}
