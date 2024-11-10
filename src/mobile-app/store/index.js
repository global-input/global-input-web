import React, { Component } from "react";
import * as globalInputMessage from 'global-input-react';
import configStore, { generateRandomString } from "./configStore";


import ApplicationSettingsData from "./ApplicationSettingsData";

import * as domainFormsAccess from './domainFormsAccess';





import FormDataUtil from "./FormDataUtil";

let storeLoadCompletedListeners = [];
let storedIsLoaded = false;
function onStoreLoadCompleted() {
    storedIsLoaded = true;
    storeLoadCompletedListeners.forEach((lt) => {
        lt();
    });
}
function addStoreLoadCompletedListener(lt) {
    storeLoadCompletedListeners = [...storeLoadCompletedListeners, lt];
    if (storedIsLoaded) {
        lt();
    }
    return function () {
        var ind = storeLoadCompletedListeners.indexOf(lt);
        if (ind >= 0) {
            storeLoadCompletedListeners.splice(ind, 1);
        }
    }
}
const { store, persistor } = configStore(onStoreLoadCompleted);
const appdata = new ApplicationSettingsData(store);


const formDataUtil = new FormDataUtil();

export { store, appdata, addStoreLoadCompletedListener, formDataUtil, generateRandomString, persistor };


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

    forFormData: formData => domainFormsAccess.forFormData(store, formData),

    getAutoFillData: initData => domainFormsAccess.getAutoFillData(store, initData),

    searchFormData: (formDataList, action) => domainFormsAccess.searchFormData(formDataList, action.filterString),

    findFormById: formId => domainFormsAccess.findFormById(store, formId)
};
