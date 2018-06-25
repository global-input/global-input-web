import React, {Component} from 'react'


import {createMessageConnector} from "global-input-message";




import {config} from "../configs";
import {TextSelectOptions,InputWithLabel,NotificationMessage,TextButton, DisplayStaticContent} from "../components";



import {styles} from "./styles";

import {PageWithHeader,PageWithHeaderNoPrint,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";

export default class QRCodePrinting extends Component {
  ACT_TYPE={
      CONNECTING:2,
      CONNECTED:3,
      SENDER_CONNECTED:4
  }
  CONTENT_FIELD=0
  LABEL_FIELD=1
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
    getField(index, action){
      var fields=this.getFields(action);
      return fields[index];
    }
    getFieldValue(index){
      return this.getField(index,this.state.action).value;
    }
    setFieldValue(index, value, action){

      this.getField(index,action).value=value;
      this.setState({action});
    }
    onFieldValueChangged(value,index){
          this.setFieldValue(index,value,this.state.action);
          this.sendInputMessage(value,index);
    }

    printQRCode(){
        window.print();
    }
    createNewAction(){
      return {
                actType:this.ACT_TYPE.CONNECTING,
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
                                            label:"Content",
                                            value:"",
                                                  operations:{
                                                        onInput:value=>this.setFieldValue(this.CONTENT_FIELD,value,this.state.action)
                                                      }

                                            },{
                                                      label:"Label",
                                                      value:"",
                                                      operations:{
                                                            onInput:value=>this.setFieldValue(this.LABEL_FIELD,value,this.state.action)
                                                      }
                                            },{
                                            label:"Size",
                                                  operations:{
                                                        onInput:value=>this.setFieldValue(this.SIZE_FIELD,value,this.state.action)
                                                  },
                                                  value:300,
                                                  type:"range",
                                                  minimumValue:100,
                                                  maximumValue:1000,
                                                  step:10
                                            },{
                                                  label:"Level",
                                                  operations:{
                                                      onInput:selectedValue=>{
                                                        var value="H";
                                                        if(typeof selectedValue ==='object' && selectedValue.length){
                                                                value=selectedValue[0];
                                                        }
                                                        this.setFieldValue(this.LEVEL_FIELD,value,this.state.action)
                                                      }
                                                    },
                                                    type:"list",
                                                    selectType:"single",
                                                    value:"H",
                                                    items:[
                                                        {value:"L", label:"Low"},
                                                        {value:"M", label:"Medium"},
                                                        {value:"Q", label:"Quality"},
                                                        {value:"H", label:"High"}
                                                      ]
                                          },{
                                                    label:"Back",
                                                    type:"button",
                                                    buttonText:"Back",
                                                    icon:"disconnect",
                                                    viewId:"buttons",
                                                    operations:{
                                                      onInput:()=>{
                                                         this.connectGlobalInput();
                                                      }
                                                    }
                                        },{
                                                  label:"Print",
                                                  type:"button",
                                                  icon:"print",
                                                  buttonText:"Print",
                                                  viewId:"buttons",
                                                  operations:{
                                                    onInput:this.printQRCode.bind(this)
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
        this.setFieldValue(this.CONTENT_FIELD,"",action)
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
       <PageWithHeader advert={applicationPathConfig.qrPrinting.advert}
         appSubtitle={applicationPathConfig.qrPrinting.appSubtitle}>
         <div style={styles.content}>
           <DisplayLoading
            title={applicationPathConfig.qrPrinting.connecting.title}
             content={applicationPathConfig.qrPrinting.connecting.content}/>
         </div>

        </PageWithHeader>
  );
 }






    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData({securityGroup:config.securityGroup});
      return(
       <PageWithHeader advert={applicationPathConfig.qrPrinting.advert}
         appSubtitle={applicationPathConfig.qrPrinting.appSubtitle}>
         <div style={styles.content}>
             <DisplayQRCode

               content={applicationPathConfig.qrPrinting.connected.content}
               qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
               buttonLabel={applicationPathConfig.qrPrinting.cancelButton}
               link={applicationPathConfig.qrPrinting.menu.backLink}/>
           </div>
     </PageWithHeader>
     );

    }

    renderSenderConnected(){

      var qrcodeLabel=this.getFieldValue(this.LABEL_FIELD);
      var qrcodeContent=this.getFieldValue(this.CONTENT_FIELD);
      var qrcodeLevel=this.getFieldValue(this.LEVEL_FIELD);
      var qrcodeSize=this.getField(this.SIZE_FIELD, this.state.action);
      var selectedQRLevelItem=null;
      var matched=this.QR_CODE_LEVELS.filter(f=>f.value===qrcodeLevel);
      if(matched.length){
        selectedQRLevelItem=matched[0];
      }

          return(

            <PageWithHeaderNoPrint advert={applicationPathConfig.qrPrinting.advert}
              appSubtitle={applicationPathConfig.qrPrinting.appSubtitle}>
                  <div style={styles.content}>
                    <div className="noprint">
                      <DisplayStaticContent content={applicationPathConfig.qrPrinting.senderConnected.content}/>
                    </div>
                    <div className="printOnly">

                          <DisplayQRCode title={applicationPathConfig.qrPrinting.printed.title}
                            content={applicationPathConfig.qrPrinting.printed.content}
                            qrCodeContent={qrcodeContent} qrCodeLevel={qrcodeLevel} qrsize={qrcodeSize.value}/>

                          <div style={styles.qrCodeLabel}>{qrcodeLabel}</div>
                    </div>
                    <div className="noprint">
                                <div style={styles.formContainer}>
                                  <DisplayQRCode qrCodeContent={qrcodeContent} qrCodeLevel={qrcodeLevel} qrsize={qrcodeSize.value}/>

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
                                        value={qrcodeSize.value}
                                        min={qrcodeSize.minimumValue}
                                        max={qrcodeSize.maximumValue}
                                        step={qrcodeSize.step}/>


                                      <TextSelectOptions selections={this.QR_CODE_LEVELS}
                                           fieldId="qrcodeLevel"
                                           label={applicationPathConfig.qrPrinting.levelField.label}
                                           value={qrcodeLevel}
                                           selected={selectedQRLevelItem}
                                           fieldIndex={this.LEVEL_FIELD}
                                           onChange={this.onFieldValueChangged.bind(this)}/>

                                          <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>

                                            <div style={styles.buttonContainer}>
                                              <TextButton label={applicationPathConfig.qrPrinting.finishButton}
                                                onPress={this.connectGlobalInput.bind(this)}/>

                                                      <TextButton label={applicationPathConfig.qrPrinting.printButton}
                                                        onPress={this.printQRCode.bind(this)}/>



                                            </div>

                                </div>

                </div>


                </div>
        </PageWithHeaderNoPrint>

          );


   }



}
