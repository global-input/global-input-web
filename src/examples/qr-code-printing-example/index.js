import React from "react";

import GlobalInputConnect from '../../components/global-input-connect';
import InputWithLabel from '../../components/input-with-label';
import DisplayQRCode from '../../components/display-qrcode';

import {styles} from "./styles";

const textContent={
    title:"Encrypted QR Codes",
    githuburl:"https://github.com/global-input/qr-code-printing-example"
}
export default class QRCodeprintingExample extends React.Component{

    getStyles(){
        //we can customise the styles with props.
        return styles;

    }
    constructor(props){
        super(props);
        this.mobile.init(props); //Initialize the mobile configuration
        this.mobile.uiForCreateContent(props);
        this.state=this.buildInitialState(props);
    }
    buildInitialState(props){
      return{
            step:"receivingEncryptedContent", //receive encrypted content at this step
            content:"",
            label:"",
            size:300,
            level:"H",
            connected:true
      }
    }
    changeToPrintQRCodeStep(){
          this.setState(Object.assign({}, this.state,{
                step:"printQRCode",
              }));
    }
    gotoErrorStep(state, errorMessage){
          return Object.assign({}, state,{
                step:"error",
                errorMessage
              });

    }

     setContent(content){
       this.setState(Object.assign({}, this.state, {content}))
     }

     setLabel(label){
       this.setState(Object.assign({}, this.state, {label}))
     }
     setSize(size){
       this.setState(Object.assign({}, this.state, {size}))
     }
     setLevel(level){
       this.setState(Object.assign({}, this.state, {level}))
     }

    printQRCode(){
            window.print();
    }


    render(){

      const styles=this.getStyles();
      return(
        <div style={styles.container}>
            {this.renderTitle(styles)}
            <div style={styles.form}>
                <GlobalInputConnect mobileConfig={this.mobile.config}
                      ref={globalInputConnect =>this.mobile.globalInputConnect=globalInputConnect}
                      connectingMessage="Connecting...."
                      connectedMessage="Scan with Global Input App" reconnectOnDisconnect={true}>
                      {this.renderWhenConnected(styles)}
                  </GlobalInputConnect>
            </div>

        </div>
      );
    }
    renderTitle(){
      if(this.state.step!=="printQRCode"){
        return(
                <React.Fragment>
                  <div style={styles.title}>
                      {textContent.title}
                  </div>
                  <div style={styles.githuburl}>
                      <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
                  </div>
                </React.Fragment>

              );
      }
      else{
        return null;
      }
    }
    renderWhenConnected(styles){
        if(this.state.step==='receivingEncryptedContent'){
            return this.renderReceivingEncryptedContent(styles);

        }
        else if(this.state.step==='printQRCode'){
              return this.renderPrintQRCode(styles);
        }
        else{
              return this.renderErrorMessage(styles);
        }

    }
    renderReceivingEncryptedContent(styles){
      return(
        <React.Fragment>
              <div style={styles.fieldContainer}>
                <InputWithLabel label="Content" id="content" type="text"
                   value={this.state.content}
                   onChange={value=>{ this.setContent(value);
                                      this.mobile.setContent(value);
                                    }
                            }/>
              </div>

              <div style={styles.fieldContainer}>
                <InputWithLabel label="Label" id="label" type="text"
                   value={this.state.label}
                   onChange={label=>{
                            this.setLabel(label);
                              this.mobile.setLabel(label);
                      }}/>
              </div>
              <div style={styles.help}>Operate on your mobile: i.e, press 'Encrypt' button on your mobile to compose an encrypted content and push it to this form</div>
        </React.Fragment>
        );
    }
    renderPrintQRCode(styles){
      return(
      <div>
            <div style={styles.label}>{this.state.label}</div>
            <DisplayQRCode code={this.state.content} size={this.state.size} level={this.state.level}
              label={"Scan with Your Global Input App"}/>
      </div>
        );

    }
    renderErrorMessage(styles){
      return(<div style={styles.help}>
              {this.state.error}
            </div>
          );
    }

