import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'

const appInstance={
    id:null,
    key:"sSNvabaJZI"
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
    await signin(password);
}


async function lockWithAppInstallInstanceId(content){
    
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();    
    return enc.encryptContent(memDecrypt(appInstance.id),content,memDecrypt(saltStored),memDecrypt(ivStored));
}

export async function unlockWithAppInstallInstanceId(content){
    const saltStored=userSettings.getAppInstallSalt();
    const ivStored=userSettings.getAppInstallIv();
    console.log("----------mem--------",memDecrypt(appInstance.id),content,memDecrypt(saltStored),memDecrypt(ivStored));
    
     return  enc.decryptContent(memDecrypt(appInstance.id),content,memDecrypt(saltStored),memDecrypt(ivStored));
}

export async function setupEncryptionKeys(){  
    const activeEncryptionKey = enc.generateRandomString(23);
    
    console.log("-------***locing encryption key:"+activeEncryptionKey+"******* encruting with appInstallInstanceId:"+appInstance.id);
    const lockedEncryptionKey=await lockWithAppInstallInstanceId(activeEncryptionKey);
    userSettings.setActiveEncryptionKey(lockedEncryptionKey);
    userSettings.setEncryptionKeyList([{
        createdAt: new Date(),
        encryptionKey: lockedEncryptionKey,
        name:'This Device'
    }]);
}

export async function addNewEncryptionKey (name, key) {
    const lockedEncryptionKey=await lockWithAppInstallInstanceId(key);
    const list=userSettings.getEncryptionKeyList().filter(item=>item.encryptionKey!==lockedEncryptionKey);
    const newKey={
        createdAt: new Date(),
        encryptionKey: lockedEncryptionKey,
        name
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
}


export function isEncryptionKeyActive(encryptionKey){
    return userSettings.getActiveEncryptionKey()===encryptionKey;
    
}
export async function encryptWithEncryptionKey(keyItem, content){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    return enc.encryptContent(unlockWithAppInstallInstanceId(keyItem.encryptionKey),content,memDecrypt(salt),memDecrypt(iv));
}
export async function decryptWithEncryptionKey(keyItem, content){
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    return enc.decryptContent(unlockWithAppInstallInstanceId(keyItem.encryptionKey),content,memDecrypt(salt),memDecrypt(iv));
}
function getActiveEncryptionItemWthKey(activeKeyValue){
    return userSettings.getEncryptionKeyList().find(item=>item.encryptionKey===activeKeyValue);
}
export async function decryptWithActiveEncryptionKey(content){
    const activeEncryptionKeyItem=getActiveEncryptionItemWthKey(userSettings.getActiveEncryptionKey());
    return decryptWithEncryptionKey(activeEncryptionKeyItem,content);
}


    