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
              <h3> Originator application</h3>

                Should do the following:
                <ol>
                   <li>Generate a random uuid representing the current session</li>
                   <li>Generate a random uuid representing the current  client application instance</li>
                   <li>Display the picture loaded from url along the form that the user needs to fill in

                   </li>

                    <li> The application running on mobile will not be able to connect to the application by scanning the picture
                    </li>
                </ol>

          </div>

          <div>
              <h3>Connector application</h3>

                Should do the following:
                <ol>
                   <li>Scan the picture from the original application to get the json data in the following format:
                     <p>
                     <p>
                        {textlines.map(t=>{
                        return (
                          <div>{t}</div>
                        )

                      })}

                      </p>

                     </p>
                    </li>

                    <li>
                        Now the application will be able to send message to the original with to the following URL:

                        <p>
{messageURL}
                        </p>

                    </li>

                </ol>

          </div>


      </div>
    );
  }
}
