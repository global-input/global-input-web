import * as domainFormMappings from './reducers/domainFormMappings';
import * as userSettings from "./reducers/userSettings";

import * as generalUtil from './reducers/generalUtil';
import FormDataUtil from "./FormDataUtil";

const formDataUtil = new FormDataUtil();




const findMappingByDomain = (store, domain) => {
    const domainToIds = domainFormMappings.getAllDomainMappingRecords(store);
    for (let domainMapping of domainToIds) {
        if (domainMapping.domain === domain) {
            return domainMapping;
        }
    }
    return null;
};


const findFormsByDomain = (store, domain) => {
    if (!domain) {
        return null;
    }
    const domainMapping = findMappingByDomain(store, domain);
    if (!domainMapping) {
        return null;
    }
    const forms = [];
    const savedFormContent = store.getState().userSettings.savedFormContent;
    for (let formId of domainMapping.formIds) {
        const form = generalUtil.fromIdToForm(formId, savedFormContent);
        if (form) {
            forms.push(form)
        }
        else {
            console.log("delete a dangling record:" + formId);
            domainFormMappings.deleteByFormId(formId);
        }
    }
    if (!forms.length) {
        return null;
    }
    return forms;
};


const addFormToArray = (formToAdd, formList) => {
    if (!formToAdd) {
        return null;
    }
    for (let form of formList) {
        if (form.id === formToAdd.id) {
            return;
        }
    }
    formList.push(formToAdd);
};
const addFormsToArray = (formsToAdd, formList) => {
    if (!formsToAdd || !formsToAdd.length) {
        return;
    }
    formsToAdd.forEach(f => addFormToArray(f, formList));
};


export const forFormData = (store, formData) => {
    const allDomainMappingRecords = domainFormMappings.getAllDomainMappingRecords(store);
    generalUtil.populateDomainsForFormData(allDomainMappingRecords, formData);
};



export const getAutoFillData = (store, initData) => {

    if (!initData || !initData.form) {
        return null;
    }
    if (initData.dataType !== 'form') {
        return null;
    }
    if (!initData.form.fields || !initData.form.fields.length) {
        return null;
    }
    let formId = formDataUtil.getFormIdFromTemplateAndFields(initData.form.id, initData.form.fields);
    if (!formId || formId.length < 2) {
        return null;
    }
    formId = formId.toLowerCase();
    const allFormsData = userSettings.getAllForms(store);
    const matchedRecords = [];
    addFormToArray(generalUtil.searchFormDataById(allFormsData, formId), matchedRecords);
    let domain = initData.form.domain;
    if (domain) {
        domain = domain.toLowerCase();
    }
    else {
        domain = generalUtil.getDomainFromFormId(formId);
    }
    addFormsToArray(findFormsByDomain(store, domain), matchedRecords);
    addFormsToArray(generalUtil.findFormDataByIdSuffix(allFormsData, domain), matchedRecords);
    addFormsToArray(generalUtil.searchFormDataByIdPrefix(allFormsData, formId), matchedRecords);
    if (!matchedRecords || !matchedRecords.length) {
        if (formId && formId.length > 2 && formId.startsWith('@')) {
            addFormsToArray(generalUtil.searchFormDataByIdPrefix(allFormsData, formId.slice(1)), matchedRecords);
        }
        if (!matchedRecords || !matchedRecords.length) {
            return null;
        }
    }
    return {
        searchType: 'formIdSuffix',
        searchValue: domain,
        formDataList: matchedRecords
    };
};

export const searchFormData = (formDataList, filterString) => {
    if (!filterString) {
        return formDataList;
    }
    const search = filterString.toLowerCase();
    const matchedRecords = [];
    addFormToArray(generalUtil.searchFormDataById(formDataList, search), matchedRecords);
    addFormsToArray(generalUtil.searchFormDataByDomainPart(formDataList, search), matchedRecords);
    addFormsToArray(generalUtil.searchFormDataByIdPrefix(formDataList, search), matchedRecords);
    return matchedRecords;
};


export const findFormById = (store, formId) => {
    const allFormsData = userSettings.getAllForms(store);
    let martchedForm = generalUtil.findFormDataById(allFormsData, formId);
    if (martchedForm) {
        return martchedForm;
    }
    return generalUtil.searchFormDataById(allFormsData, formId.toLowerCase());
};
