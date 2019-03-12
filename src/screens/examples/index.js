import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ContentTransferScreen from './content-transfer-screen';
import GameControlScreen from './game-game-control-screen';
import MediaPlayerScreen from './media-player-screen';
import QRPrintingScreen from './qr-printing-screen';
import SendMessageScreen from './send-message-screen';
import TransferFormDataScreen from './transfer-form-data-screen';
import {styles} from './styles';



var examples={
  allLinks:[
          {path:ContentTransferScreen.pagePath,linkText:"Content Transfer"},
          {path:GameControlScreen.pagePath,linkText:"Game Control"},
          {path:MediaPlayerScreen.pagePath,linkText:"Media Player Control"},
          {path:QRPrintingScreen.pagePath,linkText:"QR Code Printing"},
          {path:SendMessageScreen.pagePath,linkText:"Send Message"},
          {path:TransferFormDataScreen.pagePath,linkText:"Transfer Form Data"},
        ],

  renderTransferFormDataExampleLink(linkText){
      return(
        <Link to={TransferFormDataScreen.pagePath} style={styles.examplelink.get()}>{linkText}</Link>
      );
  },
  renderGameControlExampleLink(){
      return(
        <Link to={GameControlScreen.pagePath} style={styles.examplelink.get()}>Game Control Example</Link>
      );
  },
  renderMediaPlayerExampleLink(linkText){
      return(
        <Link to={MediaPlayerScreen.pagePath} style={styles.examplelink.get()}>{linkText}</Link>
      );
  },
  renderSendMessageScreen(linkText){
    return(
      <Link to={SendMessageScreen.pagePath} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderContentTransferScreen(linkText){
    return(
      <Link to={ContentTransferScreen.pagePath} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderQRPrintingScreen(linkText){
    return(
      <Link to={QRPrintingScreen.pagePath} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderRoute:function(){
    return(
      <React.Fragment>
        <Route  path={ContentTransferScreen.pagePath}  component={ContentTransferScreen}/>
        <Route  path={MediaPlayerScreen.pagePath}  component={MediaPlayerScreen}/>
        <Route  path={GameControlScreen.pagePath}  component={GameControlScreen}/>
        <Route path={TransferFormDataScreen.pagePath} component={TransferFormDataScreen}/>
        <Route path={SendMessageScreen.pagePath} component={SendMessageScreen}/>
        <Route path={QRPrintingScreen.pagePath} component={QRPrintingScreen}/>
      </React.Fragment>
    );

  },




};
export default examples;
