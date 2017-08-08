import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import SimpleInput from "./SimpleInput";
import {textValues} from  "../configs";

export default class SimpleInputHome extends Component{
  render(){
    return (


            <div className="introSection">
              <div>
                {textValues.simpleInput.content.p1}
              </div>






                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/simpleInput">{textValues.simpleInput.title}</Link></li>
                </ul>
                <Route path="/global-input-app-example/simpleInput" component={SimpleInput}/>
                <Route path="/global-input-app-example/simpleinput-submit" component={SimpleInputSubmit}/>

                {textValues.simpleInput.content.p2}
            </div>

      )
    }
}


 class SimpleInputSubmit extends Component {

  render() {

    return (
      <div className="simpleInputFinishedContainer">
          <div className="simpleInputFinishedText">
            Simple Input Example completed
          </div>

      </div>
    );
  }
}
