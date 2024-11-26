
import * as globalInputMessage from 'global-input-react';
import { generateRandomString } from "./localStorage/userSettings";


import ApplicationSettingsData from "./ApplicationSettingsData";

import * as domainFormsAccess from './domainFormsAccess';





import FormDataUtil from "./FormDataUtil";

const appdata = new ApplicationSettingsData();


const formDataUtil = new FormDataUtil();

export {appdata, formDataUtil, generateRandomString };


const keyPrefix = 'mzMWz2mDmr';
const keySuffix = 'aYSsU44h9f';

export const encryptData = (content, encryptionKey) => {
    var prefix = globalInputMessage.generateRandomString(7);
    var suffix = globalInputMessage.generateRandomString(11);
    const decryptedKey = appdata.decryptEncryptionKey(encryptionKey);
    return globalInputMessage.encrypt(prefix + content + suffix, keyPrefix + decryptedKey + keySuffix);
};

export const decryptData = (content, encryptionKey) => {
    const decryptedKey = appdata.decryptEncryptionKey(encryptionKey);
    const decryptedContent = globalInputMessage.decrypt(content, keyPrefix + decryptedKey + keySuffix);
    return decryptedContent.slice(7, decryptedContent.length - 11);
};

export const domainForms = {

    forFormData: formData => domainFormsAccess.forFormData(formData),

    getAutoFillData: initData => domainFormsAccess.getAutoFillData(initData),

    searchFormData: (formDataList, action) => domainFormsAccess.searchFormData(formDataList, action.filterString),

    findFormById: formId => domainFormsAccess.findFormById(formId)
};
