import React from 'react';
import PageContainer from './generic-example-container';
import {Title,P, ContentContainer} from './basic-app-layout';
export default () => {    
    return (
          <PageContainer>
                <ContentContainer>
                  <Title>Select Service</Title>
                  <P>A set of available services are display on you mobile (Global Input App). Please operate on your mobile.</P>

                </ContentContainer>

                
          </PageContainer>   
    )
}

