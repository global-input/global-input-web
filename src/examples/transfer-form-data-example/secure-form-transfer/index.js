import React,{useState} from "react";

import {InputWithCopy, TextButton,PageContainer,Title,P} from '../app-layout';
import GlobalInputConnect from '../../../components/global-input-connect';
//import {useGlobalInputApp} from 'global-input-react';




export default ({form})=>{
    const [formFields,setFormFields]=useState(()=>buildFormFields(form));
    const [hideValue, setHideValue]=useState(true);
    return(
      
      <PageContainer>
          <Title>Transfer Form Data</Title>  
          {formFields.map(formField=>(<RenderFormField formField={formField} key={formField.id} hideValue={hideValue}/>))}                                        
      </PageContainer>
      
    );

};

const RenderFormField = ({formField,hideValue})=>{
  var fieldType="text";
  if(formField.nLines && formField.nLines>1){
      fieldType="textarea";
  }
  if(hideValue){
    fieldType="password";
  }

  return(
    
      <InputWithCopy label={formField.label} id={formField.id} type={fieldType}
         value={formField.value}  onSelected={()=>this.toggleFormFieldSelection(formField)} secret={true}
         onChange={value=>{
           this.setFieldValue(value,formField.id);
           this.mobile.sendMessage(value,formField.id);
         }
         }/>    
    );
}


const buildFormFields= form=>{
    const fields=form.fields.map(f=>{
      return {
        id:f.id,
        nLines:f.nLines,
        value:f.value?f.value:"",
        label:f.label
      }
    });
    return fields;

};


/*
export default class SecureFormTransfer extends React.Component{

  constructor(props){
      super(props);
      this.initMobileData(props);
      this.state=this.buildState(props);
  }
  setConnected(connected){

      this.setState(Object.assign({},{connected}));
  }

  getStyles(){
    return{
      fieldContainer:{

      },
      form:{
        minWidth:"90%",
        borderRadius:25
      },
      buttons:{
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
      },
      title:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"flex-start",
        fontSize:"2vw",
        color:"#5291CD",
        marginBottom:"20",
        marginLeft:"4vw"
      },
      connectionMessage:{
        fontSize:"1vw",
        color:"#5291CD",
      },
      note:{
        fontSize:10,
        color:"#5291CD",
      }

    };
  }
  initMobileData(props){
            this.mobile={
                  globalInputConnect:null,
                  sendMessage:(message, fieldid)=>{
                        if(this.mobile.globalInputConnect){
                              this.mobile.globalInputConnect.sendInputMessage(message,null,fieldid);
                        }
                  },
                  config:{
                                url:props.url,
                                apikey:props.apikey,
                                securityGroup:props.securityGroup,
                                initData:{
                                    action:"input",
                                    dataType:"form",
                                    form:{
                                      title:this.props.form.title,
                                      id:this.props.form.id,
                                      fields:[]
                                    }
                                },
                                onSenderConnected:(sender,senders)=>this.setConnected(true),
                                onSenderDisconnected:(sender,senders)=>this.setConnected(false)
                  },
                  addField: field=>this.mobile.config.initData.form.fields.push(field),
                  disconnect:()=>{
                      if(this.mobile.globalInputConnect){
                            this.mobile.globalInputConnect.disconnectGlobaInputApp();
                            this.setConnected(false);
                      }
                  }
            };
            this.props.form.fields.forEach(f=>{

              const field={
                      label:f.label,
                      id:f.id,
                      value:f.value?f.value:"",
                      nLines:f.nLines,
                      operations:{
                          onInput:value=>this.setFieldValue(value,field.id)
                      }
              };
              this.mobile.addField(field);
            });
  }

  buildState(props){
        var state={
            connected:false,
            formFields:[],
            hideValue:false
        };
        this.props.form.fields.forEach(f=>{
            var field={
                id:f.id,
                nLines:f.nLines,
                value:f.value?f.value:"",
                label:f.label
            }
            state.formFields.push(field);
        });
        return state;
  }
  setHideValue(hideValue){
    this.setState(Object.assign({},this.state,{hideValue}));
  }
  setFieldValue(value,fieldId){

      var formFields=this.state.formFields.map(f=>{
          if(f.id===fieldId){
              return  Object.assign({},f,{value});
          }
          else{
            return f;
          }
      });

      this.setState(Object.assign({}, this.state,{formFields}));
  }

  onCompose(){
    var formData=this.props.encoderFormData(this.props.form);
    window.location.href=window.location.protocol + "//" + window.location.host + window.location.pathname + "?formData="+formData+"&compose=true";
  }

  render(){
    let styles=this.getStyles();
    return(
      <div style={styles.form}>
        <div style={styles.title}>{this.props.form.title}</div>
      <GlobalInputConnect mobileConfig={this.mobile.config}
        ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
        connectingMessage="Connecting...."
        connectedMessage="Scan with Global Input App">
                      {this.renderConnectionMessage(styles)}
                      {this.state.formFields.map(f=>this.renderFormField(f,styles))}

                      <div style={styles.buttons}>
                        {this.renderDisconnectButton(styles)}
                        {this.renderShowHideButton(styles)}
                      </div>


        </GlobalInputConnect>
        {this.renderComposeButton()}
        <div style={styles.note}>Note that you can bookmark this page for the purpose of reusing the form </div>

      </div>
    );

  }
  renderFormField(formField,styles){
    var fieldType="text";
    if(formField.nLines && formField.nLines>1){
        fieldType="textarea";
    }
    if(this.state.hideValue){
      fieldType="password";
    }

    return(
      <div style={styles.fieldContainer} key={formField.id}>
        <InputWithCopy label={formField.label} id={formField.id} type={fieldType}
           value={formField.value}  onSelected={()=>this.toggleFormFieldSelection(formField)} secret={true}
           onChange={value=>{
             this.setFieldValue(value,formField.id);
             this.mobile.sendMessage(value,formField.id);
           }
           }/>
      </div>
      );

  }
  renderShowHideButton(){
      if(this.state.hideValue){
                return(<TextButton label="Show" onClick={()=>{this.setHideValue(false)}}/>)
      }
      else{
                return(<TextButton label="Hide" onClick={()=>{this.setHideValue(true)}}/>)
      }
  }
  renderConnectionMessage(styles){
      if(this.state.connected){
          return(<div style={styles.connectionMessage}>You can now enter content both on computer and your mobile</div>);
      }
      else{
          return(<div style={styles.connectionMessage}>Disconnected</div>);
      }

  }
  renderDisconnectButton(styles){
    if(this.state.connected){
          return(<TextButton label="Disconnect" onClick={()=>this.mobile.disconnect()}/>)
    }
    else{
      return null;
    }
  }

  renderComposeButton(){

    return(<TextButton label="Modify Form" onClick={()=>this.onCompose()}/>)

  }





}

*/
/*

const buildInitData =({form})=>{
  const initData={
      action:"input",
      dataType:"form",
      form:{
        title:form.title,
        id:form.id,
        fields:[]
      }
   };
   form.fields.forEach(f=>{
        const field={
                label:f.label,
                id:f.id,
                value:f.value?f.value:"",
                nLines:f.nLines,
                operations:{
                    onInput:value=>this.setFieldValue(value,field.id)
                }
        };
    this.mobile.addField(field);
  });


}
*/