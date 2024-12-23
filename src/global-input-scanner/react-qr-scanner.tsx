import React, { useEffect } from 'react';
import { IScannerProps, IDetectedBarcode } from '@yudiel/react-qr-scanner';
import {loadTestTextQRCodeValue, developmentScanDelayDuration} from 'global-input-config';
import {logger} from 'global-input-logging';
// Mock Scanner Component
const Scanner: React.FC<IScannerProps> = ({ onScan }) => {
  useEffect(() => {
    let scanTimeout: NodeJS.Timeout;

    // Simulate QR code scan by calling onScan with mock data after a short delay
    const startMock= async () => {
      try{
          
          const codeString= await loadTestTextQRCodeValue();
          logger.log("-----mocking qr code: ", codeString);
          await new Promise(resolve => setTimeout(resolve, developmentScanDelayDuration));      
          const mockBarcodeData: IDetectedBarcode = {
            boundingBox: { x: 0, y: 0, width: 100, height: 100 },
            cornerPoints: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
            format: 'QR_CODE',
            rawValue: codeString, // Replace with the specific code you want to simulate
          };              
          onScan([mockBarcodeData]);
        }
        catch(error){
          logger.error("Error in MockScanner: ", error);
        }
      
    };

    startMock();

    return () => clearTimeout(scanTimeout);
  }, [onScan]);

  return <div>Mock Scanner Component</div>;
};

export { Scanner };