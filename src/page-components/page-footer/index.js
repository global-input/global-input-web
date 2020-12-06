import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { config } from '../../configs';
import { useWindowSize } from './useWindowSize';
import styled from 'styled-components';

import footerBackground from './images/footer-background.svg';
const FooterItem = ({ href, label, isLast }) => (
    <div style={isLast ? styles.footer.lastItem.get() : styles.footer.item.get()}>
        <Link to={href} style={styles.footer.link}>{label}</Link>
    </div>
);








const FooterMobileAuthentication = ({ isLast = false }) => (
    <FooterItem href={config.paths.mobileAuthentication.path}
        label="Mobile Authentication" isLast={isLast} />
);
const FooterMobileEncryption = ({ isLast = false }) => (
    <FooterItem href={config.paths.aboutContentEncryption.path}
        label="Mobile Encryption" isLast={isLast} />
);
const FooterMobileInputControl = ({ isLast = false }) => (
    <FooterItem href={config.paths.mobileControl.path}
        label="Mobile Input &amp; Control" isLast={isLast} />
);

const FooterSecondScreen = ({ isLast = false }) => (
    <FooterItem href={config.paths.secondScreen.path}
        label="Second Screen" isLast={isLast} />
);
const FooterMobilePersonalStorage = ({ isLast = false }) => (
    <FooterItem href={config.paths.mobilePersonalStorage.path}
        label="Mobile Personal Storage" isLast={isLast} />
);
const FooterMobileContentTransfer = ({ isLast = false }) => (
    <FooterItem href={config.paths.mobileContentTransfer.path}
        label="Content Transfer" isLast={isLast} />
);

const FooterPrivacyPolicy = ({ isLast = false }) => (
    <FooterItem href={config.paths.privacy.path}
        label="Privacy Policy" isLast={isLast} />
);

const FooterDownload = ({ isLast = false }) => (
    <FooterItem href={config.paths.getAppScreen.path}
        label="Get It Free" isLast={isLast} />
);

const FooterContactUs = ({ isLast = false }) => (
    <FooterItem href={config.paths.contactUs.path}
        label="Contact Us" isLast={isLast} />
);

const PageFooterContent = ({ width }) => {
    if (width > 1204) {
        return (

            <div style={styles.footer.content.get()}>
                <div style={styles.footer.items}>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption />
                    <FooterSecondScreen />
                    <FooterMobileInputControl isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterMobilePersonalStorage />
                    <FooterDownload />
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </div>
            </div>

        );
    }
    else if (width > 900) {
        return (



            <div style={styles.footer.content.get()}>
                <div style={styles.footer.items}>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption />
                    <FooterMobileInputControl isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterSecondScreen />
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterDownload />
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </div>
            </div>

        );
    }
    else if (width > 600) {
        return (
            <div style={styles.footer.content.get()}>
                <div style={styles.footer.items}>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterMobileInputControl />
                    <FooterSecondScreen isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </div>
            </div>
        );
    }
    else {
        return (

            <div style={styles.footer.content.get()}>
                <div style={styles.footer.items}>
                    <FooterMobileAuthentication />
                    <FooterMobileEncryption isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterMobileInputControl />
                    <FooterSecondScreen isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterMobilePersonalStorage />
                    <FooterMobileContentTransfer isLast={true} />
                </div>
                <div style={styles.footer.items}>
                    <FooterPrivacyPolicy />
                    <FooterContactUs isLast={true} />
                </div>
            </div>

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



export const PageFooter = () => {
    const [width] = useWindowSize();
    return (
        <Container>
            <PageFooterContent width={width} />
        </Container>
    )
};
