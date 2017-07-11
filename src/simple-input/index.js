import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {createMessageConnector,changeBaseURL} from "global-input-message";
import QRCode from "qrcode.react";


/**running locally**/


//changeBaseURL("http://localhost:1337");





export default class SimpleInput extends Component {

 constructor(props){
    super(props);
    this.connector=createMessageConnector();
    this.state={content:""};
 }
 setContent(content){
   console.log("content to be set:"+content);

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


  render() {
    const linenumber=4;
    const content=this.state.content;

    console.log(" so the content in the state:"+content);
    const qrcontent=this.connector.genererateQrContent([{
      nm:"Content",
      ln:linenumber,
      vl:content
    }]);
    console.log("qrcontent:"+qrcontent);
    return (
      <div>
      <div style={{display:"flex"}}>

          <h1>Simple Input Example</h1>
            <div style={{margin:5}}>
              <QRCode value={qrcontent}/>
            </div>


      </div>

        Content:
        <textarea rows={linenumber} cols="50" onChange={(evt) => {
              this.setContent(evt.target.value);
          }} value={content}/>

      </div>
    );
  }
}
