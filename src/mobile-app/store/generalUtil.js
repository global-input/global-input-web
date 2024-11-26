
export const getDomainFromFormId = formId => {
    const indexOfAt = formId.lastIndexOf('@');
    if (indexOfAt < 0 || (indexOfAt + 1) >= formId.length) {
        return formId;
    }
    if ((indexOfAt + 1) >= formId.length) {
        return formId;
    }
    const domain = formId.slice(indexOfAt + 1);
    if (domain.length > 5 && domain.startsWith('www.')) {
        return domain.substring(4);
    }
    else {
        return domain;
    }
};

export const domainHasFormId = (domainFormMap, formId) => {
    for (let fid of domainFormMap.formIds) {
        if (fid === formId) {
            return true;
        }
    }
    return false;
};

export const domainMappingMatchOneOf = (domainMapping, domains) => {
    for (let domain of domains) {
        if (domain === domainMapping.domain) {
            return true;
        }
    }
    return false;
};


export const buildDomainsFromFormData = formData => {
    if (!formData.domains) {
        return null;
    }
    const domains = [];
    formData.domains.split(',').forEach(d => {
        d = d.trim();
        if (d.length > 2) {
            domains.push(d.toLowerCase());
        }
    });
    if (!domains.length) {
        return null;
    }
    return domains;
};
export const searchFormDataById = (forDataList, formId) => {
    if (!forDataList) {
        return null;
    }
    for (let form of forDataList) {
        if (form.id.toLowerCase() === formId) {
            return form;
        }
    }
    return null;
};
export const findFormDataById = (formDataList, formId) => {
    if (!formDataList) {
        return null;
    }
    for (let form of formDataList) {
        if (form.id === formId) {
            return form;
        }
    }
    return null;
};

export const findFormDataByIdSuffix = (formDataList, search) => {
    return formDataList.filter(f => f.id.endsWith(search));
};


export const searchFormDataByDomainPart = (formDataList, search) => {
    return formDataList.filter(f => {
        const domain = getDomainFromFormId(f.id);

        return domain.startsWith(search);
    });
};

export const searchFormDataByIdPrefix = (formDataList, search) => {
    return formDataList.filter(f => f.id.indexOf(search) >= 0);
}







export const fromIdToForm = (id, forms) => {
    for (let form of forms) {
        if (form.id === id) {
            return form;
        }
    }
    return null;
};


const getDomainsByFormId = (allDomainMappingRecords, formId) => {
    const domains = [];
    allDomainMappingRecords.forEach(domainMapping => {
        if (domainHasFormId(domainMapping, formId)) {
            domains.push(domainMapping.domain);
        }
    });
    if (!domains.length) {
        return null;
    }
    else {
        return domains;
    }
};




export const populateDomainsForFormData = (allDomainMappingRecords, formData) => {
    const domains = getDomainsByFormId(allDomainMappingRecords, formData.id);
    if (!domains) {
        formData.domains = '';
        return;
    }
    formData.domains = domains.join(',');
};

export const populateDomainsForAllForms = (allDomainMappingRecords, forms) => {
    forms.forEach(form => {
        populateDomainsForFormData(allDomainMappingRecords, form);
    });
};
