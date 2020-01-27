import React from 'react';
import PageContainer from './generic-example-container';
import {Title,P} from '../../page-components/themes/basic-app-layout';
export default ()=>{    
    return (
          <PageContainer>
          <Title>Session Finished</Title>
          <P>Global Input App has disconnected to the application. You can reload the page to start again</P>
          </PageContainer>      
    )
};

