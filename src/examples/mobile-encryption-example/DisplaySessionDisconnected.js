import React from 'react';
import PageContainer from './generic-example-container';
import {Title,P} from './basic-app-layout';
export default ()=>{    
    return (
          <PageContainer>
          <Title>Session Finished</Title>
          <P>Global Input App has terminated the connection. You may reload the page and start again.</P>
          </PageContainer>      
    )
};

