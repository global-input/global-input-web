import React, { useEffect } from 'react';
import { IScannerProps, IDetectedBarcode } from '@yudiel/react-qr-scanner';

// Mock Scanner Component
const MockScanner: React.FC<IScannerProps> = ({ onScan }) => {
  useEffect(() => {
    // Simulate QR code scan by calling onScan with mock data after a short delay
    const mockBarcodeData: IDetectedBarcode = {
      boundingBox: { x: 0, y: 0, width: 100, height: 100 },
      cornerPoints: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
      format: 'QR_CODE',
      rawValue: 'AU2FsdGVkX18QNVT1VWQceo4xCemHRmeTy3F7MnzWMCf3rxG0zJb5I03e40Vci8tNzr0QWXLQeEuEh2CsasA5Gu1i4vmNldYdefQj4FhMB0H9MqB/qqUAKXelAdB2BRWY0K7H+YYUpdNW35tP30g4ZIVdy1iuAEaf//2GKxl12R3mcOGl56AZ1fKBfYUmORVUUOtmv+cz1y0h68hVTAdDWPdeaKVrUMmHK7bI3TO/Fa0%3D', // Replace with the specific code you want to simulate
    };

    const scanTimeout = setTimeout(() => {
      onScan([mockBarcodeData]);
    }, 500); // Delay in milliseconds

    return () => clearTimeout(scanTimeout);
  }, [onScan]);

  return <div>Mock Scanner Component</div>;
};

export { MockScanner as Scanner };