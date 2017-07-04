import React, { Component } from 'react';
import MessengerDisplay from "./messenger";
import InputDisplay from "./input";


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
