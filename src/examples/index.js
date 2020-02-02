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
   
  
  }
  
  const compStyles={
  
    content:{
        paddingLeft:  20,
        paddingTop:   100,
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
  
  

  
export const GameControlScreen=createExampleComponent(GameControlExample);
export const MediaPlayerScreen=createExampleComponent(MediaPlayerControlExample);
export const SendMessageScreen=createExampleComponent(SendMessageExample);
export const TransferFormDataScreen=createExampleComponent(TransferFormDataExample);
export const ContentTransferScreen=createExampleComponent(ContentTransferExample);
export const MobileEncryptionScreen=createExampleComponent(MobileEncryptionExample);


