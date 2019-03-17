import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ContentTransferScreen from './content-transfer-screen';
import GameControlScreen from './game-game-control-screen';
import MediaPlayerScreen from './media-player-screen';
import QRPrintingScreen from './qr-printing-screen';
import SendMessageScreen from './send-message-screen';
import TransferFormDataScreen from './transfer-form-data-screen';

import {config} from '../../configs';




var examples={

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
