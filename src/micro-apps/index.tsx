import React, { lazy, Suspense } from 'react';
import { useCanonicalLink } from '../page-metadata';
import { usePageTitle } from '../page-metadata';
import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';
import {Container,Content,Loader} from './layout';
import { config } from '../web-config';

export const GameControlScreen = () => {
  usePageTitle('Global Input App - Mobile Input & Control Example');
  const GameControlExample = lazy(() => import('./game-control-example'));
  return (
    <Container>
    <PageHeader selected={config.paths.examples.gameControl.path} />
    <Content>
        <Suspense fallback={<Loader/>}>
          <GameControlExample />
        </Suspense>
    </Content>
    <PageFooter />
    </Container>
    );
};
export const MediaPlayerScreen = (props: any) => {
  usePageTitle('Global Input App - Second Screen Example');
  const MediaPlayerControlExample = lazy(() => import('./media-player-control-example'));

  return (
    <Container>
    <PageHeader selected={config.paths.examples.mediaPlayer.path} />
    <Content>
        <Suspense fallback={<Loader/>}>
          <MediaPlayerControlExample />
        </Suspense>
    </Content>
    <PageFooter />
    </Container>
    );




}

export const TransferFormDataScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Authentication &amp; Example');
  const TransferFormDataExample = lazy(() => import('./transfer-form-data-example'));

return (
  <Container>
  <PageHeader selected={config.paths.examples.transferForm.path} />
  <Content>
      <Suspense fallback={<Loader/>}>
      <TransferFormDataExample />
      </Suspense>
  </Content>
  <PageFooter />
  </Container>
  );




}

export const ContentTransferScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Content Example');
  const ContentTransferExample = lazy(() => import('./content-transfer-example'));
return (
  <Container>
  <PageHeader selected={config.paths.examples.contentTransfer.path} />
  <Content>
      <Suspense fallback={<Loader/>}>
      <ContentTransferExample />
      </Suspense>
  </Content>
  <PageFooter />
  </Container>
  );

}

export const MobileEncryptionScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Encryption Example');
  const MobileEncryptionExample = lazy(() => import('./mobile-encryption-example'));

  return (
    <Container>
    <PageHeader selected={config.paths.examples.mobileEncryption.path} />
    <Content>
        <Suspense fallback={<Loader/>}>
        <MobileEncryptionExample />
        </Suspense>
    </Content>
    <PageFooter />
    </Container>
    );

}

export const OldMobileEncryptionScreen = (props: any) => {
  useCanonicalLink("https://globalinput.co.uk/global-input-app/mobile-encryption");
  return (
        
    <MobileEncryptionScreen {...props}/>
    
  );
  
  
}




export const SendMessageScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Personal Storage Example');
  const SendMessageExample = lazy(() => import('./send-message-example'));

  return (
    <Container>
    <PageHeader selected={config.paths.examples.sendMessage.path} />
    <Content>
        <Suspense fallback={<Loader/>}>
        <SendMessageExample sendEmail={sendEmail} />
        </Suspense>
    </Content>
    <PageFooter />
    </Container>
    );

}





const apiURL = "https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback";

interface EmailMessage {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
const sendEmail = async ({ firstName, lastName, email, phone, message }: EmailMessage) => {
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  var searchParams = new URLSearchParams();
  searchParams.append("your-first-name", firstName);
  searchParams.append("your-last-name", lastName);
  searchParams.append("your-email", email);
  searchParams.append("your-phone", phone);
  searchParams.append("your-message", message);
  return fetch(apiURL, { headers, method: "POST", body: searchParams });
};