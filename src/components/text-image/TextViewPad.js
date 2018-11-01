import React, {Component} from 'react'

import {styles} from "./styles";
import DisplaySectionTitle from "./DisplaySectionTitle";
import BookMark from "../menu/BookMark";

export  default class TextViewPad extends Component {
      renderPadTitle(){
            return(
                <DisplaySectionTitle title={this.props.title}/>
            );
      }
      renderBookMark(){
        if(this.props.bookmark){
            return(
              <BookMark bookmark={this.props.bookmark}/>
            );
        }
        else{
          return null;
        }
      }
      render(){
        var textPadContainer=styles.textPadContainer;
        if(styles.isMobile()){
          textPadContainer=styles.textPadContainerMobile;
        }
        return(
            <div style={textPadContainer}>
                  <div style={styles.textPad}>
                          {this.renderBookMark()}
                          {this.renderPadTitle()}
                          <div style={styles.padContent}>
                              {this.props.children}
                          </div>
                  </div>
            </div>
          );

      }

}
