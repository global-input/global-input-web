import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'

const memKey=  "sSNvabaJZI";
let appInstallInstanceId=null;
    

export const isSetup = () =>{
    return userSettings.getAppInstallInstanceId()?true:false;
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



