import React from 'react';
import styled from 'styled-components';
import {SourceLinkElement,AppContainerElement,AppTitleSection,AppTitle,AppBody,AppContent} from '../common-elements';


const SourceLink=styled(SourceLinkElement).attrs({
    href:'https://github.com/global-input/mobile-encryption',
    rel:'noreferrer noopener',
    target:'_blank'})``;


    export  const AppContainer:React.FC=({children})=>(
        <AppContainerElement>
                <AppTitleSection>
                    <AppTitle>Mobile Encryption</AppTitle>
                    <SourceLink>Source Code</SourceLink>
                </AppTitleSection>
                <AppBody>
                    <AppContent>
                    {children}
                    </AppContent>

                </AppBody>
        </AppContainerElement>
    );
