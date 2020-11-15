import React from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,SelectionContainer} from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';



interface Props{
    companyInfo:()=>void;
    sendMessage:() => void;
}

const Home:React.FC<Props>=({companyInfo,sendMessage})=>{
    const mobile = useGlobalInputApp({initData:{
        action:"input",
        dataType:"form",
        form:{
              title:"Mobile Storage Example",
              fields:Object.values(FIELDS)
        }
    }});
    mobile.setOnchange(({field})=>{
        switch(field.id){
            case FIELDS.contactInfo.id:
                companyInfo();
                break;
            case FIELDS.sendMessage.id:
                sendMessage();
                break;
        }
    });
    return (
        <PageContainer>
            {(!mobile.isConnected) && (<Title>Mobile Secure Storage Example</Title>)}
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>

        <SelectionContainer>
        <Title>Mobile Storage Example</Title>
    <P>Please operate on your mobile.</P>
    <P>If you click on the "{FIELDS.contactInfo.label}" button, the application sends our contact information to your mobile so you can save it into your mobile personal storage.
    If you click on the "{FIELDS.sendMessage.label}" button, you will be able to use your mobile to fill in a form for sending messages to us.
    You can save the content of the form into your mobile personal storage so that you can speed up the form operation by using the autofill feature.
    </P>
        <DisplayApplicationInfo/>
        </SelectionContainer>
        </>)}
    </PageContainer>
    );
};



const FIELDS={
        contactInfo:{
            id:'contact-us',
            label:"Our Contact Information",
            type:"button",
          },
          sendMessage:{
            id:'send-message',
            label:"Send Message To Us",
            type:"button"
          }
};



export default Home;