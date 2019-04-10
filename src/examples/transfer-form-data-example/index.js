import React from 'react';
import FormBuilder from "./form-builder";
import SecureFormTransfer from "./secure-form-transfer";
import {styles} from "./styles";
import {encrypt,decrypt} from "global-input-react";

const textContent={
    title:"Transfer Form Data with Global Input App",
    githuburl:"https://github.com/global-input/transfer-form-data-example"

}

export default class TransferFormDataExample extends React.Component{
  encryptionKey="TDwtv0dV6u"
  defaultForm={
    id:"###username###@members",
    title:"Sign In",
    label:"members",
    fields:[
          {id:"username",label:"Username", selected:false},
          {id:"password",label:"Password", selected:false}
    ]
  }
  constructor(props){
    super(props);
    this.state=this.buildInitialState(props);
  }
  encoderFormData(form){
    return encrypt(JSON.stringify(form),this.encryptionKey);
  }
  decodeFormData(formData){
    return JSON.parse(decrypt(formData,this.encryptionKey))
  }
  buildInitialState(props){
    var compose=true;
    var form=this.defaultForm;
    if(props && props.location && props.location.search){
            var formDataString=this.getQueryParam(props.location.search, "formData");
            if(formDataString){
              try{
                    var formFromQuery=this.decodeFormData(formDataString);
                    if(formFromQuery){
                        form=formFromQuery;
                    }
                }
                catch(e){
                  console.error(e+" while processing the formDataString");
                }
            }
            var composeString=this.getQueryParam(props.location.search, "compose");
            if(composeString==="true"){
                compose=true;
            }
            else if(composeString==="false"){
                compose=false;
            }
    }
    return {compose,form}
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

              {this.renderContent()}
        </div>
      );

    }

    renderContent(){
        if(this.state.compose){
          return (<FormBuilder form={this.state.form} encoderFormData={this.encoderFormData.bind(this)}/>);
        }
        else{
          return (<SecureFormTransfer form={this.state.form} encoderFormData={this.encoderFormData.bind(this)}/>);
        }

    }

}
