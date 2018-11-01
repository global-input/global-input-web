import React, {Component} from 'react'



import {createMessageConnector,encrypt,decrypt} from "global-input-message";




import {config,pagelinks} from "../configs";


import {ShowHideButton,InputWithLabel,InputWithSelect,TextAreaWithSelect,TextButton,ClipboardButton,
  TextRadioButtons,NotificationMessage,DisplayStaticContent} from "../components";

import {PageWithHeader,DisplayLoading,DisplayQRCode,applicationPathConfig} from "../page-templates";
import {styles} from "./styles";
export default class FormDataTransfer extends Component {
  ACT_TYPE={
      COMPOSE_FORM:2,
      ADD_NEW_FIELD:3,
      CONNECTING:4,
      CONNECTED:5,
      SENDER_CONNECTED:6,
      DISCONNECTED:7
  }
  FORM_FIELD_TYPES=[
    {label:"Single-line"},
    {label:"Multi-line"}
  ]
  formDataParamKey="TDwtv0dV6u"


  constructor(props){
      super(props);
      this.state=this.getStateFromProps(this.props);
      this.onWindowResize=this.onWindowResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener("resize", this.onWindowResize);
        this.processQueryParameters(this.props);
    }

    componentWillUnmount(){
        this.disconnectGlobalInput();
        window.removeEventListener("resize", this.onWindowResize);
    }
    onWindowResize(){
      this.forceUpdate();
    }

    getQueryParam(query,variable) {
           if(!query){
             return null;
           }
           query=query.substring(1);
           var vars = query.split('&');
           for (var i = 0; i < vars.length; i++) {
               var pair = vars[i].split('=');
               if (decodeURIComponent(pair[0]) === variable) {
                   return decodeURIComponent(pair[1]);
               }
           }
 }
 processQueryParameters(props){
        if(props && props.location && props.location.search){
                var formDataString=this.getQueryParam(props.location.search, "formData");
                if(formDataString){
                  try{
                      var formData=JSON.parse(decrypt(formDataString,this.formDataParamKey));
                      this.connectWithForm(formData);
                      return;
                    }
                    catch(e){
                      console.error(e+" while processing the formDataString");
                    }
                }
        }
        this.addDefaultFields();
 }
 addDefaultFields(){
   var action=this.state.action;
   this.addTextField(action,{
       id:"username",
       label:"Username"
   });
   this.addTextField(action,{
       id:"password",
       label:"Password"
   });
   this.getFields(action).push(
     {
       label:"Finish",
       type:"button",
       icon:"ok",
       buttonText:"Finish",
       operations:{
           onInput:()=>{
               this.disconnectGlobalInput();
            }
        }
      }
   );
   this.setState({action});

 }
 connectWithForm(formData){
   var action=this.state.action;
   action.options.initData.form.id=formData.id;
   action.options.initData.form.title=formData.title;
   action.options.initData.form.label=formData.label;
   formData.fields.forEach(f=>{
      if((!f.type) ||f.type==='text'){
        this.addTextField(action,{
            id:f.id,
            label:f.label,
            type:f.type,
            value:f.value
        });
      }
   });

   this.getFields(action).push(
     {
       label:"Finish",
       type:"button",
       icon:"ok",
       buttonText:"Finish",
       operations:{
           onInput:()=>{
               this.disconnectGlobalInput();
            }
        }
      }
   );
   action.actType=this.ACT_TYPE.CONNECTING;
   action.connector=createMessageConnector();
   this.setState({action});
   action.connector.connect(action.options);
 }


