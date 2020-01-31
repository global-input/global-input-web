import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,Switch,Redirect
} from 'react-router-dom'


import {config} from "./configs";
import TopHeaderSection from "./page-components/top-header-section";

import {HomePageWithScrollToTop as HomePage} from "./pages/home-page";
import GetAppPage from './pages/get-app-page';
import PrivacyPage from './pages/privacy-page';
import ContactUsPage from "./pages/contact-us-page";
import AboutMobileAuthentication from "./pages/about-mobile-authentication";
import AboutMobileInputControl from './pages/about-mobile-input-control';
import AboutSecondScreen from './pages/about-second-screen';

import AboutMobilePersonalStorage from './pages/about-mobile-personal-storage';
import AboutContentEncryption from './pages/about-content-encryption';
import AboutMobileContentTransfer from './pages/about-mobile-content-transfer';
import DocumentationPage from './pages/documentation-page';


import ContentTransferExample    from "./examples/content-transfer-example";
import GameControlExample        from "./examples/game-control-example";
import MediaPlayerControlExample from "./examples/media-player-control-example";
import SendMessageExample        from "./examples/send-message-example";
import TransferFormDataExample   from "./examples/transfer-form-data-example";
import EncryptionDecryptionExample from './examples/encryption-decryption-example';
import MobileEncryptionExample from './examples/mobile-encryption-example';






const App=props=>(
      <Router>
        <Switch>
            <Route path={config.paths.home.path} exact component={HomePage}/>

            <Route path={config.paths.getAppScreen.path} component={GetAppPage}/>
            <Route path={config.paths.privacy.path} component={PrivacyPage}/>
            <Route path={config.paths.contactus.path} component={ContactUsPage}/>

            <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication}/>
            <Route path={config.paths.mobileAuthentication.oldpath} component={AboutMobileAuthentication}/>

            <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl}/>
            <Route path={config.paths.mobileControl.oldpath} component={AboutMobileInputControl}/>



            <Route path={config.paths.secondScreen.path} component={AboutSecondScreen}/>
            <Route path={config.paths.secondScreen.oldpath} component={AboutSecondScreen}/>

            <Route path={config.paths.mobilePersonalStorage.path} component={AboutMobilePersonalStorage}/>
            <Route path={config.paths.mobilePersonalStorage.oldpath} component={AboutMobilePersonalStorage}/>




            <Route path={config.paths.aboutContentEncryption.path} component={AboutContentEncryption}/>
            <Route path={config.paths.aboutContentEncryption.oldpath} component={AboutContentEncryption}/>


            <Route path={config.paths.mobileContentTransfer.path} component={AboutMobileContentTransfer}/>
            <Route path={config.paths.mobileContentTransfer.oldpath} component={AboutMobileContentTransfer}/>
            <Route path={config.paths.mobileContentTransfer.oldpath2} component={AboutMobileContentTransfer}/>



            <Route path={config.paths.documentationPage.path} component={DocumentationPage}/>

            <Route  path={config.paths.examples.contentTransfer.path}  component={ContentTransferScreen}/>
            <Route  path={config.paths.examples.mediaPlayer.path}  component={MediaPlayerScreen}/>
            <Route  path={config.paths.examples.gameControl.path}  component={GameControlScreen}/>
            <Route path={config.paths.examples.transferForm.path} component={TransferFormDataScreen}/>
            <Route path={config.paths.examples.sendMessage.path} component={SendMessageScreen}/>            
            <Route path={config.paths.examples.encryptionDecryption.path} component={EncryptionDecryptionScreen}/>
            <Route path={config.paths.examples.mobileEncryption.path} component={MobileEncryptionScreen}/>
            <Route path={config.paths.examples.mobileEncryption.oldpath} component={MobileEncryptionScreen}/>
            

            <Redirect to={config.paths.home.path}/>
        </Switch>
      </Router>
    );
export default App;



const createExampleComponent =ExampleComponent=>{
  return (props)=>{
    return(
      <React.Fragment>
        <div className="noprint">
          <TopHeaderSection  selected={props.selected}/>
        </div>
        <div style={compStyles.content}>
            <div style={compStyles.itemSection}>
                <ExampleComponent url={config.url} {...props}/>              
                
            </div>
        </div>
      </React.Fragment>  
    );
  
  }
 

}

const compStyles={

  content:{
      paddingLeft:  20,
      paddingTop:   100,
      paddingRight: 20,
      display:      "flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:    "center",
      backgroundColor:"#5291CD",
      width:"100%",
      height:window.innerHeight,
  },
  itemSection:{
     marginTop:20,
     marginBottom:10,
     padding:10,
     backgroundColor:"white",
     width:"95%",
     borderRadius:25,
  },

};



const GameControlScreen=createExampleComponent(GameControlExample);
const MediaPlayerScreen=createExampleComponent(MediaPlayerControlExample);
const SendMessageScreen=createExampleComponent(SendMessageExample);
const TransferFormDataScreen=createExampleComponent(TransferFormDataExample);
const ContentTransferScreen=createExampleComponent(ContentTransferExample);
const EncryptionDecryptionScreen=createExampleComponent(EncryptionDecryptionExample);
const MobileEncryptionScreen=createExampleComponent(MobileEncryptionExample);


