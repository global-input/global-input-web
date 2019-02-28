import React from "react";

import GlobalInputConnect from '../../components/global-input-connect';
import ClipboardCopyButton from '../../components/clipboard-copy-button';
import InputWithLabel from '../../components/input-with-label';

import {styles} from "./styles";
import AddNewFieldDialog from "./add-new-field-dialog";
const textContent={
    title:"Building Form for Interacting from Global Input App",
    githuburl:"https://github.com/global-input/content-transfer-example",
    idHelp:'The "ID" value is for matching the existing data items in the mobile app.  A pair of "###" identifies a place holder to be replaced with the value of the corresponding field named in the form. For example, the ###username### place holder will be replaced with the content of  the "Username" field you have filled. If any matching data item is found, the mobile app will display the "Matched" button.'
}
export default class TransferFormDataExample extends React.Component{
  constructor(props){
      super(props);
      this.state=this.buildInitialState(props);
  }
  buildInitialState(props){
      return {
                formId:"###username###@members",
                formTitle:"Sign In",
                formLabel:"members",
                formFields:[
                      {id:"username",label:"Username", selected:false},
                      {id:"password",label:"Password", selected:false}
                ],
                showAddNewFieldDialog:false
      };
  }

  addFormField(newField){
      var formFields=[...this.state.formFields,newField];
      let showAddNewFieldDialog=false;
      console.log(formFields);
      this.setState(Object.assign({},this.state,{formFields,showAddNewFieldDialog}));
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

    return(
      <div style={styles.fieldContainer} key={formField.id}>
       <InputWithLabel label={formField.label} id={formField.id} style={styles.formField}
          labelStyle={styles.label}
          value="" readOnly={true}/>
        <span style={styles.checkboxButton}>
            <input type="checkbox"
                       checked={formField.selected}
                       onChange={()=>{
                         this.toggleFormFieldSelection(formField);
                       }} />
        </span>
      </div>
      );

  }

  render(){

    return(
      <div style={styles.container}>

        <div style={styles.title}>
            {textContent.title}
        </div>
        <div style={styles.topControl}>
              <span style={styles.githuburl}>
                    <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
              </span>
        </div>
        <div style={styles.form}>
          <InputWithLabel label="Form Title" id="formTitle" style={styles.formTitle}
            fieldContainer={styles.fieldContainer}
            labelStyle={styles.label} onChange={this.setFormTitle.bind(this)}
            value={this.state.formTitle}/>

          <InputWithLabel label="Form Id" id="formId" style={styles.formId} helpStyle={styles.helpStyle}
              labelStyle={styles.label} onChange={this.setFormId.bind(this)}
              value={this.state.formId} help={textContent.idHelp}/>

            <InputWithLabel label="Folder" id="formLabel" style={styles.formLabel}
                  labelStyle={styles.label} onChange={this.setFormLabel.bind(this)}
                  value={this.state.formLabel}/>
                {this.state.formFields.map(this.renderFormField.bind(this))}

        </div>
        <div style={styles.footer}>
              <button style={styles.button} onClick={this.showAddNewFieldDialog.bind(this)}>Add New Field</button>
        </div>
        {this.renderAddNewFieldDialog()}
      </div>
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
