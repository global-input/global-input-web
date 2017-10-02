import React, {Component} from 'react'



export   default class SendersConnected extends Component {

  renderListSenders(){
    return(
   <div>
    {this.props.senders.map(function(sender, index){
      return(
        <div key={index}>
          {sender.client}
        </div>
            );
      })
    }
    </div>
    );
  }
  render() {
      if(this.props.senders && this.props.senders.length>0){
          return(
            <div>
              <div>Sender Connected:{this.props.senders.length}</div>
              {this.renderListSenders()}
            </div>

          );
      }
      else {
        return null;
      }

  }


}
