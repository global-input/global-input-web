import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";

export  default class DisplayStaticContent extends Component {
  ITEM_TYPE={
        LINE:0,
        SPAN:1

  }
  render(){
        return this.renderItem(this.props.content,this.ITEM_TYPE.LINE);
  }
  getLineStyle(){

    if(this.props.lineStyle){
      return this.props.lineStyle;
    }
    else{
        return styles.lineStyleMobile;
    }
  }
  getSpanStyle(item){
    if(item.style){
      return item.style;
    }
    else{
      return styles.spanStyle;
    }
  }
  renderItem(content,type,key){
        if(typeof content==='object'){
              return this.renderObject(content,type,key);
        }
        else{
            return this.renderContent(content,type,key);
        }
    }
    renderContent(content,type,key){
          if(type===this.ITEM_TYPE.LINE){
                  return (
                    <div style={this.getLineStyle()} key={key}>{content}</div>
                  );
          }
          else{
              return (
                <span key={key}>{content}</span>
              );
          }
    }
    renderObject(item,type,key){
      if(Array.isArray(item)){
              if(typeof key==='undefined'){
                return item.map((itm,index)=>{
                        return this.renderItem(itm,type,index);
                });
              }
              else{
                  <div style={this.getLineStyle()} key={key}>
                      {this.renderObject(item,type)}
                  </div>
              }
      }
      else if(item.type==='a'){
        return (
            <a href={item.href} style={this.props.linkStyle} key={key}>
                  {this.renderItem(item.content, this.ITEM_TYPE.SPAN)}
            </a>
        );
      }
      else if(item.type==='link'){

        return (
          <Link to={item.link} style={this.props.linkStyle} key={key}>{this.renderItem(item.content, this.ITEM_TYPE.SPAN)}</Link>
        );
      }

      else if(item.type==='div'){
        return (
            <div className={item.className} key={key}>
                  {this.renderItem(item.content,this.ITEM_TYPE.SPAN)}
            </div>
        );
      }


      else if(item.type==='line'){
            return (
                <div style={this.getLineStyle()} key={key}>
                      {this.renderItem(item.content,this.ITEM_TYPE.SPAN)}
                </div>
            );
      }
      else if(item.type==='image'){
            var imageSrc=item.src;
            if(styles.isMobile() && item.mobile && item.mobile.src){
              imageSrc=item.mobile.src;
            }
            return (
                <img style={this.props.imageStyle} src={imageSrc} key={key}/>
            );
      }

      else if((!item.type) || item.type==='span'){
                if(item.className){
                  return (
                      <span key={key} className={item.className}>
                            {item.content}
                      </span>
                  );
                }
                else{
                      return (
                          <span key={key} style={this.getSpanStyle(item)}>
                                {item.content}
                          </span>
                      );
                }

      }
      else if(item.type==="splitSpan"){
              return(
                <div className={item.className} key={key}>
                      {item.content.split().map(this.renderAsSpan.bind(this))}
                </div>
              );
      }
      else{
        return null;
      }
    }
    renderAsSpan(content,key){
         return(
             <span key={key}>{content}</span>
         );
   }


}
