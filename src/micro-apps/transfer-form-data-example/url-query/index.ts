import { decrypt } from 'global-input-react';

const encryptionKey = 'TDwtv0dV6u';
export const loadFormFromQuery = (location: any) => {
    if (!location || !location.search) {
        return null;
    }
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