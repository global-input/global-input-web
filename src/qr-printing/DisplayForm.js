import React, {Component} from 'react'

import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage} from "../components";

import "./styles/DisplayForm.css"
import ReactMarkdown from "react-markdown";



import ContetAndLabel from "./ContetAndLabel";
import QRCodePropertyFields from "./QRCodePropertyFields";

export default class DisplayForm extends Component{
    render(){
      if(this.props.render){
           return(
                <div className="formContainer">                    
                    <div className="form notForPrinting">
                          <ContetAndLabel setContent={this.props.setContent}
                            setLabel={this.props.setLabel}
                            label={this.props.label} content={this.props.content}/>
                          <QRCodePropertyFields
                              content={this.props.content}
                              size={this.props.size}
                              level={this.props.level}
                              setSize={this.props.setSize}
                              setLevel={this.props.setLevel}
                              printQRCode={this.props.printQRCode}/>
                      </div>
                </div>
           );
         }
         else{
           return null;
         }

    }


}
