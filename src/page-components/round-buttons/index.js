import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';


class BlueRoundButton extends React.Component{
  render(){
    if(this.props.to){
        return (<Link to={this.props.to} style={styles.buttonLinks.get()}>{this.props.children}</Link>);
    }
    else if(this.props.href){
        return (<a href={this.props.href} style={styles.buttonLinks.get()}>{this.props.children}</a>);
    }
    else{
      return null;
    }
  }
};
class WhiteRoundButton extends React.Component{
  render(){
    if(this.props.to){
        return (<Link to={this.props.to} style={styles.buttonLinks.get('white')}>{this.props.children}</Link>);
    }
    else if(this.props.href){
        return (<a href={this.rops.href} style={styles.buttonLinks.get('white')}>{this.props.children}</a>);
    }
    else{
      return null;
    }
  }
};
export {WhiteRoundButton,BlueRoundButton};
