import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import DisplayPrePairing from "./DisplayPrePairing";
import {ShowServiceLink,ServiceIntroduction,DisplayBlockText} from "../components";
import {textValues} from  "../configs";
import DisplayPrePairingSource from "../source-codes/DisplayPrePairing";

export default class DisplayPrePairingHome extends Component{
  render(){
    return (

              <div className="serviceContainer">
                  <ServiceIntroduction title={textValues.pairing.title} content={textValues.pairing.content1}/>
                  <ShowServiceLink serviceURI={textValues.pairing.link.uri} linkText={textValues.pairing.link.text}/>
                  <Route path={textValues.pairing.link.uri} component={DisplayService}/>
            </div>

      )
    }
}

class DisplayService extends Component{

  render(){
    return(
       <div>
            <DisplayPrePairing/>
            <DisplayPrePairingSource/>
      </div>
    );

  }
}
