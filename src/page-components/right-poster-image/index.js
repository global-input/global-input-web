import React, {Component} from 'react';
import {styles,screenMedia} from "./styles";
import AdjustableComponent from "../../components/adjustable-component";
export default class RightPosterImage extends AdjustableComponent{
  render(){
    if(!this.isScreenBiggerThan(800)){
        return null;
    }
    var postImage=this.props.image;
    if(this.props.image200 && (!this.isScreenBiggerThan(680))){
        postImage=this.props.image200;
    }
    else if(this.props.image400 && (!this.isScreenBiggerThan(1258))){
        postImage=this.props.image400;
    }
    return(<img src={postImage} style={styles.rightImage.get()}/>);
   }

}
