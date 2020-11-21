import React from 'react';
import { withResponsiveComponent } from "../../components/screen-media";

import { TitleCenter, Page, VerticalOnMobile, PageContainer } from "../../page-components/themes/blue-background";
import VerticalList from '../../page-components/vertical-list';
import ContactContainer from './contact-container';

import { MobileConnect } from '../../mobile';
import { usePageTitle } from '../../page-metadata';
import { config } from '../../configs';


const ContactUsPage: React.FC = () => {
  const initData = {
    form: {
      title: "Contact Us",
      fields: []
    }
  };
  usePageTitle('Global Input App - Contact Us');
  return (
    <Page selected={config.paths.contactUs.path}>
      <PageContainer>
        <ContactContainer>
          <MobileConnect initData={initData} />
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
export default withResponsiveComponent(ContactUsPage);
