import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";

export  default class DisplayContent extends Component {
  renderAsSpan(content,index){
        return(
            <span key={index}>{content}</span>
        );
  }
    renderItem(item, index){
        var lineStyle=styles.lineStyle;
        if(this.props.lineStyle){
          lineStyle=this.props.lineStyle;
        }

        if(typeof item==='object'){
              if(Array.isArray(item)){
                      return(
                        <div style={lineStyle} key={index}>
                              {item.map(this.renderItem.bind(this))}
                       </div>
                       );

              }
              else if(item.type==='a'){
                return (
                    <a href={item.href} style={this.props.linkStyle} key={index}>
                          {this.renderItem(item.content)}
                    </a>
                );
              }
              else if(item.type==='div'){
                return (
                    <div className={item.className} key={index}>
                          {this.renderItem(item.content)}
                    </div>
                );
              }


              else if(item.type==='line'){
                    return (
                        <div style={lineStyle} key={index}>
                              {this.renderItem(item.content)}
                        </div>
                    );
              }
              else if(item.type==='image'){
                    return (
                        <img style={this.props.imageStyle} src={item.src} key={index}/>
                    );
              }

              else if(item.type==='span'){
                    return (
                        <span key={index} className={item.className}>
                              {item.content}
                        </span>
                    );
              }
              else if(item.type==="splitSpan"){
                      return(
                        <div className={item.className} key={index}>
                              {item.content.split().map(this.renderAsSpan.bind(this))}
                        </div>
                      );
              }
              else{
                return null;
              }
        }
        else if(typeof item ==='string'){
          return(
            <div style={lineStyle} key={index}>
                  {item}
            </div>
          );
        }
        else{
          return null;
        }
    }
    render(){
        return this.renderItem(this.props.content);
    }

}
