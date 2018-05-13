import chromeExtensionConfig from "./chromeExtensionConfig";
import developerTextConfig from "./developers/developerTextConfig";
import exampleConfig from "./developers/exampleConfig";
import introductionToJSlibraryConfig from "./developers/introductionToJSlibraryConfig";
import proxyRepositoryConfig from "./developers/proxyRepositoryConfig";
const blockTextConfig={
      chrome:chromeExtensionConfig,
      developers:{
             home:developerTextConfig,
             example:exampleConfig,
             jslibrary:introductionToJSlibraryConfig,
             proxy:proxyRepositoryConfig

         }
};

export default blockTextConfig;
