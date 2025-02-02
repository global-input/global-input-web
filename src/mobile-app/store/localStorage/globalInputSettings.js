import * as globalInputMessage from 'global-input-message';
import * as globalEncryption from '../../global-input-enc/enc';
import { logger } from 'global-input-logging';
// Keys for localStorage
const STORAGE_KEYS = {
  API_KEY: "apikey_on_node",
  SECURITY_GROUP: "security_group_on_device",
  CODE_AES: "code_aes_on_code",
  CLIENT: "client_id_on_device",
  APP_LOGIN_TIMEOUT: "log_timeout_on_device",
  PRESERVE_SESSION: "preserve_session_on_device",
  PROXY_URL: "proxy_url_on_node",
};



const appInstance = {  
  
// cspell:disable
  key: "lO3U8KSaxlm4iPoHX",
  salt: null,
  iv: null,
};
// Cached variables
let apikey = null;
let securityGroup = null;
let codeAES = null;
let client = null;
let appLoginTimeout = null;
let preserveSession = null;
let proxyURL = null;

// Subscriber list
const subscribers = [];


// Helper function to save data to localStorage

function memEncrypt(data){
  return globalInputMessage.encrypt(data,appInstance.key);
}
function memDecrypt(data){
  return globalInputMessage.decrypt(data,appInstance.key);
}


async function saveToLocalStorage(key, value) {
  try {     
    let stringValue=null;     
        switch(key){
          case STORAGE_KEYS.API_KEY:
          case STORAGE_KEYS.SECURITY_GROUP:
          case STORAGE_KEYS.CODE_AES:
          case STORAGE_KEYS.CLIENT:
          case STORAGE_KEYS.PROXY_URL:      
            stringValue=await globalEncryption.encryptContent(memDecrypt(appInstance.id),value,memDecrypt(appInstance.salt),memDecrypt(appInstance.iv));
            break;
          default:
            stringValue=JSON.stringify(stringValue);        
        }
        localStorage.setItem(key, stringValue);
  } catch (e) {
    logger.error(`Error saving ${key} to localStorage`, e);
  }
}

