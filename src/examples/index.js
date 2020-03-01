import React from 'react'

import TopHeaderSection from "../page-components/top-header-section";
import ContentTransferExample    from "./content-transfer-example";
import GameControlExample        from "./game-control-example";
import MediaPlayerControlExample from "./media-player-control-example";
import SendMessageExample        from "./send-message-example";
import TransferFormDataExample   from "./transfer-form-data-example";
import MobileEncryptionExample from './mobile-encryption-example';
import {config} from "../configs";

const createExampleComponent =ExampleComponent=>{
    return (props)=>{
      return(
        <React.Fragment>
          <div className="noprint">
            <TopHeaderSection  selected={props.selected}/>
          </div>
          <div style={compStyles.content}>
              <div style={compStyles.itemSection}>
                  <ExampleComponent url={config.url} {...props}/>              
                  
              </div>
          </div>
        </React.Fragment>  
      );
    
    }
   
  
  };

  const createExampleComponent2 =ExampleComponent=>{
    return (props)=>{
      return(
        <React.Fragment>
          <div className="noprint">
            <TopHeaderSection  selected={props.selected}/>
          </div>
          <ExampleComponent url={config.url} {...props}/>                        
        </React.Fragment>  
      );
    
    }
   
  
  }

  
  
  const compStyles={
  
    content:{
        paddingLeft:  20,
        paddingTop:   50,
        paddingRight: 20,
        display:      "flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:    "center",
        backgroundColor:"#5291CD",
        width:"100%",
        height:window.innerHeight,
    },
    itemSection:{
       marginTop:20,
       marginBottom:10,
       padding:10,
       backgroundColor:"white",
       width:"95%",
       borderRadius:25,
    },
  
  };
  
  

  
export const GameControlScreen=createExampleComponent2(GameControlExample);
export const MediaPlayerScreen=createExampleComponent2(MediaPlayerControlExample);

export const TransferFormDataScreen=createExampleComponent2(TransferFormDataExample);
export const ContentTransferScreen=createExampleComponent2(ContentTransferExample);
export const MobileEncryptionScreen=createExampleComponent(MobileEncryptionExample);


const SendMessageScreenWithoutSendMessage=createExampleComponent2(SendMessageExample);

export const SendMessageScreen=props=>{    
      return(
          <SendMessageScreenWithoutSendMessage {...props} sendMessage={sendMessage}/>                                
      );
}

const apiURL="https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback";

const  sendMessage =  async ({firstName,lastName,email,phone,message}) => {
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