import React from 'react';
import {Link} from 'react-router-dom';

import {withResponsiveComponent} from '../../../components/screen-media';
import TopHeaderSection from '../../top-header-section';
import {styles} from './styles';
import {config} from '../../../configs';

const _PageFooterContainer=({screenMedia})=>(    
    <div style={styles.footer.container}>
        
            <PageFooterContent screenMedia={screenMedia}/>
        
    </div>
);
export const PageFooter=withResponsiveComponent(_PageFooterContainer);

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
    if(screenMedia.biggerThan(900)){
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
    else{
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
    
}

const Page=props=>(<div style={styles.container} id="topContent">
            <TopHeaderSection selected={props.selected}/>
            <div style={styles.content}>
                        {props.children}

            </div>
            <PageFooter/>
        </div>);
const ResponsivePage=withResponsiveComponent(Page,{scrollTo:"topContent"});



const Paragraph=props=>(<div style={styles.card.paragraph.get()}>{props.children}</div>);
const Title=props=>(<div style={styles.card.title.get()}>{props.children}</div>);


const CodeContent=props=>(
  <div style={styles.card.codeContainer}>
      <pre style={styles.card.code}>{props.children}</pre>
  </div>
);





class ListLinks extends React.Component {

  render(){
    return(<ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>);
  }
  renderItem(item, index){
    if(item.path){
      return (
              <li style={styles.card.item} key={index}>
                    <Link to={item.path} style={styles.card.link}>{item.linkText}</Link>
              </li>
             );
      }
      else if(item.href){
              return(

                <li style={styles.card.item} key={index}>
                      <a href={item.href} style={styles.card.link} target="__blank">{item.linkText}</a>
                </li>
                );
        }
        else{
          return (<li style={styles.card.item} key={index}>
                Missing links
          </li>);
        }
  }
}

const TextLink=props=>(<Link to={props.to} style={styles.card.link}>{props.children}</Link>);
const ALink=props=>(<a href={props.href} style={styles.card.link} target="__blank">{props.children}</a>);

const Concept=props=>(<span style={styles.card.concept}>{props.children}</span>);

const _FirstSection=props=>(
          <div style={styles.firstSection}>
              <div style={styles.card.container.get()}>
                {props.children}
              </div>
          </div>
        );
 const FirstSection=withResponsiveComponent(_FirstSection);


const _NextSection=props=>(
          <div style={styles.nextSection}>
            <div style={styles.card.container.get()}>
              {props.children}
            </div>
          </div>
        );
const NextSection=withResponsiveComponent(_NextSection);


export default {Page:ResponsivePage,
                  P:Paragraph,
                  Title,
                  ListLinks,
                  Link:TextLink,
                  A:ALink,
                  Code:CodeContent,
                  Concept, FirstSection,NextSection};

