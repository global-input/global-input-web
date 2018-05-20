import chromeExtensionConfig from "./chromeExtensionConfig";
import developerTextConfig from "./developers/developerTextConfig";
import exampleConfig from "./developers/exampleConfig";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import proxyRepositoryConfig from "./developers/proxyRepositoryConfig";
import aboutTextConfig from "./about/aboutTextConfig";
import aboutGlobalInputConfig from "./about/aboutGlobalInputConfig";
import aboutUsConfig from "./about/aboutUsConfig";
import contactUsConfig from "./about/contactUsConfig";
const blockTextConfig={
      chrome:chromeExtensionConfig,
      developers:{
             home:developerTextConfig,
             example:exampleConfig,
             jslibrary:introductionToJSlibraryConfig,
             proxy:proxyRepositoryConfig

         },
      about:{
            home:aboutTextConfig,
            globalInputApp:aboutGlobalInputConfig,
            us:aboutUsConfig,
            contact:contactUsConfig
      }
};

export default blockTextConfig;
