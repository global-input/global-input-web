import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";


export default class QRCodePrintServiceSource extends DisplaySource{
renderSource(){
  return(

    <pre>{`
      import React, {Component} from 'react'
      import QRCode from "qrcode.react";


      import {CodeDataRenderer} from "global-input-react";
      import {config} from "../configs";
      export default class QRCodePrintService extends Component {
        constructor(props){
          super(props);
          this.state={size:300,level:"H", content:"", label:""};
        }
          setSize(size){
            this.setState(Object.assign({},this.state,{size}));
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
                  initData:{
                    action:"input",
                    dataType:"qrcode",
                    form:{
                      "title": "QR Code Printing Service",
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
            return(
            <div className="applicationContainer">
                 <div className="formContainer">
                        <div className="form">
                              <QRCodeToPrint content={this.state.content} label={this.state.label} level={this.state.level} size={this.state.size}/>
                              <ContetAndLabel setContent={this.setContent.bind(this)}
                                setLabel={this.setLabel.bind(this)}
                                label={this.state.label} content={this.state.content}/>
                              <QRCodePropertyFields
                                  content={this.state.content}
                                  size={this.state.size}
                                  level={this.state.level}
                                  setSize={this.setSize.bind(this)}
                                  setLevel={this.setLevel.bind(this)}
                                  printQRCode={this.printQRCode.bind(this)}/>
                          </div>
                    </div>
                    <div className="globalInputContainer">
                    <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300"/>
                    </div>
              </div>
              );
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
                        <button onClick={this.props.printQRCode}>
                          Print
                        </button>
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




    `}</pre>


  );




}

}
