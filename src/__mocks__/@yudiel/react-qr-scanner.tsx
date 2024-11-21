import React, { useEffect } from 'react';
import { IScannerProps, IDetectedBarcode } from '@yudiel/react-qr-scanner';

// const test_code= '/test/import_key.txt';
// const test_code= '/test/connect.txt';
const test_code= '/test/random.txt';

const delayDuration=50000;

// Mock Scanner Component
const MockScanner: React.FC<IScannerProps> = ({ onScan }) => {
  useEffect(() => {
    let scanTimeout: NodeJS.Timeout;

    // Simulate QR code scan by calling onScan with mock data after a short delay
    const startMock= async () => {
      try{
          const codeContent= await fetch(test_code)
          const codeString= await codeContent.text()          
          console.log("-----mocking qr code: ", codeString);
          await new Promise(resolve => setTimeout(resolve, delayDuration));      
          const mockBarcodeData: IDetectedBarcode = {
            boundingBox: { x: 0, y: 0, width: 100, height: 100 },
            cornerPoints: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
            format: 'QR_CODE',
            rawValue: codeString, // Replace with the specific code you want to simulate
          };              
          onScan([mockBarcodeData]);
        }
        catch(error){
          console.error("Error in MockScanner: ", error);
        }
      
    };

    startMock();

    return () => clearTimeout(scanTimeout);
  }, [onScan]);

  return <div>Mock Scanner Component</div>;
};

export { MockScanner as Scanner };