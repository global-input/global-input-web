import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";



export  default class NotificationMessage extends Component {
  componentDidMount(){
      this.startThread(this.props);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.message!==nextProps.message){
        this.startThread(nextProps);
    }

  }
  componentWillUnmount(){
        if(this.messageTimerHandler){
            clearTimeout(this.messageTimerHandler);
            this.messageTimerHandler=null;
        }
  }
  startThread(props){

      if(!props.message){
        console.log("empty message");
        return;
      }
      if(this.messageTimerHandler){

        return;
      }
      
      this.messageTimerHandler=setTimeout(()=>{
                      props.setMessage(null);
                      this.messageTimerHandler=null;
              },2000);
  }

  render(){
        if(this.props.message){
           console.log("render:"+this.props.message);
          return(
          <div style={styles.message}>{this.props.message}</div>
           );
        }
        else{
          return null;
        }

      }

}
