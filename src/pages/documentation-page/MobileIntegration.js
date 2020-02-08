import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';

import BorderedWhite from '../../page-components/themes/bordered-white';

import {examplesLinks,externalsLinks,JSExtension} from '../../links-components';



const {ListAllExamples,ContentTransfer}=examplesLinks;

const {WebSocketServer,WatchIntroduction,ReactJSLink,ReactJSExtension}=externalsLinks;

export default class MobileIntegration extends React.Component{

  static menu={
        id:"clientdevice",
        label:"Mobile Integration"
  }
  render(){
    const {P, Title, Code,Concept, FirstSection,NextSection}=this.props.theme;
    return(
      <React.Fragment>

            <FirstSection>
              <WatchIntroduction>Watch Intro</WatchIntroduction>

                  <Title>Mobile Integration</Title>
                    <P>
                    Global Input App (GIA) and its extensions libraries form a secure integration platform for various smart devices that we use in our daily life and workspaces. As contrary to the general approaches that emphasize data security within servers and cloud platforms, the platform shifts the focus of attention towards the devices by employing a strategy that relies on end-to-end encryption across the communicating devices.  The extension library extends the mobile device environments into the device application's runtime context, allowing it to define mobile user interface elements and receives events to implement the business logic across devices.

                  </P>
                  

<P>
As an example, following code demonstrates how you can extend an existing React JS application, which may be running on a computer, IoT, Smart TV or any other smart devices, into a multi-device environment, allowing users to use their mobiles to operate across devices and securely transfer data.
</P>
<P>

<Code>
{`
...
export default ()=>{
    const [content, setContent]=useState("");
    let mobileConfig={
      initData:{
          form:{
                  title:"Content Transfer",
                  fields:[{
                      label:"Concent",
                      operations:{
                          onInput:content=>setContent(content)
                      }
                  }]
            }
      },
    };
    return(<GlobalInputConnect mobileConfig={mobileConfig}/>);
};
`}
                    </Code>
  </P>

<P>
To see the mobile integration in action, you can download the Global Input App, and then load the examples below on a browser on your computer.
                    </P>
                    <ListAllExamples {...this.props}/>
                    <P>


                    </P>
            </FirstSection>

    </React.Fragment>
    );
  }


}
