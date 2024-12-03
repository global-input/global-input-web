import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'

const memKey=  "sSNvabaJZI";
let appInstallInstanceId=null;
    

export const isSetup = () =>{
    return userSettings.getAppInstallInstanceId()?true:false;
}
export const isUserSignedIn = () =>{
    return appInstallInstanceId?true:false;
}
  
export async function setupAppInstallationId(password){  
    const  appInstallInstanceId = enc.generateRandomString(23);    
    const  saltStored = enc.generateSalt();
    const encryptedData=await enc.encryptContent(password, globalInputMessage.encrypt(appInstallInstanceId, memKey), saltStored);
    userSettings.setAppInstallInstanceId(encryptedData.ciphertext);    
    userSettings.setAppInstallSalt(globalInputMessage.encrypt(saltStored,memKey));
    userSettings.setAppInstallIv(globalInputMessage.encrypt(encryptedData.iv),memKey);        
}
export async function signin(password){
    const appInstallInstanceIdEncrypted=userSettings.getAppInstallInstanceId();
    const saltStored=globalInputMessage.decrypt(userSettings.getAppInstallSalt(),memKey);
    const ivStored=globalInputMessage.decrypt(userSettings.getAppInstallIv(),memKey);
    const decryptedData=await enc.decryptContent(password, appInstallInstanceIdEncrypted, saltStored, ivStored);
    appInstallInstanceId=decryptedData;
}

export async function changePassword(oldPassword,newPassword, onError){
    const appInstallInstanceIdEncrypted=userSettings.getAppInstallInstanceId();    
    if(!appInstallInstanceIdEncrypted){
        onError("App is not set up");
        return;
    }
    const saltStored=globalInputMessage.decrypt(userSettings.getAppInstallSalt(),memKey);
    if(!saltStored){
        onError("App is not set up:salt");
        return;
    }
    const ivStored=globalInputMessage.decrypt(userSettings.getAppInstallIv(),memKey);
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
    userSettings.setAppInstallInstanceId(enc.encryptContent(newPassword, globalInputMessage.encrypt(appInstallInstanceId, memKey), saltStored, ivStored).ciphertext);
}

