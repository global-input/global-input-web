import React, { useState, useCallback } from 'react';
import {ContentOnComputer,ContentOnMobile} from './provide-content';
import {EncryptContent} from './encrypt-content';
import {ShowResultOnMobile,ShowResultOnComputer} from './result';

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
            return (<ContentOnMobile domain={domain} initialContent={content} cancel={back} startEncrypt={startEncrypt} />);
        case PAGES.START_ENCRYPT:
            return (<EncryptContent domain={domain} content={content} showOnComputer={showOnComputer} contentOnComputer={contentOnComputer} />);
        case PAGES.SHOW_ON_COMPUTER:
            return (<ShowResultOnComputer domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnMobile={showOnMobile} />)
        case PAGES.SHOW_ON_MOBILE:
            return (<ShowResultOnMobile   domain={domain} content={content}  contentOnComputer={contentOnComputer} finish={back}/>)



    }
    return null;
};


export default MobileEncryption;