import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import {globalStyles} from "./styles";
import RenderText from "./RenderText";

import ReactMarkdown from "react-markdown";



export default class DisplayBlockText extends Component{
      render(){
        var mdClassName="mdText";
        if(this.props.mdTextClass){
          mdClassName=this.props.mdTextClass;
        }
        if(this.props.content){
          return(
            <div className="row top-margin-md" >

              <div className="col-md-12">
                <h2 className="section-heading">
                      {this.props.title}
                </h2>
                {this.props.content.map((p,index)=>{
                    if(typeof p==="string"){
                      if(p.match("^```")){
                        return(<h3 className="section-subheading text-muted bottom-margin-sm" key={index}>
                            <ReactMarkdown source={p} className="codeLine"/>
                        </h3>);
                      }
                      else{
                        return(<h3 className="section-subheading text-muted bottom-margin-sm" key={index}>
                            <ReactMarkdown source={p} className={mdClassName}/>
                        </h3>);
                      }

                    }
                    else{
                      return(<h3 className="section-subheading text-muted bottom-margin-sm" key={index}>
                          <ReactMarkdown source={p.content} className={p.className}/>
                      </h3>);
                    }

                   })
                }
              </div>
            </div>

          );
        }
        else{
          return null;
        }


      }
}