   componentWillReceiveProps(nextProps){
        //this.setState(this.getStateFromProps(nextProps))
    }
    getStateFromProps(props){
            var action=this.createNewAction();
            return {action, message:null, show:false};
    }
    setMessage(message){
      this.setState(Object.assign({}, this.state,{message}));
    }
    getFormId(){
      var action=this.state.action;
      return action.options.initData.form.id;
    }
    getFormTitle(){
      var action=this.state.action;
      return action.options.initData.form.title;
    }
    getFormLabel(){
      var action=this.state.action;
      return action.options.initData.form.label;
    }
    setFormId(formid){
      var action=this.state.action;
      action.options.initData.form.id=formid;
      action.selectedFieldId=null;
      this.setState({action});
    }
    setFormTitle(formTitle){
      var action=this.state.action;
      action.options.initData.form.title=formTitle;
      action.selectedFieldId=null;
      this.setState({action});
    }
    setShow(show){
        var action=this.state.action;
        action.show=show;
        action.selectedFieldId=null;
        this.setState({action});
    }
    setFormLabel(formlabel){
      var action=this.state.action;
      action.options.initData.form.label=formlabel;
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

    getNewFieldLabel(){
        return this.state.action.newField.label;
    }
    getNewFieldNLines(){
        return this.state.action.newField.nLines;
    }
    setNewFieldNLines(nLines){
        var action=this.state.action;
        action.newField.nLines=nLines;
        action.selectedFieldId=null;
        this.setState({action});
    }
    setNewFieldLabel(label){
        var action=this.state.action;
        action.newField.label=label;
        action.selectedFieldId=null;
        this.setState({action});
    }
    setSelectedField(selectedFieldId){
        var action=this.state.action;
        action.selectedFieldId=selectedFieldId;
        this.setState({action});
    }


    addTextField(action,fieldProperty){
          var fieldId=fieldProperty.id;
          if(!fieldId){
            this.setMessage(applicationPathConfig.formData.newField.errorMessages.missingid);
            return;
          }
          var fields=this.getFields(action);
          var existingFields=fields.filter(f=>f.id===fieldId);
          if(existingFields.length){
            this.setMessage(applicationPathConfig.formData.newField.errorMessages.exists);
            return;
          }
          var fieldIndex=0;
          for(fieldIndex=0;fieldIndex<fields.length;fieldIndex++){
              if(fields[fieldIndex].type==='button'){
                break;
              }
          }
          var value="";
          if(fieldProperty.value){
            value=fieldProperty.value;
          }
          var composedField={
                id:fieldId,
                label:fieldProperty.label,
                type:"text",
                value,
                nLines:fieldProperty.nLines,
                operations:{
                              onInput: value=>{
                                    this.setFieldValue(fieldIndex,value);

                            }
                }
          };
          fields.splice(fieldIndex,0,composedField);
    }



    createNewAction(){
      var action= {
                actType:this.ACT_TYPE.COMPOSE_FORM,
                connector:null,
                connected:false,
                senders:null,
                newField:{
                    label:"",
                    id:"",
                    nLines:null
                },
                selectedFieldId:null,
                options:{
                            url:config.url,
                            apikey:config.apikey,
                            securityGroup:config.securityGroup,
                            initData:{
                                action:"input",
                                dataType:"form",
                                form:{
                                  id:"###username###@members",
                                  title:applicationPathConfig.formData.senderConnected.title,
                                  label:"members",
                                  fields:[]
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

    deleteField(){
          var action=this.state.action;
          var fields=this.getFields(action);
          var selectedFieldId=action.selectedFieldId;
          action.selectedFieldId=null;
          var textFields=[];
          var buttons=[];
          fields.forEach(f=>{
                  if(f.id!==selectedFieldId && f.type!=='button'){
                      textFields.push(f);
                  }
                  else if(f.type==='button'){
                      buttons.push(f);
                  }
          });

          action.options.initData.form.fields=[];
          textFields.forEach(f=>{
            this.addTextField(action,{
                id:f.id,
                label:f.label
            });
          });
          buttons.forEach(f=>{
              action.options.initData.form.fields.push(f);
          });
          action.selectedFieldId=null;
          this.setState({action});

    }
    addNewField(){
          var action=this.state.action;
          var label=action.newField.label;
          var id=action.newField.id;
          var nLines=action.newField.nLines;
          if((!label) && (!id)){
            this.setMessage(applicationPathConfig.formData.newField.errorMessages.missingid);
            return;
          }
          if(!id){
              id=label.replace(' ',"_").toLowerCase();
          }
          else if(!label){
              label=id;
          }

          this.addTextField(action,{
              id,
              label,
              nLines
          });

          action.actType=this.ACT_TYPE.COMPOSE_FORM;
          action.selectedFieldId=null;
          action.newField={
              label:"",
              id:"",
              nLines:null
          };
          this.setState({action});
    }
    toComposeForm(){
      var action=this.state.action;
      action.actType=this.ACT_TYPE.COMPOSE_FORM;
      this.setState({action});
    }


    toAddNewField(){
      var action=this.state.action;
      action.actType=this.ACT_TYPE.ADD_NEW_FIELD;
      this.setState({action});
    }

    onSenderConnected(sender, senders){
         console.log("Sender Connected");
         var action=this.state.action;
         action.senders=senders;
         action.actType=this.ACT_TYPE.SENDER_CONNECTED;
         this.setState({action});
    }
    onSenderDisconnected(sender,senders){
        this.disconnectGlobalInput();
        console.log("Sender Disconnected");
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
      action.actType=this.ACT_TYPE.DISCONNECTED;
      this.setState({action});
  }
  restartToCompose(){
    var action=this.state.action;
    if(action.connector){
            action.connector.disconnect();
            action.connector=null;
    }
    action.actType=this.ACT_TYPE.COMPOSE_FORM;
    this.setState({action});

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
        if(action.actType===this.ACT_TYPE.CONNECTING){
              return this.renderConnecting();
        }
        else if(action.actType===this.ACT_TYPE.ADD_NEW_FIELD){
              return this.renderAddNewField();
        }
        else if(action.actType===this.ACT_TYPE.CONNECTED && action.connector){
              return this.renderConnected();
        }
        else if(action.actType===this.ACT_TYPE.SENDER_CONNECTED && action.connector){
              return this.renderSenderConnected();
        }
        else if(action.actType===this.ACT_TYPE.DISCONNECTED){
                return this.renderDisconnected();
        }
        else {
              return this.renderComposeForm();
        }


    }
    renderConnecting(){
       return(
           <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText}
             appSubtitle={applicationPathConfig.formData.appSubtitle}>
                <div style={styles.content}>
                  <DisplayLoading title={applicationPathConfig.formData.connecting.title}
                    content={applicationPathConfig.formData.connecting.content}/>
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


renderAField(formField, index, readOnly){
  var label=formField.id;
    var multiline=false;
    var key=this.getMapItemKey(formField,index);
    if(formField.label && formField.label.trim().length>1){
        label=formField.label;
    }
    if(formField.type==='button'){
      return null;
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
                  readOnly={readOnly}
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
                      readOnly={readOnly}
                      label={label}
                      fieldSelected={fieldSelected}
                      setSelectedField={this.setSelectedField.bind(this)}/>

       );
    }




}



renderDeleteFieldButton(){
  var disabled=true;
  if(this.state.action.selectedFieldId){
    disabled=false;
  }
          return(
            <TextButton label={applicationPathConfig.formData.deleteButton}
              onPress={this.deleteField.bind(this)} disabled={disabled}/>
          );

}

renderComposeForm(){
    var formid=this.getFormId();
    var formLabel=this.getFormLabel();
    var fields=this.getFields(this.state.action);

    var formTitle=this.getFormTitle();
    var formContainerStyle=styles.formContainer;
    if(!styles.isMobile()){
      formContainerStyle=styles.formContainerDesktop
    }
    return (
      <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText}
         appSubtitle={applicationPathConfig.formData.appSubtitle}
         aboutText={applicationPathConfig.home.aboutText}>
            <div style={styles.content}>

              <div style={styles.title}>{applicationPathConfig.formData.compose.title}</div>

                <div style={formContainerStyle}>
                    <div style={styles.formHeader}></div>
                    <div style={styles.formContent}>
                      <InputWithLabel fieldId="formTitle"
                        onChange={this.setFormTitle.bind(this)}
                        value={formTitle}
                        label="Form Title"/>




                          <InputWithLabel fieldId="formId"
                            onChange={this.setFormId.bind(this)}
                            value={formid}
                            label="ID" help={applicationPathConfig.formData.compose.idField.help} helpStyle={styles.help}
                            />



                          <InputWithLabel fieldId="folder"
                              onChange={this.setFormLabel.bind(this)}
                              value={formLabel}
                              label="Folder"
                              help={applicationPathConfig.formData.compose.folder.help}/>

                              <DisplayStaticContent
                              content={applicationPathConfig.formData.compose.fields.header}
                              lineStyle={styles.help}/>



                                {fields.map((formField, index)=>this.renderAField(formField,index))}


                    </div>

              </div>

              <div style={styles.buttonContainer}>
                  <TextButton label={applicationPathConfig.formData.backButton}
                   link={applicationPathConfig.formData.menu.backLink}/>

                 {this.renderDeleteFieldButton()}
                 <TextButton label={applicationPathConfig.formData.addNewFieldButton}
                    onPress={this.toAddNewField.bind(this)}/>
                  {this.renderCopyButton()}
                <TextButton label={applicationPathConfig.formData.nextButton}
                       onPress={this.toFormQrCode.bind(this)}/>
              </div>
              <div style={styles.footer}>
                  <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                  <DisplayStaticContent content={applicationPathConfig.formData.compose.fields.footer}
                    lineStyle={styles.help}/>
              </div>




              </div>
          </PageWithHeader>



    );
}

toFormQrCode(){
  this.connectGlobalInput();
}
displayBookmarkableLink(){
    var action=this.state.action;
    var form=action.options.initData.form;
    var formData=encrypt(JSON.stringify(form),this.formDataParamKey);

    var url=pagelinks.samples.formData.buildURL({formData})
    return(
        <a href={url} rel="noopener noreferrer" target="_blank">{applicationPathConfig.formData.cloneButton}</a>
    );
}


renderAddNewField(){

  var newFieldLabel=this.getNewFieldLabel();
  var selected=this.FORM_FIELD_TYPES[0];
  var nLines=this.getNewFieldNLines();
  if(nLines && nLines>1){
      selected=this.FORM_FIELD_TYPES[1];
  }

  return (
    <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText}
       appSubtitle={applicationPathConfig.formData.appSubtitle}

       aboutText={applicationPathConfig.home.aboutText}>

    <div style={styles.content}>
      <div style={styles.title}>{applicationPathConfig.formData.compose.title}</div>

      <div style={styles.formContainer}>
        <div style={styles.formHeader}>
        <div style={styles.blueHeader}>
              {applicationPathConfig.formData.newField.title}
        </div>

        </div>
          <div style={styles.formContent}>

                <div style={styles.fieldRow}>
                  <InputWithLabel fieldId="newfieldid"
                      onChange={this.setNewFieldLabel.bind(this)}
                      value={newFieldLabel}
                      label={applicationPathConfig.formData.newField.fieldLabel}
                      onKeyEnter={this.addNewField.bind(this)}/>
                </div>


                        <TextRadioButtons selections={this.FORM_FIELD_TYPES} selected={selected} onChange={selectedItem=>{
                                  if(selectedItem===this.FORM_FIELD_TYPES[1]){
                                        this.setNewFieldNLines(5);
                                  }
                                  else{
                                        this.setNewFieldNLines(null);
                                  }
                          }}/>
                          <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>

                          <div style={styles.narrowButtonContainer}>
                              <TextButton label={applicationPathConfig.formData.backButton}
                               onPress={this.toComposeForm.bind(this)}/>

                              <TextButton label={applicationPathConfig.formData.addButton}
                                onPress={this.addNewField.bind(this)}/>
                          </div>
                </div>
          </div>


  </div>
    </PageWithHeader>



  );

}

    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData({securityGroup:config.securityGroup});

      return(
        <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText} appSubtitle={applicationPathConfig.formData.appSubtitle}
          install={applicationPathConfig.home.install}
          aboutText={applicationPathConfig.home.aboutText}>
            <div style={styles.content}>
              <DisplayQRCode
                content={applicationPathConfig.formData.connected.content}
                qrCodeContent={qrCodeContent} qrsize={this.state.action.qrsize}
                buttonLabel={applicationPathConfig.formData.cancelButton}
                onButtonPressed={this.restartToCompose.bind(this)}/>
              {this.displayBookmarkableLink()}
            </div>


      </PageWithHeader>
      );


    }
    renderCopyButton(){
      var action=this.state.action;
      var fields=this.getFields(action);
      var selectedFieldId=action.selectedFieldId;

      var matchingfieldId=null;

      if(selectedFieldId){
            var matchedFields=fields.filter(f=>f.id===selectedFieldId);
            if(matchedFields.length){
                var matchedField=matchedFields[0];
                if(matchedField.value){
                    matchingfieldId=matchedField.id;
                }
            }
      }
        return (
          <ClipboardButton
              fieldId={matchingfieldId}
              label={applicationPathConfig.formData.copyButton}
              message={applicationPathConfig.formData.clipboard.copied}
              setMessage={this.setMessage.bind(this)}/>
        );
    }

    renderSenderConnected(){
      var action=this.state.action;
      var fields=this.getFields(action);
      var formContainerStyle=styles.formContainer;
      if(!styles.isMobile()){
        formContainerStyle=styles.formContainerDesktop
      }
          return(
              <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText}


                appSubtitle={applicationPathConfig.formData.appSubtitle} aboutText={applicationPathConfig.home.aboutText}>
                <div style={styles.content}>

                            <div style={styles.title}>{applicationPathConfig.formData.senderConnected.content}</div>
                      <div style={formContainerStyle}>
                        <div style={styles.formHeader}>
                               <div style={styles.blueHeader}>
                                     {applicationPathConfig.formData.newField.title}
                               </div>
                        </div>
                        <div style={styles.formContent}>
                            <ShowHideButton setShow={this.setShow.bind(this)} show={this.state.action.show}/>
                            {fields.map((formField, index)=>this.renderAField(formField,index))}
                            <NotificationMessage message={this.state.message} setMessage={this.setMessage.bind(this)}/>
                              <div style={styles.buttonContainer}>
                                <TextButton label={applicationPathConfig.formData.restartButton}
                                  onPress={this.restartToCompose.bind(this)}/>



                                  {this.renderCopyButton()}
                                  <TextButton label={applicationPathConfig.formData.finishButton}
                                    onPress={this.disconnectGlobalInput.bind(this)}/>

                              </div>
                          </div>
                      </div>
              </div>

           </PageWithHeader>

          );


   }

   renderDisconnected(){
          var action=this.state.action;
          var fields=this.getFields(action);
          var formContainerStyle=styles.formContainer;
          if(!styles.isMobile()){
            formContainerStyle=styles.formContainerDesktop
          }
         return(
             <PageWithHeader scrollingText={applicationPathConfig.formData.scrollingText}

               appSubtitle={applicationPathConfig.formData.appSubtitle} aboutText={applicationPathConfig.home.aboutText}>
               <div style={styles.content}>
                    <div style={styles.title}>{applicationPathConfig.formData.disConnected.content}</div>
                     <div style={formContainerStyle}>
                       <div style={styles.formHeader}>
                              <div style={styles.blueHeader}>
                                    {applicationPathConfig.formData.disConnected.shorttitle}
                              </div>
                       </div>
                       <div style={styles.formContent}>
                           <ShowHideButton setShow={this.setShow.bind(this)} show={this.state.action.show}/>
                           {fields.map((formField, index)=>this.renderAField(formField,index,false))}
                             <div style={styles.buttonContainer}>
                               <TextButton label={applicationPathConfig.formData.restartButton}
                                 onPress={this.toComposeForm.bind(this)}/>
                                 {this.renderCopyButton()}
                             </div>
                     </div>
                   </div>
             </div>

          </PageWithHeader>

         );

   }


}
