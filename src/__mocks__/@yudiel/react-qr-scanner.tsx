import React, { useEffect } from 'react';
import { IScannerProps, IDetectedBarcode } from '@yudiel/react-qr-scanner';

// Mock Scanner Component
const MockScanner: React.FC<IScannerProps> = ({ onScan }) => {
  useEffect(() => {
    let scanTimeout: NodeJS.Timeout;

    // Simulate QR code scan by calling onScan with mock data after a short delay
    const startMock= async () => {
      const codeContent= await fetch('/test/connect.txt')
      const codeString= await codeContent.text()          
      console.log("-----mocking qr code: ", codeString);
      await new Promise(resolve => setTimeout(resolve, 500));      
      const mockBarcodeData: IDetectedBarcode = {
        boundingBox: { x: 0, y: 0, width: 100, height: 100 },
        cornerPoints: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
        format: 'QR_CODE',
        rawValue: codeString, // Replace with the specific code you want to simulate
      };        
      scanTimeout = setTimeout(() => {
        onScan([mockBarcodeData]);
      }, 500); // Delay in milliseconds
    };

    startMock();

    return () => clearTimeout(scanTimeout);
  }, [onScan]);

  return <div>Mock Scanner Component</div>;
};

export { MockScanner as Scanner };