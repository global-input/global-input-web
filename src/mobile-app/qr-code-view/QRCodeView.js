// src/mobile-app/qr-code-view/QRCodeView.js

import React, { useState, useEffect } from 'react';


import { styles } from './styles';

import {QRCodeSVG} from "qrcode.react";

import DisplayBlockText from '../components/display-text/DisplayBlockText';
import ViewWithTabMenu from '../components/menu/ViewWithTabMenu';


const QRCodeView = (props) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const { width, height } = dimensions;
  let qrsize;
  if (width < height) {
    qrsize = width - 20;
  } else {
    qrsize = height - 160;
  }

  const renderHelp2 = () => {
    if (props.help2) {
      return (
        <div style={styles.formContainer}>
          <DisplayBlockText content={props.help2} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <ViewWithTabMenu
      menuItems={props.menuItems}
      selected={props.selected}
      title={props.title}
    >
      <DisplayBlockText content={props.help} />
      <div style={styles.qrcodeContainer}>
        <QRCodeSVG
          value={props.qrcodeContent}
          size={qrsize}
          bgColor="black"
          fgColor="white"
        />
      </div>
      {renderHelp2()}
    </ViewWithTabMenu>
  );
};

export default QRCodeView;