async function decodeStorageValue(key,value){
  
      switch(key){
        case STORAGE_KEYS.API_KEY:
        case STORAGE_KEYS.SECURITY_GROUP:
        case STORAGE_KEYS.CODE_AES:
        case STORAGE_KEYS.CLIENT:
        case STORAGE_KEYS.PROXY_URL: 
          if(!appInstance.id){
             throw new Error("requires sign in for protected value");
          }                                
                return await globalEncryption.decryptContent(memDecrypt(appInstance.id),value,memDecrypt(appInstance.salt),memDecrypt(appInstance.iv));                              
      default:        
          return  JSON.parse(value);
      }        


}
// Helper function to load data from localStorage
async function loadFromLocalStorage(key, defaultValue) {

  try {
    let stringValue = localStorage.getItem(key);     
    if(!stringValue){
      return defaultValue;
    }
    return await decodeStorageValue(key,stringValue);
  } catch (e) {
    logger.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
}


// Initialize cached variables with default values if not set
async function initializeState() {      
    securityGroup = memEncrypt("1CNbWCFpsbmRQuKdd");
    if(appInstance.id){
      securityGroup=await loadFromLocalStorage(STORAGE_KEYS.SECURITY_GROUP,securityGroup);
    }    
    codeAES = memEncrypt("LNJGw0x5lqnXpnVY8");
    if(appInstance.id){
      codeAES=await loadFromLocalStorage(STORAGE_KEYS.CODE_AES, codeAES);
    }
    apikey=memEncrypt("SOh85GNXT8TXLCTEc");  
    if(appInstance.id){    
      apikey = await loadFromLocalStorage(STORAGE_KEYS.API_KEY,apikey);
    }  
    if(appInstance.id){
      client = await loadFromLocalStorage(STORAGE_KEYS.CLIENT, null);
      if(!client){
        client = memEncrypt(globalInputMessage.generateRandomString(17));
        if(appInstance.id){        
          client= await saveToLocalStorage(STORAGE_KEYS.CLIENT, client);
        }      
      }
    }
    else{
      client = memEncrypt(globalInputMessage.generateRandomString(17));
    }                
    proxyURL=memEncrypt("https://globalinput.co.uk")
    if(appInstance.id){
      proxyURL = await loadFromLocalStorage(STORAGE_KEYS.PROXY_URL,proxyURL);
    }    
    appLoginTimeout = await loadFromLocalStorage(STORAGE_KEYS.APP_LOGIN_TIMEOUT,120000);  
    preserveSession = await loadFromLocalStorage(STORAGE_KEYS.PRESERVE_SESSION,true);    
    
}

// Call initializeState to set up the initial state
initializeState();

// Notify subscribers
function notifySubscribers(changedKey, newValue) {
  subscribers.forEach((callback) => {
    try {
      callback(changedKey, newValue);
    } catch (e) {
      logger.error("Error in subscriber callback:", e);
    }
  });
}

// Subscription management
export function subscribe(callback) {
  if (typeof callback === "function") {
    subscribers.push(callback);
    // Return an unsubscribe function
    return () => {
      unsubscribe(callback);
    };
  }
}

export function unsubscribe(callback) {
  const index = subscribers.indexOf(callback);
  if (index !== -1) {
    subscribers.splice(index, 1);
  }
}

// Getter functions
export const getApiKey = () => memDecrypt(apikey);

export const getSecurityGroup = () => memDecrypt(securityGroup);

export const getCodeAES = () => memDecrypt(codeAES);

export const getClient = () => memDecrypt(client);
  

export const getAppLoginTimeout = () => appLoginTimeout;


export const getPreserveSession = () => preserveSession;

export const getProxyURL = () => memDecrypt(proxyURL);

// Setter functions
export const setApiKey = (newApiKey) => {
  apikey = memEncrypt(newApiKey);  
  saveToLocalStorage(STORAGE_KEYS.API_KEY, apikey);
  notifySubscribers("apikey", apikey);
};

export const setSecurityGroup = (newSecurityGroup) => {
  securityGroup = memEncrypt(newSecurityGroup);
  saveToLocalStorage(STORAGE_KEYS.SECURITY_GROUP, securityGroup);
  notifySubscribers("securityGroup", securityGroup);
};

export const setCodeAES = (newCodeAES) => {
  codeAES = memEncrypt(newCodeAES);
  saveToLocalStorage(STORAGE_KEYS.CODE_AES, codeAES);
  notifySubscribers("codeAES", codeAES);
};

export const setClient = (newClient) => {
  client = memEncrypt(newClient);
  saveToLocalStorage(STORAGE_KEYS.CLIENT, client);
  notifySubscribers("client", client);
};

export const setAppLoginTimeout = (newTimeout) => {
  appLoginTimeout = newTimeout;
  saveToLocalStorage(STORAGE_KEYS.APP_LOGIN_TIMEOUT, appLoginTimeout);
  notifySubscribers("appLoginTimeout", appLoginTimeout);
};

export const setPreserveSession = (newPreserveSession) => {
  preserveSession = newPreserveSession;
  saveToLocalStorage(STORAGE_KEYS.PRESERVE_SESSION, preserveSession);
  notifySubscribers("preserveSession", preserveSession);
};

export const setProxyURL = (newProxyURL) => {
  proxyURL = memEncrypt(newProxyURL);
  saveToLocalStorage(STORAGE_KEYS.PROXY_URL, proxyURL);
  notifySubscribers("proxyURL", proxyURL);
};



// Optional: Listen to storage events for cross-tab synchronization
window.addEventListener("storage", async (event) => {    
  try{
      switch (event.key) {
        case STORAGE_KEYS.API_KEY:
          apikey = await decodeStorageValue(STORAGE_KEYS.API_KEY,event.newValue);          
          notifySubscribers("apikey", apikey);
          break;
        case STORAGE_KEYS.SECURITY_GROUP:
          securityGroup = await decodeStorageValue(STORAGE_KEYS.SECURITY_GROUP,event.newValue);
          notifySubscribers("securityGroup", securityGroup);
          break;
        case STORAGE_KEYS.CODE_AES:
          codeAES = await decodeStorageValue(STORAGE_KEYS.CODE_AES,event.newValue);
          notifySubscribers("codeAES", codeAES);
          break;
        case STORAGE_KEYS.CLIENT:
          client = await decodeStorageValue(STORAGE_KEYS.CLIENT,event.newValue);
          notifySubscribers("client", client);
          break;
        case STORAGE_KEYS.APP_LOGIN_TIMEOUT:
          appLoginTimeout = event.newValue ? JSON.parse(event.newValue) : null;
          notifySubscribers("appLoginTimeout", appLoginTimeout);
          break;
        case STORAGE_KEYS.PRESERVE_SESSION:
          preserveSession = event.newValue ? JSON.parse(event.newValue) : null;
          notifySubscribers("preserveSession", preserveSession);
          break;
        case STORAGE_KEYS.PROXY_URL:
          proxyURL = event.newValue ? JSON.parse(event.newValue) : null;
          notifySubscribers("proxyURL", proxyURL);
          break;
        default:
          break;
      }
    }
    catch(e){
      logger.error("Error in storage event listener",e);
    }
});


export const deleteAllData =  async ()=>{
  
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  
  await initializeState(); 
}


export async function initializeStateWithApplicationInstanceId(instanceId, salt, iv) {
  appInstance.salt = memEncrypt(salt);
  appInstance.iv = memEncrypt(iv);
  appInstance.id = memEncrypt(instanceId);
  await initializeState();
}