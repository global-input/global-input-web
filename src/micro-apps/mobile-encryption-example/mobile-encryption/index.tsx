import React, { useState, useCallback } from 'react';
import ContentOnComputer from './ContentOnComputer';
import ContentOnMobile from './ContentOnMobile';
import EncryptContent from './EncryptContent';
import ShowOnComputer from './ShowOnComputer';
import ShowOnMobile from './ShowOnMobile';
enum PAGES {
    CONTENT_ON_COMPUTER,
    CONTENT_ON_MOBILE,
    START_ENCRYPT,
    SHOW_ON_COMPUTER,
    SHOW_ON_MOBILE

};
interface MobileEncryptionProps {
    domain: string;
    back: () => void;
}
const MobileEncryption: React.FC<MobileEncryptionProps> = ({ domain, back }) => {
    const [page, setPage] = useState(PAGES.CONTENT_ON_COMPUTER);
    const [content, setContent] = useState('');
    const contentOnMobile = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.CONTENT_ON_MOBILE);
    }, []);
    const contentOnComputer = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.CONTENT_ON_COMPUTER);
    }, []);
    const startEncrypt = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.START_ENCRYPT);
    }, []);
    const showOnComputer = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.SHOW_ON_COMPUTER);
    }, []);
    const showOnMobile = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.SHOW_ON_MOBILE);
    }, []);


    switch (page) {
        case PAGES.CONTENT_ON_COMPUTER:
            return (<ContentOnComputer domain={domain} initialContent={content} cancel={back} contentOnMobile={contentOnMobile} startEncrypt={startEncrypt} />);
        case PAGES.CONTENT_ON_MOBILE:
            return (<ContentOnMobile domain={domain} initialContent={content} cancel={back} contentOnComputer={contentOnComputer} startEncrypt={startEncrypt} />);
        case PAGES.START_ENCRYPT:
            return (<EncryptContent domain={domain} content={content} showOnComputer={showOnComputer} contentOnComputer={contentOnComputer} />);
        case PAGES.SHOW_ON_COMPUTER:
            return (<ShowOnComputer domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnMobile={showOnMobile} />)
        case PAGES.SHOW_ON_MOBILE:
            return (<ShowOnMobile  domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnComputer={showOnComputer} />)



    }
    return null;
};


export default MobileEncryption;