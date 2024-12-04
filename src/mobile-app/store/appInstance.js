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
    const appInstallInstanceIdEncrypted=userSettings.getAppInstallInstanceId();
    const saltStored=memDecrypt(userSettings.getAppInstallSalt());
    const ivStored=memDecrypt(userSettings.getAppInstallIv());
    appInstallInstanceId=await enc.decryptContent(password, appInstallInstanceIdEncrypted, saltStored, ivStored);    
}


export async function setupAppInstallationId(password){  
    const  appInstallInstanceId = enc.generateRandomString(23);    
    const  saltStored = enc.generateSalt();
    const ivStored = enc.generateIV();
    const encryptedData=await enc.encryptContent(password, memEncrypt(appInstallInstanceId), saltStored, ivStored);
    userSettings.setAppInstallInstanceId(encryptedData);    
    userSettings.setAppInstallSalt(memEncrypt(saltStored));
    userSettings.setAppInstallIv(memEncrypt(ivStored));        
    signin(password);
}


async function lockWithAppInstance(content){
    const secret=memDecrypt(appInstallInstanceId);
    const saltStored=memDecrypt(userSettings.getAppInstallSalt());
    const ivStored=memDecrypt(userSettings.getAppInstallIv());
    return enc.encryptContent(secret,content,saltStored,ivStored);
}

export async function setupEncryptionKeys(){  
    const activeEncryptionKey = enc.generateRandomString(23);
    const lockedEncryptionKey=await lockWithAppInstance(activeEncryptionKey);
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


