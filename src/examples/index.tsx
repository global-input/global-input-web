import React from 'react'
import {Page} from "../page-components/themes/blue-background";

import ContentTransferExample    from "./content-transfer-example";
import GameControlExample        from "./game-control-example";
import MediaPlayerControlExample from "./media-player-control-example";
// import SendMessageExample        from "./send-message-example";
import TransferFormDataExample   from "./transfer-form-data-example";
import MobileEncryptionExample from './mobile-encryption-example';
import {config} from "../configs";
import RenderPageMetadata from "../pages/RenderPageMetadata";
  const createExampleComponent =(ExampleComponent:React.ComponentType, title)=>{
    return (props:any)=>{
      
      return(
        <Page>              
          <ExampleComponent url={config.url} {...props}/>          
          <RenderPageMetadata title={title}/>
        </Page>
        
      );
    
    }
   
  
  }

  
export const GameControlScreen=createExampleComponent(GameControlExample, "Global Input App - Mobile Input & Control Example");
export const MediaPlayerScreen=createExampleComponent(MediaPlayerControlExample, "Global Input App - Second Screen Example");

export const TransferFormDataScreen=createExampleComponent(TransferFormDataExample,"Global Input App - Mobile Authentication &amp; Example");
export const ContentTransferScreen=createExampleComponent(ContentTransferExample,"Global Input App - Mobile Content Example");
export const MobileEncryptionScreen=createExampleComponent(MobileEncryptionExample,"Global Input App - Mobile Encryption Example");


// const SendMessageScreenWithoutSendMessage=createExampleComponent(SendMessageExample,"Global Input App - Mobile Personal Storage Example");

// export const SendMessageScreen=(props:object)=>{    
//       return(
//           <SendMessageScreenWithoutSendMessage {...props} sendMessage={sendMessage}/>                                
//       );
// }

const apiURL="https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback";

type EmailMessage={
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  message:string;
};
const  sendMessage =  async ({firstName,lastName,email,phone,message}:EmailMessage) => {
  var headers={
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  var searchParams = new URLSearchParams();
  searchParams.append("your-first-name", firstName);
  searchParams.append("your-last-name", lastName);
  searchParams.append("your-email", email);
  searchParams.append("your-phone", phone);
  searchParams.append("your-message", message);
  return fetch(apiURL,{headers, method:"POST", body:searchParams});  
};