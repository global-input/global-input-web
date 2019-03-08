import React from 'react';
import HomeScreen from "../home-screen";
export default class ContactUsScreen extends React.Component{
  static pagePath="/global-input-app/contact-us"
  render(){
    return(
        <HomeScreen scrollTo="contactUs"/>
      );
  }


}
