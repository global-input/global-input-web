import React, { useCallback, useState, useEffect } from 'react';

import * as storage from './storage';

import { FormField } from './mobile';

import CreateField from './CreateField';
import ManageForm from './ManageForm';
import TransferFormData from './TransferFormData';
import EditDomain from './EditDomain';
import { loadFormFromQuery } from './url-query';
import ConnectionSettings from './connection-settings';
import AppPairing from './app-pairing'

export enum PAGES {
    TRANSFER_FORM_DATA,
    MANAGER_FORM,
    CREATE_FIELD,
    EDIT_DOMAIN,
    EDIT_CONNECTION_SETTINGS,
    PAIRING
};

interface Props {
    location?: any;

}
const MainControl: React.FC<Props> = ({ location }) => {
    const [domain, setDomain] = useState(loadDomain);
    const [page, setPage] = useState(PAGES.TRANSFER_FORM_DATA);
    const [formFields, setFormFields] = useState(() => buildFormFields(domain));
    const onFormStructureChanged = (formFields: FormField[]) => {
        setFormFields(formFields);
        storage.saveFormFields(domain, formFields);
    };
    const transferFormData = useCallback(() => setPage(PAGES.TRANSFER_FORM_DATA), []);
    const manageForm = useCallback(() => setPage(PAGES.MANAGER_FORM), []);
    const createField = useCallback(() => setPage(PAGES.CREATE_FIELD), []);
    const editDomain = useCallback(() => setPage(PAGES.EDIT_DOMAIN), []);
    const pairing = useCallback(() => setPage(PAGES.PAIRING), []);
    const editConnectionSettings = useCallback(() => setPage(PAGES.EDIT_CONNECTION_SETTINGS), []);
    const changeDomain = useCallback((domain) => {
        setDomain(domain);
        storage.setDomain(domain);
        transferFormData();
    }, [transferFormData]);

    useEffect(() => {
        const formData = loadFormFromQuery(location);
        if (formData) {
            if (formData.id) {
                const parts = formData.id.split('@');
                const domain = parts && parts.length && parts[parts.length - 1];
                if (domain) {
                    setDomain(domain);
                }
                else {
                    setDomain(formData.id.replace('@'));
                }
            }
            if (formData.fields) {
                setFormFields(formData.fields);
            }
        }
    }, [location]);

    switch (page) {
        case PAGES.TRANSFER_FORM_DATA:
            return (<TransferFormData domain={domain} formFields={formFields} setFormFields={setFormFields} manageForm={manageForm} editDomain={editDomain} editConnectionSettings={editConnectionSettings} />);
        case PAGES.MANAGER_FORM:
            return (<ManageForm formFields={formFields} onFormStructureChanged={onFormStructureChanged} back={transferFormData} createField={createField} />);
        case PAGES.CREATE_FIELD:
            return (<CreateField formFields={formFields} onFormStructureChanged={onFormStructureChanged} back={manageForm} />);
        case PAGES.EDIT_DOMAIN:
            return (<EditDomain back={transferFormData} domain={domain} changeDomain={changeDomain} />);
        case PAGES.EDIT_CONNECTION_SETTINGS:
            return (<ConnectionSettings back={transferFormData} pairing={pairing} />);
        case PAGES.PAIRING:
            return (<AppPairing back={transferFormData} />);
        default:
    }
    return null
};

const defaultFormFields = [{
    id: "username",
    label: "Username",
    value: ''
}, {
    id: "password",
    label: "Password",
    type: "secret",
    value: ''
}, {
    id: "note",
    label: "Note",
    nLines: 5, value: '',
}];

const buildFormFields = (domain: string) => {
    let fields = storage.loadSavedFormFields(domain);
    if (!fields) {
        fields = defaultFormFields;
    }
    return fields;
};

const loadDomain = () => {
    const domain = storage.getDomain();
    return domain ? domain : "globalinput.co.uk";
};




export default MainControl;