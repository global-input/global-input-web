// QRCodeView.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {QRCodeSVG} from "qrcode.react";

import DisplayBlockText from '../components/display-text/DisplayBlockText';
import ViewWithTabMenu from '../components/menu/ViewWithTabMenu';

const QRCodeView = ({ menuItems, selected, title, help, help2, qrcodeContent }) => {
  const [qrSize, setQrSize] = useState(0);

  const updateQrSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let size;
    if (width < height) {
      size = width - 20;
    } else {
      size = height - 160;
    }
    setQrSize(size);
  };

  useEffect(() => {
    updateQrSize();
    window.addEventListener('resize', updateQrSize);
    return () => {
      window.removeEventListener('resize', updateQrSize);
    };
  }, []);

  return (
    <ViewWithTabMenu menuItems={menuItems} selected={selected} title={title}>
      <DisplayBlockText content={help} />
      <QrCodeContainer>
        
        <QRCodeSVG value={qrcodeContent}  size={qrSize} />

      </QrCodeContainer>
      {help2 && (
        <FormContainer>
          <DisplayBlockText content={help2} />
        </FormContainer>
      )}
    </ViewWithTabMenu>
  );
};

export default QRCodeView;

// Styled Components
const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;