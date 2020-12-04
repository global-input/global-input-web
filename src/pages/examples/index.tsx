import React, { lazy, Suspense } from 'react';

import BasicLayout from "../../page-components/themes/basic-layout";

import { usePageTitle } from '../../page-metadata';
import { LoadingCircle } from '../../app-layout';


export const GameControlScreen = () => {
  usePageTitle('Global Input App - Mobile Input & Control Example');
  const GameControlExample = lazy(() => import('../../examples/game-control-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <GameControlExample />
    </Suspense>
  </BasicLayout>);
};
export const MediaPlayerScreen = (props: any) => {
  usePageTitle('Global Input App - Second Screen Example');
  const MediaPlayerControlExample = lazy(() => import('../../examples/media-player-control-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <MediaPlayerControlExample />
    </Suspense>
  </BasicLayout>);
}

export const TransferFormDataScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Authentication &amp; Example');
  const TransferFormDataExample = lazy(() => import('../../examples/transfer-form-data-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <TransferFormDataExample />
    </Suspense>
  </BasicLayout>);
}

export const ContentTransferScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Content Example');
  const ContentTransferExample = lazy(() => import('../../examples/content-transfer-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <ContentTransferExample />
    </Suspense>
  </BasicLayout>);
}

export const MobileEncryptionScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Encryption Example');
  const MobileEncryptionExample = lazy(() => import('../../examples/mobile-encryption-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <MobileEncryptionExample />
    </Suspense>
  </BasicLayout>);
}

export const SendMessageScreen = (props: any) => {
  usePageTitle('Global Input App - Mobile Personal Storage Example');
  const SendMessageExample = lazy(() => import('../../examples/send-message-example'));
  const loader = (<LoadingCircle />);
  return (<BasicLayout>
    <Suspense fallback={loader}>
      <SendMessageExample sendEmail={sendEmail} />
    </Suspense>
  </BasicLayout>);
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