import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {GlobalInputConnect} from '../../src/components';



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
                                  onInput:value=>{
                                    console.log(value);
                                    action("receved value:"+value);
                                  }
                              },
                           }]
                          }
                    },
                    onSenderConnected:(sender, senders)=>{
                        console.log("Sender conntected");
                    },
                    onSenderDisconnected:(sender,senders)=>{
                        console.log("Sender disconntected");
                    }


     };
storiesOf('GlobalInputConnect', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('GlobalInputConnect',()=>(<GlobalInputConnect
    mobileConfig={mobileConfig}
    connectingMessage="Connecting...."
    connectedMessage="Scan with Global Input App"/>));
