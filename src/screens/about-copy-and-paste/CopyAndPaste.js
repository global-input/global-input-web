import React from 'react';


import {styles,images} from './styles';
import examples from "../examples";
import PrinterApp from './PrinterApp';
import Title from './Title';
import Para from './Para';

export default class CopyAndPaste extends React.Component{


  render(){
        return(

       <React.Fragment>
              <Title>Copy And Paste Across Devices</Title>
              <Para>

Global Input App allows users to carry out copy and paste operation across devices securely without subscribing to any services and without using any cloud or network storages.

The connection is secured with the end-to-end ecnryption and initiated with the scanning of an Encrypted QR code.
        </Para>

        <Para>
          This is usedful when you are using shared devices/computers in a public environment that you are not in control. In this case, you may need to use your trusted

          mobile dervice as the bucket for transferring content between devices.  Global Input App allows you to transfer securely content from/to your mobile device without leaving any footprints on cloud services or cloud storages.
Because of the end-to-end encryption with one-time-use encryption key, you can assume like you have connected your mobile device to the shared computer with a USB cable, then you can do copy and paste operation across devices.
        </Para>
        <Para>
          Try out the following simple web application that allows you do copy and paste operation from you mobile to computer or vice versa.
        </Para>

              {examples.renderContentTransferScreen('Transfer Content Example')}

    </React.Fragment>

);
  }
}
