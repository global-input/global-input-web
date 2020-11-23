import React from 'react';

import { TitleCenter, Page, VerticalOnMobile, PageContainer } from "../../page-components/themes/blue-background";
import VerticalList from '../../page-components/vertical-list';
import ContactContainer from './contact-container';

import * as mobile from '../../mobile';
import { usePageTitle } from '../../page-metadata';
import { config } from '../../configs';
import { useWindowSize } from '../../app-layout';


const ContactUsPage: React.FC = () => {
  const [width] = useWindowSize();

  console.log(':' + width);
  usePageTitle('Global Input App - Contact Us');
  return (
    <Page selected={config.paths.contactUs.path}>
      <PageContainer>
        <ContactContainer>
          <mobile.MobileConnect initData={mobile.contactUs.initData} onFieldChange={mobile.contactUs.onFieldChange} />
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


const FIELDS = {
  companyName: {
    id: "company_name",
    type: "text",
    label: "Company Name",
    value: "Iterative Solution"
  },
  address: {
    id: "address",
    label: "Address",
    type: "text",
    nLines: 5,
    value: "Iterative Solution Limited \n Kemp House \n \n 152-160 \n City Road\n London EC1V 2NX"
  },
  phone: {
    id: "phone",
    label: "Phone",
    type: "text",
    value: "020 3290 6278"
  },
  email: {
    id: "email",
    label: "Email",
    type: "text",
    value: "info@iterativesolution.co.uk"
  },
  info: {
    id: "info",
    type: "info",
    value: ["You may save our contact info by pressing \"Save\" button. Note that the 'save' button will not be displayed if the identical information already exists in your mobile storage."],
  },
  back: {
    id: "back-to-website-home",
    type: "button",
    label: "back",
    icon: "back",
    viewId: "footer"
  }
};
export default ContactUsPage;
