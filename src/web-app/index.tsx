import React, { useState } from 'react';
import { PageHeader } from "../page-header";
import { PageFooter } from "../page-footer";
import { QrReader } from '@blackbox-vision/react-qr-reader';
import {
  Container,
  Content,
  Title,
  PageTitle,
  Line,
  Row,
  Column,
} from "./layout";

import { useConnectToMobile, ConnectWindow, ConnectButton } from "./mobile-ui";

import { usePageTitle } from "../page-metadata";
import { config } from "../configs";

const WebApp: React.FC = () => {
  const [data, setData] = useState('No result');
  const mobile = useConnectToMobile();
  
  usePageTitle("Global Input App - Web App");
  const handleScan = (result: string | null) => {
    if (!!result) {
      setData(result);
    }
  };
  const handleError = (error: any) => {
    if (error.name !== 'NotFoundException') {
      console.error("error+--------"+error,error);
    }
  };
  return (
    <Container>
      <PageHeader selected={config.paths.contactUs.path} />
      <PageTitle>Scanning QR Code</PageTitle>
      <Content>
        
        <ConnectButton mobile={mobile} label="Scan" />
        
      </Content>
      <Row>{data}</Row>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.getText());
          }

          if (!!error) {
            handleError(error);

          }
        }}
        constraints={{ facingMode: 'environment' }}
        containerStyle={{ width: '100%' }}
        videoStyle={{ width: '100%' }}
      />


      <PageFooter />
    </Container>
  );
};

export default WebApp;
