import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {createGlobalInputMessageConnector} from "../global-input-message";
import QRCode from "qrcode.react";



class SimpleInputView extends Component{
  render(){
      const {onContentEdited, content}=this.props;
      return(
        <div>
          Content: <input type="text" name="name" onChange={onContentEdited} value={content}/>
        </div>
      );
  }

}


export default class SimpleInput extends Component {

 constructor(props){
    super(props);
    this.connector=createGlobalInputMessageConnector();
    this.state={content:""};
 }
 setContent(content){
   this.setState(Object.assign({}, this.state,{content}));
 }

  componentWillMount(){
      this.connector.connect(this.onMessageReceived.bind(this));
  }

  componentWillUnmount(){
      this.connector.disconnect();
  }

  onMessageReceived(message){
    console.log("setting:"+JSON.stringify(message));
    this.setContent(message.content);
  }
  onContentEditedLocally(evt){
    this.setContent(evt.target.value);
  }
  render() {

    const content=this.state.content;
    const qrcontent=this.connector.genererateQrContent();
    return (
      <div>
          <h1>Simple Input Example</h1>
          <QRCode value={qrcontent}/>
          <SimpleInputView content={content} onContentEdited={this.onContentEditedLocally.bind(this)}/>
      </div>
    );
  }
}
