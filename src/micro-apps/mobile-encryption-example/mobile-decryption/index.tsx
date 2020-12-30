import React, { useState, useCallback } from 'react';
import {ContentOnComputer,ContentOnMobile} from './provide-content';
import {DecryptContent} from './decrypt-content';
import {ShowResultOnMobile,ShowResultOnComputer} from './result';

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
const MobileEncryption: React.FC<MobileDecryptionProps> = ({ domain, back }) => {
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
            return (<ContentOnMobile domain={domain} initialContent={content} cancel={back} startDecrypt={startDecrypt} />);
        case PAGES.START_DECRYPT:
            return (<DecryptContent domain={domain} content={content} showOnComputer={showOnComputer} contentOnComputer={contentOnComputer} />);
        case PAGES.SHOW_ON_COMPUTER:
            return (<ShowResultOnComputer domain={domain} content={content} contentOnComputer={contentOnComputer} finish={back} showOnMobile={showOnMobile} />)
        case PAGES.SHOW_ON_MOBILE:
            return (<ShowResultOnMobile   domain={domain} content={content}  contentOnComputer={contentOnComputer} finish={back}/>)



    }
    return null;
};


export default MobileEncryption;