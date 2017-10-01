import React, {Component} from 'react'
import ReactMarkdown from "react-markdown";
import {textValues} from  "../configs";

export default class ContactUsButton extends Component{
      render(){
          return(
            <div className="container contactUsRow">
                 <div className="row">
                    <div className="col-lg-12 text-center">
                        <a href={textValues.topmenu.contactUs.link} className="btn btn-xl">{textValues.topmenu.contactUs.linkText}</a>
                    </div>
                </div>

            </div>
          );
      }
}
