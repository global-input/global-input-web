import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {GlobalInputConnect} from '../../src/components';


var data={
    content:"",
}

var mobileConfig={
                      initData:{
                          action:"input",
                          dataType:"form",
                          form:{
                            id:"test@globalinput.co.uk",
                            title:"Global Input App Test",
                            label:"globalinputtest",
                            fields:[{
                              label:"Content",
                              id:"content",
                              value:"",
                              nLines:10,
                              operations:{
                                  onInput:value=>console.log(value)
                              },
                           }]
                          }
                    }

     };

class OneTextAreaTest extends React.Component{
  state={content:""}

  constructor(props){
    super(props);
    var that=this;
    this.mobileConfig={
                          initData:{
                              action:"input",
                              dataType:"form",
                              form:{
                                id:"test@globalinput.co.uk",
                                title:"Global Input App Test",
                                label:"globalinputtest",
                                fields:[{
                                  label:"Content",
                                  id:"content",
                                  value:"",
                                  nLines:10,
                                  operations:{
                                      onInput:value=>that.setState({content:value})
                                  }
                               }]
                              }
                        }

         };
  }



    render(){
      return(
        <React.Fragment>
            <GlobalInputConnect mobileConfig={this.mobileConfig}
            connectedMessage="Scan with your Global Input App"
            renderSenderConnected={(sender, senders)=>(<div>When you type on your mobile, the content will appear below</div>)}
            renderSenderDisconnected={(sender, senders)=>(<div>Disconnected</div>)}/>
            {this.renderContent()}
        </React.Fragment>
      );

    }
    renderContent(){
      if(this.state.content){
        return(<div><textarea style={{width:500, height:500}} value={this.state.content} readOnly={true}/></div>);
      }
      else{
        return null;
      }
    }

}


storiesOf('GlobalInputConnect', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('without props', () => <GlobalInputConnect/>)
  .add('without initData', () => <GlobalInputConnect mobileConfig={{}}/>)
  .add('without form', () => <GlobalInputConnect mobileConfig={{initData:{}}}/>)
  .add('without fields', () => <GlobalInputConnect mobileConfig={{initData:{form:{}}}}/>)
  .add('GlobalInputConnect',()=>(<GlobalInputConnect
    mobileConfig={mobileConfig}
    connectingMessage="Connecting...."
    connectedMessage="Scan with Global Input App"
    senderConnectedMessage="Global Input App has connected, the received content will be printed in the console"
    senderDisconnectedMessage="Global Input App has disconnected"/>))
  .add("One TextArea Form",()=><OneTextAreaTest/>);
