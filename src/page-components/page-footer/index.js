import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { config } from '../../configs';
import { useWindowSize } from './useWindowSize';
import styled from 'styled-components';

import footerBackground from './images/footer-background.svg';

const Item = styled.div`
      padding-left: 10px;
      width: 250px;
      border-right: ${props => props.isLast ? 'none' : '1px solid white'};
      padding-bottom: 10px;
      @media only screen and (max-width:599px){
        width: 190px;
      }
      @media only screen and (max-width:360px){
        width: 150px;
        padding-left:5px;
      }
`;
const ItemLink = styled(Link)`
  color:white;
`;


const FooterItem = ({ href, label, isLast }) => (
    <Item isLast={isLast}>
        <ItemLink to={href}>{label}</ItemLink>
    </Item>
);

const FooterMobileAuthentication = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.mobileAuthentication.path}>Mobile Authentication</ItemLink>
    </Item>
);
const FooterMobileEncryption = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.aboutContentEncryption.path}>Mobile Encryption</ItemLink>
    </Item>
);
const FooterMobileInputControl = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.mobileControl.path}>Mobile Input &amp; Control</ItemLink>
    </Item>
);

const FooterSecondScreen = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.secondScreen.path}>Second Screen</ItemLink>
    </Item>
);
const FooterMobilePersonalStorage = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.mobilePersonalStorage.path}>Mobile Personal Storage</ItemLink>
    </Item>
);
const FooterMobileContentTransfer = ({ isLast = false }) => (

    <Item isLast={isLast}>
        <ItemLink to={config.paths.mobileContentTransfer.path}>Content Transfer</ItemLink>
    </Item>
);

const FooterPrivacyPolicy = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.privacy.path}>Privacy Policy</ItemLink>
    </Item>
);

const FooterDownload = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.getAppScreen.path}>Get It Free</ItemLink>
    </Item>
);

const FooterContactUs = ({ isLast = false }) => (
    <Item isLast={isLast}>
        <ItemLink to={config.paths.contactUs.path}>Contact Us</ItemLink>
    </Item>

);

const PageFooterContent = ({ width }) => {
    if (width > 1204) {
        return (
            <>
                <Row>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption />
                    <FooterSecondScreen />
                    <FooterMobileInputControl isLast={true} />
                </Row>
                <Row>
                    <FooterMobilePersonalStorage />
                    <FooterDownload />
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </Row>
            </>

        );
    }
    else if (width > 900) {
        return (
            <>
                <Row>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption />
                    <FooterMobileInputControl isLast={true} />
                </Row>
                <Row>
                    <FooterSecondScreen />
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </Row>
                <Row>
                    <FooterDownload />
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </Row>
            </>

        );
    }
    else if (width > 600) {
        return (
            <>
                <Row>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption isLast={true} />
                </Row>
                <Row>
                    <FooterMobileInputControl />
                    <FooterSecondScreen isLast={true} />
                </Row>
                <Row>
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </Row>
                <Row>
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </Row>
            </>
        );
    }
    else {
        return (

            <>
                <Row>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption isLast={true} />
                </Row>
                <Row>
                    <FooterMobileInputControl />
                    <FooterSecondScreen isLast={true} />
                </Row>
                <Row>
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </Row>
                <Row>
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </Row>
            </>

        );
    }

};



const Container = styled.div`
    padding-top: 100px;
    background-image: url(${footerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 400px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Content = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 95%;
    @media only screen and (min-width: 1440px){
        width: 1200px;
    }
    @media only screen and (min-width: 1245px){
        width: 1000px;
    }
    @media only screen and (max-width: 360px){
        font-size: 12px
    }
    @media only screen and (max-width: 599px){
        font-size: 14px
    }
`;

const Row = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
`;






export const PageFooter = () => {
    const [width] = useWindowSize();
    return (
        <Container>
            <Content>
                <PageFooterContent width={width} />
            </Content>

        </Container>
    )
};
