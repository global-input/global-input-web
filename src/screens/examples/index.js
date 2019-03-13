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
import {config} from '../../configs';



var examples={
  allLinks:[config.paths.examples.contentTransfer,
            config.paths.examples.gameControl,
            config.paths.examples.mediaPlayer,
            config.paths.examples.qrPrinting,
            config.paths.examples.sendMessage,
            config.paths.examples.transferForm],
  links:{
      transferFormData:config.paths.examples.transferForm
  },

  renderTransferFormDataExampleLink(linkText){
      return(
        <Link to={config.paths.examples.transferForm.path} style={styles.examplelink.get()}>{linkText}</Link>
      );
  },
  renderGameControlExampleLink(){
      return(
        <Link to={config.paths.examples.gameControl.path} style={styles.examplelink.get()}>Game Control Example</Link>
      );
  },
  renderMediaPlayerExampleLink(linkText){
      return(
        <Link to={config.paths.examples.mediaPlayer.path} style={styles.examplelink.get()}>{linkText}</Link>
      );
  },
  renderSendMessageScreen(linkText){
    return(
      <Link to={config.paths.examples.sendMessage.path} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderContentTransferScreen(linkText){
    return(
      <Link to={config.paths.examples.contentTransfer.path} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderQRPrintingScreen(linkText){
    return(
      <Link to={config.paths.examples.qrPrinting.path} style={styles.examplelink.get()}>{linkText}</Link>
    );
  },
  renderRoute:function(){
    return(
      <React.Fragment>
        <Route  path={config.paths.examples.contentTransfer.path}  component={ContentTransferScreen}/>
        <Route  path={config.paths.examples.mediaPlayer.path}  component={MediaPlayerScreen}/>
        <Route  path={config.paths.examples.gameControl.path}  component={GameControlScreen}/>
        <Route path={config.paths.examples.transferForm.path} component={TransferFormDataScreen}/>

        <Route path={config.paths.examples.sendMessage.path} component={SendMessageScreen}/>
        <Route path={config.paths.examples.qrPrinting.path} component={QRPrintingScreen}/>
      </React.Fragment>
    );

  },




};
export default examples;
