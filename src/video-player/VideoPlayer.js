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
                                  title:applicationPathConfig.videoPlayer.form.title,
                                  fields:[{
                                         id:applicationPathConfig.videoPlayer.form.videoTitle.id,
                                         type:applicationPathConfig.videoPlayer.form.videoTitle.type,
                                         value:applicationPathConfig.videoPlayer.form.videoTitle.value,
                                         groupId:applicationPathConfig.videoPlayer.form.videoTitle.groupId,
                                       },{
                                              id:applicationPathConfig.videoPlayer.form.playStatus.id,
                                              type:applicationPathConfig.videoPlayer.form.playStatus.type,
                                              value:applicationPathConfig.videoPlayer.form.playStatus.value,
                                              groupId:applicationPathConfig.videoPlayer.form.playStatus.groupId,
                                        },{
                                              id:   applicationPathConfig.videoPlayer.form.playButton.id,
                                              type: applicationPathConfig.videoPlayer.form.playButton.type,
                                              value:applicationPathConfig.videoPlayer.form.playButton.value,
                                              label:applicationPathConfig.videoPlayer.form.playButton.label,
                                              icon: applicationPathConfig.videoPlayer.form.playButton.icon,
                                              options:applicationPathConfig.videoPlayer.form.playButton.options,
                                              groupId:applicationPathConfig.videoPlayer.form.playButton.groupId,
                                              operations:{
                                                            onInput: value=>{
                                                                    if(value){
                                                                      this.pauseVideo();
                                                                    }
                                                                    else{
                                                                      this.playVideo();
                                                                    }

                                                            }
                                              }
                                        },{
                                                label:applicationPathConfig.videoPlayer.form.backButton.label,
                                                type:applicationPathConfig.videoPlayer.form.backButton.type,
                                                icon:applicationPathConfig.videoPlayer.form.backButton.icon,
                                                groupId:applicationPathConfig.videoPlayer.form.backButton.groupId,
                                                operations:{
                                                      onInput: value=>{
                                                            this.connectGlobalInput();
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
  sendInputMessage(message, fieldIndex, fieldId){
    if(this.isSenderConnected()){
       this.state.action.connector.sendInputMessage(message,fieldIndex, fieldId);
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
                <PageWithHeader advert={applicationPathConfig.videoPlayer.advert}>
                      <DisplayLoading title={applicationPathConfig.videoPlayer.connecting.title}
                        content={applicationPathConfig.videoPlayer.connecting.content}/>
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
        <PageWithHeader advert={applicationPathConfig.videoPlayer.advert}>
              <DisplayQRCode

                content={applicationPathConfig.videoPlayer.connected.content}
                qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                buttonLabel={applicationPathConfig.videoPlayer.cancelButton}
                link={applicationPathConfig.videoPlayer.menu.backLink}/>
      </PageWithHeader>
      );



    }

    playVideo(){
      if(this.videoPlayer){
          this.videoPlayer.play();
      }


    }
    pauseVideo(){
      if(this.videoPlayer){
          this.videoPlayer.pause();
      }
    }
    onAbort(){
      this.setToCanPlay("Aborted");
    }
    onCanPlay(){

    }
    onCanPlayThrough(){

    }
    onDurationChange(){

    }
    onEncrypted(){

    }
    onEnded(){
        this.setToCanPlay("Completed");
    }
    processError(message, error){
        var cache = [];
        var errorDetails=JSON.stringify(error, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
         });
         cache = null;
         console.warn(message+":"+errorDetails);
    }
    onError(error){
      this.processError("Player Error",error);
      this.setToCanPlay("Player Error");
    }
    onLoadedData(){

    }
    onLoadedMetadata(){

    }
    onLoadStart(){

    }
    onLoadStart(){

    }
    onPause(){
        this.setToCanPlay("Paused");
    }
    onPlay(){

    }
    sendPlayStatusMessage(message){
         var playStatusValue=Object.assign({},applicationPathConfig.videoPlayer.form.playStatus.value);
         playStatusValue.content.content=message;
         this.sendInputMessage(playStatusValue,null,applicationPathConfig.videoPlayer.form.playStatus.id);
    }
    onPlaying(){
        this.setToCanPause();

    }
    setToCanPause(){
        this.sendInputMessage(applicationPathConfig.videoPlayer.PLAY_PAUSE_BUTTON_STATUS.CAN_PAUSE,null,applicationPathConfig.videoPlayer.form.playButton.id);
        this.sendPlayStatusMessage("Playing");
    }
    setToCanPlay(message){
        this.sendInputMessage(applicationPathConfig.videoPlayer.PLAY_PAUSE_BUTTON_STATUS.CAN_PLAY,null,applicationPathConfig.videoPlayer.form.playButton.id);
        this.sendPlayStatusMessage(message);
    }
    onProgress(){

    }
    onRateChange(){

    }
    onSeeked(){

    }
    onSeeking(){
          this.sendPlayStatusMessage("Seeking");
    }
    onStalled(){
        this.sendPlayStatusMessage("Stalled");
    }
    onSuspend(){

    }
    onTimeUpdate(){

    }
    onVolumeChange(){

    }
    onWaiting(){
        this.sendPlayStatusMessage("Loading...");
    }
    renderSenderConnected(){

          return(

            <PageWithHeader advert={applicationPathConfig.contentTransfer.advert}
               sectionHeaderContent={applicationPathConfig.contentTransfer.senderConnected.content}>
              <div style={styles.content}>
              <video width="640" height="360"  id="videoplayer" autoPlay={false}
                  ref={videoPlayer=>this.videoPlayer=videoPlayer}
                  onAbort={this.onAbort.bind(this)}
                  onCanPlay={this.onCanPlay.bind(this)}
                  onCanPlay={this.onCanPlayThrough.bind(this)}
                  onCanPlay={this.onCanPlayThrough.bind(this)}
                  onDurationChange={this.onDurationChange.bind(this)}
                  onEncrypted={this.onEncrypted.bind(this)}
                  onEnded={this.onEnded.bind(this)}
                  onError={this.onError.bind(this)}
                  onLoadedData={this.onLoadedData.bind(this)}
                  onLoadedMetadata={this.onLoadedMetadata.bind(this)}
                  onLoadStart={this.onLoadStart.bind(this)}
                  onPause={this.onPause.bind(this)}
                  onPlay={this.onPlay.bind(this)}
                  onPlaying={this.onPlaying.bind(this)}
                  onProgress={this.onProgress.bind(this)}
                  onRateChange={this.onRateChange.bind(this)}
                  onSeeked={this.onSeeked.bind(this)}
                  onSeeking={this.onSeeking.bind(this)}
                  onStalled={this.onStalled.bind(this)}
                  onSuspend={this.onSuspend.bind(this)}
                  onTimeUpdate={this.onTimeUpdate.bind(this)}
                  onVolumeChange={this.onVolumeChange.bind(this)}
                  onWaiting={this.onWaiting.bind(this)}
                  >
                    <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm"/>
                    <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv" type="video/ogg"/>
                </video>
              </div>
           </PageWithHeader>
          );


   }




}
