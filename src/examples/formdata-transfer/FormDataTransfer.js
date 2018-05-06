import React, {Component} from 'react'
import QRCode from "qrcode.react";


import {createMessageConnector} from "global-input-message";




import {config,images} from "../../configs";


import {RenderTextImage,LoadingIcon} from "../../components";
import formDataTransferConfig from "./formDataTransferConfig";
import {styles} from "./styles";
export default class FormDataTransfer extends Component {
  ACT_TYPE={
      INTRODUCTION:1,
      COMPOSE_FORM:2,
      ADD_NEW_FIELD:3,
      CONNECTING:4,
      CONNECTED:5,
      SENDER_CONNECTED:6
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
    getStateFromProps(props){
            var action=this.createNewAction();
            return {action, message:null};
    }
    getFormId(){
      var action=this.state.action;
      return action.options.initData.form.id;
    }
    getFormLabel(){
      var action=this.state.action;
      return action.options.initData.form.label;
    }
    setFormId(formid){
      var action=this.state.action;
      action.options.initData.form.id=formid;
      this.setState({action});
    }
    setFormLabel(formlabel){
      var action=this.state.action;
      action.options.initData.form.label=formlabel;
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
    getNewFieldLabel(){
        return this.state.action.newField.label;
    }
    getNewFieldNLines(){
        return this.state.action.newField.nLines;
    }
    setNewFieldNLines(nLines){
        var action=this.state.action;
        action.newField.nLines=nLines;
        this.setState({action});
    }
    setNewFieldLabel(label){
        var action=this.state.action;
        action.newField.label=label;
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
            return;
          }
          var fields=this.getFields(action);
          var existingFields=fields.filter(f=>f.id===fieldId);
          if(existingFields.length){
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
                actType:this.ACT_TYPE.INTRODUCTION,
                qrsize:400,
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
                                dataType:"content",
                                form:{
                                  id:"###username###"+"@"+window.location.host,
                                  title:"Sign In",
                                  label:window.location.host,
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
                      operations:{
                          onInput:()=>{
                              this.disconnectGlobalInput();
                           }
                       }
                     }
                  );
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
          this.setState({action});

    }
    addNewField(){
          var action=this.state.action;
          var label=action.newField.label;
          var id=action.newField.id;
          var nLines=action.newField.nLines;
          if((!label) && (!id)){
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
        var fields=this.getFields(this.state.action);
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
        if(action.actType===this.ACT_TYPE.COMPOSE_FORM){
              return this.renderComposeForm();
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
        else{
            return this.renderIntroduction();
        }


    }
    renderConnecting(){
       return(
        <div style={styles.content}>

          <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.connecting} image={images.contentTransfer}/>
          <LoadingIcon loading={true}/>
        </div>
      );
    }
    renderIntroduction(){
        return(
          <div style={styles.content}>
            <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.content} image={images.createform}>
            <div style={styles.buttonContainer}>
                  <button type="button" className="btn btn-primary" onClick={this.toComposeForm.bind(this)}>{formDataTransferConfig.startButton}</button>
            </div>

            </RenderTextImage>

          </div>

        );

    }

renderRadioBox(formField,index){

  if(this.state.action.actType!==this.ACT_TYPE.COMPOSE_FORM){
          return null;
  }
  var fieldSelected=false;
  if(this.state.action.selectedFieldId===formField.id){
        fieldSelected=true;
  }
  return (
    <input type="radio" checked={fieldSelected} onClick={()=>{
          if(fieldSelected){
              this.setSelectedField(null);
          }
          else{
              this.setSelectedField(formField.id);
          }
      }}/>
  );
}
renderAField(formField, index){
  var label=formField.id;
    var multiline=false;

    if(formField.label && formField.label.trim().length>1){
        label=formField.label;
    }
    if(formField.type==='button'){
      return null;
    }


    if(formField.nLines && formField.nLines>1){
        multiline=true;
    }
    if(multiline){
      return(
        <div className="form-group" key={index}>
            <label htmlFor={formField.id}>{label}:</label>
          <div style={styles.fieldrow}>



            <textarea id="formField.id" rows={formField.nLines} cols="100" onChange={(evt) => {
              this.setFieldValue(index,evt.target.value);
              this.sendInputMessage(evt.target.value,index);
           }} value={formField.value}/>
           {this.renderRadioBox(formField,index)}
          </div>

        </div>


       );
    }
    else{
      return(
        <div className="form-group" key={index}>
            <label htmlFor={formField.id}>{label}:</label>
          <div style={styles.fieldrow}>
              <input type="text" className="form-control" id={formField.id} placeholder={label}
                onChange={(evt) => {
                  this.setFieldValue(index,evt.target.value);
                  this.sendInputMessage(evt.target.value,index);
              }} value={formField.value}/>
            {this.renderRadioBox(formField,index)}
          </div>

        </div>
       );
    }




}

renderComposeButtons(){
  if(this.state.action.selectedFieldId){
    return (
      <div style={styles.buttonContainer}>
          <div style={styles.button}>
            <button type="button" className="btn btn-primary" onClick={()=>{
                this.setSelectedField(null);
              }}>{formDataTransferConfig.unselectButton}</button>
          </div>
          <div style={styles.button}>
            <button type="button" className="btn btn-primary" onClick={()=>{
                this.deleteField();
              }}>{formDataTransferConfig.deleteButton}</button>
          </div>
      </div>
    );
  }
  else{

        return (
          <div style={styles.buttonContainer}>
              <div style={styles.button}>
                <button type="button" className="btn btn-primary" onClick={this.disconnectGlobalInput.bind(this)}>{formDataTransferConfig.cancelButton}</button>
              </div>

              <div style={styles.button}>
                <button type="button" className="btn btn-primary" onClick={this.toAddNewField.bind(this)}>{formDataTransferConfig.addNewFieldButton}</button>
              </div>


              <div style={styles.button}>
                <button type="button" className="btn btn-primary" onClick={this.connectGlobalInput.bind(this)}>{formDataTransferConfig.nextButton}</button>
              </div>
          </div>
        );
    }

}

renderComposeForm(){
    var formid=this.getFormId();
    var formLabel=this.getFormLabel();
    var fields=this.getFields(this.state.action);


    return (

      <div style={styles.content}>
        <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.content} image={images.createform}>

          <div style={styles.formContainer}>
                      <div className="form-group">
                          <label htmlFor="formid">Form Id:</label>
                          <input type="text" className="form-control" id="formid" placeholder="Form Id"
                          onChange={(evt) => {
                            this.setFormId(evt.target.value);
                        }} value={formid}/>
                      </div>


                      <div className="form-group">
                          <label htmlFor="formlabel">Folder:</label>
                          <input type="text" className="form-control" id="formid" placeholder="Folder"
                          onChange={(evt) => {
                            this.setFormLabel(evt.target.value);
                        }} value={formLabel}/>
                      </div>
                      {fields.map(this.renderAField.bind(this))}
          </div>

        {this.renderComposeButtons()}

        </RenderTextImage>

      </div>



    );
}

renderNewFieldType(){
    var singleLine=false;
    var multiLine=false;
    var nLines=this.getNewFieldNLines();
    if(nLines && nLines>1){
          multiLine=true;
          singleLine=false;
    }
    else{
      multiLine=false;
      singleLine=true;
    }

    return(
      <div>
              <div className="form-group">
                Single-line  <input type="radio" checked={singleLine} onChange={()=>{}} onClick={()=>{
                      this.setNewFieldNLines(null);
                    }}/>
              </div>
              <div className="form-group">
                Multi-line  <input type="radio" checked={multiLine} onChange={()=>{}} onClick={()=>{
                        this.setNewFieldNLines(5);
                    }}/>
              </div>
      </div>

    );

}
renderAddNewField(){

  var newFieldLabel=this.getNewFieldLabel();


  return (

    <div style={styles.content}>
      <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.content} image={images.createform}>

        <div style={styles.formContainer}>
                    <div className="form-group">
                        <label htmlFor="newfieldlabel">Name of the New Field:</label>
                        <input type="text" className="form-control" id="newfieldid" placeholder="Name of thew new field"
                        onChange={(evt) => {
                          this.setNewFieldLabel(evt.target.value);
                      }} value={newFieldLabel}/>
                    </div>
                      {this.renderNewFieldType()}



        </div>

      <div style={styles.buttonContainer}>
          <div style={styles.button}>
            <button type="button" className="btn btn-primary" onClick={this.toComposeForm.bind(this)}>{formDataTransferConfig.backButton}</button>
          </div>
          <div style={styles.button}>
              <button type="button" className="btn btn-primary" onClick={this.addNewField.bind(this)}>{formDataTransferConfig.addButton}</button>
          </div>

      </div>

      </RenderTextImage>

    </div>



  );

}

    renderConnected(){

      var qrCodeContent=this.state.action.connector.buildInputCodeData();

      return(
        <div style={styles.content}>
          <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.connected}>
                  <div style={styles.qrCodeContainer}>

                              <QRCode
                                    value={qrCodeContent}
                                    level="H"
                                    size={this.state.action.qrsize}
                                   />
                </div>

                <div style={styles.buttonContainer}>
                      <button type="button" className="btn btn-primary" onClick={this.disconnectGlobalInput.bind(this)}>{formDataTransferConfig.cancelButton}</button>
                </div>
          </RenderTextImage>

        </div>

      );


    }
    renderCopyButton(contentField){
      if(contentField.value){
        return (
          <div style={styles.button}>
            <button type="button" className="btn btn-primary" onClick={()=>{
              document.getElementById("contentTextArea").select();
              document.execCommand("Copy");
              this.setState({action:this.state.action, message:formDataTransferConfig.clipboard.copied})
            }}>Copy</button>
          </div>
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
            <div style={styles.content}>
                    <RenderTextImage title={formDataTransferConfig.title} content={formDataTransferConfig.senderConnected}>
                      <div style={styles.formContainer}>
                            {fields.map(this.renderAField.bind(this))}
                      </div>
                        <div style={styles.buttonContainer}>
                            <div style={styles.button}>
                              <button type="button" className="btn btn-primary" onClick={this.disconnectGlobalInput.bind(this)}>{formDataTransferConfig.finishButton}</button>
                            </div>
                        </div>



                    </RenderTextImage>

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
