import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

import ReactMarkdown from "react-markdown";
import {styles} from "./styles";



export  default class DisplayTextImage extends Component {

  renderButton(){
      if(this.props.buttonOnPress){
        return(
          <div style={styles.buttonContainer}>
                <button type="button" className="btn btn-primary" onClick={this.props.buttonOnPress}>{this.props.buttonLabel}</button>
          </div>
        );
      }
      else if(this.props.link){
        return(
          <div style={styles.buttonContainer}>
                <Link to={this.props.link} className="btn btn-primary">
                      {this.props.linkText}
                </Link>
          </div>
        );
      }
      else{
        return null;
      }
  }

  renderTextContent(){
    var containerClass="col-md-12";
    if(this.props.image){
        containerClass="col-md-6";
    }
    return(
        <div className={containerClass}>
          <div style={styles.sectionHeading}>
                  {this.props.title}
          </div>
          {this.props.content.map((p,index)=>{
              return(<h3 className="section-subheading text-muted bottom-margin-sm" key={index}>
                          <ReactMarkdown source={p}/>
                     </h3>);
              })
          }
          {this.props.children}
          {this.renderButton()}
        </div>
     );

  }
  renderImage(){
    if(this.props.image){
        return(
          <div className="col-md-6">
              <img src={this.props.image} className="img-responsive"/>
          </div>
        );
    }
  }
  render() {
          if(this.props.reverse){
            return (
                          <div className="row top-margin-md" >
                              {this.renderImage()}
                              {this.renderTextContent()}
                          </div>
                    );
          }
          else{
            return (
                          <div className="row top-margin-md" >
                            {this.renderTextContent()}
                            {this.renderImage()}
                          </div>
                    );
          }

    }

}
