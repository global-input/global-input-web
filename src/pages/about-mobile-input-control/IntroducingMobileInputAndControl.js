import React from 'react';


import {config} from '../../configs';

import {externalsLinks,examplesLinks} from '../../links-components';


const {MobileGameControlExample} = examplesLinks;
const {MobileOperationWhitePaper} = externalsLinks;

const IntroducingMobileInputAndControl=props=>{


        const {P, Title, Code}=props.theme;

        return(

       <React.Fragment>
              <Title>Introducing Mobile Input & Control</Title>
<P>
Global Input App provides device and web applications with a simple, unified and client-only solution for introducing mobile input and mobile control applications, leading to many useful use-cases that can be made available immediately.

</P>
            <P>
              For  Smart TV applications, it is desirable to have options of mobile input and mobile control, especially when it comes to searching,
              subscriptions, account updates etc., for it is usually easier to enter content on mobile than on TV remote controls.
            </P>
            <P>
              Developing IoT device applications are getting simpler. For example, applications running on devices that are powered by RasBerry Pi are becoming increasingly straightforward to develop.
              GIA brings the mobile integration
              to the same level of simplicity, with the immediate availability of mobile control.

            </P>
            <P>
              For self-service machines in public places (i.e. cache machines, ticket machines etc.), the convenience and the extra security brought
              by mobile input and mobile control are worth to consider.
            </P>
            <P>
              The secure communications between the mobile and the target device is reminiscent of USB cable connecting the mobile to the device.
              The communication is secured with the end-to-end encryption, which is initiated by one-time-use encryption key coming from the Encryoted QR code.

            </P>
            <P>
              After the communication is established, the application provides a JSON data for constructing the mobile interface,
              and begins to receive mobile events as user interacts with the mobile interface elements.
              The level of flexibility enables applications to have mobile feature that is close to a fully functional mobile app.
            </P>
            <P>


               For example, if you would like to use mobile to start and stop a process in an application.
               You just need to provide the following configuration code to the extension library:
              </P>
              <Code>
                  {`
                     fields:[{
                          label:"Start",
                          operations:{onInput:()=>this.start()}
                      },{
                        label:"Start",
                        operations:{onInput:()=>this.stop()}
                      }]
                  `}

              </Code>
              <P>
                If you are interested, you can have a look at the following game control examples in action, and check out its source codes on the GitHub:
              </P>
                <MobileGameControlExample {...props}/>

              <P>
                  You amy read our <MobileOperationWhitePaper {...props}>white paper</MobileOperationWhitePaper> on using mobile to operate on device and web applications.

              </P>


        </React.Fragment>

      );

};
export default IntroducingMobileInputAndControl;
