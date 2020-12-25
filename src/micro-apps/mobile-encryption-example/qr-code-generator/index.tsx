import React, { useState } from 'react';
import {ContentLabel} from './ContentLabel';
import GenerateQRCode from './GenerateQRCode';

const pages = {
    CONTENT_LABEL: "content-label",
    GENERATE: "generate-qr-code"
};
interface Props{
    back:()=>void;
}
const QRCodeGenerator:React.FC<Props> = ({ back }) => {
    const [page, setPage] = useState({ id: pages.CONTENT_LABEL, content: '', label: '' });
    const gotoGenerateQRCode = (content, label) => {
        content = content.trim();
        if (content.length) {
            setPage({ id: pages.GENERATE, content, label });
        }
        else {
            back();
        }
    }
    const gotoContentLabel = () => setPage({ id: pages.CONTENT_LABEL, content: '', label: '' });

    switch (page.id) {
        case pages.GENERATE:
            return (<GenerateQRCode back={gotoContentLabel} content={page.content} label={page.label} />);

        case pages.CONTENT_LABEL:
            return (<ContentLabel back={back} next={gotoGenerateQRCode} />);
        default:
            return null;

    }



};

export default QRCodeGenerator;