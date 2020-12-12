import React, { useState, useCallback } from 'react';
import ContentOnComputer from './ContentOnComputer';
import ContentOnMobile from './ContentOnMobile';
import DecryptContent from './DecryptContent';
import ShowOnComputer from './ShowOnComputer';
import ShowOnMobile from './ShowOnMobile';
enum PAGES {
    CONTENT_ON_COMPUTER,
    CONTENT_ON_MOBILE,
    START_DECRYPT,
    SHOW_ON_COMPUTER,
    SHOW_ON_MOBILE

};
interface MobileDecryptionProps {
    domain: string;
    back: () => void;
}
const MobileDecryption: React.FC<MobileDecryptionProps> = ({ domain, back }) => {
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
    const startDecrypt = useCallback((content: string) => {
        setContent(content);
        setPage(PAGES.START_DECRYPT);
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
            return (<ContentOnComputer domain={domain} initialContent={content} cancel={back} contentOnMobile={contentOnMobile} startDecrypt={startDecrypt} />);
        case PAGES.CONTENT_ON_MOBILE:
            return (<ContentOnMobile domain={domain} initialContent={content} cancel={back} contentOnComputer={contentOnComputer} startDecrypt={startDecrypt} />);
        case PAGES.START_DECRYPT:
            return (<DecryptContent domain={domain} content={content} showOnComputer={showOnComputer} contentOnComputer={contentOnComputer} />);
        case PAGES.SHOW_ON_COMPUTER:
            return (<ShowOnComputer domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnMobile={showOnMobile} />)
        case PAGES.SHOW_ON_MOBILE:
            return (<ShowOnMobile domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnComputer={showOnComputer} />)



    }
    return null;
};


export default MobileDecryption;