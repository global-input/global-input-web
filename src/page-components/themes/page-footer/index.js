import React from 'react';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../../components/screen-media';

import {styles} from './styles';
import {config} from '../../../configs';

const _PageFooterContainer=({screenMedia})=>(    
    <div style={styles.footer.container}>
        
            <PageFooterContent screenMedia={screenMedia}/>
        
    </div>
);

export default withResponsiveComponent(_PageFooterContainer);

const FooterItem=({href, label, isLast})=>(
        <div style={isLast?styles.footer.lastItem:styles.footer.item}>
            <a href={href} style={styles.footer.link}>{label}</a>
        </div>
);

const FooterMobileAuthentication=({isLast=false})=>(
    <FooterItem href={config.paths.mobileAuthentication.path}
    label="Mobile Authentication" isLast={isLast}/>
);
const FooterMobileEncryption=({isLast=false})=>(
    <FooterItem href={config.paths.aboutContentEncryption.path}
    label="Mobile Encryption" isLast={isLast}/>
);
const FooterMobileInputControl=({isLast=false})=>(
    <FooterItem href={config.paths.mobileControl.path}
    label="Mobile Input &amp; Control" isLast={isLast}/>
);

const FooterSecondScreen=({isLast=false})=>(
    <FooterItem href={config.paths.secondScreen.path}
    label="Second Screen" isLast={isLast}/>
);
const FooterMobilePersonalStorage=({isLast=false})=>(
    <FooterItem href={config.paths.mobilePersonalStorage.path}
    label="Mobile Personal Storage" isLast={isLast}/>
);
const FooterMobileContentTransfer=({isLast=false})=>(
    <FooterItem href={config.paths.mobileContentTransfer.path}
    label="Mobile Content Transfer" isLast={isLast}/>
);

const FooterPrivacyPolicy=({isLast=false})=>(
    <FooterItem href={config.paths.privacy.path}
    label="Privacy Policy" isLast={isLast}/>
);

const FooterDownload=({isLast=false})=>(
    <FooterItem href={config.paths.getAppScreen.path}
    label="Download" isLast={isLast}/>
);

const FooterContactUs=({isLast=false})=>(
    <FooterItem href={config.paths.contactus.path}
    label="Contact Us" isLast={isLast}/>
);

const PageFooterContent=({screenMedia})=>{
      if(screenMedia.biggerThan(1204)){
        return (   
            <div style={styles.footer.content.get()}>
                    <div style={styles.footer.items}>   
                        <FooterMobileAuthentication/>                        
                        <FooterMobileEncryption/>
                        <FooterSecondScreen/>
                        <FooterMobileInputControl isLast={true}/>
                     </div>
                     <div style={styles.footer.items}>                    
                        <FooterPrivacyPolicy/>
                        <FooterDownload/>
                        <FooterMobilePersonalStorage/>
                        <FooterMobileContentTransfer isLast={true}/>
                    </div>
          </div>                                 
        );
    }
    else if(screenMedia.biggerThan(900)){
        return (   
            <div style={styles.footer.content.get()}>
                     <div style={styles.footer.items}>   
                        <FooterMobileAuthentication/>                        
                        <FooterMobileEncryption/>
                        <FooterMobileInputControl isLast={true}/>
                     </div>
                     <div style={styles.footer.items}>                    
                        <FooterSecondScreen/>
                        <FooterMobilePersonalStorage/>
                        <FooterMobileContentTransfer isLast={true}/>
                    </div>
                    <div style={styles.footer.items}>
                        <FooterPrivacyPolicy/>
                        <FooterDownload/>
                        <FooterContactUs isLast={true}/>
                    </div>
           </div>                                 
         );
    }
    else if(screenMedia.biggerThan(600)){
        return (   
            <div style={styles.footer.content.get()}>
                     <div style={styles.footer.items}>   
                        <FooterMobileAuthentication/>                        
                        <FooterMobileEncryption isLast={true}/>
                     </div>
                     <div style={styles.footer.items}>                    
                        <FooterMobileInputControl/>
                        <FooterSecondScreen isLast={true}/>                        
                    </div>
                    <div style={styles.footer.items}>
                        <FooterMobilePersonalStorage/>
                        <FooterMobileContentTransfer isLast={true}/>
                    </div>
                    <div style={styles.footer.items}>                        
                        <FooterPrivacyPolicy/>
                        <FooterContactUs isLast={true}/>
                    </div>                    
           </div>                                 
         );
    }
    else{
      return (   
        <div style={styles.footer.content.get()}>
                 <div style={styles.footer.singleItem}>   
                    <FooterMobileAuthentication  isLast={true}/>                                            
                 </div>
                 <div style={styles.footer.singleItem}>
                    <FooterMobileEncryption  isLast={true}/>
                 </div>

                 <div style={styles.footer.singleItem}>                    
                    <FooterMobileInputControl  isLast={true}/>                    
                </div>
                <div style={styles.footer.singleItem}>                    
                  <FooterSecondScreen  isLast={true}/>                        
                </div>
                
                <div style={styles.footer.singleItem}>
                    <FooterMobilePersonalStorage  isLast={true}/>                    
                </div>
                
                <div style={styles.footer.singleItem}>
                    <FooterMobileContentTransfer  isLast={true}/>
                </div>


                <div style={styles.footer.singleItem}>                        
                    <FooterPrivacyPolicy  isLast={true}/>                    
                </div>                    
                
                <div style={styles.footer.singleItem}>  
                      <FooterContactUs  isLast={true}/>                      
                </div>
       </div>                                 
     );
    }
    
}

