import React from 'react';



import examples from "../examples";


export default class CopyAndPaste extends React.Component{

  exampleLinks=[examples.linkItems.contentTransfer];

  render(){

    const theme=this.props.theme;

        return(

       <React.Fragment>
              <theme.Title>Copy And Paste Across Devices</theme.Title>
              <theme.P>

Global Input App allows users to carry out copy and paste operation across devices securely without subscribing to any services and without using any cloud or network storages.

The connection is secured with the end-to-end ecnryption and initiated with the scanning of an Encrypted QR code.
        </theme.P>

        <theme.P>
          This is usedful when you are using shared devices/computers in a public environment that you are not in control. In this case, you may need to use your trusted

          mobile dervice as the bucket for transferring content between devices.  Global Input App allows you to transfer securely content from/to your mobile device without leaving any footprints on cloud services or cloud storages.
Because of the end-to-end encryption with one-time-use encryption key, you can assume like you have connected your mobile device to the shared computer with a USB cable, then you can do copy and paste operation across devices.
        </theme.P>
        <theme.P>
          Try out the following simple web application that allows you do copy and paste operation from you mobile to computer or vice versa.
        </theme.P>
        <theme.ListLinks items={this.exampleLinks}/>

    </React.Fragment>

);
  }
}
