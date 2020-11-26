import React from 'react';

import { TitleCenter, Page, VerticalOnMobile, PageContainer } from "../../page-components/themes/blue-background";
import VerticalList from '../../page-components/vertical-list';
import ContactContainer from './contact-container';

import * as mobile from '../../mobile';
import * as mobileUI from '../../mobile-ui';
import { usePageTitle } from '../../page-metadata';
import { config } from '../../configs';
import { useWindowSize } from '../../app-layout';


const ContactUsPage: React.FC = () => {
  const [width] = useWindowSize();

  console.log(':' + width);
  usePageTitle('Global Input App - Contact Us');
  return (
    <Page selected={config.paths.contactUs.path} scWidth={width}>
      <PageContainer>
        <ContactContainer>
          <mobile.MobileConnect initData={mobileUI.contactUs.initData} onFieldChange={mobileUI.contactUs.onFieldChange} />
          <TitleCenter>{textContent.title}</TitleCenter>
          <VerticalOnMobile>
            <VerticalList title={textContent.address.title} items={textContent.address.content} />
            <VerticalList>
              <VerticalList title={textContent.phone.title} items={textContent.phone.content} />
              <VerticalList title={textContent.email.title} items={textContent.email.content} />
            </VerticalList>
          </VerticalOnMobile>
        </ContactContainer>
      </PageContainer>
    </Page>
  )
};




const textContent = {
  title: "Contact Us!",
  address: {
    title: "Address:",
    content: ["Iterative Solution Limited",
      "Kemp House",
      "152 - 160 City Road",
      "London",
      "EC1V 2NX"]
  },
  phone: {
    title: "Phone:",
    content: ["+44 (0) 20 3290 6278"]
  },
  email: {
    title: "Email:",
    content: ["info@iterativesolution.co.uk"]
  }
}



export default ContactUsPage;
