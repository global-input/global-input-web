import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

import QRCode from "qrcode.react";

import {createMessageConnector} from "global-input-message";




import {config,images} from "../configs";


import {DisplayTextImage,LoadingIcon} from "../components";
import qrPrintingConfig from "./qrPrintingConfig";
import {styles} from "./styles";
import {PageWithHeaderNoPrint} from "../page-templates";
export default class QRCodePrinting extends Component {
  ACT_TYPE={
      CONNECTING:2,
      CONNECTED:3,
      SENDER_CONNECTED:4
  }
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

    setContent(content){

      var action=this.state.action;
      this.getContentField(action).value=content;

      this.setState({action, message:null});
    }
    getField(index){
      return this.state.action.options.initData.form.fields[index];
    }
    getLabelField(){
      return this.getField(0);
    }
    getContentField(){
      return this.getField(1);
    }
    getSizeField(){
      return this.getField(2);
    }
    getLevelField(){
      return this.getField(3);
    }
    setFieldValue(index, value){
      this.getField(index).value=value;
      var action=this.state.action;
      this.setState({action});
    }
    printQRCode(){
        window.print();
    }
    createNewAction(){
      return {
                actType:this.ACT_TYPE.INTRODUCTION,
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
      return(
        <PageWithHeaderNoPrint content={qrPrintingConfig.topContent}>
              <div style={styles.content}>
                  {this.renderContent()}
              </div>
        </PageWithHeaderNoPrint>
      );
    }



    renderContent(){
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
        <div style={styles.content}>
          <DisplayTextImage title={qrPrintingConfig.title} content={qrPrintingConfig.connecting}/>
          <LoadingIcon loading={true}/>
        </div>
      );
    }



    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();

      return(
        <div style={styles.content}>
          <DisplayTextImage title={qrPrintingConfig.title} content={qrPrintingConfig.connected}>
            <div style={styles.qrCodeContainer}>

                        <QRCode
                              value={qrCodeContent}
                              level="H"
                              size={this.state.action.qrsize}
                             />
          </div>

          <div style={styles.buttonContainer}>
                <Link to="/" className="btn btn-primary">BACK</Link>
          </div>

          </DisplayTextImage>

        </div>

      );


    }

    renderSenderConnected(){
      var action=this.state.action;

      var labelField=this.getLabelField();
      var contentField=this.getContentField();
      var sizeField=this.getSizeField();
      var levelField=this.getLevelField();

          return(
            <div style={styles.content}>

                    <div className="printOnly">

                          <QRCode value={contentField.value} level={levelField.value} size={sizeField.value}/>
                          <div style={styles.qrCodeLabel}>
                              {labelField.value}
                          </div>
                    </div>
                    <div className="noprint">

                                <QRCode value={contentField.value} level={levelField.value} size={sizeField.value}/>
                                <div className="form-group">
                                      <div style={styles.description}>
                                                      <DisplayTextImage content={qrPrintingConfig.senderConnected}/>
                                      </div>

                                      <label htmlFor="content">Content:</label>
                                      <input id="content" type="text" placeholder="Content"
                                          onChange={(evt) => {
                                                contentField.value=evt.target.value;
                                                this.setState({action:this.state.action});
                                          }} value={contentField.value} size="30"/>
                                </div>
                                <input type="text" onChange={(evt) => {
                                    labelField.value=evt.target.value;
                                    this.setState({action:this.state.action});
                                  }} value={labelField.value} size="30"/>
                                  <input type="range" min="100" max="1000" step="10" value={this.props.size} onChange={evt=>{
                                        sizeField.value=evt.target.value;
                                        this.setState({action:this.state.action});
                                }}/>
                              <select value={this.props.level} onChange={evt=>{
                                  levelField.value=evt.target.value;
                                  this.setState({action:this.state.action});
                                }}>
                                      <option value="L">L</option>
                                      <option value="M">M</option>
                                      <option value="Q">Q</option>
                                      <option value="H">H</option>
                                    </select>
                          {this.renderMessage()}
                          <div style={styles.buttonContainer}>
                            <div style={styles.button}>
                              <button type="button" className="btn btn-primary" onClick={this.printQRCode.bind(this)}>{qrPrintingConfig.printButton}</button>
                            </div>
                              <div style={styles.button}>

                                  <button type="button" className="btn btn-primary" onClick={()=>{
                                      this.connectGlobalInput();
                                       this.setContent("");
                                  }}>{qrPrintingConfig.finishButton}</button>

                              </div>
                          </div>




                    </div>

           </div>

          );


   }
renderMessage(){
  if(this.state.message){
    return(
        <div style={styles.message}>{this.state.message}</div>
    );
  }
  else{
    return null;
  }
}



}
