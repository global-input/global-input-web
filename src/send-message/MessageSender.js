import React, {Component} from 'react'



import {createMessageConnector} from "global-input-message";




import {config,images} from "../configs";

import "whatwg-fetch";

import {LoadingIcon,ShowHideButton,InputWithLabel,InputWithSelect,TextAreaWithSelect,TextButton,ClipboardButton,
  TextRadioButtons,NotificationMessage,DisplayStaticContent,DisplayTextImage} from "../components";


import {PageWithHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";
import {styles} from "./styles";
export default class MessageSender extends Component {
  ACT_TYPE={

      CONNECTING:4,
      CONNECTED:5,
      SENDER_CONNECTED:6,
      SEND_MESSAGE_FORM:7,
      SENDING_MESSAGE:8,
      MESSAGE_SENT:9
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
            var action=this.createNewContactFormAction();
            return {action, message:null, show:true};
    }
    setMessage(message){
      this.setState(Object.assign({}, this.state,{message}));
    }
    setShow(show){
        var action=this.state.action;
        action.show=show;
        action.selectedFieldId=null;
        this.setState({action});
    }
    getFields(action){
      return  action.options.initData.form.fields;
    }
    getField(index){
      var fields=this.getFields(this.state.action);
      return fields[index];
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

    setSelectedField(selectedFieldId){
        var action=this.state.action;
        action.selectedFieldId=selectedFieldId;
        this.setState({action});
    }
    createNewContactFormAction(){
      var action= {
                actType:this.ACT_TYPE.CONNECTING,
                connector:null,
                connected:false,
                senders:null,
                selectedFieldId:null,
                options:{
                            url:config.url,
                            apikey:config.apikey,
                            securityGroup:config.securityGroup,
                            initData:{
                                action:"input",
                                dataType:"form",
                                form:{
                                  id:applicationPathConfig.about.contact.contactForm.id,
                                  title:applicationPathConfig.about.contact.contactForm.title,
                                  label:applicationPathConfig.about.contact.contactForm.label,
                                  fields:[{
                                              id:applicationPathConfig.about.contact.contactForm.companyname.id,
                                              label:applicationPathConfig.about.contact.contactForm.companyname.label,
                                              type:applicationPathConfig.about.contact.contactForm.companyname.type,
                                              nLines:applicationPathConfig.about.contact.contactForm.companyname.nLines,
                                              value:applicationPathConfig.about.contact.contactForm.companyname.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.contactForm.companyname.fieldIndex,value);
                                                            }
                                              }
                                        },{
                                              id:applicationPathConfig.about.contact.contactForm.address.id,
                                              label:applicationPathConfig.about.contact.contactForm.address.label,
                                              type:applicationPathConfig.about.contact.contactForm.address.type,
                                              nLines:applicationPathConfig.about.contact.contactForm.address.nLines,
                                              value:applicationPathConfig.about.contact.contactForm.address.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.contactForm.address.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.contactForm.phone.id,
                                              label:applicationPathConfig.about.contact.contactForm.phone.label,
                                              type:applicationPathConfig.about.contact.contactForm.phone.type,
                                              nLines:applicationPathConfig.about.contact.contactForm.phone.nLines,
                                              value:applicationPathConfig.about.contact.contactForm.phone.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.contactForm.phone.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.contactForm.email.id,
                                              label:applicationPathConfig.about.contact.contactForm.email.label,
                                              type:applicationPathConfig.about.contact.contactForm.email.type,
                                              nLines:applicationPathConfig.about.contact.contactForm.email.nLines,
                                              value:applicationPathConfig.about.contact.contactForm.email.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.contactForm.email.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              type:applicationPathConfig.about.contact.contactForm.info.type,
                                              value:applicationPathConfig.about.contact.contactForm.info.value,
                                  },{
                                                label:applicationPathConfig.about.contact.contactForm.cancelButton.label,
                                                type:applicationPathConfig.about.contact.contactForm.cancelButton.type,
                                                icon:"cancel",
                                                viewId:"footer",
                                                operations:{
                                                      onInput: value=>{
                                                            this.connectGlobalInput();
                                                      }
                                                }
                                    },{
                                                  label:applicationPathConfig.about.contact.contactForm.nextButton.label,
                                                  type:applicationPathConfig.about.contact.contactForm.nextButton.type,
                                                  icon:"continue",
                                                  viewId:"footer",
                                                  operations:{
                                                        onInput: value=>{
                                                              this.toSendMessageForm();
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

                  return action;

    }
    createNewMessageFormAction(){
      var action= {
                actType:this.ACT_TYPE.SEND_MESSAGE_FORM,
                qrsize:this.state.action.qrsize,
                connector:this.state.action.connector,
                connected:this.state.action.connected,
                senders:this.state.action.senders,
                selectedFieldId:null,
                options:{
                            url:this.state.action.options.url,
                            apikey:this.state.action.options.apikey,
                            securityGroup:this.state.action.options.securityGroup,
                            initData:{
                                action:"input",
                                dataType:"form",
                                form:{
                                  id:applicationPathConfig.about.contact.messageForm.id,
                                  title:applicationPathConfig.about.contact.messageForm.title,
                                  label:applicationPathConfig.about.contact.messageForm.label,
                                  fields:[{
                                              id:applicationPathConfig.about.contact.messageForm.first_name.id,
                                              label:applicationPathConfig.about.contact.messageForm.first_name.label,
                                              type:applicationPathConfig.about.contact.messageForm.first_name.type,
                                              nLines:applicationPathConfig.about.contact.messageForm.first_name.nLines,
                                              value:applicationPathConfig.about.contact.messageForm.first_name.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.messageForm.first_name.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.messageForm.last_name.id,
                                              label:applicationPathConfig.about.contact.messageForm.last_name.label,
                                              type:applicationPathConfig.about.contact.messageForm.last_name.type,
                                              nLines:applicationPathConfig.about.contact.messageForm.last_name.nLines,
                                              value:applicationPathConfig.about.contact.messageForm.last_name.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.messageForm.last_name.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.messageForm.email.id,
                                              label:applicationPathConfig.about.contact.messageForm.email.label,
                                              type:applicationPathConfig.about.contact.messageForm.email.type,
                                              nLines:applicationPathConfig.about.contact.messageForm.email.nLines,
                                              value:applicationPathConfig.about.contact.messageForm.email.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.messageForm.email.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.messageForm.phone.id,
                                              label:applicationPathConfig.about.contact.messageForm.phone.label,
                                              type:applicationPathConfig.about.contact.messageForm.phone.type,
                                              nLines:applicationPathConfig.about.contact.messageForm.phone.nLines,
                                              value:applicationPathConfig.about.contact.messageForm.phone.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.messageForm.phone.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                              id:applicationPathConfig.about.contact.messageForm.message.id,
                                              label:applicationPathConfig.about.contact.messageForm.message.label,
                                              type:applicationPathConfig.about.contact.messageForm.message.type,
                                              nLines:applicationPathConfig.about.contact.messageForm.message.nLines,
                                              value:applicationPathConfig.about.contact.messageForm.message.value,
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.messageForm.message.fieldIndex,value);
                                                            }
                                              }
                                  },{
                                          label:applicationPathConfig.about.contact.messageForm.cancelButton.label,
                                          type:applicationPathConfig.about.contact.messageForm.cancelButton.type,
                                          icon:"cancel",
                                          viewId:"footer",
                                          operations:{
                                                onInput: value=>{
                                                      this.connectGlobalInput();
                                                }
                                          }
                                  },{
                                                label:applicationPathConfig.about.contact.messageForm.sendButton.label,
                                                type:applicationPathConfig.about.contact.messageForm.sendButton.type,
                                                icon:"send",
                                                viewId:"footer",
                                                operations:{
                                                      onInput: value=>{
                                                            this.sendMessageToUs();
                                                      }
                                                }
                                        }]
                                }
                          },
                          onSenderConnected:this.state.action.options.onSenderConnected,
                          onSenderDisconnected:this.state.action.options.onSenderDisconnected,
                          onRegistered:this.state.action.options.onRegistered,
                        }
                  };

                  return action;
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
        this.connectGlobalInput();
   }
  onConnected(){
    var action=this.state.action;
    action.connected=true;
    action.actType=this.ACT_TYPE.CONNECTED;
    this.setState({action});
    if(this.props.onConnected){
      this.props.onConnected();
    }
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
toSendMessageForm(){
  var action=this.createNewMessageFormAction();
  this.setState(Object.assign({}, this.state,{action}));
  action.connector.sendInitData(action.options.initData);
}
sendMessageToUs(){

  var headers={
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  var searchParams = new URLSearchParams();
  searchParams.append("your-first-name", this.getField(applicationPathConfig.about.contact.messageForm.first_name.fieldIndex).value);
  searchParams.append("your-last-name", this.getField(applicationPathConfig.about.contact.messageForm.last_name.fieldIndex).value);
  searchParams.append("your-email", this.getField(applicationPathConfig.about.contact.messageForm.email.fieldIndex).value);
  searchParams.append("your-phone", this.getField(applicationPathConfig.about.contact.messageForm.phone.fieldIndex).value);
  searchParams.append("your-message", this.getField(applicationPathConfig.about.contact.messageForm.message.fieldIndex).value);


  var action=this.state.action;
  action.actType=this.ACT_TYPE.SENDING_MESSAGE;
  if(action.connector){
          action.connector.disconnect();
          action.connector=null;
          action.senders=[];
  }

  this.setState({action});


  return fetch(applicationPathConfig.about.contact.api.url,{headers, method:"POST", body:searchParams})
   .then(response=> {
        if(!response){
              this.setMessage("Failed to send the message: server returned empty response");
        }
       return response.text();
   }).then(body => {
       return JSON.parse(body);
   }).then(respose=>{
     console.log(JSON.stringify(respose));
     var action=this.state.action;
     action.actType=this.ACT_TYPE.MESSAGE_SENT;
     this.setState({action});

   });

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

        else if(action.actType===this.ACT_TYPE.SEND_MESSAGE_FORM){
              return this.renderSendMessageForm();

        }
        else if(action.actType===this.ACT_TYPE.SENDING_MESSAGE){
              return this.renderSendingMessage();
        }
        else if(action.actType===this.ACT_TYPE.MESSAGE_SENT){
              return this.renderMessageSent();
        }
        else{
              return this.renderConnecting();
        }
    }

    renderConnecting(){
       return(
         <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
           appSubtitle={applicationPathConfig.sendMessage.appSubtitle}>
           <div style={styles.content}>
               <DisplayLoading title={applicationPathConfig.sendMessage.connecting.title}
                 content={applicationPathConfig.sendMessage.connecting.content}/>
             </div>
          </PageWithHeader>


      );
    }

    getMapItemKey(item,index){
        if(item.id){
              return item.id;
        }
        else if(item.label){
              return index+"_"+item.label;
        }
        else if(item.value){
                  return index+"_"+item.value;
        }
        else{
              return index;
        }


    }
    getMapItemKey(item,index){
        if(item.id){
              return item.id;
        }
        else if(item.label){
              return index+"_"+item.label;
        }
        else if(item.value){
                  return index+"_"+item.value;
        }
        else{
              return index;
        }


    }
renderAField(formField, index){

  var label=formField.id;
    var multiline=false;
    var key=this.getMapItemKey(formField,index);

    if(formField.label && formField.label.trim().length>1){
        label=formField.label;
    }
    if(formField.type==='button'){
      return null;
    }
    else if(formField.type==='info'){
      return (
        <DisplayStaticContent content={formField.value} key={key}/>
      );
    }


    if(formField.nLines && formField.nLines>1){
        multiline=true;
    }
    var inputType="password";
    if(this.state.action.show){
        inputType="text";
    }

    var fieldSelected=false;
    if(this.state.action.selectedFieldId===formField.id){
          fieldSelected=true;
    }


    if(multiline){
      return(
        <TextAreaWithSelect
          key={key}
                  rows={formField.nLines} cols={100}
                  onChange={this.onFieldValueChangged.bind(this)}
                  fieldIndex={index}
                  fieldId={formField.id}
                  value={formField.value}
                  label={label}
                  fieldSelected={fieldSelected}
                  setSelectedField={this.setSelectedField.bind(this)}/>
       );
    }
    else{


      return(
              <InputWithSelect key={key}
                      type={inputType}
                      onChange={this.onFieldValueChangged.bind(this)}
                      fieldIndex={index}
                      fieldId={formField.id}
                      value={formField.value}
                      label={label}
                      fieldSelected={fieldSelected}
                      setSelectedField={this.setSelectedField.bind(this)}/>
       );
    }




}


    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData({securityGroup:config.securityGroup});

      return(
        <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
          appSubtitle={applicationPathConfig.sendMessage.appSubtitle} install={applicationPathConfig.home.install}
          aboutText={applicationPathConfig.home.aboutText}>
          <div style={styles.content}>



                <DisplayQRCode
                  content={applicationPathConfig.sendMessage.connected.content}
                  qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                  buttonLabel={applicationPathConfig.sendMessage.cancelButton}
                  link={applicationPathConfig.sendMessage.menu.backLink}/>

            </div>

      </PageWithHeader>

      );


    }
    renderCopyButton(){
      var action=this.state.action;
      var fields=this.getFields(action);
      var selectedFieldId=action.selectedFieldId;
      if(!selectedFieldId){
        return null;
      }
      var matchedFields=fields.filter(f=>f.id===selectedFieldId);
      if(!matchedFields.length){
        return null;
      }
      var matchedField=matchedFields[0];


      if(matchedField.value){
        return (
          <ClipboardButton
              fieldId={matchedField.id}
              label={applicationPathConfig.formData.copyButton}
              message={applicationPathConfig.formData.clipboard.copied}
              setMessage={this.setMessage.bind(this)}/>
        );
      }
      else{
        return null;
      }
    }
    renderSenderConnected(){
      var action=this.state.action;
      var fields=this.getFields(action);

          return(
            <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
              appSubtitle={applicationPathConfig.sendMessage.appSubtitle}
               sectionHeaderContent={applicationPathConfig.sendMessage.senderConnected.content}
               aboutText={applicationPathConfig.home.aboutText}>
               <div style={styles.content}>
                      <div style={styles.formContainer}>
                            <ShowHideButton setShow={this.setShow.bind(this)} show={this.state.action.show}/>
                            {fields.map(this.renderAField.bind(this))}
                            <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                              <div style={styles.buttonContainer}>
                                  {this.renderCopyButton()}
                                  <TextButton label={applicationPathConfig.about.contact.senderConnected.cancelButton}
                                    onPress={this.connectGlobalInput.bind(this)}/>

                                  <TextButton label={applicationPathConfig.about.contact.senderConnected.nextButton}
                                    onPress={this.toSendMessageForm.bind(this)}/>
                              </div>
                      </div>
                </div>
                </PageWithHeader>

          );


   }
   renderSendMessageForm(){
     var action=this.state.action;
     var fields=this.getFields(action);

         return(
           <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
             appSubtitle={applicationPathConfig.sendMessage.appSubtitle}
              sectionHeaderContent={applicationPathConfig.sendMessage.senderConnected.content}
              aboutText={applicationPathConfig.home.aboutText}>
              <div style={styles.content}>
                     <div style={styles.formContainer}>
                           <ShowHideButton setShow={this.setShow.bind(this)} show={this.state.action.show}/>

                           {fields.map(this.renderAField.bind(this))}
                           <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                             <div style={styles.buttonContainer}>
                                 {this.renderCopyButton()}
                                 <TextButton label={applicationPathConfig.about.contact.senderConnected.cancelButton}
                                   onPress={this.connectGlobalInput.bind(this)}/>

                                 <TextButton label={applicationPathConfig.about.contact.messageForm.sendButton.label}
                                   onPress={this.sendMessageToUs.bind(this)}/>
                             </div>
                     </div>
              </div>
            </PageWithHeader>
         );

   }

   renderSendingMessage(){

      return(
        <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
          appSubtitle={applicationPathConfig.sendMessage.appSubtitle}
           sectionHeaderContent={applicationPathConfig.sendMessage.senderConnected.content}
           aboutText={applicationPathConfig.home.aboutText}>
           <div style={styles.content}>
                <DisplayLoading title={applicationPathConfig.about.contact.sendingMessage.title}
                  content={applicationPathConfig.about.contact.sendingMessage.content}/>
          </div>
        </PageWithHeader>
     );
   }
   renderMessageSent(){
      return(
        <PageWithHeader advert={applicationPathConfig.sendMessage.advert}
          appSubtitle={applicationPathConfig.sendMessage.appSubtitle}
           sectionHeaderContent={applicationPathConfig.sendMessage.senderConnected.content}
           aboutText={applicationPathConfig.home.aboutText}>
            <div style={styles.content}>
        <DisplayTextImage
          title={applicationPathConfig.about.contact.messageSent.title}
          content={applicationPathConfig.about.contact.messageSent.content}/>
       </div>
      </PageWithHeader>
      );
   }


}
