// Keys for localStorage
const STORAGE_KEYS = {
  API_KEY: "GLOBAL_INPUT_API_KEY",
  SECURITY_GROUP: "GLOBAL_INPUT_SECURITY_GROUP",
  CODE_AES: "GLOBAL_INPUT_CODE_AES",
  CLIENT: "GLOBAL_INPUT_CLIENT",
  APP_LOGIN_TIMEOUT: "GLOBAL_INPUT_APP_LOGIN_TIMEOUT",
  PRESERVE_SESSION: "GLOBAL_INPUT_PRESERVE_SESSION",
  PROXY_URL: "GLOBAL_INPUT_PROXY_URL",
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
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
}

// Helper function to load data from localStorage
function loadFromLocalStorage(key, defaultValue) {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
}

// Initialize cached variables with default values if not set
function initializeState() {
  if (apikey === null) {
    apikey = loadFromLocalStorage(STORAGE_KEYS.API_KEY, "SOh85GNXT8TXLCTEc");
  }
  if (securityGroup === null) {
    securityGroup = loadFromLocalStorage(STORAGE_KEYS.SECURITY_GROUP, "1CNbWCFpsbmRQuKdd");
  }
  if (codeAES === null) {
    codeAES = loadFromLocalStorage(STORAGE_KEYS.CODE_AES, "LNJGw0x5lqnXpnVY8");
  }
  if (client === null) {
    client = loadFromLocalStorage(STORAGE_KEYS.CLIENT, "");
  }
  if (appLoginTimeout === null) {
    appLoginTimeout = loadFromLocalStorage(STORAGE_KEYS.APP_LOGIN_TIMEOUT, 120000);
  }
  if (preserveSession === null) {
    preserveSession = loadFromLocalStorage(STORAGE_KEYS.PRESERVE_SESSION, true);
  }
  if (proxyURL === null) {
    proxyURL = loadFromLocalStorage(STORAGE_KEYS.PROXY_URL, "https://globalinput.co.uk");
  }
}

// Call initializeState to set up the initial state
initializeState();

// Getter functions
export const getApiKey = () => apikey;

export const getSecurityGroup = () => securityGroup;

export const getCodeAES = () => codeAES;

export const getClient = () => client;

export const getAppLoginTimeout = () => appLoginTimeout;

export const getPreserveSession = () => preserveSession;

export const getProxyURL = () => proxyURL;

// Setter functions
export const setApiKey = (newApiKey) => {
  apikey = newApiKey;
  saveToLocalStorage(STORAGE_KEYS.API_KEY, apikey);
};

export const setSecurityGroup = (newSecurityGroup) => {
  securityGroup = newSecurityGroup;
  saveToLocalStorage(STORAGE_KEYS.SECURITY_GROUP, securityGroup);
};

export const setCodeAES = (newCodeAES) => {
  codeAES = newCodeAES;
  saveToLocalStorage(STORAGE_KEYS.CODE_AES, codeAES);
};

export const setClient = (newClient) => {
  client = newClient;
  saveToLocalStorage(STORAGE_KEYS.CLIENT, client);
};

export const setAppLoginTimeout = (newTimeout) => {
  appLoginTimeout = newTimeout;
  saveToLocalStorage(STORAGE_KEYS.APP_LOGIN_TIMEOUT, appLoginTimeout);
};

export const setPreserveSession = (newPreserveSession) => {
  preserveSession = newPreserveSession;
  saveToLocalStorage(STORAGE_KEYS.PRESERVE_SESSION, preserveSession);
};

export const setProxyURL = (newProxyURL) => {
  proxyURL = newProxyURL;
  saveToLocalStorage(STORAGE_KEYS.PROXY_URL, proxyURL);
};

// Reset function to restore default settings
export const resetGlobalInputSettings = () => {
  apikey = "SOh85GNXT8TXLCTEc";
  securityGroup = "1CNbWCFpsbmRQuKdd";
  codeAES = "LNJGw0x5lqnXpnVY8";
  client = "";
  appLoginTimeout = 120000;
  preserveSession = true;
  proxyURL = "https://globalinput.co.uk";

  saveToLocalStorage(STORAGE_KEYS.API_KEY, apikey);
  saveToLocalStorage(STORAGE_KEYS.SECURITY_GROUP, securityGroup);
  saveToLocalStorage(STORAGE_KEYS.CODE_AES, codeAES);
  saveToLocalStorage(STORAGE_KEYS.CLIENT, client);
  saveToLocalStorage(STORAGE_KEYS.APP_LOGIN_TIMEOUT, appLoginTimeout);
  saveToLocalStorage(STORAGE_KEYS.PRESERVE_SESSION, preserveSession);
  saveToLocalStorage(STORAGE_KEYS.PROXY_URL, proxyURL);
};

// Optional: Listen to storage events for cross-tab synchronization
window.addEventListener("storage", (event) => {
  switch (event.key) {
    case STORAGE_KEYS.API_KEY:
      apikey = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.SECURITY_GROUP:
      securityGroup = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.CODE_AES:
      codeAES = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.CLIENT:
      client = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.APP_LOGIN_TIMEOUT:
      appLoginTimeout = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.PRESERVE_SESSION:
      preserveSession = JSON.parse(event.newValue);
      break;
    case STORAGE_KEYS.PROXY_URL:
      proxyURL = JSON.parse(event.newValue);
      break;
    default:
      break;
  }
});
