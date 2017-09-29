import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {textValues,images} from  "../configs";
import {DisplayBlockText,ShowImage} from "../components";
import {CodeDataRenderer} from "global-input-react";
import ReactMarkdown from "react-markdown";
import {TopMenu} from "../menu";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'



import {styles} from "./styles";
import {config} from "../configs";
export  class QRPrinting extends Component {
  constructor(props){
      super(props);
      this.state={size:300,level:"H", content:"", label:""};
  }

  menuPressed(){
      console.log("pressed");
      this.setState(Object.assign({},this.state,{menuPressed:!this.state.menuPressed}));
  }



  setSize(size){
    this.setState(Object.assign({},this.state,{size}));
  }
  setSenders(sender, senders){
    this.setState(Object.assign({}, this.state,{senders:senders}));
    console.log("--sender::::::-:"+senders);
  }
  onLevelItemsSelected(items){
      if(items.length){
          var selected=items[0].value;
          if(selected==="L"||selected==="M" || selected==="Q" || selected==="H"){
              this.setLevel(selected);
          }
      }
  }
  setLevel(level){
        this.setState(Object.assign({},this.state,{level}));
  }
  setLabel(label){
    this.setState(Object.assign({},this.state,{label}));
  }
  setContent(content){
    this.setState(Object.assign({},this.state,{content}));
  }
  printQRCode(){
      window.print();
  }
  buildGlobalInputConfig(){
    return {
          url:config.url,
          apikey:config.apikey,
          securityGroup:config.securityGroup,
          scrollToOnConnected:"bidirectionalInputTest",
          onSenderConnected:this.setSenders.bind(this),
          onSenderDisconnected:this.setSenders.bind(this),
          initData:{
            action:"input",
            dataType:"qrcode",


            form:{
              "title": "QR Code Printing",
              fields:[{
                        label:"Label",
                        operations:{
                            onInput:this.setLabel.bind(this)
                        }


                      },{
                         label:"Content",
                         operations:{
                           onInput:this.setContent.bind(this)
                         }

                      },{
                         label:"Size",
                         operations:{
                           onInput:this.setSize.bind(this)
                         },
                         value:300,
                         type:"range",
                         minimumValue:100,
                         maximumValue:1000,
                         step:10

                      },{
                        label:"Level",
                        operations:{
                          onInput:this.onLevelItemsSelected.bind(this)
                        },
                        type:"list",
                        selectType:"single",
                        value:"H",
                        items:[
                          {value:"L", label:"L"},
                          {value:"M", label:"M"},
                          {value:"Q", label:"Q"},
                          {value:"H", label:"H"}
                        ]
                      },
                      {
                         label:"Print",
                         type:"button",
                         operations:{
                            onInput:this.printQRCode.bind(this)
                         }

                      }]
                  }
         }


    };
  }
  render() {

     var config=this.buildGlobalInputConfig();
    return (
      <div>
          <div style={styles.headerSection}>
              <TopMenu selected="qrprinting"/>



               <div style={styles.serviceTitle}>
                     {textValues.qrcode.title}
               </div>
               <div style={styles.fromStore}>
                  <a href={textValues.urls.playstore}>
                   <img src={images.playstore} style={styles.storeImage}/>
                  </a>
                  <a href={textValues.urls.appstore}>
                   <img src={images.appstore} style={styles.imageStore}/>
                   </a>


               </div>
               <DisplayQRCode config={config} service={this} senders={this.state.senders}/>
               <div id="bidirectionalInputTest">
                 <DisplayForm content={this.state.content}  setContent={this.setContent.bind(this)} senders={this.state.senders}
                 label={this.state.label} level={this.state.level}
                 size={this.state.size}
                 setLabel={this.setLabel.bind(this)}
                 setSize={this.setSize.bind(this)} printQRCode={this.printQRCode.bind(this)}
                 setLevel={this.setLevel.bind(this)}/>
               </div>
               <DisplayIntroduction/>


          </div>


          <div className="homeContainer">

            <div className="pageTitleContainer">
                <div className="pageTitleBlock">

                </div>
            </div>
            <div className="row" >
              <div className="col-sm-6">

                <DisplayBlockText title={textValues.qrcode.passwordPring.title} content={textValues.qrcode.passwordPring.content}/>

              </div>
              <div className="col-sm-6"> <img src={images.passwordPrinting}/></div>
            </div>

            <DisplayBlockText content={textValues.qrcode.content2}/>



          </div>




      </div>
            );
  }
}


