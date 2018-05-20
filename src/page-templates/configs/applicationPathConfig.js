import homeTextConfig from "./homeTextConfig";
import contentTransferConfig from "./contentTransferConfig";
import qrPrintingConfig from "./qrPrintingConfig";
import formDataTransferConfig from "./formDataTransferConfig";
import developerTextConfig from "./developers/developerTextConfig";
import aboutTextConfig from "./about/aboutTextConfig";
import contactUsConfig from "./about/contactUsConfig";



const applicationPathConfig={
    appTitle:homeTextConfig.title,
    menus:[
        homeTextConfig.menu,
        developerTextConfig.menu,
        aboutTextConfig.menu

    ],
    home:           homeTextConfig,
    contentTransfer:contentTransferConfig,
    qrPrinting:     qrPrintingConfig,
    formData:       formDataTransferConfig,
    developer:      developerTextConfig,
    about:          {
                      home:aboutTextConfig,
                      contact:contactUsConfig
                    }
};



export default applicationPathConfig;
