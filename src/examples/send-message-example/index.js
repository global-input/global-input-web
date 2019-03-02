import React from 'react';

import GlobalInputConnect from '../../components/global-input-connect';
import {styles} from './styles';



const textContent={
    title:"Send Message Example",
    githuburl:"https://github.com/global-input/content-transfer-example",
    help:"Press press the 'Save' button on your mobile to save our details and press the 'Continue' button to continue"
}

export default class SendMessageExample extends React.Component{

  constructor(props){
      super(props);
      this.state=this.buildInitialState();
      this.messageTimeoutHandler=null;
      this.initMobileData(props);
  }
  componentWillUnmount(){
    if(this.messageTimeoutHandler){
      clearTimeout(this.messageTimeoutHandler);
      this.messageTimeoutHandler=null;
    }
  }
  buildInitialState(){
    let state={

    }
    return state;
  }

  onSenderConnected(){
      this.setState(Object.assign({},{connected:true}));
  }
  toMessageForm(){

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
                  config:{
                                url:props.url,
                                apikey:props.apikey,
                                securityGroup:props.securityGroup,
                                initData:{
                                    action:"input",
                                    dataType:"form",
                                    form:{
                                      id:"###company_name###@contacts",
                                      title:"Our Contact Details",
                                      label:"contacts",
                                      fields:[]
                                    }
                                },
                                onSenderConnected:()=>this.onSenderConnected.bind(this)
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
                    onInput: value=>{
                       this.mobile.disconnectGlobaInputApp();
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
                    onInput:this.toMessageForm.bind(this)

                }
            }
            this.mobile.addField(nextButton);

  }

  mobileConfigForMessageSender(){
      this.mobile.config.initData={
                action:"input",
                dataType:"form",
                form:{
                    id:"iterativesolution@mymessages",
                    title:"Sending a Message",
                    label:"Messages",
                    fields:[]
                }
      };
      var first_name={
              id:"first_name",
              type:"text",
              label:"First Name",
              value:""
      };




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
        <GlobalInputConnect mobileConfig={this.mobile.config}
          ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
          connectingMessage="Connecting...."
          connectedMessage="Scan with Global Input App" reconnectOnDisconnect={true}>
            <div style={styles.help}>
                {textContent.help}
            </div>

          </GlobalInputConnect>



      </div>
    );

  }




}
