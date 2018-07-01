import chromeExtensionConfig from "./chromeExtensionConfig";
import developerTextConfig from "./developers/developerTextConfig";
import websiteSourceCodeConfig from "./developers/websiteSourceCodeConfig";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import webSocketServerConfig from "./developers/webSocketServerConfig";

import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
import contactUsConfig from "./about/contactUsConfig";
import privacyConfig from "./about/privacyConfig";
const blockTextConfig={
      chrome:chromeExtensionConfig,
      developers:{
             home:developerTextConfig,
             websiteSourceCode:websiteSourceCodeConfig,
             jslibrary:introductionToJSlibraryConfig,
             websocketServer:webSocketServerConfig

         },
      about:{            
            globalInputApp:aboutGlobalInputConfig,
            contact:contactUsConfig,
            privacy:privacyConfig
      }
};

export default blockTextConfig;