class DisplayIntroduction extends Component{

  render(){
    return(
      <div style={styles.introduction}>
          {textValues.qrcode.content1.map((p,index)=>{return(<div className="ptext" key={index}>
          <ReactMarkdown source={p} />
          </div>);})}
      </div>

    );

  }
}

class DisplayQRCode extends Component{

  render(){
    if(!this.props.senders || this.props.senders.length===0){
          return(
            <div style={styles.qrServiceContainer}>

                  <div style={styles.qrcodeContainer}>
                    <CodeDataRenderer service={this.props.service}  config={this.props.config} level="H" size="300"/>
                  </div>

            </div>



          );
    }
    else{
        console.log("----qr senders-:"+this.props.senders)
          return null;
    }

  }
}

class DisplayForm extends Component{
    render(){
      if(this.props.senders && this.props.senders.length>0){
           return(
             <div className="formContainer">
                    <div className="form">
                          <QRCodeToPrint content={this.props.content} label={this.props.label} level={this.props.level}
                          size={this.props.size}/>
                          <ContetAndLabel setContent={this.props.setContent}
                            setLabel={this.props.setLabel}
                            label={this.props.label} content={this.props.content}/>
                          <QRCodePropertyFields
                              content={this.props.content}
                              size={this.props.size}
                              level={this.props.level}
                              setSize={this.props.setSize}
                              setLevel={this.props.setLevel}
                              printQRCode={this.props.printQRCode}/>
                      </div>
                </div>
           );
         }
         else{
           return null;
         }






    }


}


class QRCodeToPrint extends Component{
  render(){
            if(this.props.content){
                      return(
                      <div className="toPrint">
                          <div className="qrCodeContainer">
                              <QRCode value={this.props.content} level={this.props.level} size={this.props.size}/>
                          </div>
                          <div className="qrCodeLabel">
                            {this.props.label}
                          </div>
                      </div>
                      );

            }
            else{
              return null;
            }
      }

  }

  class QRCodePropertyFields extends Component{

    render(){
      if(this.props.content){
            return (
            <div className="qrcodePropery">
                  <input type="range" min="100" max="1000" step="10" value={this.props.size} onChange={evt=>{
                      this.props.setSize(evt.target.value);
                  }}/>
                <select value={this.props.level} onChange={evt=>{
                    this.props.setLevel(evt.target.value);
                  }}>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="Q">Q</option>
                    <option value="H">H</option>
                  </select>
                  <div className="button">
                    <a onClick={this.props.printQRCode}>
                      Print
                    </a>
                  </div>
              </div>
            );
      }
      else{
        return null;
      }

    }
  }

  class ContetAndLabel extends Component{
    render(){
      return(
      <div className="contetAndLabel">
        <div className="contetAndLabelRecord">
           <div className="contetAndLabelLabel">
              Content:
            </div>

             <input type="text" onChange={(evt) => {
                  this.props.setContent(evt.target.value);
              }} value={this.props.content} size="30"/>
        </div>
          <div className="contetAndLabelRecord">
            <div className="contetAndLabelLabel">
              Label:
            </div>
               <input type="text" onChange={(evt) => {
                    this.props.setLabel(evt.target.value);
                }} value={this.props.label} size="30"/>
          </div>
      </div>
    );
    }

  }
