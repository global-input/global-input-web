import * as domainFormMappings from './localStorage/domainFormMappings';
import * as userSettings from "./localStorage/userSettings";

import * as generalUtil from './generalUtil';
import FormDataUtil from "./FormDataUtil";

const formDataUtil = new FormDataUtil();




const findMappingByDomain = (domain) => {
    const domainToIds = domainFormMappings.getAllDomainMappingRecords();
    for (let domainMapping of domainToIds) {
        if (domainMapping.domain === domain) {
            return domainMapping;
        }
    }
    return null;
};


const findFormsByDomain = (domain) => {
    if (!domain) {
        return null;
    }
    const domainMapping = findMappingByDomain(domain);
    if (!domainMapping) {
        return null;
    }
    const forms = [];
    const savedFormContent = userSettings.getAllForms();
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


export const forFormData = (formData) => {
    const allDomainMappingRecords = domainFormMappings.getAllDomainMappingRecords();
    generalUtil.populateDomainsForFormData(allDomainMappingRecords, formData);
};



export const getAutoFillData = (initData) => {

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
    const allFormsData = userSettings.getAllForms();
    const matchedRecords = [];
    addFormToArray(generalUtil.searchFormDataById(allFormsData, formId), matchedRecords);
    let domain = initData.form.domain;
    if (domain) {
        domain = domain.toLowerCase();
    }
    else {
        domain = generalUtil.getDomainFromFormId(formId);
    }
    addFormsToArray(findFormsByDomain(domain), matchedRecords);
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


export const findFormById = (formId) => {
    const allFormsData = userSettings.getAllForms();
    let martchedForm = generalUtil.findFormDataById(allFormsData, formId);
    if (martchedForm) {
        return martchedForm;
    }
    return generalUtil.searchFormDataById(allFormsData, formId.toLowerCase());
};
