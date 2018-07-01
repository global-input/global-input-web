import homeTextConfig from "./homeTextConfig";
import contentTransferConfig from "./contentTransferConfig";
import qrPrintingConfig from "./qrPrintingConfig";
import formDataTransferConfig from "./formDataTransferConfig";
import developerTextConfig from "./developers/developerTextConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
import contactUsConfig from "./about/contactUsConfig";
import privacyConfig from "./about/privacyConfig";
import chromeExtensionConfig from "./chromeExtensionConfig";
import gameExampleConfig from "./gameExampleConfig";


import videoPlayerConfig from "./videoPlayerConfig";



const applicationPathConfig={
    appTitle:homeTextConfig.title,
    menus:[
        homeTextConfig.menu,
        developerTextConfig.menu,
        privacyConfig.menu,
        aboutGlobalInputConfig.menu,
        contactUsConfig.menu,

    ],
    home:           homeTextConfig,
    contentTransfer:contentTransferConfig,
    qrPrinting:     qrPrintingConfig,
    formData:       formDataTransferConfig,
    chrome:         chromeExtensionConfig,
    developer:      developerTextConfig,
    about:          {
                      home:aboutGlobalInputConfig,
                      contact:contactUsConfig,
                      privacy:privacyConfig
                    },
    videoPlayer:videoPlayerConfig,
    gameExample:gameExampleConfig
};



export default applicationPathConfig;
