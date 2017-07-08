import React, { Component } from 'react';
import MessengerDisplay,{messenger} from "./messenger";
import InputDisplay from "./input";
import {util} from "./util";

class App extends Component {
  constructor(props){
    super(props);
    this.state={content:""}
  }
  render() {
    var content=this.state.content;
    return (
      <div>
        <MessengerDisplay messageListener={this}/>
        <InputDisplay content={content} contentEdited={this.contentEdited.bind(this)}/>
      </div>

    );
  }
  setContent(content){
    this.setState(Object.assign({}, this.state, {content}));
    var messageId=util.createGuid();
   var data={
      id:messageId,
      content:content
  };

  messenger.sendMessage(data);
  }
  contentEdited(content){
    this.setContent(content);
  }
  onReceiveClientMessage(data){
    console.log("*****"+JSON.stringify(data));
    this.setContent(data.content);
  }
}

export default App;
