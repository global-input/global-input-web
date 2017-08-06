import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import SimpleInput from "./SimpleInput";


export default class SimpleInputHome extends Component{
  render(){
    return (


            <div className="introSection">
                Another example is the two-way editing, that you can edit both on computer and mobile at the same time and changes reflected on both screens.

                Click on the following link to check it out, again you need to use the Global Input App to connect your mobile to the app.


                <ul className="menuContainer">
                    <li className="appTitle"><Link to="/global-input-app-example/simpleInput">Simple Input (two way) Example</Link></li>
                </ul>
                <Route path="/global-input-app-example/simpleInput" component={SimpleInput}/>
                <Route path="/global-input-app-example/simpleinput-submit" component={SimpleInputSubmit}/>

              When you enter some text, you may prefer to use both your mobile and computer at the same time, for example, you may find it easier to do copy and paste content from Internet
              on your computer and do other modifications with your mobile etc.
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
