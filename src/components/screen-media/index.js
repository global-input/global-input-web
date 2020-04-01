import React from 'react';
export let screenMedia={
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
  getScreenStyle:function(defaultStyle,specificStyle, target, name, namedState){

      if(!target.computedStyles){
        target.computedStyles=[];
      }
      var cStyle=null;
      if(namedState && target[namedState]){
          cStyle=target.computedStyles[name+"_"+namedState];
      }
      else{
        cStyle=target.computedStyles[name];
      }
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
      if(namedState && target[namedState]){
              var namedStyle=target.computedStyles[name+"_"+namedState];
              if(namedStyle){
                    return namedStyle;
              }
              namedStyle=Object.assign({},cStyle,target[namedState]);
              target.computedStyles[name+"_"+namedState]=namedStyle;
              return namedStyle;
      }
      else{
          target.computedStyles[name]=cStyle;
          return cStyle;
      }
  }
};
export function styleMatchingScreenSize(namedState){
        const computeIfMatch=(item,itemName,defaultSize,op)=>{
            if(!item){
                return null;
            }
            let computedStyle=null;
            let cSize=defaultSize;
            if(item.compareSize){
                cSize=item.compareSize;             
            }

            if(op){
                if(!screenMedia.biggerThan(cSize)){
                    computedStyle=screenMedia.getScreenStyle(this.default,item,this,itemName,namedState);
                }                
            }
            else if(screenMedia.biggerThan(cSize)){
                computedStyle=screenMedia.getScreenStyle(this.default,item,this,itemName,namedState);
            }
            if(computedStyle && computedStyle.compareSize){
                delete computedStyle.compareSize;
            }
            return  computedStyle;
        }
        let computedStyle=computeIfMatch(this.bigScreen,"bigScreen",1440);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.screen1245,"screen1245",1245);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.screen1080,"screen1080",1080);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.smallScreen,"smallScreen",800);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.desktop,"desktop",600);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.narrowMobile,"narrowMobile",361,true);
        if(computedStyle){
            return computedStyle;
        }
        computedStyle=computeIfMatch(this.mobile,"mobile",660,true);
        if(computedStyle){
            return computedStyle;
        }        
        if(namedState){
            return screenMedia.getScreenStyle(this.default,this.default,this,"default",namedState);
        }
        else{
            return this.default;
        }

}

export const withResponsiveComponent=(WrappedComponent, data)=>{
      return class extends React.Component{
          constructor(props){
                  super(props);
                  this.onWindowResize=this.onWindowResize.bind(this);

          }
          componentDidMount() {
                window.addEventListener("resize", this.onWindowResize);
                this.scrollTo(data);
          }
         componentWillUnmount() {
             window.removeEventListener("resize", this.onWindowResize);
         }
         onWindowResize(){
            this.forceUpdate();
         }
         render() {
                return <WrappedComponent  screenMedia={screenMedia} {...this.props}/>;
         }
         scrollTo(data){

            if(data && data.scrollTo){

              var elmnt = document.getElementById(data.scrollTo);
              if(elmnt){
                       window.scrollBy({top: -70,behavior: "smooth"});
                       elmnt.scrollIntoView();
              }
            }
        }

      }
}


export const withScrollToTop=(WrappedComponent, scrollTo)=>{
      return class extends React.Component{
          componentDidMount() {
                  this.scrollTo(scrollTo);
          }
          scrollTo(elementId){
              var elmnt = document.getElementById(elementId);

              if(elmnt){
                       window.scrollBy({top: -70,behavior: "smooth"});
                       elmnt.scrollIntoView();
              }
         }
         render() {
                return <WrappedComponent  {...this.props}/>;
         }
      };
}
