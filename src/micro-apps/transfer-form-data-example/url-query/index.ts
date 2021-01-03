import { decrypt } from 'global-input-react';
import type {FormField} from '../mobile-ui';

const encryptionKey = 'TDwtv0dV6u';
const loadFormFromQuery = (location: any) => {

    const formDataString = getQueryParam(location.search, "formData");
    if (!formDataString) {
        return null;
    }
    try {
        const formFromQuery = JSON.parse(decrypt(formDataString, encryptionKey))
        if (formFromQuery) {
            return formFromQuery;
        }
    }
    catch (e) {
        console.log(e + " while processing the formDataString");
        return null;
    }

}


const getQueryParam = (query: string, variable: string) => {
    if (!query) {
        return null;
    }
    query = query.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
};


export const loadFormFromQueryString=(setDomain:(domain:string)=>void, onFormModified:(formFields: FormField[], isStructureChanged:boolean)=>void,location?:any) => {
    if (!location || !location.search) {
        return null;
    }
    const formData = loadFormFromQuery(location);
    if(!formData){
        return;
    }
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
        onFormModified(formData.fields,true);
    }
}