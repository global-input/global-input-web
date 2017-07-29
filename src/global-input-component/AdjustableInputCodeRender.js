import React, {Component} from 'react'

import  "./InputCodeRender.css";
import AdjustableCodeDataRenderer from "./AdjustableCodeDataRenderer";
import SendersConnected from "./SendersConnected";


export default class AdjustableInputCodeRender extends Component {

  render() {
      var codeClassName="input senderNotConnected";
      if(this.props.senders && this.props.senders.length>0){
          codeClassName="input senderConnected";
      }
      const {connector}=this.props;


    return (
          <div className={codeClassName}>
                  <AdjustableCodeDataRenderer type="input" connector={connector}/>
                  <SendersConnected sender={this.props.sender} senders={this.props.senders}/>
         </div>




    );
  }
}
