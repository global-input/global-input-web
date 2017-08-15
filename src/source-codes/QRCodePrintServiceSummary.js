import React, {Component} from 'react'
import QRCode from "qrcode.react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {DisplaySource} from "../components";


export default class QRCodePrintServiceSummary extends DisplaySource{
renderSource(){
  return(

    <pre>{`

          ...

          buildGlobalInputConfig(){
            return {
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
             ...
                    <CodeDataRenderer service={this}  config={this.buildGlobalInputConfig()} level="H" size="300"/>
             ...
              );
          }
       ...

    `}</pre>


  );




}

}
