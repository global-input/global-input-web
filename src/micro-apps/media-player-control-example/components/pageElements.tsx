import React from 'react';
import styled from 'styled-components';
import {Field,SourceLinkElement,AppContainerElement,AppTitleSection,AppTitle,AppBody,AppContent} from '../common-elements';


const SourceLink=styled(SourceLinkElement).attrs({
    href:'https://github.com/global-input/media-player-control-example',
    rel:'noreferrer noopener',
    target:'_blank'})``;


    export  const AppContainer:React.FC=({children})=>(
        <AppContainerElement>
                <AppTitleSection>
                    <AppTitle>Form Data Transfer</AppTitle>
                </AppTitleSection>
                <AppBody>
                    <AppContent>
                    {children}
                    </AppContent>
                    <SourceLink>Source Code</SourceLink>
                </AppBody>
        </AppContainerElement>
    );
    export const DomainField=styled(Field)`
        max-width:300px;

    `;
