import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'


import {styles} from "./styles";
import {TextButton} from "../index";
import DisplayStaticContent from "./DisplayStaticContent";



export  default class DisplayVideo extends Component {
  ACT_TYPE={
      LOADING:0,
      ERROR:1,
  }
  constructor(props){
       super(props);
        this.state=this.getStateFromProps(this.props);
  }
  componentWillReceiveProps(nextProps){
       this.setState(this.getStateFromProps(nextProps))
   }
   getStateFromProps(props){
           return {type:this.ACT_TYPE.LOADING};
   }
   onAbort(){
      this.setState({type:this.ACT_TYPE.ERROR})
   }
   onError(){
     this.setState({type:this.ACT_TYPE.ERROR})
   }

  renderImage(){
    return (
      <img src={this.props.defaultImage} title="Your browser does not support the <video> tag" style={styles.image}/>
    );
  }
  render(){
          if(this.state.type===this.ACT_TYPE.LOADING){
            return(
                 <video width="100%"  autoPlay={true} controls={true} loop={true} poster={this.props.defaultImage}
                 onAbort={this.onAbort.bind(this)} onError={this.onError.bind(this)}>

                     <source src={this.props.video} type="video/mp4"/>
                     {this.renderImage()}
                 </video>
            );
          }
          else{
            return(<img src={this.props.defaultImage} style={styles.image}/>);
          }

    }

}
