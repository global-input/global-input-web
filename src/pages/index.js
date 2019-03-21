import React from 'react';


const PageRoute=props=>(
        <Switch>
            <Route path={config.paths.home.path} exact component={HomePage}/>
            <Route path={config.paths.learnMore.path} component={LearnMorePage}/>
            <Route path={config.paths.getAppScreen.path} component={GetAppPage}/>
            <Route path={config.paths.privacy.path} component={PrivacyPage}/>
            <Route path={config.paths.contactus.path} component={ContactUsPage}/>
            <Route path={config.paths.mobileAuthentication.path} component={AboutMobileAuthentication}/>
            <Route path={config.paths.mobileControl.path} component={AboutMobileInputControl}/>
            <Route path={config.paths.secondScreen.path} component={AboutSecondScreen}/>
            <Route path={config.paths.formOperation.path} component={AboutFormOperation}/>
            <Route path={config.paths.secureTransfer.path} component={AboutMobileTransferFormData}/>
            <Route path={config.paths.printScanQRCodes.path} component={AboutPrintScanQRCodes}/>
            <Route path={config.paths.copyAndPaste.path} component={AboutCopyAndPaste}/>
            <Route path={config.paths.documentationPage.path} component={DocumentationPage}/>

            <Route  path={config.paths.examples.contentTransfer.path}  component={ContentTransferScreen}/>
            <Route  path={config.paths.examples.mediaPlayer.path}  component={MediaPlayerScreen}/>
            <Route  path={config.paths.examples.gameControl.path}  component={GameControlScreen}/>
            <Route path={config.paths.examples.transferForm.path} component={TransferFormDataScreen}/>
            <Route path={config.paths.examples.sendMessage.path} component={SendMessageScreen}/>
            <Route path={config.paths.examples.qrPrinting.path} component={QRPrintingScreen}/>
            <Redirect to={config.paths.home.path}/>
        </Switch>
    );

const pages={
      Route:PageRoute,
};


export default pages;
