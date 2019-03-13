import React from 'react';
import HomeScreen from "../home-screen";
export default class ContactUsScreen extends React.Component{  
  render(){

    return(
        <HomeScreen/>
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
