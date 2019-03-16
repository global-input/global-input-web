import React from 'react';


import {config} from '../../configs';

import {externalsLinks,examplesLinks} from '../../links-components';


const {MobileGameControlExample} = examplesLinks;

const IntroducingMobileInputAndControl=props=>{


        const {P, Title, Code}=props.theme;

        return(

       <React.Fragment>
              <Title>Introducing Mobile Input & Control</Title>
              <P>
              Global Input App introduces a unified and client-only solution for intrdocuing mobile input & control to applications.
              
              It is extremely simple to introduce mobile input and control functionalities into the applications running on IoT, Smart TV and Self-service machines.
              The level of flexibility in the mobile user interface makes it possible for applications to provide features very close to the fully functional mobile app.
               For example, if you have written an application on a Rassbery device, and would like to use mobile to start and stop it a process in your application.
               You can provide the following configuration code to the extension library:
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
        </React.Fragment>

      );

};
export default IntroducingMobileInputAndControl;
