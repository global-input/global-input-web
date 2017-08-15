import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import SimpleInput from "./SimpleInput";
import {textValues} from  "../configs";
import {ShowServiceLink,ServiceIntroduction,DisplayBlockText} from "../components";

import SimpleInputSource from "../source-codes/SimpleInput";
import SimpleInputSummary from "../source-codes/SimpleInputSummary";

export default class SimpleInputHome extends Component{
  render(){
    return (
      <div className="serviceContainer">
           <ServiceIntroduction title={textValues.simpleInput.title} content={textValues.simpleInput.content1}/>
           <ShowServiceLink serviceURI={textValues.simpleInput.link.uri} linkText={textValues.simpleInput.link.text}/>
            <div>
                          <Route path={textValues.simpleInput.link.uri} component={DisplayService}/>
                          <Route path={textValues.simpleInput.complete.uri} component={EditComplete}/>
            </div>



        </div>






      )
    }
}

class DisplayService extends Component{
  onComplete(){
    this.props.history.push(textValues.simpleInput.complete.uri);
  }

  render(){
    return(
       <div>
        <SimpleInput onComplete={this.onComplete.bind(this)}/>
        <SimpleInputSource/>
        <DisplayBlockText content={textValues.simpleInput.content2}/>
        <SimpleInputSummary/>


      </div>
    );

  }
}


class EditComplete extends Component{
  render(){
    return(
      <div className="editComplete">

           <DisplayBlockText content={textValues.simpleInput.complete.content1}/>

      </div>
    );

  }
}
