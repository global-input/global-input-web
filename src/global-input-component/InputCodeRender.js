import React, {Component} from 'react'

import  "./InputCodeRender.css";
import CodeDataRenderer from "./CodeDataRenderer";
import SendersConnected from "./SendersConnected";


export default class InputCodeRender extends Component {

  render() {
      var codeClassName="input senderNotConnected";
      if(this.props.senders && this.props.senders.length>0){
          codeClassName="input senderConnected";
      }
      const {level,size,connector}=this.props;


    return (
          <div className={codeClassName}>
                  <CodeDataRenderer type="input" connector={connector} level={level} size={size}/>
                  <SendersConnected sender={this.props.sender} senders={this.props.senders}/>
         </div>




    );
  }
}
