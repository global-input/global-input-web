import React, { useState, useCallback } from 'react';

import ScanQRCode from './scan-qr-code';
const MobileApp: React.FC = () => {
    const [page, setPage] = useState('scan-qr-code');



    switch (page) {
        case 'scan-qr-code':
            return <ScanQRCode />;
        default:
            return null;
    }




}

export default MobileApp;