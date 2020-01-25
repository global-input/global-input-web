import React, {useReducer, useState, useRef} from 'react';
import {GlobalInputConnect} from 'global-input-react';
import ClipboardCopyButton from '../../components/clipboard-copy-button';
import {TextButton} from '../../components';


const textContent={
    title:"Encryption & Decryption",
    githuburl:"https://github.com/global-input/qr-code-printing-example"
}
const StepType={
  ENTER_CONTENT:1,
  CONNECT:2,
  SENDER_CONNECTED:3
};
const ActionType={
      CONTENT:'setContent',
      STEP:'step',
      OPERATION:'operation'
};

const initialState={
  content:'',
  step:StepType.ENTER_CONTENT,
  operation:'encrypt'
}

const reducer= (state, action)=>{
      switch(action.type){
          case ActionType.CONTENT:
               return {...state, content:action.content};
          case ActionType.STEP:
               return {...state, step:action.step};
          case ActionType.OPERATION:
               return {...state, operation:action.operation}; 
          default:
                return state;
      }
};






export default ({url,apikey,securityGroup})=>{  
  const mobile=useRef(null);
  const [state, dispatch]=useReducer(reducer, initialState);
  const [encryptedContent, setEncryptedContent]=useState('');

  

  const setContent=content=>dispatch({type:ActionType.CONTENT,content});
  const setOperation=operation=>dispatch({type:ActionType.OPERATION,operation});
  
  const disconnect=()=>{
        if(mobile && mobile.globalInputConnect){
          mobile.globalInputConnect.disconnect();
          mobile.globalInputConnect=null;
        }
  }
  const toEnterContent= ()=>{
        disconnect();
        setContent('');
        dispatch({type:ActionType.STEP,step:StepType.ENTER_CONTENT});
  }
  const toSenderConnected =()=>{
        dispatch({type:ActionType.STEP,step:StepType.SENDER_CONNECTED});
  }
  const onEncryptedContent= content=>{
    setEncryptedContent(content);
    
  }
  
  
  const toConnect=()=>{
      disconnect();
      mobile.current={
            config:{
                  url,
                  apikey,
                  securityGroup,
                  initData:{
                        action:"input",
                        dataType:"form",
                        key:"testkey",
                        form:{
                          title:"Encrypting Content",
                          fields:[{
                            label:"Content",
                            type:state.operation,
                            id:"content",
                            value:state.content,
                            operations:{
                              onInput:onEncryptedContent
                            }
                          },{
                            label:"Finish",
                            type:"button",
                            id:"finish",                            
                            operations:{
                              onInput:toEnterContent
                            }
                          }]
                        }
                   },
                    onSenderConnected:toSenderConnected,
                    onSenderDisconnected:toEnterContent
               },
               globalInputConnect:null                   
        };
    
    dispatch({type:ActionType.STEP,step:StepType.CONNECT});
  }
  console.log("-----state-----"+JSON.stringify(state));
  const renderTitle =()=> (<div style={styles.title}>{textContent.title}</div>);
  
  const renderLinks= () => (<span style={styles.githuburl}><a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a> </span>);

  const renderEncryptDecryptionOptions=()=>(
        <>
        <div>
          <span style={styles.option}>Encrypt</span>
          <input type="radio" value="encrypt" checked={state.operation==='encrypt'} onChange={evt=>setOperation(evt.target.value)}/>          
        </div>
        <div>
          <span style={styles.option}>Decrypt</span>
          <input type="radio" value="decrypt" checked={state.operation==='decrypt'} onChange={evt=>setOperation(evt.target.value)}/>
        </div>
        </>
      );
  
const renderEnterContent =()=>{
      return(
        <div style={styles.container}>
           {renderTitle()}          
           <div style={styles.topControl}>
                {renderLinks()}                                
                {renderEncryptDecryptionOptions()}
                {state.content.length?(<TextButton label="Connect To Mobile" onPress={toConnect}/>):null}
          </div>
          <div style={styles.areaContainer}>
      In the following field, paste the content you would like to {state.operation}
            <textarea  id="contentField" style={styles.textArea.get()}
              onChange={(evt) => {
                  setContent(evt.target.value);
            }} value={state.content}/>            
          </div>
        </div>
      );
   };


   const renderMobileConnect =()=>{
    return(
      <div style={styles.container}>
          {renderTitle()}          
        <div style={styles.topControl}>
              {renderLinks()}  
              
              {encryptedContent?(<ClipboardCopyButton copyFieldId="encryptedContentTextArea"/>):null}
        </div>

        <div style={styles.areaContainer}>         
            <div style={styles.globalConnect}>
                <GlobalInputConnect mobileConfig={mobile.current.config}
                ref={globalInputConnect =>mobile.current.globalInputConnect=globalInputConnect}
                connectingMessage="Connecting...."
                connectedMessage="Scan with Global Input App">
                    {encryptedContent?null:(<div>Please operate on your mobile</div>)}
                    
                </GlobalInputConnect>                
            </div>
            <textarea  id="encryptedContentTextArea" style={styles.textArea.get()}  value={encryptedContent}/>            
        </div>
      </div>
    );
 };
 switch(state.step){
      case StepType.CONNECT:
      case StepType.SENDER_CONNECTED:
            return renderMobileConnect();
      default: return renderEnterContent();              
 }



  
}
  
const styles={
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      windows:"100%",
      minHeight:window.innerHeight*2/3

  },

  title:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"flex-start",
    fontSize:"2vw",
    color:"#5291CD",
    marginBottom:"20",
    marginLeft:"4vw"
  },

  githuburl:{
      fontSize:"20",
      color:"#5291CD",
  },
  areaContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
  },
  textArea:{
      get:()=>{

        return{
          width:"80%",
          height:window.innerHeight*2/3
        }
      }

  },
  
  topControl:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"flex-end",
    width:"80%",
    marginLeft:"10vw",
    marginBottom:10
  },
  globalConnect:{
      marginTop:20,
      position:"absolute"
  },
  option:{
      marginRight:20
  }


};






