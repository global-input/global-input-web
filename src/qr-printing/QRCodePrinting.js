import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

import QRCode from "qrcode.react";

import {createMessageConnector} from "global-input-message";




import {config,images} from "../configs";
import {TextSelectOptions,InputWithLabel,NotificationMessage,TextButton} from "../components";



import {styles} from "./styles";

import {PageWithHeader,PageWithHeaderNoPrint,SectionHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";

export default class QRCodePrinting extends Component {
  ACT_TYPE={
      CONNECTING:2,
      CONNECTED:3,
      SENDER_CONNECTED:4
  }

  LABEL_FIELD=0
  CONTENT_FIELD=1
  SIZE_FIELD=2
  LEVEL_FIELD=3

  QR_CODE_LEVELS=[
    {label:"L", value:"L"},
    {label:"M", value:"M"},
    {label:"Q", value:"Q"},
    {label:"H", value:"H"}

  ]

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
    setMessage(message){
      this.setState(Object.assign({}, this.state,{message}));
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
    onFieldValueChangged(value,index){
          this.setFieldValue(index,value);
          this.sendInputMessage(value,index);
    }

    printQRCode(){
        window.print();
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
                                dataType:"qrcode",
                                form:{
                                  title:"QR Code Printing",
                                  label:"globalinput",
                                  fields:[{
                                            label:"Label",
                                            value:"",
                                            operations:{
                                                  onInput:value=>this.setFieldValue(0,value)
                                            }


                                            },{
                                            label:"Content",
                                            value:"",
                                                  operations:{
                                                        onInput:value=>this.setFieldValue(1,value)
                                                      }

                                            },{
                                            label:"Size",
                                                  operations:{
                                                        onInput:value=>this.setFieldValue(2,value)
                                                  },
                                                  value:300,
                                                  type:"range",
                                                  minimumValue:100,
                                                  maximumValue:1000,
                                                  step:10
                                            },{
                                                  label:"Level",
                                                  operations:{
                                                      onInput:value=>this.setFieldValue(3,value)
                                                    },
                                                    type:"list",
                                                    selectType:"single",
                                                    value:"H",
                                                    items:[
                                                        {value:"L", label:"L"},
                                                        {value:"M", label:"M"},
                                                        {value:"Q", label:"Q"},
                                                        {value:"H", label:"H"}
                                                      ]
                                          },{
                                                    label:"Print",
                                                    type:"button",
                                                    operations:{
                                                      onInput:this.printQRCode.bind(this)
                                                    }
                                        },{
                                                    label:"Finish",
                                                    type:"button",
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
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        console.log("Sender Disconnected");
        console.log("Sender Connected");
        // var action=this.state.action;
        // action.senders=senders;
        // action.actType=this.ACT_TYPE.CONNECTED;
        // this.setState({action});
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
        this.getField(this.LABEL_FIELD).value="";
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

        else{
            return this.renderConnecting();
        }


    }

    renderConnecting(){
   return(
       <PageWithHeader content={applicationPathConfig.qrPrinting.topContent}>
             <DisplayLoading title={applicationPathConfig.qrPrinting.connecting.title}
               content={applicationPathConfig.qrPrinting.connecting.content}/>
        </PageWithHeader>
  );
 }






    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();
      return(
       <PageWithHeader content={applicationPathConfig.qrPrinting.topContent}>
             <DisplayQRCode
               title={applicationPathConfig.qrPrinting.connected.title}
               content={applicationPathConfig.qrPrinting.connected.content}
               qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
               buttonLabel={applicationPathConfig.qrPrinting.cancelButton}
               link={applicationPathConfig.qrPrinting.menu.backLink}/>
     </PageWithHeader>
     );

    }

    renderSenderConnected(){
      var action=this.state.action;
      var qrcodeLabel=this.getFieldValue(this.LABEL_FIELD);
      var qrcodeContent=this.getFieldValue(this.CONTENT_FIELD);
      var qrcodeLevel=this.getFieldValue(this.LEVEL_FIELD);
      var qrcodeSize=this.getFieldValue(this.SIZE_FIELD);
      var selectedQRLevelItem=null;
      var matched=this.QR_CODE_LEVELS.filter(f=>f.value===qrcodeLevel);
      if(matched.length){
        selectedQRLevelItem=matched[0];
      }

          return(

            <PageWithHeaderNoPrint content={applicationPathConfig.qrPrinting.topContent}
               sectionHeaderTitle={applicationPathConfig.qrPrinting.senderConnected.title}
               sectionHeaderContent={applicationPathConfig.qrPrinting.senderConnected.content}>
                    <div className="printOnly">
                          <DisplayQRCode title={applicationPathConfig.qrPrinting.printed.title}
                            content={applicationPathConfig.qrPrinting.printed.content}
                            qrCodeContent={qrcodeContent} qrCodeLevel={qrcodeLevel} qrsize={qrcodeSize}/>

                          <div style={styles.qrCodeLabel}>{qrcodeLabel}</div>
                    </div>
                    <div className="noprint">

                                <DisplayQRCode qrCodeContent={qrcodeContent} qrCodeLevel={qrcodeLevel} qrsize={qrcodeSize}/>
                                <InputWithLabel type="text"
                                     onChange={this.onFieldValueChangged.bind(this)}
                                     fieldIndex={this.CONTENT_FIELD}
                                     label={applicationPathConfig.qrPrinting.contentField.label}
                                     value={qrcodeContent}/>

                                <InputWithLabel type="text"
                                          onChange={this.onFieldValueChangged.bind(this)}
                                          fieldIndex={this.LABEL_FIELD}
                                          label={applicationPathConfig.qrPrinting.labelField.label}
                                          value={qrcodeLabel}/>

                                <InputWithLabel type="range"
                                      onChange={this.onFieldValueChangged.bind(this)}
                                      fieldIndex={this.SIZE_FIELD}
                                      label={applicationPathConfig.qrPrinting.sizeField.label}
                                      value={qrcodeSize}/>

                                    <TextSelectOptions selections={this.QR_CODE_LEVELS}
                                         fieldId="qrcodeLevel"
                                         label={applicationPathConfig.qrPrinting.levelField.label}
                                         value={qrcodeLevel}
                                         selected={selectedQRLevelItem}
                                         fieldIndex={this.LEVEL_FIELD}
                                         onChange={this.onFieldValueChangged.bind(this)}/>

                                        <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                          <div style={styles.buttonContainer}>
                                    <TextButton label={applicationPathConfig.qrPrinting.printButton}
                                      onPress={this.printQRCode.bind(this)}/>


                                      <TextButton label={applicationPathConfig.qrPrinting.finishButton}
                                        onPress={this.connectGlobalInput.bind(this)}/>

                          </div>
                </div>



        </PageWithHeaderNoPrint>

          );


   }



}
