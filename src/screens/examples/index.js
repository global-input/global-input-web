import ContentTransferScreen from './content-transfer-screen';
import GameControlScreen from './game-game-control-screen';
import MediaPlayerScreen from './media-player-screen';
import QRPrintingScreen from './qr-printing-screen';
import SendMessageScreen from './send-message-screen';
import TransferFormDataScreen from './transfer-form-data-screen';

var exampleLinks=[{
    linkText:ContentTransferScreen.linkText,
    link:ContentTransferScreen.pagePath
},{
    linkText:GameControlScreen.linkText,
    link:GameControlScreen.pagePath
},{
    linkText:MediaPlayerScreen.linkText,
    link:MediaPlayerScreen.pagePath
},{
  linkText:QRPrintingScreen.linkText,
  link:QRPrintingScreen.pagePath
},{
  linkText:SendMessageScreen.linkText,
  link:SendMessageScreen.pagePath
},{
  linkText:TransferFormDataScreen.linkText,
  link:TransferFormDataScreen.pagePath
}] ;
export {exampleLinks,ContentTransferScreen,GameControlScreen,MediaPlayerScreen,QRPrintingScreen,SendMessageScreen,TransferFormDataScreen};
