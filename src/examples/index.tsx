import React, { lazy, Suspense } from 'react';

import { Page } from "../page-components/themes/blue-background";

import { usePageTitle } from '../page-metadata';
import { LoadingCircle } from '../app-layout';


export const GameControlScreen = () => {
  usePageTitle('Global Input App - Mobile Input & Control Example');
  const GameControlExample = lazy(() => import('./game-control-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <GameControlExample />
    </Suspense>
  </Page>);
};
export const MediaPlayerScreen = (props: any) => {
  usePageTitle('Global Input App - Second Screen Example');
  const MediaPlayerControlExample = lazy(() => import('./media-player-control-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <MediaPlayerControlExample />
    </Suspense>
  </Page>);
}

export const TransferFormDataScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Authentication &amp; Example');
  const TransferFormDataExample = lazy(() => import('./transfer-form-data-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <TransferFormDataExample />
    </Suspense>
  </Page>);
}

export const ContentTransferScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Content Example');
  const ContentTransferExample = lazy(() => import('./content-transfer-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <ContentTransferExample />
    </Suspense>
  </Page>);
}

export const MobileEncryptionScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Encryption Example');
  const MobileEncryptionExample = lazy(() => import('./mobile-encryption-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <MobileEncryptionExample />
    </Suspense>
  </Page>);
}

export const SendMessageScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Personal Storage Example');
  const SendMessageExample = lazy(() => import('./send-message-example'));
  const loader = (<LoadingCircle />);
  return (<Page>
    <Suspense fallback={loader}>
      <SendMessageExample sendEmail={sendEmail} />
    </Suspense>
  </Page>);
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