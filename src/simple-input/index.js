import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {api,createMessageService} from "../global-input";


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
    this.messageService=createMessageService();
    this.state={content:""};
 }
 setContent(content){
   this.setState(Object.assign({}, this.state,{content}));
 }

  componentWillMount(){
      this.messageService.connect(this.onReceiveClientMessage.bind(this));
  }

  componentWillUnmount(){
      this.messageService.disconnect();
  }

  onReceiveClientMessage(message){
    if(!message.client){
      console.log("ignoring, because client is not set:"+JSON.stringify(message));
      return;
    }
    if(message.client===this.messageService.qrcode.client){
        console.log("client is the same:"+message.client);
        return;
    }
    console.log("setting:"+JSON.stringify(message));
    this.setContent(message.data.content);
  }
  onContentEditedLocally(evt){

    this.setContent(evt.target.value);
  }
  render() {
    const qrCodeImageURL=api.qrURL(this.messageService.qrcode);
    const content=this.state.content;

    return (
      <div>
          <h1>Simple Input Example</h1>
          <img src={qrCodeImageURL} alt="qrcode"/>
          <SimpleInputView content={content} onContentEdited={this.onContentEditedLocally.bind(this)}/>
      </div>
    );
  }
}
