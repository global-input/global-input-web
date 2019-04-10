import React from 'react';

import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';

import {externalsLinks,examplesLinks,pagesLinks} from '../../links-components';

const {TransferFormData,ContentTransfer,QrcodePrinting} = examplesLinks;

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


const MobileContentTransfer=props=>{

    const {P, Title,ListLinks,FirstSection,NextSection,Concept}=props.theme;

        return(

       <React.Fragment>
              <FirstSection>
              <Title>Mobile Content Transfer</Title>
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
    <TransferFormData  {...props}>This application</TransferFormData> may come handy if you are managing user accounts for some applications
    that do not provide subscription and adequate self-service mechanism,
    and when you need to create accounts and share confidential information with your users.
    If you use a traditional way of sending information through a password-protected zip file, you may not have control over how the user secures
    the information after he/she has unzipped the file: the user may write down the information on a piece of paper or leave the unzip file in an
    insecure storage, or he/she may try to memorize them without realising the possibility of forgetting after deleting the zip file.

    The <TransferFormData  {...props}>Transfer Form Data Application</TransferFormData> removes the need to memorise passwords,
    so the user can create a completely random password for each application. You can also choose to collaboratively fill in form with the
    user.
    You can bookmark the form that you have created and use it as the intermediate form between your new users
    and the applications that do not provide subscription mechanism.
    The Global Input App also allows you to share any form data on your GIA directly with another GIA user via end-to-end encrypted communication.
    Select the item you would like to share on the Data tab of your GIA, and press the Edit button there to go into the data editor screen.
    In the data editor screen, you can press the QR Code button to display the QR Code on your mobile screen and ask your user to scan the
    QR code to connect to the form being displayed on your mobile screen. This allows you to share information securely via end-to-end encryption
    communication.

</P>

<P>
  Global Input App also allows passing secret messages via
  Encrypted QR Codes using a pre-shared encryption key.
  You can create and share an encryption key on the Keys tab of your Global Input App (GIA), or
  you can use the <QrcodePrinting  {...props}>QR Code Printing Application</QrcodePrinting> to print out an encrypted QR code for the encryption key you would like
  to share. You can create Encrypted QR Codes for your secret message on the Encrypt tab of your GIA or you can use
  the <QrcodePrinting  {...props}>QR Code Printing Application</QrcodePrinting> to print out the encrypted QR Codes.


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

MobileContentTransfer.menu={
  id:"contentTransferTools",
  label:"Mobile Content Transfer"
};
export  default MobileContentTransfer;
