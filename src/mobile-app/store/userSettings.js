



export  function getMasterEncryptionKey(){    
    localStorage.getItem('masterEncryptionKey');
}

export function getActiveEncryptionKey(){
    localStorage.getItem('activeEncryptionKey');
}

export function getAppLoginContent(){
    localStorage.getItem('appLoginContent');
}

export function getAppLoginPassword(){
    localStorage.getItem('appLoginPassword');
}

export function resetApp(){
    localStorage.removeItem('masterEncryptionKey');
    localStorage.removeItem('activeEncryptionKey');
    localStorage.removeItem('appLoginContent');
    localStorage.removeItem('appLoginPassword');
}