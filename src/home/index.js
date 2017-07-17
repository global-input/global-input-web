import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Home extends Component {

  render() {
var qrcodeurl="https://globalinput.co.uk/global-input/qr-code/<session-uuid>/<client-uuid>/simple";
var qrJson={
      se: "<session-id>",
      cl: "<client-id>",
      dt: "..."
};

 const qrjsonString=JSON.stringify(qrJson,null, 4);
const textlines=qrjsonString.split("\n");
var messageURL="https://globalinput.co.uk/global-input/messages/<session-id>/<client-id>"
    return (
      <div>
          <div>
              <h1>Global Input</h1>
          </div>
          <div>
              <h3> How to power application with Global Input</h3>
                  <p>
                    npm install --save global-input-message
                  </p>
                  <ol>
                      <li>import the library:
                          <p>
                              {'import {switchMessageServer} from "global-input-message";'}
                          </p>
                      </li>
                      <li>
                          create the connector:
                          <p>
                              var connector=createMessageConnector();
                          </p>
                      </li>
                      <li>
                         Build QR Code data and display it:
                         <p>
                           const qrdata=this.connector.buidQRCodeData(data);
                           for example in react js: {'import QRCode from qrcode.react and then:'}:
                           {'<QRCode value={qrdata}/>'}
                        </p>
                        In the above the data is an array containing the sequence of data item corresponding to each input field  visually.
                      </li>
                      <li>
                        connect to the message connector begin to receive message:
                        <p>
                          <p>
                          {'this.connector.connect(function(message){'}
                          </p>
                          <p>
                                {'message.index is the index of the field'}
                          </p>
                          <p>
                                {'message.value is the typed by the user'}
                          </p>
                          <p>
                              {'}});'}'
                          </p>
                        </p>

                      </li>


                  </ol>

          </div>




      </div>
    );
  }
}
