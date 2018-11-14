import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";
import DisplayVideo from "./DisplayVideo";

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
    renderListItem(content, index){
      if(typeof content==='object'){
          return(
            <li key={index} style={styles.listItemStyle}>{this.renderObject(content,this.ITEM_TYPE.SPAN)}</li>
          );
      }
      else{
          return(
            <li key={index} style={styles.listItemStyle}>{content}</li>
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
                return(
                  <div style={this.getLineStyle()} key={key}>
                      {this.renderObject(item)}
                  </div>
                );
              }
      }
      else if(item.type==='ul'){
            if(typeof key==='undefined'){
                return(
                  <ul>
                    {item.content.map(this.renderListItem.bind(this))}
                  </ul>
                );
            }
            else{
                return(
                  <ul key={key}>
                    {item.content.map(this.renderListItem.bind(this))}
                  </ul>
                );
            }
      }
      else if(item.type==='ol'){
            if(typeof key==='undefined'){
                return(
                  <ol>
                    {item.content.map(this.renderListItem.bind(this))}
                  </ol>
                );
            }
            else{
                return(
                  <ol key={key}>
                    {item.content.map(this.renderListItem.bind(this))}
                  </ol>
                );
            }
      }
      else if(item.type==='a'){
        return (
            <a href={item.href} style={this.props.linkStyle} key={key} rel="noopener noreferrer" target="_blank">
                  {this.renderItem(item.content, this.ITEM_TYPE.SPAN)}
            </a>
        );
      }
      else if(item.type==='mailto'){
        return (
            <a href={"mailto:"+item.content} style={this.props.linkStyle} key={key}>
                  {item.content}
            </a>
        );
      }
      else if(item.type==='link'){
        return (
          <Link to={item.link} className={item.className} style={this.props.linkStyle} key={key}>{this.renderItem(item.content, this.ITEM_TYPE.SPAN)}</Link>
        );
      }
      else if(item.type==='scroll'){
        return(
        <a href={'#'+item.to} style={this.props.linkStyle} key={key} onClick={()=>{
              var elmnt = document.getElementById(item.to);
              elmnt.scrollIntoView()
          }}>
              {item.content}
        </a>
      );
      }
      else if(item.type==='component'){
          var component=this.props[item.name];
          if(component){
              return component;
          }
          else{
            return null;
          }
      }

      else if(item.type==='div'){
        return (
            <div className={item.className} key={key}>
                  {this.renderItem(item.content,this.ITEM_TYPE.SPAN)}
            </div>
        );
      }
      else if(item.type==='sub'){
        return(
        <div style={this.props.linkStyle} key={key}>
              <div style={styles.subtitle}>{item.title}</div>
              {this.renderItem(item.content,this.ITEM_TYPE.LINE)}
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
            let imageSrc=item.src;
            if(styles.isMobile() && item.mobile && item.mobile.src){
              imageSrc=item.mobile.src;
            }
            var imageStyle=styles.image;
            if(this.props.imageStyle){
              imageStyle=this.props.imageStyle;
            }

            return (
                <img style={imageStyle} alt={imageSrc} src={imageSrc} key={key}/>
            );
      }
      else if(item.type==='centerImage'){
            let imageSrc=item.src;
            if(styles.isMobile() && item.mobile && item.mobile.src){
              imageSrc=item.mobile.src;
            }
            return (
              <div style={styles.centerImageContainer}>
                  <img style={styles.image} alt={imageSrc} src={imageSrc} key={key}/>
              </div>

            );
      }
      else if(item.type==='video'){
        return (
          <div style={styles.centerImageContainer}>
              <DisplayVideo  video={item.video} defaultImage={item.poster} key={key} muted={true}/>
          </div>

        );
      }


      else if((!item.type) || item.type==='span'){
                  if(typeof item.content ==='object'){
                    return (
                        <span key={key} style={this.getSpanStyle(item)} className={item.className}>
                              {this.renderObject(item.content)}
                        </span>
                    );
                  }
                  else{
                    return (
                        <span key={key} style={this.getSpanStyle(item)} className={item.className}>
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
