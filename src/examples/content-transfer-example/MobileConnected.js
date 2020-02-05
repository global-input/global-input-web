import React, {useEffect} from 'react';
import PageContainer from './generic-example-container';
import {Title,P,ContentContainer,TextAreaBox, TextButton,ErrorMessage} from './basic-app-layout';
import * as actions from './actions';


const contentElementID="content";

export default ({dispatch,content,mobile}) => {
        const setContent=content=>{
            actions.setContent({dispatch,content});
            mobile.sendInputMessage(content,0);
        };
        const copyToClipboard=()=>{
            document.getElementById(contentElementID).select();
            document.execCommand("Copy");                      
        }
    
        return(           
            <PageContainer>
                <ContentContainer>
                    <Title>Content Transfer</Title>
                    
                    <TextAreaBox id={contentElementID} onChange={evt=>setContent(evt.target.value)} value={content}/>     
                    <TextButton label="Copy" onClick={copyToClipboard}/>
                </ContentContainer>
                <P>You can paste content to the text box above to transfer it to your mobile.</P>

            </PageContainer> 
                
        
        );
                     
};

