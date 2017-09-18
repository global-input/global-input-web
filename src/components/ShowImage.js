import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import {textValues} from  "../configs";
import {images} from "../configs";

import "./styles/ServiceImage.css";

export default class ShowImage extends Component{

      render(){
          return(
            <div className="serviceImage">
                  <img src={images.globalInput}/>
            </div>


          );

      }
}
