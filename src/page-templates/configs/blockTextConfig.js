import chromeExtensionConfig from "./chromeExtensionConfig";
import developerTextConfig from "./developers/developerTextConfig";
import websiteSourceCodeConfig from "./developers/websiteSourceCodeConfig";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import webSocketServerConfig from "./developers/webSocketServerConfig";
import aboutTextConfig from "./about/aboutTextConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
import aboutUsConfig from "./about/aboutUsConfig";
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
            home:aboutTextConfig,
            globalInputApp:aboutGlobalInputConfig,
            us:aboutUsConfig,
            contact:contactUsConfig,
            privacy:privacyConfig
      }
};

export default blockTextConfig;
