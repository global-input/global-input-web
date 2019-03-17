import React from 'react';
import HomePage from "../home-page";

export default class ContactUsPage extends React.Component{
  componentDidMount(){
    this.scrollTo("contactUs")


  }
  componentDidUpdate(){
    this.scrollTo("contactUs")
  }

  render(){
    return(
        <HomePage/>
      );
  }

  scrollTo(elementId){                        
      var elmnt = document.getElementById(elementId);

      if(elmnt){
               window.scrollBy({top: -70,behavior: "smooth"});
               elmnt.scrollIntoView();
      }
 }
}
