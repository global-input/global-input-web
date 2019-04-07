import React from 'react';

import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';

import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';

const {TransferFormData,ContentTransfer} = examplesLinks;

const {DocumentationButton,CopyContentAppButton,TransferFormDataButton}  = pagesLinks.buttons;

const DocuButton=props=>{
    if(props.isSideMenu){
      return null;
    }
    return (<DocumentationButton>Documentation</DocumentationButton>);
}
const FooterButtons=props=>{

  return(
    <ButtonsContainer>
        <CopyContentAppButton>Copy & Paste </CopyContentAppButton>
        <TransferFormDataButton>Transfer Form Data</TransferFormDataButton>
        <DocuButton {...props}/>
    </ButtonsContainer>
  )

}


const MobileTools=props=>{

    const {P, Title,ListLinks,FirstSection,NextSection}=props.theme;

        return(

       <React.Fragment>
              <FirstSection>
              <Title>Content Transfer Tools</Title>
              </FirstSection>
              <NextSection>
              <P>
              Global Input App provides a secure content transfer solution with a minimal footprint that does not require subscription,
              network or cloud drive. For example, the <ContentTransfer {...props}>Content Transfer Application</ContentTransfer> allows you
              to copy and paste a text content from your mobile to a computer or vice versa.
              And the <TransferFormData  {...props}>Transfer Form Data Application</TransferFormData> allows you to compose a form and
              then use it to transfer some confidential information to another person who uses GIA to connect to your form by scanning an Encrypted QR Code.

</P>
<P>
    This may come handy if you are working in a support team and need to send credential data to a user.  This is better than sending credential information via password-protected zip file, because if you do you may not have control over how the user secures the information after he/she has unzipped the file: the user may write the password on a piece of paper or leave it in unsecured storage etc, or try to memorize it without unsuccessfully. Global Input App, on the other hand, will ask the user to confirm to save the data into the secured storage at the end of the session.  This means that you can create a completely random password for the user, and the user does not need to worry about memorizing it. Not only that, since a user can type the information on the form you can receive it on your end, the user detail can be composed collaboratively between a user and yourself.
</P>





</NextSection>

<FirstSection>
      <SimpleContainer>
            <FooterButtons {...props}/>
      </SimpleContainer>
</FirstSection>




    </React.Fragment>

);

};

MobileTools.menu={
  id:"contentTransferTools",
  label:"Content Transfer Tools"
};
export  default MobileTools;
