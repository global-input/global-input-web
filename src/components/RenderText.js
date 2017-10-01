import React, {Component} from 'react'
import ReactMarkdown from "react-markdown";

export default class RenderText extends Component{
      render(){
        if(this.props.content){
          return(
            <div className={this.props.containerClass}>
              <h2 className={this.props.titleClass}>
                    {this.props.title}
              </h2>
              {this.props.content.map((p,index)=>{
                  return(<h3 className={this.props.contentClass} key={index}>
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
