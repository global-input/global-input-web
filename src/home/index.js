import React, {Component} from 'react'



import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage} from "../components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import DemoInput from "./DemoInput";
import {styles} from "./styles";
export  class Home extends Component {
  constructor(props){
      super(props);
      this.state={menuPressed:false};
  }

  menuPressed(){
      console.log("pressed");
      this.setState(Object.assign({},this.state,{menuPressed:!this.state.menuPressed}));
  }
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
    var responsiveMenuClass="topnav";
   if(this.state.menuPressed){
       responsiveMenuClass="topnav responsive";
   }

    return (
      <div className="container-fluid">
          <div style={styles.headerSection}>

               <div className={responsiveMenuClass} id="myTopnav">
                <Link to={textValues.topmenu.home.link}>
                      {textValues.topmenu.home.linkText}
                </Link>
                <Link to={textValues.topmenu.qrprinting.link}>
                      {textValues.topmenu.qrprinting.linkText}
                </Link>
                <a href={textValues.topmenu.contactUs.link}>

                      {textValues.topmenu.contactUs.linkText}
                </a>


                 <a className="icon" onClick={this.menuPressed.bind(this)}>&#9776;</a>
               </div>

               <div style={styles.fromStore}>
                  <a href={textValues.urls.playstore}>
                   <img src={images.playstore} style={styles.storeImage}/>
                  </a>
                  <a href={textValues.urls.appstore}>
                   <img src={images.appstore} style={styles.imageStore}/>
                   </a>


               </div>

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
