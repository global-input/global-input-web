import React, {Component} from 'react'

import {textValues,images} from  "../configs";
import ReactMarkdown from "react-markdown";






export default class ContetAndLabel extends Component{
  render(){
    return(
    <div className="contetAndLabel">
      <div className="contetAndLabelRecord">
         <div className="contetAndLabelLabel">
            Content:
          </div>

           <input type="text" onChange={(evt) => {
                this.props.setContent(evt.target.value);
            }} value={this.props.content} size="30"/>
      </div>
        <div className="contetAndLabelRecord">
          <div className="contetAndLabelLabel">
            Label:
          </div>
             <input type="text" onChange={(evt) => {
                  this.props.setLabel(evt.target.value);
              }} value={this.props.label} size="30"/>
        </div>
    </div>
  );
  }

}
