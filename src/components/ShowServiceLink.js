import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import {textValues} from  "../configs";
import {images} from "../configs";



class ShowServiceLink extends Component{
      render(){
        if(this.props.location.pathname===this.props.serviceURI){
            return null;
        }
        else{
          return(
          <div className="linkSection">
            <div>{this.props.linkText}</div>
            <div className="arrowContainer">
                <Link to={this.props.serviceURI}>
                  <img src={images.downward}/>
                </Link>
            </div>

          </div>


          );
        }

      }
}
export default withRouter(ShowServiceLink);
