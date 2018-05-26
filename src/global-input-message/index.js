import GlobalInputMessageConnector from "./GlobalInputMessageConnector";
import {generatateRandomString,encrypt,decrypt} from "./util";

 const createMessageConnector=function(){
   return new GlobalInputMessageConnector();
 }
 export {generatateRandomString,encrypt,decrypt,createMessageConnector};
