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
  renderAllLinks:function(){
        return (
              <React.Fragment>
                  <Link to={ContentTransferScreen.pagePath} style={styles.examplelink.get()}>{ContentTransferScreen.linkText}</Link>
                  <Link to={GameControlScreen.pagePath} style={styles.examplelink.get()}>{GameControlScreen.linkText}</Link>
                  <Link to={MediaPlayerScreen.pagePath} style={styles.examplelink.get()}>{MediaPlayerScreen.linkText}</Link>
                  <Link to={QRPrintingScreen.pagePath} style={styles.examplelink.get()}>{QRPrintingScreen.linkText}</Link>
                  <Link to={SendMessageScreen.pagePath} style={styles.examplelink.get()}>{SendMessageScreen.linkText}</Link>
                  <Link to={TransferFormDataScreen.pagePath} style={styles.examplelink.get()}>{TransferFormDataScreen.linkText}</Link>
              </React.Fragment>
            );
  },
  renderTransferFormDataExampleLink(){
      return(
        <Link to={TransferFormDataScreen.pagePath} style={styles.examplelink.get()}>Transfer Form Data Example</Link>
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
