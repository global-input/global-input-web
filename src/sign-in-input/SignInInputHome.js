import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {textValues} from  "../configs";

import SignInInput from "./SignInInput";
import {ShowServiceLink,ServiceIntroduction,DisplayBlockText} from "../components";
import SignInInputSource  from "../source-codes/SignInInput";
import SignInInputSummary from "../source-codes/SignInInputSummary";

export default class SignInInputHome extends Component{
  render(){

    return (


            <div className="serviceContainer">
               <ServiceIntroduction title={textValues.signin.title} content={textValues.signin.content1}/>
               <ShowServiceLink serviceURI={textValues.signin.link.uri} linkText={textValues.signin.link.text}/>
                <div>
                              <Route path={textValues.signin.link.uri} component={DisplayService}/>
                              <Route path={textValues.signin.complete.uri} component={LoginComplete}/>
                </div>



            </div>


      )
    }
}

class DisplayService extends Component{
  login(username,password){
      this.props.history.push(textValues.signin.complete.uri);
  }
  render(){
    return(
       <div>
            <SignInInput login={this.login.bind(this)}/>
            <SignInInputSource/>
            <DisplayBlockText content={textValues.signin.content2}/>
            <SignInInputSummary/>
      </div>
    );

  }
}






class LoginComplete extends Component{
  render(){
    return(
      <div className="loginComplete">

           <DisplayBlockText content={textValues.signin.complete.content1}/>

      </div>
    );

  }
}
