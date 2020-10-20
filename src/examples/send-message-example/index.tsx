import React, {useState,useCallback} from "react";
import {useGlobalInputApp} from 'global-input-react';
import { PageContainer,Title, P,A,SelectionContainer} from './app-layout';
import DisplayApplicationInfo from './DisplayApplicationInfo';
import SendMessage from './SendMessage';
import CompanyInfo from './CompanyInfo';
import MessageSent from './MessageSent';
const PAGES={
      HOME:'home',
      COMPANY_INFO:'company-info',
      MESSAGE: 'send-message',
      MESSAGE_SENT:'message-sent'
};




export default (props:any)=>{        
    const [page,setPage]=useState(PAGES.HOME);        
   
    const backToHome=useCallback(()=>setPage(PAGES.HOME),[setPage]);
    
    const onSendMessage=useCallback(({firstName,lastName, email, phone,message})=>{
        if(props.sendMessage){
            props.sendMessage({firstName,lastName, email, phone,message});
        }
        else{
            mockSendMessage({firstName,lastName, email, phone,message}); 
        }
        setPage(PAGES.MESSAGE_SENT);
    },[setPage]);

    
    switch(page){
        case PAGES.HOME:
                return (<Home setPage={setPage}/>);
        case PAGES.COMPANY_INFO:
                return (<CompanyInfo backToHome={backToHome}/>);
        case PAGES.MESSAGE:
                return (<SendMessage backToHome={backToHome} onSendMessage={onSendMessage}/>);
        case PAGES.MESSAGE_SENT:
                return (<MessageSent backToHome={backToHome}/>);
        default:
            return null;
    }
    
    

}


const initData={
    action:"input",
    dataType:"form",
    form:{          
          title:"Mobile Storage Example",          
          fields:[{            
            id:PAGES.COMPANY_INFO,
            label:"Our Contact Information",
            type:"button",
          },{            
            id:PAGES.MESSAGE,
            label:"Send Message To Us",
            type:"button"
          }]
    }
};
const Home=({setPage})=>{
    const mobile = useGlobalInputApp({initData});            
    mobile.setOnchange(({field})=>{
        switch(field.id){
            case PAGES.COMPANY_INFO:
                    setPage(PAGES.COMPANY_INFO)
                break;
            case PAGES.MESSAGE:
                    setPage(PAGES.MESSAGE);
                    break;
        }
    });
    return (
        <PageContainer>   
            <mobile.ConnectQR/>
            {mobile.isConnected && (<>
                               
        <SelectionContainer>
        <Title>Mobile Storage Example</Title>
    <P>Please operate on your mobile.</P>
    <P>If you click on the "{initData.form.fields[0].label}" button, the application sends our contact information to your mobile so you can save it into your mobile personal storage. 
    If you click on the "{initData.form.fields[1].label}" button, you will be able to use your mobile to fill in a form for sending messages to us. 
    You can save the content of the form into your mobile personal storage so that you can speed up the form operation by using the autofill feature.
    </P>
        <DisplayApplicationInfo/>
        </SelectionContainer>
        </>)}
    </PageContainer>
    );
};

const mockSendMessage = async ({firstName,lastName,email,phone,message}) => {    
    return new Promise(function(resolve, reject){
         setTimeout(()=>{
             const messageBlob={firstName,lastName,email,phone,message};
             console.log("mock message sender completed:"+JSON.stringify(messageBlob));
         },1000);    
    });         
}