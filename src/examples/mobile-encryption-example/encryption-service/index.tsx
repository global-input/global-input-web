import React, {useState} from 'react';
import EncryptContent from './EncryptContent';
import EnterContent from './EnterContent';
const pages ={
    ENTER_CONTENT:"enter-content",
    ENCRYPT_CONTENT:"encrypt-content"
};

export default ({ back})=>{
    const [page,setPage]=useState({id:pages.ENTER_CONTENT,content:''});    
    const encryptContent=content=>{
        content=content.trim();
        if(content.length){
            setPage({id:pages.ENCRYPT_CONTENT, content});
        }
    }
    const toEnterContent=()=>setPage({id:pages.ENTER_CONTENT,content:''});
    
    switch(page.id){        
        case pages.ENTER_CONTENT:
                return (<EnterContent back={back} next={encryptContent}/>);            
        case pages.ENCRYPT_CONTENT:
                return (<EncryptContent back={toEnterContent} content={page.content}/>)
        default:
                return null;
                
    }



};