import React from 'react';
import styled from 'styled-components';
import {SourceLinkElement,AppContainerElement,AppTitleSection,AppTitle,AppBody,AppContent} from '../common-elements';


const SourceLink=styled.a.attrs({
    href:'https://github.com/global-input/mobile-encryption',
    rel:'noreferrer noopener',
    target:'_blank'})`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 16px;    
    `;
    const SourceContainer=styled.div`
        color: #153E85;
        font-weight: 100;
        font-family: Georgia, Times, Serif;
        font-size: 8px;
        
        @media screen and (min-height:150px){
            font-size:12px;
        }
        @media screen and (min-height:400px){
            font-size:16px;
        }
       @media print{
           display:none;
       }
    
        `;



    
    interface AppContainerProps{
        children:React.ReactNode;
    }
    export  const AppContainer:React.FC<AppContainerProps>=({children})=>(
        <AppContainerElement>
                <AppTitleSection>
                    <AppTitle>Mobile Encryption</AppTitle>                    
                </AppTitleSection>
                <AppBody>
                
                    <AppContent>
                    
                    {children}
                    </AppContent>

                </AppBody>
                <SourceContainer>
                <SourceLink>View on GitHub</SourceLink>:{' '}
                    explore the source code of the web application currently displayed on your computer browser, which accepts connections from the Global Input App for encryption and decryption purposes.
                </SourceContainer>
                
        </AppContainerElement>
    );
