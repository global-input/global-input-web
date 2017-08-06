import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import QRCodePrintService from "./QRCodePrintService";



export default class QRPrintingServiceHome extends Component{
  render(){
    return (


            <div className="introSection">
              As the start,  you may try the QR Code Printing Service by clicking on the following link.
               Launch the Global Input App on your smart phone, and point your phone camera to
              the QR code displayed on the right having clicked on the link.
              When your mobile phone is connected to the sample application,
              the QR Code will be hightlighted indicating that the
              an user is connected to the service (including the list of the user ids).

              <ul className="menuContainer">
                <li className="appTitle"><Link to="/global-input-app-example/qrcode-print">
                  QR Code Printing Service</Link>

                </li>
              </ul>
              <div>
                <Route path="/global-input-app-example/qrcode-print" component={QRCodePrintService}/>
              </div>
              <div>
                When the mobile application is connected to the service, the receiver app (QR Printing service in this case) sends
                the metadata information such as the title of the service, the fields and
                the buttons etcs to the mobile app to allow the user to interact with
                the application without looking at the computer or the TV screen.
              </div>

              <div>
                  The Global Input Mobile App takes advantage of the QR Printing Sevice to allow you to print your highly encrypted passwords or secrets.
                  on a paper.
                  Since encryption is very strong,
                  only your mobile phone can decrypt.
                  It uses completely different lenght of keys and encryption methods to encrypt the passwords.

                  When you need to see your password/secrets, you just need to do is to point
                  your mobile phobe's camera to the printed QR code, and you will see the decrypted content on your mobile phone's screen like a magic!
                  You don not have to think hard to find many more practical uses for this.
              </div>

              <div>
                  And also, QR printing Service demonstrates the possibilities that the public places
                  like train stations and airports can install services with screens without keyboard or mouse and allow customers
                  to operate on them securely via smart phones.
                  Even in the case of devices with no screen, a printed QR code can do the job.
                  Imagine the possibility of easily controlling IoT devices with your mobile phones without any hassle...

                  I am writing a small example app that runs on a rasberry PI, so a printed QR can be
                  used to connect it to my mobile phone to control my robot!

                  The possibility is limitedless as you can imagine!

              </div>

          </div>

      )
    }
}
