import React from 'react';

import GlobalInputConnect from '../../components/global-input-connect';
import InputWithLabel from '../../components/input-with-label';
import {styles} from './styles';



const textContent={
    title:"Send Message Example (Workflow example)",
    githuburl:"https://github.com/global-input/send-message-example",
}

export default class SendMessageExample extends React.Component{


  getStyles(){
      return styles;
  }

  initWorkflowState(props){
    this.workflow={
      steps:{
        transferContact:{
              render:this.renderBusinessContact.bind(this),
              buildState:state=>{
                return{step:"transferContact", connected:false};
              }
        },
        messageForm:{
              render:this.renderMessageForm.bind(this),
              buildState:state=>{
                    return{
                          step:"messageForm",
                          firstName:"",
                          lastName:"",
                          email:"",
                          phone:"",
                          message:"",
                          connected:true
                    };
              }
        },
        sendingMessage:{
              render:this.renderSending.bind(this),
              buildState:state => Object.assign({}, state,{step:"sendingMessage",connected:false})
        },
        messageSent:{
              render:this.renderMessageSent.bind(this),
              buildState:state => Object.assign({}, state,{step:"messageSent",connected:false})
        },
        error:{
              render:this.renderErrorMessage.bind(this),
              buildState:(state, errorMessage)=>Object.assign({}, state,{step:"error",connected:false, error:errorMessage})
        }
      },
      render(name, styles){
          var matched=this.steps[name];
          if(matched){
              return matched.render(styles);
          }
          else{
            return null;
          }
      }

     };
   }

   renderBusinessContact(styles){
          return(<div style={styles.help}>
             Press the 'Continue' button on your mobile to continue
           </div>
         );
   }
  renderMessageForm(styles){
    return(
      <React.Fragment>
            <div style={styles.fieldContainer}>
              <InputWithLabel label="First Name" id="first_name" type="text"
                 value={this.state.firstName}
                 onChange={value=>{
                   this.setFirstName(value);
                   this.mobile.setFirstName(value);
                 }
                 }/>
            </div>

            <div style={styles.fieldContainer}>
              <InputWithLabel label="Last Name" id="last_name" type="text"
                 value={this.state.lastName}
                 onChange={value=>{
                   this.setLastName(value);
                   this.mobile.setLastName(value);
                 }
                 }/>
            </div>

            <div style={styles.fieldContainer}>
              <InputWithLabel label="Email" id="email" type="text"
                 value={this.state.email}
                 onChange={value=>{
                   this.setEmail(value);
                   this.mobile.setEmail(value);
                 }
                 }/>
            </div>

            <div style={styles.fieldContainer}>
              <InputWithLabel label="Phone" id="phone" type="text"
                 value={this.state.phone}
                 onChange={value=>{
                   this.setPhone(value);
                   this.mobile.setPhone(value);
                 }
                 }/>
            </div>

            <div style={styles.fieldContainer}>
              <InputWithLabel label="Message" id="message" type="textarea"
                 value={this.state.message}
                 onChange={value=>{
                   this.setMessage(value);
                 }
                 }/>
            </div>
            <div style={styles.help}>Operate on your mobile to send message</div>


      </React.Fragment>
      );
  }

  renderSending(styles){
    return(<div style={styles.help}>
            Sending...
          </div>
        );
  }
  renderMessageSent(styles){
    return(<div style={styles.details}>
              <div style={styles.title}>Message Sent...</div>
                <div style={styles.row}>
                  <div style={styles.label}>First Name:</div>
                  <div styles={styles.fieldValue}>{this.state.firstName}</div>
                </div>
                <div style={styles.row}>
                  <div style={styles.label}>Last Name:</div>
                  <div styles={styles.fieldValue}>{this.state.lastName}</div>
                </div>
                <div style={styles.row}>
                  <div style={styles.label}>Email:</div>
                  <div styles={styles.fieldValue}>{this.state.email}</div>
                </div>
                <div style={styles.row}>
                  <div style={styles.label}>Phone:</div>
                  <div styles={styles.fieldValue}>{this.state.phone}</div>
                </div>
                <div style={styles.row}>
                  <div style={styles.label}>Message:</div>
                  <div styles={styles.fieldValue}>{this.state.message}</div>
                </div>

          </div>
        );
  }
  renderErrorMessage(styles){
    return(<div style={styles.help}>
            {this.state.error}
          </div>
        );
  }

  constructor(props){
      super(props);
      this.initMobileData(props);
      this.initWorkflowState();
      this.state=this.workflow.steps.transferContact.buildState();
  }




  initMobileData(props){
            this.mobile={
                  globalInputConnect:null,
                  sendMessage:(message, fieldid)=>{
                        if(this.mobile.globalInputConnect){

                              this.mobile.globalInputConnect.sendInputMessage(message,null,fieldid);
                        }
                        else{

                        }
                  },
                  changeInitData: initData=>{
                        this.mobile.config.initData=initData;
                        if(this.mobile.globalInputConnect){
                          this.mobile.globalInputConnect.changeInitData(initData);
                        }
                        else{
                          console.error("sendInitData is called when disconnected");
                        }
                  },
                  disconnect:()=>{
                    if(this.mobile.globalInputConnect){
                      this.mobile.globalInputConnect.disconnectGlobaInputApp();
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
                                      id:"###company_name###@iterative",
                                      title:"Our Contact Details",
                                      label:"contacts",
                                      fields:[]
                                    }
                                },
                                onSenderConnected:()=>()=>{
                                        this.setState(Object.assign({},{connected:true}));
                                },
                                onSenderDisconnect:()=>{
                                    this.mobile.disconnect();
                                    this.initMobileData();
                                    this.setState(this.workflow.steps.transferContact.buildState());
                                }
                  },
                  addField: field=>this.mobile.config.initData.form.fields.push(field)
            };
            var companyname={
                    id:"company_name",
                    type:"text",
                    label:"Company Name",
                    value:"Iterative Solution"

            };
            this.mobile.addField(companyname);

