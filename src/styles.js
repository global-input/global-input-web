
let screeMedia={
      screenmedias:[],
      biggerThan:function(width){
          var matched=this.screenmedias.filter(s=>s.width===width);
          if(matched.length){
              return matched[0].media.matches;
          }
          const scm={
                width,
                media:window.matchMedia(`(min-width: ${width}px)`)
          };
          this.screenmedias.push(scm);
          return scm.media.matches;
      },
  getScreenStyle:function(defaultStyle,specificStyle, target, name){
      if(!target.computedStyles){
        target.computedStyles=[];
      }
      var cStyle=target.computedStyles[name];
      if(cStyle){
          return cStyle;
      }
      if(specificStyle){
            if(defaultStyle){
                cStyle=Object.assign({},defaultStyle,specificStyle);
            }
            else{
                cStyle=specificStyle;
            }
      }
      else{
          cStyle=defaultStyle;
      }
      target.computedStyles[name]=cStyle;
      return cStyle;
  }
};
export function styleMatchingScreenSize(){
        if(this.bigScreen){

            if(screeMedia.biggerThan(1440)){
                console.log("bigger than 1440");
                return screeMedia.getScreenStyle(this.default,this.bigScreen,this,"bigScreen");
            }
        }
        if(this.screen1245){
            if(screeMedia.biggerThan(1245)){
              return screeMedia.getScreenStyle(this.default,this.screen1245,this,"screen1245");
            }
        }
        if(this.screen1080){
            if(screeMedia.biggerThan(1080)){
              return screeMedia.getScreenStyle(this.default,this.screen1080,this,"screen1080");
            }
        }
        if(this.smallScreen){
            if(screeMedia.biggerThan(800)){
              return screeMedia.getScreenStyle(this.default,this.smallScreen,this,"smallScreen");
            }
        }
        if(this.desktop){
            if(screeMedia.biggerThan(600)){
              return screeMedia.getScreenStyle(this.default,this.desktop,this,"desktop");
            }
        }
        if(this.mobile){
            if(screeMedia.biggerThan(600)){
              return this.default;
            }
            else{
              return screeMedia.getScreenStyle(this.default,this.mobile,this,"mobile");              
            }
        }
        return this.default;
}
