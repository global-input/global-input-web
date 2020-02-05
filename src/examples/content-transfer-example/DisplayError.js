import React from 'react';
import PageContainer from './generic-example-container';
import {Title,P} from './basic-app-layout';
export default ({errorMessage})=>{    
    return(
        <PageContainer>
            <Title>Error</Title>
            <P>{errorMessage}</P>
        </PageContainer>
    );    
}