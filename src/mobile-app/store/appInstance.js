import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings';
import * as globalInputSettings from './localStorage/globalInputSettings';

const appInstance={
    id:null,
    key:"JRJXb2eLYqJRJXb2e"         
}
    

function memEncrypt(data){
    return globalInputMessage.encrypt(data,appInstance.key);
}
function memDecrypt(data){
    return globalInputMessage.decrypt(data,appInstance.key);
}

export const isSetup = () =>{
    return userSettings.getAppInstallInstanceId()?true:false;
}
export const isUserSignedIn = () =>{
    return appInstance.id?true:false;
}
  

export async function signin(password){        
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();    
    appInstance.id=await enc.decryptContent(password, userSettings.getAppInstallInstanceId(), memDecrypt(saltStored), memDecrypt(ivStored));    
    setupGlobalInputSettings();
}

async function  setupGlobalInputSettings(){
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();
    globalInputSettings.setupGlobalInputSettings(memDecrypt(appInstance.id),memDecrypt(saltStored), memDecrypt(ivStored))
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
}


async function lockWithAppInstallInstanceId(content){
    
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();    
    return enc.encryptContent(memDecrypt(appInstance.id),content,memDecrypt(saltStored),memDecrypt(ivStored));
}

export async function unlockWithAppInstallInstanceId(content){
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();    
     return  enc.decryptContent(memDecrypt(appInstance.id),content,memDecrypt(saltStored),memDecrypt(ivStored));
}

export async function setupEncryptionKeys(){  
    const activeEncryptionKey = enc.generateRandomString(23);        
    const lockedEncryptionKey=await lockWithAppInstallInstanceId(activeEncryptionKey);    
    userSettings.setEncryptionKeyList([{
        createdAt: new Date(),
        lockedKeyValue: lockedEncryptionKey,
        name:userSettings.DEFAULT_ENCRYPTION_NAME,
        role: userSettings.ACTIVE_ROLE
    }]);
}

export async function addNewEncryptionKey (name, key) {
    const lockedKeyValue=await lockWithAppInstallInstanceId(key);
    const list=userSettings.getEncryptionKeyList().filter(item=>item.lockedKeyValue!==lockedKeyValue);
    const newKey={
        createdAt: new Date(),
        lockedKeyValue: lockedKeyValue,
        name,
        role: userSettings.DEFAULT_ENCRYPTION_ROLE
    }
    list.push(newKey);
    userSettings.setEncryptionKeyList(list);
    return newKey;
}


export async function changePassword(oldPassword,newPassword, onError){
    
    if(!isSetup()){
        onError("App is not set up");
        return;
    }
    const saltStored=userSettings.getAppInstallSalt();    
    const ivStored=userSettings.getAppInstallIv();
    if(!ivStored || !saltStored){
        onError("App is not set up:iv");
        return;
    }

    const appInstanceId=await enc.decryptContent(oldPassword, userSettings.getAppInstallInstanceId(), memDecrypt(saltStored), memDecrypt(ivStored));
    if(!appInstanceId){
        onError("old password is not correct");
        return;
    }    
    userSettings.setAppInstallInstanceId(enc.encryptContent(newPassword, appInstanceId, memDecrypt(saltStored), memDecrypt(ivStored)));  
    signin(newPassword);
}

export async function signout(){
    appInstance.id=null;
    userSettings.signOut();    
}


export async function encryptWithEncryptionKey(keyItem, content){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    return enc.encryptContent(unlockWithAppInstallInstanceId(keyItem.lockedKeyValue),content,memDecrypt(salt),memDecrypt(iv));
}
export async function decryptWithEncryptionKey(keyItem, content){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    return enc.decryptContent(unlockWithAppInstallInstanceId(keyItem.lockedKeyValue),content,memDecrypt(salt),memDecrypt(iv));
}
export async function decryptWithActiveEncryptionKey(content){
    const activeEncryptionKeyItem=userSettings.getActiveEncryptionKey();
    return decryptWithEncryptionKey(activeEncryptionKeyItem,content);
}




// cspell:disable-next
const rememberPasswordKey="Eo6Qjcm5Lr"; 
export async function setRememberPassword(passwordToRemember){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    
    if(!iv || !salt){
        return;
    }
    const encryptedRememberToPassword=await enc.encryptContent(rememberPasswordKey,passwordToRemember, memDecrypt(salt), memDecrypt(iv));    
    userSettings.setRememberPassword(encryptedRememberToPassword);    
}    
export async function getRememberPassword(){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    if(!iv || !salt){
        return null;
    }
    const rememberPassword=userSettings.getRememberPassword();
    if(!rememberPassword){
        return null;
    }    
    return await enc.decryptContent(rememberPasswordKey,rememberPassword, memDecrypt(salt), memDecrypt(iv));    
}
export async function clearRememberPassword(){
    userSettings.clearRememberPassword();
}