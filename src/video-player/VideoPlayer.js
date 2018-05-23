import React, {Component} from 'react'



import {createMessageConnector} from "global-input-message";




import {config,images} from "../configs";

import "whatwg-fetch";

import {LoadingIcon,ShowHideButton,InputWithLabel,InputWithSelect,TextAreaWithSelect,TextButton,ClipboardButton,
  TextRadioButtons,NotificationMessage,DisplayStaticContent,DisplayTextImage} from "../components";

import {PageWithHeader,SectionHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";
import {styles} from "./styles";
export default class VideoPlayer extends Component {
  ACT_TYPE={
      CONNECTING:4,
      CONNECTED:5,
      SENDER_CONNECTED:6,
  }


  constructor(props){
      super(props);
      this.state=this.getStateFromProps(this.props);
    }
    componentWillUnmount(){
        this.disconnectGlobalInput();
    }

   componentWillReceiveProps(nextProps){
        //this.setState(this.getStateFromProps(nextProps))
    }
    componentDidMount(){
      this.connectGlobalInput();
    }
    getStateFromProps(props){
            var action=this.createNewPlayFormAction();
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
    createNewPlayFormAction(){
      var action= {
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
                                action:"control",
                                dataType:"content",
                                form:{
                                  title:applicationPathConfig.videoPlayer.title,
                                  fields:[{
                                              label:"Play",
                                              type:"button",
                                              operations:{
                                                            onInput: value=>{
                                                                  this.setFieldValue(applicationPathConfig.about.contact.contactForm.companyname.fieldIndex,value);
                                                            }
                                              }
                                        },{
                                                label:applicationPathConfig.about.contact.contactForm.cancelButton.label,
                                                type:applicationPathConfig.about.contact.contactForm.cancelButton.type,
                                                operations:{
                                                      onInput: value=>{
                                                            this.disconnectGlobalInput();
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



    onSenderConnected(sender, senders){
         console.log("Sender Connected");
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        console.log("Sender Disconnected");
        this.disconnectGlobalInput();
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
        else{
            return this.renderConnecting();
        }
    }

    renderConnecting(){
             return(
                <PageWithHeader advert={applicationPathConfig.formData.advert}>
                      <DisplayLoading title={applicationPathConfig.formData.connecting.title}
                        content={applicationPathConfig.formData.connecting.content}/>
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

      var qrCodeContent=this.state.action.connector.buildInputCodeData();

      return(
        <PageWithHeader advert={applicationPathConfig.formData.advert}>
              <DisplayQRCode

                content={applicationPathConfig.formData.connected.content}
                qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                buttonLabel={applicationPathConfig.formData.cancelButton}
                onButtonPressed={this.disconnectGlobalInput.bind(this)}/>
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

          return(

            <PageWithHeader advert={applicationPathConfig.contentTransfer.advert}
               sectionHeaderContent={applicationPathConfig.contentTransfer.senderConnected.content}>
              <div style={styles.content}>
              <video width="640" height="360"  autoPlay={false}>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg"/>
                    <object width="640" height="360" type="application/x-shockwave-flash" data="player.swf">
                        <param name="movie" value="player.swf"/>
                        <param name="flashvars" value="autostart=true&amp;controlbar=over&amp;image=poster.jpg&amp;file=http://clips.vorwaerts-gmbh.de/VfE_flash.mp4"/>
                        <img src="poster.jpg" width="640" height="360" alt="Big Buck Bunny" title="No video playback capabilities"/>
                    </object>
                </video>
              </div>
           </PageWithHeader>
          );


   }




}
