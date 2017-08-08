import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import QRCodePrintService from "./QRCodePrintService";
import {textValues} from  "../configs";


export default class QRPrintingServiceHome extends Component{
  render(){
    return (


            <div className="introSection">
              {textValues.qr.content.p1}

              <ul className="menuContainer">
                <li className="appTitle"><Link to="/global-input-app-example/qrcode-print">
                  {textValues.qr.title}</Link>

                </li>
              </ul>
              <div>
                <Route path="/global-input-app-example/qrcode-print" component={QRCodePrintService}/>
              </div>
              <div className="ptext">
                  {textValues.qr.content.p2}
              </div>

              <div className="ptext">
                  {textValues.qr.content.p3}
              </div>

              <div>
                  {textValues.qr.content.p4}

              </div>

          </div>

      )
    }
}
