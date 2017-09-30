import React, {Component} from 'react'



import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage,DownloadApp} from "../components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import DemoInput from "./DemoInput";
import {styles} from "./styles";
import {TopMenu} from "../menu";
export  class Home extends Component {


  scrollDocumentOffsetTop(element){
     return element.offsetTop + ( element.offsetParent ? this.scrollDocumentOffsetTop(element.offsetParent) : 0 );
  }
  gotoIntroduction(){
       var scrollElement=document.getElementById("intro");
             if(scrollElement){
               var top=this.scrollDocumentOffsetTop(scrollElement)-(window.innerHeight / 2 );
               window.scrollTo(0,top);
             }
  }
  render() {

    return (
      <div className="container-fluid">
          <div style={styles.headerSection}>
            <TopMenu selected="home"/>
               <DownloadApp actionText={textValues.home.qrscan}/>

               <DemoInput/>
                 <div style={styles.toApply}>
                   <a onClick={this.gotoIntroduction.bind(this)}>
                    <img src={images.enableGlobalInput} style={styles.enableButton}/>
                   </a>
                 </div>

          </div>

          <div className="row" >
            <div className="col-sm-6">

              <DisplayBlockText title={textValues.home.first.title} content={textValues.home.first.description}/>

            </div>
            <div className="col-sm-6"> <img src={images.globalInputBanner}/></div>
          </div>

          <div className="row" >
                <div className="col-sm-6"> <img src={images.endToEnd}/></div>
            <div className="col-sm-6">

                <DisplayBlockText title={textValues.home.second.title} content={textValues.home.second.description}/>

            </div>

        </div>


          <div className="homeContainer">

            <div className="pageTitleContainer">
                <div className="pageTitleBlock">

                </div>
            </div>
           <div id="intro">

              <DisplayBlockText content={textValues.home.content1}/>
          </div>



          </div>




      </div>
            );
  }
}
