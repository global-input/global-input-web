import React from 'react';
import {screenMedia} from '../screen-media';
export default class ResizableComponent extends React.Component{

      constructor(props){
        super(props);
        this.onWindowResize=this.onWindowResize.bind(this);
      }
      isScreenBiggerThan(size){
        return screenMedia.biggerThan(size);
      }
       componentDidMount() {
           window.addEventListener("resize", this.onWindowResize);
           this.scrollTo(this.props.scrollTo);
       }
       scrollTo(elementId){
            var elmnt = document.getElementById(elementId);
            if(elmnt){
                     window.scrollBy({top: -70,behavior: "smooth"});
                     elmnt.scrollIntoView();
            }
       }
       componentWillUnmount() {
           window.removeEventListener("resize", this.onWindowResize);
       }
       onWindowResize(){

          this.forceUpdate();
       }

}
