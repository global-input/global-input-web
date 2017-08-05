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
      var {level,size,connector}=this.props;
      if(!size){
        size=300;
      }
      else{
      try{
          size=parseInt(size);
          if(size<50){
            size=50;            
          }
        }
        catch(error){
          console.error(error+" for size="+size);
          size=300;
        }
      }


    return (
          <div className={codeClassName}>
                  <CodeDataRenderer type="input" connector={connector} level={level} size={size}/>
                  <SendersConnected sender={this.props.sender} senders={this.props.senders}/>
         </div>




    );
  }
}
