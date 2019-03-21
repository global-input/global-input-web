import homeTextConfig from "./homeTextConfig";
import contentTransferConfig from "./contentTransferConfig";
import qrPrintingConfig from "./qrPrintingConfig";
import formDataTransferConfig from "./formDataTransferConfig";
import platformTextConfig from "./developers/platformTextConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
import contactUsConfig from "./about/contactUsConfig";
import privacyConfig from "./about/privacyConfig";
import chromeExtensionConfig from "./chromeExtensionConfig";
import gameExampleConfig from "./gameExampleConfig";
import sendMessageConfig from "./sendMessageConfig";


import videoPlayerConfig from "./videoPlayerConfig";



const applicationPathConfig={
    appTitle:homeTextConfig.title,
    home:           homeTextConfig,
    contentTransfer:contentTransferConfig,
    qrPrinting:     qrPrintingConfig,
    formData:       formDataTransferConfig,
    chrome:         chromeExtensionConfig,
    platform:      platformTextConfig,
    about:          {
                      home:aboutGlobalInputConfig,
                      contact:contactUsConfig,
                      privacy:privacyConfig
                    },
    videoPlayer:videoPlayerConfig,
    gameExample:gameExampleConfig,
    sendMessage:sendMessageConfig
};



export default applicationPathConfig;