    mobile={
          globalInputConnect:null,
          config:null,
          disconnect:()=>{
              if(this.mobile.globalInputConnect){
                  this.mobile.globalInputConnect.disconnectGlobaInputApp();
              }
          },
          sendMessage:(message, fieldid)=>{
                if(this.mobile.globalInputConnect){
                      this.mobile.globalInputConnect.sendInputMessage(message,null,fieldid);
                }
          },
          addField:(field, form)=>{
                const findex=form.fields.length;
                var setMobileFieldFunction=value=>{
                    if(this.mobile.globalInputConnect){
                        this.mobile.globalInputConnect.sendInputMessage(value,findex);
                    }
                };
                form.fields.push(field);
                return setMobileFieldFunction;
          },
          init:(props)=>{
                this.mobile.config={
                      url:props.url,
                      apikey:props.apikey,
                      securityGroup:props.securityGroup,
                      initData:null,
                      onSenderConnected:()=>()=>{
                              this.setState(Object.assign({},{connected:true}));
                      },
                      onSenderDisconnected:()=>{
                          console.log("*****onSenderDisconnected");
                          this.setState(this.buildInitialState());
                          this.mobile.uiForCreateContent();
                      }
                 };
          },
          setInitData:initData=>{
                this.mobile.config.initData=initData;
                if(this.mobile.globalInputConnect){
                        this.mobile.globalInputConnect.changeInitData(initData);
                }
          },
          uiForCreateContent:props=>{
               var initData={
                                 action:"input",
                                 dataType:"qrcode",
                                 form:{
                                             title:"Content Encryption",
                                             fields:[]
                                       }
               };
               var contentField={
                           label:"Content",
                           value:"",
                           operations:{
                               onInput:value=>this.setContent(value)
                           }
               };
               this.mobile.setContent=this.mobile.addField(contentField,initData.form);

               var labelField={
                           label:"Label",
                           value:"",
                           operations:{
                               onInput:value=>this.setLabel(value)
                           }
               };
               this.mobile.setLabel=this.mobile.addField(labelField,initData.form);

               var cancelButton={
                       type:"button",
                       label:"Cancel",
                       icon:"cancel",
                       viewId:"footer",
                       operations:{
                           onInput: ()=>{
                                console.log("*****cancel pressed*****");
                                this.mobile.uiForCreateContent();
                                this.mobile.disconnect();
                                this.setState(this.buildInitialState());

                           }
                       }
               }
               this.mobile.addField(cancelButton,initData.form);
                   var nextButton={
                       type:"button",
                       label:"Continue",
                       icon:"continue",
                       viewId:"footer",
                       operations:{
                           onInput:()=>{
                             this.mobile.uiForPrintingQRCode();
                             this.changeToPrintQRCodeStep();
                           }

                       }
                   }
             this.mobile.addField(nextButton,initData.form);
             this.mobile.setInitData(initData);
         },

         uiForPrintingQRCode:props=>{
           var initData={
                     action:"input",
                     dataType:"form",
                     form:{
                         title:"Encrypted QR Code",
                         fields:[]
                     }
           };
           var sizeField={
               label:"Size",
               value:300,
               type:"range",
               minimumValue:100,
               maximumValue:1000,
               step:10,
               operations:{
                   onInput:value=>this.setSize(value)
               }
           };
           this.mobile.addField(sizeField,initData.form);

           var levelField={
             label:"Level",
             type:"list",
             selectType:"single",
             value:"H",
             items:[
                     {value:"L", label:"Low"},
                     {value:"M", label:"Medium"},
                     {value:"Q", label:"Quality"},
                     {value:"H", label:"High"}
                   ],
             operations:{
                           onInput:selectedValue=>{
                                   if(typeof selectedValue ==='object' && selectedValue.length){
                                           this.setLevel(selectedValue[0])
                                   }
                                   else{
                                     console.error("receoved unexpected data");
                                   }
                           }
                       },
           };
           this.mobile.addField(levelField,initData.form);

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
           this.mobile.addField(cancelButton,initData.form);

           var nextButton={
               type:"button",
               label:"Print",
               icon:"print",
               viewId:"footer",
               operations:{
                   onInput:this.printQRCode.bind(this)

               }
           }
           this.mobile.addField(nextButton,initData.form);
           this.mobile.setInitData(initData);
         }
    }

}
