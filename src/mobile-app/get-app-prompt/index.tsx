import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import appStoreIcon from '../display-user-login/images/app-store.png';
import playStoreIcon from '../display-user-login/images/play-store.png';
import images from '../configs/images';
import getAppPromptText from '../configs/getAppPromptText';

const APP_STORE_URL = 'https://apps.apple.com/us/app/global-input-app/id1269541616';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=uk.co.globalinput2';

const detectPlatform = () => {
    const userAgent = navigator.userAgent || '';
    // iPadOS reports itself as a Mac, so check for touch support as well
    const isIOS = /iPhone|iPad|iPod/.test(userAgent) ||
        (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/.test(userAgent);
    return { isIOS, isAndroid };
};

interface GetAppPromptProps {
    appLaunched: Promise<boolean>;
    onContinueInBrowser: () => void;
}

export const GetAppPrompt: React.FC<GetAppPromptProps> = ({ appLaunched, onContinueInBrowser }) => {
    const [linkedToComputer, setLinkedToComputer] = useState(false);
    const { isIOS, isAndroid } = detectPlatform();

    useEffect(() => {
        let mounted = true;
        appLaunched.then(result => {
            if (mounted) {
                setLinkedToComputer(result);
            }
        });
        return () => {
            mounted = false;
        };
    }, [appLaunched]);

    const renderStoreBadges = () => (
        <StoreBadges>
            {!isAndroid && (
                <StoreLink href={APP_STORE_URL}>
                    <StoreBadge src={appStoreIcon} alt="Download on the App Store" />
                </StoreLink>
            )}
            {!isIOS && (
                <StoreLink href={PLAY_STORE_URL}>
                    <StoreBadge src={playStoreIcon} alt="Get it on Google Play" />
                </StoreLink>
            )}
        </StoreBadges>
    );

    return (
        <Container>
            <Content>
                <Logo src={images.logo} alt="Global Input App" />
                <AppName>{getAppPromptText.appName}</AppName>
                {linkedToComputer && (
                    <StatusChip>{getAppPromptText.linkedToComputer}</StatusChip>
                )}
                <Title>{getAppPromptText.title}</Title>
                <Subtitle>{getAppPromptText.subtitle}</Subtitle>

                <Steps>
                    <Step>
                        <StepNumber>1</StepNumber>
                        <StepBody>
                            <StepText>{getAppPromptText.steps.install}</StepText>
                            {renderStoreBadges()}
                        </StepBody>
                    </Step>
                    <Step>
                        <StepNumber>2</StepNumber>
                        <StepBody>
                            <StepText>{getAppPromptText.steps.scan}</StepText>
                        </StepBody>
                    </Step>
                </Steps>

                <Benefits>
                    {getAppPromptText.benefits.map(benefit => (
                        <Benefit key={benefit}>{benefit}</Benefit>
                    ))}
                </Benefits>

                <Divider />
                <ContinueButton onClick={onContinueInBrowser}>
                    {getAppPromptText.continueInBrowser.button}
                </ContinueButton>
                <ContinueHint>{getAppPromptText.continueInBrowser.hint}</ContinueHint>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: auto;
    background-color: rgba(72, 128, 237, 1);
    color: white;
    display: flex;
    justify-content: center;
    padding: env(safe-area-inset-top) 16px env(safe-area-inset-bottom);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 480px;
    padding: 32px 0 40px;
`;

const Logo = styled.img`
    width: 72px;
    height: 72px;
`;

const AppName = styled.span`
    margin-top: 8px;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.9;
`;

const StatusChip = styled.div`
    margin-top: 16px;
    padding: 6px 14px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.18);
    font-size: 0.85rem;
`;

const Title = styled.h1`
    margin: 24px 0 8px;
    font-size: 1.6rem;
    line-height: 1.25;
    text-align: center;
`;

const Subtitle = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;
    opacity: 0.9;
`;

const Steps = styled.ol`
    list-style: none;
    margin: 28px 0 0;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: white;
    color: #1f2a44;
`;

const Step = styled.li`
    display: flex;
    align-items: flex-start;
    & + & {
        margin-top: 18px;
    }
`;

const StepNumber = styled.span`
    flex: 0 0 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgba(72, 128, 237, 1);
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
`;

const StepBody = styled.div`
    flex: 1;
`;

const StepText = styled.div`
    font-size: 1rem;
    line-height: 1.4;
    padding-top: 3px;
`;

const StoreBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const StoreLink = styled.a`
    display: inline-flex;
    margin-right: 8px;
`;

const StoreBadge = styled.img`
    height: 48px;
    width: auto;
`;

const Benefits = styled.ul`
    margin: 24px 0 0;
    padding: 0;
    width: 100%;
    list-style: none;
`;

const Benefit = styled.li`
    position: relative;
    padding-left: 28px;
    font-size: 0.95rem;
    line-height: 1.4;
    & + & {
        margin-top: 10px;
    }
    &::before {
        content: '✓';
        position: absolute;
        left: 4px;
        font-weight: 700;
    }
`;

const Divider = styled.hr`
    width: 100%;
    margin: 28px 0 16px;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const ContinueButton = styled.button`
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    color: white;
    font-size: 1rem;
    padding: 10px 24px;
    cursor: pointer;
`;

const ContinueHint = styled.span`
    margin-top: 8px;
    font-size: 0.8rem;
    opacity: 0.8;
    text-align: center;
`;
