import React from 'react';
import PageContainer from './generic-example-container';
import {Title,P} from '../../page-components/themes/basic-app-layout';
export default () =>{          
    return(
          <PageContainer>
                <Title>Wait</Title>
                <P>Loading...</P>
          </PageContainer>
    );
}
