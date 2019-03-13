import React from "react";

import GlobalInputConnect from '../../../components/global-input-connect';
import ClipboardCopyButton from '../../../components/clipboard-copy-button';
import InputWithLabel from '../../../components/input-with-label';
import SelectableInput from '../../../components/selectable-input';
import TextButton from '../../../components/text-button';

import {styles} from "./styles";
import AddNewFieldDialog from "./add-new-field-dialog";
const textContent={
    title:"Building Form for Interacting with Global Input App",
    githuburl:"https://github.com/global-input/content-transfer-example",
    help:"Pess the 'Finish' button at the bottom to continue when you are happy with the form.",
    idHelp:'The "ID" value is for matching the existing data items in the mobile app.  A pair of "###" identifies a place holder to be replaced with the value of the corresponding field named in the form. For example, the ###username### place holder will be replaced with the content of  the "Username" field you have filled. If any matching data item is found, the mobile app will display the "Matched" button.'

}

export default class FormBuilder extends React.Component{

  constructor(props){
      super(props);
      this.state=this.buildInitialState(props);
  }

  buildInitialState(props){
      return {
                formId:this.props.form.id,
                formTitle:this.props.form.title,
                formLabel:this.props.form.label,
                formFields:this.props.form.fields,
                showAddNewFieldDialog:false
      };
  }
  onFinish(){
    var form={
      id:this.state.formId,
      title:this.state.formTitle,
      label:this.state.formLabel,
      fields:this.state.formFields,
    };
    var formData=this.props.encoderFormData(form);
    window.location.href=window.location.protocol + "//" + window.location.host + window.location.pathname + "?formData="+formData+"&compose=false";
  }
  hasSelectedField(){
    return this.state.formFields.filter(f=>f.selected).length>0;
  }
  addFormField(newField){
      var formFields=[...this.state.formFields,newField];
      let showAddNewFieldDialog=false;
      this.setState(Object.assign({},this.state,{formFields,showAddNewFieldDialog}));
  }
  onDeleteField(){
    var formFields=this.state.formFields.filter(f=>!f.selected);
    this.setState(Object.assign({},this.state,{formFields}));
  }
  showAddNewFieldDialog(){
    let showAddNewFieldDialog=true;
    this.setState(Object.assign({},this.state,{showAddNewFieldDialog}))
  }
  hideAddNewFieldDialog(){

    let showAddNewFieldDialog=false;
    return this.setState(Object.assign({},this.state,{showAddNewFieldDialog}));
  }
  setFormTitle(formTitle){
      this.setState(Object.assign({},this.state,{formTitle}));
  }
  setFormId(formId){
    this.setState(Object.assign({},this.state,{formId}));
  }
  setFormLabel(formLabel){
    this.setState(Object.assign({},this.state,{formLabel}));
  }
  toggleFormFieldSelection(formField){

      var formFields=this.state.formFields.map(f=>{
            var selected=false;
            if(f.id===formField.id){
              selected=!f.selected
            }
            return Object.assign({},f,{selected});
      });

      this.setState(Object.assign({},this.state,{formFields}));
  }
  onAddNewField(data){
          var label=data.label;
          var id=data.id;
          var nLines=data.nLines;
          if((!label) && (!id)){
                return;
          }
          if(!id){
              id=label.replace(' ',"_").toLowerCase();
          }
          else if(!label){
              label=id;
          }
          this.addFormField({id,label,nLines});
  }

  renderFormField(formField){
    var fieldType="text";
    if(formField.nLines && formField.nLines>1){
        fieldType="textarea";
    }

    return(
        <SelectableInput label={formField.label} id={formField.id} type={fieldType} key={formField.id}
           value="" readOnly={true} onSelected={()=>this.toggleFormFieldSelection(formField)}/>
      );

  }


  render(){

    return(

      <React.Fragment>
        <div style={styles.help}>{textContent.help}</div>
        <div style={styles.form}>
          <InputWithLabel label="Form Title" id="formTitle"
             onChange={this.setFormTitle.bind(this)}
            value={this.state.formTitle}/>

          <InputWithLabel label="Form Id" id="formId"
              onChange={this.setFormId.bind(this)}
              value={this.state.formId} help={textContent.idHelp}/>

            <InputWithLabel label="Folder" id="formLabel"
                 onChange={this.setFormLabel.bind(this)}
                  value={this.state.formLabel}/>
                {this.state.formFields.map(this.renderFormField.bind(this))}

        </div>
        <div style={styles.footer}>
              <TextButton label="Delete Selected" onClick={this.onDeleteField.bind(this)} disabled={!this.hasSelectedField()}/>
              <TextButton label="Add New Field" onClick={this.showAddNewFieldDialog.bind(this)}/>
              <TextButton label="Next" onClick={this.onFinish.bind(this)}/>
        </div>

        {this.renderAddNewFieldDialog()}
      </React.Fragment>
    );

  }

  renderAddNewFieldDialog(){
    if(this.state.showAddNewFieldDialog){
        return (<AddNewFieldDialog onCancel={this.hideAddNewFieldDialog.bind(this)} onAddNewField={this.onAddNewField.bind(this)}/>);
    }
    else{
      return null;
    }
  }


}
