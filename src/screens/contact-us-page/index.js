import React from 'react';
import HomePage from "../home-page";
export default class ContactUsPage extends React.Component{
  render(){

    return(
        <HomePage/>
      );
  }
  componentDidMount(){
    this.processScrollTo();
  }
  componentDidUpdate(prevProps) {
    this.processScrollTo();
  }


  processScrollTo(){
      setTimeout(function(){
            var elmnt = document.getElementById("contactUs");
            if(elmnt){
                elmnt.scrollIntoView();
                window.scrollBy({top: -70,behavior: "smooth"});
            }
            else{
              console.log("not found")
            }

      },500);


  }

}
