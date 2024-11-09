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
      rawValue: 'AU2FsdGVkX18gypzRU7BWxeVidh9NLq5mNe8JkMfm8CxOitHHQHnbRuzyiVQRKUBaV9tALiKlbXS6rcmcR5a2aCTxnSkTmvydX5TbzALeH6JH2my4he/dKYCqWYxk9Yw52gjnKm3Bp1BcmzYtt9ANNAIdMnx8Vtc5OB4tUZDo9Bx6kl4VMaMia3cImK2b70Y5LpmmvNqiDS+QMKQGPhtd0bl64p+mujDNbNGREfWD4RI%3D', // Replace with the specific code you want to simulate
    };

    const scanTimeout = setTimeout(() => {
      onScan([mockBarcodeData]);
    }, 500); // Delay in milliseconds

    return () => clearTimeout(scanTimeout);
  }, [onScan]);

  return <div>Mock Scanner Component</div>;
};

export { MockScanner as Scanner };