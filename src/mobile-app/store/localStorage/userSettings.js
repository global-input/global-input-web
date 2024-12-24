import * as generalUtil from '../generalUtil';
import { logger } from "../../../global-input-logging";

let savedFormContent = null;
let encryptionKeyList = null;

let appInstallInstanceId = null;
let appInstallSalt = null;
let appInstallIv = null;
let storageVersion = null;
let rememberPassword = null;
// Keys for localStorage
const STORAGE_KEYS = {    
    SAVED_FORM_CONTENT: 'form_value_encrypted',
    ENCRYPTION_KEY_LIST: 'giaencklist',
    APP_INSTALL_INSTANCE_ID: 'install_instance_id',
    APP_INSTALL_SALT: 'slt',
    APP_INSTALL_IV: 'appiv',
    STORAGE_VERSION: 'storage_version',
    REMEMBER_PASSWORD: 'remember',    
};
export const ACTIVE_ROLE = 'active';
export const DEFAULT_ENCRYPTION_NAME="This Device";
export const DEFAULT_ENCRYPTION_ROLE="role";



// Helper function to save data to localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        
    } catch (e) {
        logger.error(`Error saving ${key} to localStorage`, e);
    }
}

// Helper function to load data from localStorage
function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
        logger.error(`Error loading ${key} from localStorage`, e);
        return defaultValue;
    }
}
function deleteFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        logger.error(`Error deleting ${key} from localStorage`, e);
    }
}


// Initialize cached variables
function initializeState() {        
    if (savedFormContent === null) {
        savedFormContent = loadFromLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, []);
    }    
    if (encryptionKeyList === null) {
        encryptionKeyList = loadFromLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, []);
    }
    if (appInstallInstanceId === null) {
        appInstallInstanceId = loadFromLocalStorage(STORAGE_KEYS.APP_INSTALL_INSTANCE_ID, null);
    }
    if(appInstallSalt === null){
        appInstallSalt = loadFromLocalStorage(STORAGE_KEYS.APP_INSTALL_SALT, null);
    }
    if(appInstallIv === null){
        appInstallIv = loadFromLocalStorage(STORAGE_KEYS.APP_INSTALL_IV, null);
    }
    if(storageVersion === null){
        storageVersion = loadFromLocalStorage(STORAGE_KEYS.STORAGE_VERSION, null);
    }
    if(rememberPassword === null){
        rememberPassword = loadFromLocalStorage(STORAGE_KEYS.REMEMBER_PASSWORD, false);
    }
}

// Call initializeState to set up the initial state
initializeState();

// Functions to get data

export const getStorageVersion = () => storageVersion;

export const getActiveEncryptionKey = () => encryptionKeyList.filter((e) => e.role === ACTIVE_ROLE)[0];

export const getEncryptionKeyList = () => encryptionKeyList;



export const getAppInstallInstanceId = () => appInstallInstanceId;

export const getAppInstallSalt = () => appInstallSalt;

export const getAppInstallIv = () => appInstallIv;


export const getAllForms = () => savedFormContent;

export const getRememberPassword = () => rememberPassword;



export const getFormContentById = (formId) =>
    generalUtil.findFormDataById(getAllForms(), formId);

export const searchFormDataById = (formId) =>
    generalUtil.searchFormDataById(getAllForms(), formId);


export const setEncryptionKeyList = (list) => {
    encryptionKeyList = list;
    saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, list);
};

export const setStorageVersion = (version) => {
    storageVersion = version;
    saveToLocalStorage(STORAGE_KEYS.STORAGE_VERSION, version);
};

export const setAppInstallInstanceId = (instanceId) => {
    appInstallInstanceId = instanceId;
    saveToLocalStorage(STORAGE_KEYS.APP_INSTALL_INSTANCE_ID, instanceId);
}
export const setAppInstallSalt = (salt) => {
    appInstallSalt = salt;
    saveToLocalStorage(STORAGE_KEYS.APP_INSTALL_SALT, salt);
}

export const setAppInstallIv = (iv) => {
    appInstallIv = iv;
    saveToLocalStorage(STORAGE_KEYS.APP_INSTALL_IV, iv);
}


export const setAllForms = (forms) => {
    savedFormContent = forms;
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, forms);
};

export const setRememberPassword = (value) => {
    rememberPassword = value;
    saveToLocalStorage(STORAGE_KEYS.REMEMBER_PASSWORD, value);
};
export const clearRememberPassword = () => {
    rememberPassword = false;
    deleteFromLocalStorage(STORAGE_KEYS.REMEMBER_PASSWORD);
};



export const deleteEncryptionItem = (encryptionItemToDelete) => {
    if (
        encryptionItemToDelete &&
        encryptionItemToDelete.lockedKeyValue &&
        encryptionItemToDelete.role !== ACTIVE_ROLE
    ) {
        encryptionKeyList = encryptionKeyList.filter(
            (e) => e.lockedKeyValue !== encryptionItemToDelete.lockedKeyValue
        );
        saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
    }
};

export const updateEncryptionItem = (encryptionItem) => {
    if (encryptionItem && encryptionItem.lockedKeyValue) {
        const foundIndex = encryptionKeyList.findIndex(
            (e) => e.lockedKeyValue === encryptionItem.lockedKeyValue
        );
        if (foundIndex >= 0) {
            encryptionKeyList[foundIndex] = encryptionItem;
            saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
        }
    }
};

export const activateEncryptionItem = (encryptionItemToActivate) => {
    if (encryptionItemToActivate && encryptionItemToActivate.lockedKeyValue) {
        const foundIndex = encryptionKeyList.findIndex(
            (e) => e.lockedKeyValue === encryptionItemToActivate.lockedKeyValue
        );
        if (foundIndex >= 0) {
            for(let i=0;i<encryptionKeyList.length;i++){
                if(i===foundIndex){
                    encryptionKeyList[i].role=ACTIVE_ROLE;
                }
                else{
                    encryptionKeyList[i].role=DEFAULT_ENCRYPTION_ROLE;
                }                
            }
            saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
        }
    }

}




export const clearAllForms = () => {
    savedFormContent = [];
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

export const clearAllData = () => {    
    savedFormContent = [];    
    encryptionKeyList = [];
    appInstallInstanceId = null;
    appInstallSalt = null;
    appInstallIv = null;
    storageVersion = null;
    rememberPassword = null;
    // Clear localStorage
    Object.values(STORAGE_KEYS).forEach((key) => deleteFromLocalStorage(key));
};

export const saveFormContent = (formContent) => {
    savedFormContent = formContent;
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, formContent);
}



// Listen to storage events to handle cross-tab synchronization
window.addEventListener('storage', (event) => {
    
    switch (event.key) {    
        case STORAGE_KEYS.SAVED_FORM_CONTENT:
            savedFormContent = JSON.parse(event.newValue);
            break;        
        case STORAGE_KEYS.ENCRYPTION_KEY_LIST:
            encryptionKeyList = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.APP_INSTALL_INSTANCE_ID:
            appInstallInstanceId = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.APP_INSTALL_SALT:
            appInstallSalt = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.APP_INSTALL_IV:
            appInstallIv = JSON.parse(event.newValue);
            break; 
        case STORAGE_KEYS.STORAGE_VERSION:
            storageVersion = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.REMEMBER_PASSWORD:
            rememberPassword = JSON.parse(event.newValue);
            break;           
        default:
            break;
    }
});




export function signOut(){
    savedFormContent = null;
    encryptionKeyList = null;    
    appInstallInstanceId = null;
    appInstallSalt = null;
    appInstallIv = null;
    
}

