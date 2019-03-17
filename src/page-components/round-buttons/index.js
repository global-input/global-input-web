import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';


const BlueRoundButton=props=>{
    if(props.to){
        return (<Link to={props.to} style={styles.buttonLinks.get()}>{props.children}</Link>);
    }
    else if(this.props.href){
        return (<a href={props.href} style={styles.buttonLinks.get()}>{props.children}</a>);
    }
    else{
      return null;
    }
};
const WhiteRoundButton = props=>{
    if(props.to){
        return (<Link to={props.to} style={styles.buttonLinks.get('white')}>{props.children}</Link>);
    }
    else if(this.props.href){
        return (<a href={props.href} style={styles.buttonLinks.get('white')}>{props.children}</a>);
    }
    else{
      return null;
    }
};

const ImageExternalLink = props=>(
  <a href={props.href} target="_blank">
        <img src={props.image} style={styles.imageButton}/>
  </a>
);

export {WhiteRoundButton,BlueRoundButton,ImageExternalLink};
