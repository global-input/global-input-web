import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/index.css";

import {textValues,images} from  "../configs";




import {styles} from "./styles";
import {globalStyles} from "../components/styles";



export  default class ScrollButton extends Component {

  scrollDocumentOffsetTop(element){
     return element.offsetTop + ( element.offsetParent ? this.scrollDocumentOffsetTop(element.offsetParent) : 0 );
  }
  gotoIntroduction(){
       var scrollElement=document.getElementById(this.props.scrollTo);
             if(scrollElement){
               var top=this.scrollDocumentOffsetTop(scrollElement)-(window.innerHeight / 2 );
               window.scrollTo(0,top);
             }
  }
  render() {

    return (
                 <div style={globalStyles.scrollToButton}>
                   <button type="button" className="btn btn-primary" onClick={this.gotoIntroduction.bind(this)}>Continue</button>

                 </div>
            );
  }
}