            var companyAddress={
                    id:"address",
                    label:"Address",
                    type:"text",
                    nLines:5,
                    value:"Iterative Solution Limited \n Kemp House \n \n 152-160 \n City Road\n London EC1V 2NX"
            };
            this.mobile.addField(companyAddress);


            var phone={
                    id:"phone",
                    label:"Phone",
                    type:"text",
                    value:"020 3290 6278"
            }
            this.mobile.addField(phone);

            var email={
                    id:"email",
                    label:"Email",
                    type:"text",
                    value:"info@iterativesolution.co.uk"
            }
            this.mobile.addField(email);

            var info={
                    type:"info",
                    value:["Please press the \"Save\" button to save our contact info, and then press the \"Continue\" button below to send a message to us"],
            }
            this.mobile.addField(info);



            var cancelButton={
                type:"button",
                label:"Cancel",
                icon:"cancel",
                viewId:"footer",
                operations:{
                    onInput: ()=>{
                          this.mobile.disconnect();

                    }
                }
            }
            this.mobile.addField(cancelButton);
            var nextButton={
                type:"button",
                label:"Continue",
                icon:"continue",
                viewId:"footer",
                operations:{
                    onInput:this.initForMessageSenderForm.bind(this)

                }
            }
            this.mobile.addField(nextButton);
  }

  initForMessageSenderForm(){
    var initData={
              action:"input",
              dataType:"form",
              form:{
                  id:"###email###@me",
                  title:"Sending a Message",
                  label:"contacts",
                  fields:[]
              }
    };
    const first_name={
            id:"first_name",
            type:"text",
            label:"First Name",
            value:"",
            operations:{
                onInput:fistName=>this.setFirstName(fistName)
            }
    };
    initData.form.fields.push(first_name);
    this.mobile.setFirstName=value=>{
        this.mobile.sendMessage(value,first_name.id);
    }


    const last_name={
            id:"last_name",
            type:"text",
            label:"Last Name",
            value:"",
            operations:{
                onInput:lastName=>this.setLastName(lastName)
            }
    };
    initData.form.fields.push(last_name);
    this.mobile.setLastName=value=>{
        this.mobile.sendMessage(value,last_name.id);
    }


    const email={
            id:"email",
            type:"text",
            label:"Email",
            value:"",
            operations:{
                onInput:email=>this.setEmail(email)
            }
    };
    initData.form.fields.push(email);

    this.mobile.setEmail=value=>{
        this.mobile.sendMessage(value,email.id);
    }


    const phone={
            id:"phone",
            type:"text",
            label:"Phone",
            value:"",
            operations:{
                onInput:phone=>this.setPhone(phone)
            }
    };
    initData.form.fields.push(phone);

    this.mobile.setPhone=value=>{
        this.mobile.sendMessage(value,phone.id);
    }

    const message={
            type:"text",
            label:"Message",
            value:"",
            nLines:5,
            operations:{
                onInput:message=>this.setMessage(message)
            }
    };
    initData.form.fields.push(message);




    const cancelButton={
            label:"Cancel",
            type:"button",
            viewId:"footer",
            operations:{
                onInput:()=>{
                      this.mobile.disconnect();

                }
            }
    };
    initData.form.fields.push(cancelButton);

    const sendButton={
            label:"Send",
            type:"button",
            viewId:"footer",
            operations:{
                onInput:this.sendMessage.bind(this)
            }
    };
    initData.form.fields.push(sendButton);
    this.mobile.changeInitData(initData);
    this.setState(this.workflow.steps.messageForm.buildState());
  }



  setFirstName(firstName){
    this.setState(Object.assign({}, this.state,{firstName}));
  }
  setLastName(lastName){
    this.setState(Object.assign({}, this.state,{lastName}));
  }
  setEmail(email){
    this.setState(Object.assign({}, this.state,{email}));
  }
  setPhone(phone){
    this.setState(Object.assign({}, this.state,{phone}));
  }
  setMessage(message){
    this.setState(Object.assign({}, this.state,{message}));
  }




  render(){
    const styles=this.getStyles();
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
        <GlobalInputConnect mobileConfig={this.mobile.config}
              ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
              connectingMessage="Connecting...."
              connectedMessage="Scan with Global Input App" reconnectOnDisconnect={true}>
              {this.workflow.render(this.state.step, styles)}
          </GlobalInputConnect>



      </div>
    );
  }

  sendMessage(){
        this.mobile.disconnect();
        this.setState(this.workflow.steps.sendingMessage.buildState(this.state));
        if(this.props.sendMessage){
            this.props.sendMessage(this.state).then(()=>{
                this.setState(this.workflow.steps.messageSent.buildState());
            }).catch(error=>{
                console.error(error);
                this.setState(this.workflow.steps.error.buildState(this.state,"Error:"+error));
            });
        }
        else{
            setTimeout(()=>{
                this.setState(this.workflow.steps.messageSent.buildState(this.state));
            },1000);
        }
  }

}
