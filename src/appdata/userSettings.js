



export  function getMasterEncryptionKey(){    
    localStorage.getItem('masterEncryptionKey');
}

export function getActiveEncryptionKey(){
    localStorage.getItem('activeEncryptionKey');
}