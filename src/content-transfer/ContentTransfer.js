import React, {Component} from 'react'

import {createMessageConnector} from "global-input-message";




import {config} from "../configs";

import {PageWithHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";
import {ClipboardButton,TextAreaWithLabel,NotificationMessage,TextButton} from "../components";

import {styles} from "./styles";
export default class ContentTransfer extends Component {
  ACT_TYPE={
      CONNECTING:2,
      CONNECTED:3,
      SENDER_CONNECTED:4
  }

  CONTENT_FIELD_INDEX=0;


  constructor(props){
      super(props);
      this.state=this.getStateFromProps(this.props);
    }
    componentWillUnmount(){
          this.disconnectGlobalInput();
    }
    componentWillMount(){
      this.connectGlobalInput();
    }


   componentWillReceiveProps(nextProps){
        //this.setState(this.getStateFromProps(nextProps))
    }
    getStateFromProps(props){
            var action=this.createNewAction();
            return {action, message:null};
    }
    getFields(action){
          return  action.options.initData.form.fields;
    }
    getField(index){
          var fields=this.getFields(this.state.action);
          return fields[index];
    }
    getFieldValue(index){
      return this.getField(index).value;
    }
    setFieldValue(index, value){
          this.getField(index).value=value;
          var action=this.state.action;
          this.setState({action});
    }
    setMessage(message){
      this.setState(Object.assign({}, this.state,{message}));
    }
    onFieldValueChangged(value,index){
              this.setFieldValue(index,value);
              this.sendInputMessage(value,index);
    }

    createNewAction(){
      return {
                actType:this.ACT_TYPE.CONNECTING,
                qrsize:400,
                connector:null,
                connected:false,
                senders:null,
                options:{
                            url:config.url,
                            apikey:config.apikey,
                            securityGroup:config.securityGroup,
                            initData:{
                                action:"input",
                                dataType:"form",
                                form:{
                                  id:"contentTransfer@globalinput.co.uk",
                                  title:"Live Encrypted Data Transfer",
                                  label:"globalinput",
                                  fields:[{
                                    label:"Content",
                                    id:"content",
                                    value:"",
                                    nLines:10,
                                    operations:{
                                        onInput:value=>this.setFieldValue(this.CONTENT_FIELD_INDEX,value)
                                    },
                                  },{
                                    label:"Back",
                                    type:"button",
                                    icon:"back",
                                    operations:{
                                        onInput:()=>{
                                            this.connectGlobalInput();
                                            this.setContent("");
                                      }
                                   }
                                 }]
                                }
                          },

                          onSenderConnected:this.onSenderConnected.bind(this),
                          onSenderDisconnected:this.onSenderDisconnected.bind(this),
                          onRegistered:(next)=>{
                                  next();
                                  this.onConnected();
                          }
                        }
                  };

    }

    onSenderConnected(sender, senders){
         console.log("Sender Connected");
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        console.log("Sender Disconnected");
        console.log("Sender Connected");
        var action=this.state.action;
        action.senders=senders;
        action.actType=this.ACT_TYPE.CONNECTED;
        this.setState({action});
   }

  onConnected(){
    var action=this.state.action;
    action.connected=true;
    action.actType=this.ACT_TYPE.CONNECTED;
    this.setState({action});
  }


  disconnectGlobalInput(){
      var action=this.state.action;
      if(action.connector){
              action.connector.disconnect();
              action.connector=null;
      }
      this.setState(this.getStateFromProps(this.props));
  }
  isSenderConnected(){
    return this.state.action.actType===this.ACT_TYPE.SENDER_CONNECTED && this.state.action.connector;
  }
  sendInputMessage(message, fieldIndex){
    if(this.isSenderConnected()){
       this.state.action.connector.sendInputMessage(message,fieldIndex);
    }
  }



    connectGlobalInput(){
        var action=this.state.action;
        if(action.connector){
                action.connector.disconnect();
                action.connector=null;
                action.senders=[];
        }
        action.connector=createMessageConnector();
        action.actType=this.ACT_TYPE.CONNECTING;
        this.setState({action});
        action.connector.connect(action.options);
    }





    render(){
        var action=this.state.action;

        if(action.actType===this.ACT_TYPE.CONNECTED && action.connector){
              return this.renderConnected();
        }
        else if(action.actType===this.ACT_TYPE.SENDER_CONNECTED && action.connector){
              return this.renderSenderConnected();
        }
        else {
              return this.renderConnecting();
        }


    }

    renderConnecting(){
       return(
           <PageWithHeader advert={applicationPathConfig.contentTransfer.advert}>
                 <DisplayLoading title={applicationPathConfig.contentTransfer.connecting.title}
                   content={applicationPathConfig.contentTransfer.connecting.content}/>
            </PageWithHeader>
      );
    }





    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();
      console.log("qrcode:[["+qrCodeContent+"]]");


      return(
        <PageWithHeader advert={applicationPathConfig.contentTransfer.advert}>
              <DisplayQRCode
                content={applicationPathConfig.contentTransfer.connected.content}
                qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                buttonLabel={applicationPathConfig.contentTransfer.cancelButton}
                link={applicationPathConfig.contentTransfer.menu.backLink}/>
      </PageWithHeader>
      );



    }
    renderCopyButton(contentField){


      if(contentField.value){
        return (
          <ClipboardButton
              fieldId={contentField.id}
              label={applicationPathConfig.contentTransfer.copyButton}
              message={applicationPathConfig.contentTransfer.clipboard.copied}
              setMessage={this.setMessage.bind(this)}/>
        );
      }
      else{
        return null;
      }
    }
    renderSenderConnected(){


      var contentField=this.getField(this.CONTENT_FIELD_INDEX);

          return(
            <PageWithHeader advert={applicationPathConfig.contentTransfer.advert}
               sectionHeaderContent={applicationPathConfig.contentTransfer.senderConnected.content}>
              <div style={styles.content}>
                 <TextAreaWithLabel
                           rows={10} cols={70}
                           onChange={this.onFieldValueChangged.bind(this)}
                           fieldIndex={0}
                           fieldId={contentField.id}
                           value={contentField.value}
                           label={applicationPathConfig.contentTransfer.contentField.label}/>
                           <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                        <div style={styles.buttonContainer}>
                            {this.renderCopyButton(contentField)}
                            <TextButton label={applicationPathConfig.contentTransfer.finishButton}
                             onPress={this.connectGlobalInput.bind(this)}/>
                        </div>
              </div>
           </PageWithHeader>

          );


   }


}
