import * as generalUtil from '../generalUtil';


let savedFormContent = null;
let encryptionKeyList = null;

let appInstallInstanceId = null;
let appInstallSalt = null;
let appInstallIv = null;
// Keys for localStorage
const STORAGE_KEYS = {    
    SAVED_FORM_CONTENT: 'SAVED_FORM_CONTENT',
    ENCRYPTION_KEY_LIST: 'ENCRYPTION_KEY_LIST',
    APP_INSTALL_INSTANCE_ID: 'APP_INSTALL_INSTANCE_ID',
    APP_INSTALL_SALT: 'APP_INSTALL_SALT',
    APP_INSTALL_IV: 'APP_INSTALL_IV',
};
export const ACTIVE_ROLE = 'active';
export const DEFAULT_ENCRPTION_NAME="This Device";
export const DEFAULT_ENCRYPTION_ROLE="role";

// Helper function to save data to localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        
    } catch (e) {
        console.error(`Error saving ${key} to localStorage`, e);
    }
}

// Helper function to load data from localStorage
function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
        console.error(`Error loading ${key} from localStorage`, e);
        return defaultValue;
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
}

// Call initializeState to set up the initial state
initializeState();

// Functions to get data
export const getActiveEncryptionKey = () => encryptionKeyList.filter((e) => e.role === ACTIVE_ROLE)[0];

export const getEncryptionKeyList = () => encryptionKeyList;



export const getAppInstallInstanceId = () => appInstallInstanceId;

export const getAppInstallSalt = () => appInstallSalt;

export const getAppInstallIv = () => appInstallIv;


export const getAllForms = () => savedFormContent;

export const getFormContentById = (formId) =>
    generalUtil.findFormDataById(getAllForms(), formId);

export const searchFormDataById = (formId) =>
    generalUtil.searchFormDataById(getAllForms(), formId);


export const setEncryptionKeyList = (list) => {
    encryptionKeyList = list;
    saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, list);
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



export const updateFormData = (formId, formData) => {
    savedFormContent = savedFormContent.filter((f) => f.id !== formId);
    savedFormContent.unshift(formData);
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

export const createFormData = (formData) => {
    console.log("----------***creating form data*******",formData);
    savedFormContent.unshift(formData);
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

export const mergeFormData = (formData) => {
    let processed = false;
    let updatedFormContent = [];

    for (let i = 0; i < savedFormContent.length; i++) {
        if (savedFormContent[i].id === formData.id) {
            let fields = [...savedFormContent[i].fields];
            // Merge fields
            formData.fields.forEach((newField) => {
                const index = fields.findIndex((f) => f.id === newField.id);
                if (index >= 0) {
                    fields[index] = newField;
                } else if (newField.type !== 'button') {
                    fields.push(newField);
                }
            });
            formData.fields = fields;
            updatedFormContent.push(formData);
            processed = true;
        } else {
            updatedFormContent.push(savedFormContent[i]);
        }
    }

    if (!processed) {
        updatedFormContent.unshift(formData);
    }

    savedFormContent = updatedFormContent;
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

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
    // Clear localStorage
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
};

// Merge a list of form data
export const mergeFormDataList = (formDataList) => {
    const formDataIds = formDataList.map((formData) => formData.id);
    const notMatchedContent = savedFormContent.filter(
        (formData) => !formDataIds.includes(formData.id)
    );
    savedFormContent = [...notMatchedContent, ...formDataList];
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

export const deleteFormData = (formData) => {
    savedFormContent = savedFormContent.filter((m) => m.id !== formData.id);
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

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

