import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'

const memKey=  "sSNvabaJZI";
let appInstallInstanceId=null;
    

function memEncrypt(data){
    return globalInputMessage.encrypt(data,memKey);
}
function memDecrypt(data){
    return globalInputMessage.decrypt(data,memKey);
}

export const isSetup = () =>{
    return userSettings.getAppInstallInstanceId()?true:false;
}
export const isUserSignedIn = () =>{
    return appInstallInstanceId?true:false;
}
  

export async function signin(password){    
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();
    appInstallInstanceId=await enc.decryptContent(password, userSettings.getAppInstallInstanceId(), memDecrypt(saltStored), memDecrypt(ivStored));    
}

function generateSlaIV(){  
    const  saltStored = memEncrypt(enc.generateSalt());
    const ivStored = memEncrypt(enc.generateIV());
    userSettings.setAppInstallSalt(saltStored);
    userSettings.setAppInstallIv(ivStored);        
}
export async function setupAppInstallationId(password){  
    generateSlaIV();
    const  appInstallInstanceId = memEncrypt(enc.generateRandomString(23));    
    const  salt=userSettings.getAppInstallSalt();
    const  iv=userSettings.getAppInstallIv();    
    const instanceId=await enc.encryptContent(password, appInstallInstanceId, memDecrypt(salt), memDecrypt(iv));
    userSettings.setAppInstallInstanceId(instanceId);        
    signin(password);
}


async function lockWithAppInstallInstanceId(content){
    
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();
    return enc.encryptContent(memDecrypt(appInstallInstanceId),content,memDecrypt(saltStored),memDecrypt(ivStored));
}

export async function setupEncryptionKeys(){  
    const activeEncryptionKey = enc.generateRandomString(23);
    const lockedEncryptionKey=await lockWithAppInstallInstanceId(activeEncryptionKey);
    userSettings.setActiveEncryptionKey(lockedEncryptionKey);
    userSettings.setEncryptionKeyList([{
        createdAt: new Date(),
        encryptionKey: lockedEncryptionKey,
        name:'This Device'
    }]);
}


export async function changePassword(oldPassword,newPassword, onError){
    const appInstallInstanceIdEncrypted=userSettings.getAppInstallInstanceId();    
    if(!appInstallInstanceIdEncrypted){
        onError("App is not set up");
        return;
    }
    const saltStored=memDecrypt(userSettings.getAppInstallSalt());
    if(!saltStored){
        onError("App is not set up:salt");
        return;
    }
    const ivStored=memDecrypt(userSettings.getAppInstallIv());
    if(!ivStored){
        onError("App is not set up:iv");
        return;
    }

    const decryptedData=await enc.decryptContent(oldPassword, appInstallInstanceIdEncrypted, saltStored, ivStored);
    if(!decryptedData){
        onError("old password is not correct");
        return;
    }
    appInstallInstanceId=decryptedData;
    userSettings.setAppInstallInstanceId(enc.encryptContent(newPassword, memEncrypt(appInstallInstanceId), saltStored, ivStored).ciphertext);
    
    

    
  
}

    


 




export async function signout(){
    appInstallInstanceId=null;
}


