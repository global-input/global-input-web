import React from "react";

import GlobalInputConnect from '../../components/global-input-connect';
import ClipboardCopyButton from '../../components/clipboard-copy-button';

import {styles} from "./styles";

const textContent={
    title:"Content Transfer Example",
    githuburl:"https://github.com/global-input/content-transfer-example"
}
export default class ContentTransferExample extends React.Component{
  constructor(props){
        super(props);
        this.state={content:"", connected:false, notificationMessage:null};
        this.messageTimeoutHandler=null;
        this.mobile.init(props);
    }
    componentWillUnmount(){
      if(this.messageTimeoutHandler){
        clearTimeout(this.messageTimeoutHandler);
        this.messageTimeoutHandler=null;
      }
    }
    setContent(content){
        this.setState(Object.assign({},{content}));
    }
    setNotificationMessage(notificationMessage){
      this.setState(Object.assign({},this.state,{notificationMessage}),()=>{
        this.clipboardTimerHandler=setTimeout(()=>{
              this.setState(Object.assign({},this.state,{notificationMessage:null}));
        },2000);
      });
    }
    onSenderConnected(){
        this.setState(Object.assign({},{connected:true}));
    }

    renderCopyButton(){
      if(this.state.notificationMessage){

      }
    }
    render(){
      return(
        <div style={styles.container}>

          <div style={styles.title}>
              {textContent.title}
          </div>
          <div style={styles.topControl}>
                <span style={styles.githuburl}>
                    <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
                </span>
                <ClipboardCopyButton copyFieldId="contentField"/>

          </div>
          <div style={styles.areaContainer}>
            <textarea  id="contentField" style={styles.textArea.get()}
              onChange={(evt) => {
                  this.setContent(evt.target.value);
                  this.mobile.setContent(evt.target.value);

            }} value={this.state.content}/>
            <div style={styles.globalConnect}>
                  <GlobalInputConnect mobileConfig={this.mobile.config}
                    ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
                    connectingMessage="Connecting...."
                    connectedMessage="Scan with Global Input App">

                    </GlobalInputConnect>
            </div>

          </div>



        </div>
      );

    }

    mobile={
      globalInputConnect:null,
          config:null,
          disconnect:()=>{
              if(this.mobile.globalInputConnect){
                  this.mobile.globalInputConnect.disconnectGlobaInputApp();
              }
          },
          init:(props)=>{
                    this.mobile.config={
                          url:props.url,
                          apikey:props.apikey,
                          securityGroup:props.securityGroup,
                          initData:{
                              action:"input",
                              dataType:"control",
                              form:{
                                title:"Content Transfer",
                                fields:[{
                                  label:"Content",
                                  id:"content",
                                  value:"",
                                  nLines:10,
                                  operations:{
                                      onInput:value=>this.setContent(value)
                                  }
                                }]
                              }
                          },
                          onSenderConnected:()=>{
                                  this.setState(Object.assign({},this.state,{connected:true}));
                          },
                          onSenderDisconnected:()=>{
                              this.setState(Object.assign({}, this.state,{connected:false}));
                          }
                     };
          },
          setContent:content=>{
            if(this.mobile.globalInputConnect){
                  this.mobile.globalInputConnect.sendInputMessage(content,0);
            }
          }


    }




}
