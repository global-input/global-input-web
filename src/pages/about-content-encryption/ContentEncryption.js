import React from 'react';
import {examplesLinks,pagesLinks} from '../../links-components';
import SimpleContainer from '../../page-components/section-containers/simple-container';
import ButtonsContainer from '../../page-components/buttons-container';




const { MobileEncryption} = examplesLinks;

const {DocumentationButton,MobileEncryptionAppButton}  = pagesLinks.buttons;


const DocuButton=props=>{
    if(props.isSideMenu){
      return null;
    }
    return (<DocumentationButton>Documentation</DocumentationButton>);
}
const FooterButtons=props=>{

  return(
    <ButtonsContainer>
        <MobileEncryptionAppButton>Example</MobileEncryptionAppButton>
        <DocuButton {...props}/>
    </ButtonsContainer>
  )

}


const ContentEncryption = props=>{
        const {P, Title,FirstSection,Concept, Code,NextSection}=props.theme;
        return(

          <React.Fragment>
              <FirstSection>
                 <Title>Mobile Encryption</Title>
                 </FirstSection>
                 <NextSection>
                  <P>
                  Global Input App provides secure mobile storage for storing encryption keys used in encrypting/decrypting data that is sent by the connected application. The encryption keys stay encrypted in your mobile and can only be decrypted by a memorable password that you use to unlock the app. This strategy provides a secure and intuitive way of securing data for the organisations that are looking to maximising the security of their data. The <MobileEncryption {...props}>example application</MobileEncryption> demonstrates how the mobile app helps eliminate the complexity in securing encryption keys used in encrypting data.
                  </P>
                  <P>
                  <P>
For example, in the following code, the application will send the specified content to the mobile app for encryption. 
</P>
<P>

<Code>
{`
...
export default ()=>{
    const [content, setContent]=useState("");
    const [encrypted, setEncrypted]=useState("");
    const mobile = useRef(null);

    useEffect(()=>{
      ...
      let mobileConfig={
        initData:{
            form:{
                    title:"Mobile Encryption",
                    fields:[{
                      label:"Content",
                      type:'encrypt',
                      id:"content",
                      value:content,
                      operations:{
                        onInput:setEncrypted
                      }
                    }]
              }
        },
      };
      mobile.current = createMessageConnector();
      mobile.current.connect(mobileConfig);
    },[])
    ....
};
`}
                    </Code>
  </P>

                  </P>
                  <P>                 
                  The <MobileEncryption {...props}>example application</MobileEncryption> demonstrates another interesting usage of the mobile encryption. You can use one of your encryption keys to encrypt content, so the connected application can generate a QR Code with the encrypted content. When you scan the QR Code, the mobile app can instantly display and import the decrypted content. This may be an ideal way for many people who would prefer to use printed media to record passwords. This is especially useful when you would like to backup or share an encryption key so that you can instantly import it into your app.
                                       
                  </P>
                  
                  <P>
                  The mobile app can also be used to decrypt an encrypted keyset sent over by a connected application. The keyset contains the keys that the application can use to decrypt part of the data that the user is supposed to access. The key set is like a keyring in the physical world. In this metaphor, the keyring contains the keys to the facilities that you are supposed to have access, and you may put the keyring into a locker that you can only unlock with your master key. Then, you may place your master key securely in a locked case that you can unlock with a memorable password. Finally, you would carry around your locked case wherever you go. The Global Input App corresponds to the locked case in the metaphor. With this strategy, business applications can implement a cryptography-based access control mechanism to manage access to the data stored in the cloud.
                  </P>


               </NextSection>
               <FirstSection>
                 <FirstSection>
                       <SimpleContainer>
                             <FooterButtons {...props}/>
                       </SimpleContainer>
                 </FirstSection>

               </FirstSection>







       </React.Fragment>
  );

};
ContentEncryption.menu={
  id:"contentEncryption",
  label:"Mobile Encryption"

}


export default ContentEncryption;
