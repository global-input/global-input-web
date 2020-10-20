import React, {useState} from 'react';
import DecryptContent from './DecryptContent';
import EnterContent from './EnterContent';
const pages ={
    ENTER_CONTENT:"enter-content",
    DECRYPT_CONTENT:"decrypt-content"
};

export default ({ back})=>{
    const [page,setPage]=useState({id:pages.ENTER_CONTENT,content:''});    
    const decryptContent=content=>{
        content=content.trim();
        if(content.length){            
            setPage({id:pages.DECRYPT_CONTENT, content});
        }
    }
    const toEnterContent=()=>setPage({id:pages.ENTER_CONTENT,content:''});
    
    switch(page.id){        
        case pages.ENTER_CONTENT:
                return (<EnterContent back={back} next={decryptContent}/>);            
        case pages.DECRYPT_CONTENT:
                return (<DecryptContent back={toEnterContent} content={page.content}/>)
        default:
                return null;
                
    }



};