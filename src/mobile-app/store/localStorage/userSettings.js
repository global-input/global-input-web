import * as generalUtil from '../generalUtil';


// Cached variables
let activeEncryptionKey = null;

let savedFormContent = null;
let appLoginContent = null;
let encryptionKeyList = null;

// Keys for localStorage
const STORAGE_KEYS = {
    ACTIVE_ENCRYPTION_KEY: 'ACTIVE_ENCRYPTION_KEY',    
    SAVED_FORM_CONTENT: 'SAVED_FORM_CONTENT',
    APP_LOGIN_CONTENT: 'APP_LOGIN_CONTENT',
    ENCRYPTION_KEY_LIST: 'ENCRYPTION_KEY_LIST',
};

// Helper function to save data to localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log("------saveToLocalStorage: "+ key + " : "+ JSON.stringify(value));
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
    if (activeEncryptionKey === null) {
        activeEncryptionKey = loadFromLocalStorage(STORAGE_KEYS.ACTIVE_ENCRYPTION_KEY, generalUtil.generateRandomString(23));
    }    
    if (savedFormContent === null) {
        savedFormContent = loadFromLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, []);
    }
    if (appLoginContent === null) {
        appLoginContent = loadFromLocalStorage(STORAGE_KEYS.APP_LOGIN_CONTENT, null);
    }
    if (encryptionKeyList === null) {
        encryptionKeyList = loadFromLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, []);
    }
}

// Call initializeState to set up the initial state
initializeState();

// Functions to get data
export const getActiveEncryptionKey = () => activeEncryptionKey;

export const getEncryptionKeyList = () => encryptionKeyList;

export const getAppLoginContent = () => appLoginContent;



export const getAllForms = () => savedFormContent;

export const getFormContentById = (formId) =>
    generalUtil.findFormDataById(getAllForms(), formId);

export const searchFormDataById = (formId) =>
    generalUtil.searchFormDataById(getAllForms(), formId);

// Functions to set or update data
export const setActiveEncryptionKey = (key) => {
    activeEncryptionKey = key;
    saveToLocalStorage(STORAGE_KEYS.ACTIVE_ENCRYPTION_KEY, key);
};

export const setEncryptionKeyList = (list) => {
    encryptionKeyList = list;
    saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, list);
};

export const setAppLoginContent = (content) => {
    appLoginContent = content;
    saveToLocalStorage(STORAGE_KEYS.APP_LOGIN_CONTENT, content);
};



export const setAllForms = (forms) => {
    savedFormContent = forms;
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, forms);
};

// Functions to modify data
export const addEncryptionItem = (encryptionItem) => {
    if (encryptionItem && encryptionItem.encryptionKey) {
        encryptionKeyList = encryptionKeyList.filter(
            (e) => e.encryptionKey !== encryptionItem.encryptionKey
        );
        encryptionKeyList.push(encryptionItem);
        saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
    }
};

export const deleteEncryptionItem = (encryptionItemToDelete) => {
    if (
        encryptionItemToDelete &&
        encryptionItemToDelete.encryptionKey &&
        encryptionItemToDelete.encryptionKey !== activeEncryptionKey
    ) {
        encryptionKeyList = encryptionKeyList.filter(
            (e) => e.encryptionKey !== encryptionItemToDelete.encryptionKey
        );
        saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
    }
};

export const updateEncryptionItem = (encryptionItem) => {
    if (encryptionItem && encryptionItem.encryptionKey) {
        const foundIndex = encryptionKeyList.findIndex(
            (e) => e.encryptionKey === encryptionItem.encryptionKey
        );
        if (foundIndex >= 0) {
            encryptionKeyList[foundIndex] = encryptionItem;
            saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
        }
    }
};

export const appLoginContentUpdate = (
    content,
    activeKey,
    keyList,
    formContent
) => {
    appLoginContent = content;    
    if (activeKey) {
        activeEncryptionKey = activeKey;
        saveToLocalStorage(STORAGE_KEYS.ACTIVE_ENCRYPTION_KEY, activeEncryptionKey);
    }
    if (keyList) {
        encryptionKeyList = keyList;
        saveToLocalStorage(STORAGE_KEYS.ENCRYPTION_KEY_LIST, encryptionKeyList);
    }
    if (formContent) {
        savedFormContent = formContent;
        saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
    }
    saveToLocalStorage(STORAGE_KEYS.APP_LOGIN_CONTENT, appLoginContent);
};

export const updateFormData = (formId, formData) => {
    savedFormContent = savedFormContent.filter((f) => f.id !== formId);
    savedFormContent.unshift(formData);
    saveToLocalStorage(STORAGE_KEYS.SAVED_FORM_CONTENT, savedFormContent);
};

export const createFormData = (formData) => {
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
    activeEncryptionKey = generalUtil.generateRandomString(23);    
    savedFormContent = [];
    appLoginContent = null;
    encryptionKeyList = [];
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
        case STORAGE_KEYS.ACTIVE_ENCRYPTION_KEY:
            activeEncryptionKey = JSON.parse(event.newValue);
            break;        
        case STORAGE_KEYS.SAVED_FORM_CONTENT:
            savedFormContent = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.APP_LOGIN_CONTENT:
            appLoginContent = JSON.parse(event.newValue);
            break;
        case STORAGE_KEYS.ENCRYPTION_KEY_LIST:
            encryptionKeyList = JSON.parse(event.newValue);
            break;
        default:
            break;
    }
});






