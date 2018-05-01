import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import {globalStyles} from "./styles";
import RenderText from "./RenderText";

export  default class RenderTextImage extends Component {
  renderTextContent(){
    var containerClass="col-md-12";
    if(this.props.image){
        containerClass="col-md-6";
    }
    return(
        <RenderText containerClass={containerClass} titleClass="section-heading"
           title={this.props.title} contentClass="section-subheading text-muted bottom-margin-sm"
           content={this.props.content}>
             {this.props.children}
        </RenderText>
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
