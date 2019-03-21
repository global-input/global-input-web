import React from 'react';


import {config} from '../../configs';
import {externalsLinks,examplesLinks} from '../../links-components';
import SubtitleSectionContainer from '../../page-components/section-containers/subtitle-section-container';

const images={deviceSolution:require('./images/global-input-device-solution.png')};




const {ChromeExtension,SupportedWebsites,WatchAuthenticationVideos,AuthenticationDemoVideo,WordPressPlugin,AuthenticationWhitePaper,PlayAuthenticationDemo}=externalsLinks;
const {TransferFormData,SecondScreen} = examplesLinks;


const GlobalInputJSExtension = props =>{

        const {P, Title, Title2,ode,Concept, FirstSection,NextSection,Diagram,Code}=props.theme;

        return(

       <React.Fragment>
<FirstSection>
              <Title>Global Input App JavaScript Extension</Title>
              <Diagram image={images.deviceSolution}/>
              <P>The Global Input JavaScript library allows device and web applications to connect to the Global Input platform to have mobile input and mobile control functions without developing a separate mobile app. This is like bringing the mobile device environment into the existing device and web application runtime, and can be explained with the following diagram:</P>
              <P>
              This enables an application to implement mobile operation logic within the application itself by reusing the existing application processes that are usually implemented already. Application can ask the Global Input App to display UI components and use callback function to receive mobile events and execute the process accordingly. For example if an application needs to have button labelled as “Start” on the mobile screen to allow the user to start a process within the application, the following configuration can be passed to the Global Input JS library:
              <Code>
              {`
                var options={
                            initData:{
                            form:{
                                title:"Press the following button when you are ready",
                                fields:[{
                                    type:"button",
                                    label:"Start",

                                    operations:{
                                        onInput:function(){
                                                  console.log("User pressed the Start button on mobile");
                                                }
                                        }
                                }]
                              }
                            }
                        };
              `}
              </Code>
              </P>

              <P>
              In the above sample code, The ”fields” attribute is an array of mobile elements that are used by the application. The ”onInput” function will be called when the user has pressed the ”Start” button. The looks of the button can be customised, for example, if you would like to the border of the button displayed as ”green” color:
                <Code>
                {`
                  ...
                fields:[{
                    type:"button",
                    label:"Start",
                    style:{
                        borderColor:"green",
                    },
               ...
                  `}
                </Code>
              </P>

              <P>
              As you can see from the above example code, you can set the title of the form being displayed on the mobile screen. If you would like to change the color of the title to “green”:
              <Code>
                {`
                  var options={
                              initData:{
                              form:{
                                  title:{content:"Press the following button when you are ready", color:"green"},
                                  fields:[{
                                      type:"button",
                                      label:"Start",
                                      operations:{
                                          onInput:function(){
                                                    console.log("User pressed the Start button on mobile");
                                                  }
                                          }
                                  }]
                                }
                              }
                          };

                  `}
              </Code>
              </P>

              <P>
                If you would like to display a text field named “Content”, and a button “Start” to receive mobile input events. You can use the following configuration:
                <Code>
                  {`
                    var options={
                                initData:{
                                form:{
                                    title:"Press the following button when you are ready",
                                    fields:[{
                                        label:"Content",
                                        operations:{
                                            onInput:function(content){
                                                      console.log("User has entered:"+content);
                                                    }
                                            }
                                    },{
                                        type:"button",
                                        label:"Start",
                                        operations:{
                                            onInput:function(){
                                                      console.log("User pressed the Start button on mobile");
                                                    }
                                            }
                                    }]
                                  }
                                }
                            };
                    `}

                </Code>

              </P>

  </FirstSection>


        </React.Fragment>

);

};
GlobalInputJSExtension.menu={
    id:"globalInputJSExtension",
    label:"Global Input App JavaScript Extension"
}
export default GlobalInputJSExtension ;
