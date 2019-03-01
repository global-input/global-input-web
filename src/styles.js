
let screeMedia={
  screen800:null,
  screen1440:null,
  screen600:null,
  biggerThan800:function(){
      if(!this.screen800){
        this.screen800=window.matchMedia(`(min-width: 800px)`)
      }
      return this.screen800.matches;
  },
  biggerThan1440:function(){
      if(!this.screen1440){
        this.screen1440=window.matchMedia(`(min-width: 1440px)`)
      }
      return this.screen1440.matches;
  },
  biggerThan600:function(){
      if(!this.screen600){
        this.screen600=window.matchMedia(`(min-width: 600px)`)
      }
      return this.screen600.matches;
  },



};
export function styleMatchingScreenSize(){
  var that=this;  
  var createScreenStyle=function(specStyle){
      var st={};
      if(that.default){
            st=Object.assign(st,that.default);
      }
      if(specStyle){
            st=Object.assign(st,specStyle);
      }
      return st;
  };
  if(!this.processed){
      this.processed=true;
      if(this.desktop){
        this.desktop=createScreenStyle(this.desktop);
      }
      else{
          if(this.default){
              this.desktop=this.default;
          }
          else{
            this.desktop=this.mobile;
          }
      }
      if(this.mobile){
        this.mobile=createScreenStyle(this.mobile);
      }
      else{
          if(this.default){
              this.mobile=this.default;
          }
          else{
            this.mobile=this.desktop;
          }
      }
      if(this.bigScreen){
          this.bigScreen=createScreenStyle(this.bigScreen);
      }
      else{
        this.bigScreen=this.desktop;
      }
      if(this.smallScreen){
          this.smallScreen=createScreenStyle(this.smallScreen);
      }
      else{
        this.smallScreen=this.mobile;
      }
  }
  if(screeMedia.biggerThan1440()){
      return this.bigScreen;
  }
  else if(screeMedia.biggerThan800()){
          return this.desktop;
  }
  else if(screeMedia.biggerThan600()){
          return this.smallScreen;
  }
  else{
    return this.mobile;
  }
}
