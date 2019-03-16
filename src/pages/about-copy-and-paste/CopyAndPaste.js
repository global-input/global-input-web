import React from 'react';



import {config}  from '../../configs';


export default class CopyAndPaste extends React.Component{

  exampleLinks=[{path:config.paths.examples.contentTransfer.path, linkText:"Content Transfer Example"}];

  render(){

    const {P, Title,ListLinks}=this.props.theme;

        return(

       <React.Fragment>
              <Title>Copy And Paste Across Devices</Title>
              <P>
Global Input App allows users to carry out copy and paste operation across devices securely without subscribing to any services and without using any cloud or network storages.
The connection is secured with the end-to-end ecnryption and initiated with the scanning of an Encrypted QR code.
        </P>
        <P>
This is usedful when you are using shared devices/computers in a public environment that you are not in control. In this case, you may need to use your trusted
mobile dervice as the bucket for transferring content between devices.  Global Input App allows you to transfer securely content from/to your mobile device without
leaving any footprints on cloud services or cloud storages.
Because of the end-to-end encryption with one-time-use encryption key, you can assume that it is like you have connected
your mobile device to the shared computer with a USB cable, allowing you do copy and paste operation between your mobile and the computer.
        </P>
        <P>
Try out the following the simple web application to copy and paste content from you mobile to computer or vice versa.
        </P>
        <ListLinks items={this.exampleLinks}/>

    </React.Fragment>

);
  }
}
