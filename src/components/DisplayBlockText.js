import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import {globalStyles} from "./styles";
import RenderText from "./RenderText";

import ReactMarkdown from "react-markdown";



export default class DisplayBlockText extends Component{
      render(){
        if(this.props.content){
          return(
            <div className="row top-margin-md">
              <h2 className="section-heading">
                    {this.props.title}
              </h2>
              {this.props.content.map((p,index)=>{
                  return(<h3 className="section-subheading text-muted bottom-margin-sm" key={index}>
                      <ReactMarkdown source={p}/>
                  </h3>);
                 })
              }
            </div>
          );
        }
        else{
          return null;
        }


      }
}
