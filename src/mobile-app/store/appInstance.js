import * as enc from './enc';
import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings';
import * as globalInputSettings from './localStorage/globalInputSettings';
import * as generalUtil from './generalUtil';
import { logger } from 'global-input-logging';

const ACTIVE_ROLE = 'active';
const DEFAULT_ENCRYPTION_NAME="This Device";
const DEFAULT_ENCRYPTION_ROLE="role";


const appInstance={
    id:null,
    key:"JRJXb2eLYqJRJXb2e"         
}
let savedFormContent=[];
let encryptionKeyList=[];


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
    if(!ivStored || !saltStored){
        throw new Error("App is not set up:iv");
    }
    appInstance.id=await enc.decryptContent(password, userSettings.getAppInstallInstanceId(), memDecrypt(saltStored), memDecrypt(ivStored)); 
    if(!appInstance.id){
        throw new Error("password is not correct");
    }
    setupGlobalInputSettings();
    prepareFormData();    
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
    setEncryptionKeyList([{
        createdAt: new Date(),
        lockedKeyValue: lockedEncryptionKey,
        name:DEFAULT_ENCRYPTION_NAME,
        role: ACTIVE_ROLE
    }]);
}

export async function addNewEncryptionKey (name, key) {
    const lockedKeyValue=await lockWithAppInstallInstanceId(key);
    const list=encryptionKeyList.filter(item=>item.lockedKeyValue!==lockedKeyValue);
    const newKey={
        createdAt: new Date(),
        lockedKeyValue: lockedKeyValue,
        name,
        role: DEFAULT_ENCRYPTION_ROLE
    }
    list.push(newKey);
    setEncryptionKeyList(list);
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
    const activeEncryptionKeyItem=getActiveEncryptionKey();
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

async function  prepareFormData(){
    try{
        const formData=userSettings.getSavedFormContent();
        if(!formData){        
            return;
        }
        const salt=userSettings.getAppInstallSalt();
        const iv=userSettings.getAppInstallIv();
        const decryptedFormData=await enc.decryptContent(memDecrypt(appInstance.id),formData,memDecrypt(salt),memDecrypt(iv));
        if(!decryptedFormData){
            return;
        }
        savedFormContent = JSON.parse(decryptedFormData);
    }
    catch(e){
        logger.error("error in loading saved form content",e);
        savedFormContent=[];
    }
}



export const getAllForms = () => savedFormContent;

export const saveFormContent=async (formContent)=>{  
    try{
        savedFormContent=formContent;
        const salt=userSettings.getAppInstallSalt();
        const iv=userSettings.getAppInstallIv();
        const encryptedFormContent=await enc.encryptContent(memDecrypt(appInstance.id),JSON.stringify(formContent),memDecrypt(salt),memDecrypt(iv));
        userSettings.setSavedFormContent(encryptedFormContent);
    }
    catch(e){
        logger.error("error in saving form content",e);
    }
}
export const clearAllForms =() =>{
    userSettings.setSavedFormContent(null);    
}
export const clearAllData =() =>{
    userSettings.clearAllData();
    savedFormContent=[];
    encryptionKeyList=[];
}
export const getFormContentById=(formId)=>{
    return generalUtil.findFormDataById(savedFormContent, formId);
}
export const searchFormDataById = (formId) =>
    generalUtil.searchFormDataById(savedFormContent, formId);



export const getEncryptionKeyList = () => encryptionKeyList;


export const setEncryptionKeyList = async (list) => {    
    encryptionKeyList = list;
    const salt=userSettings.getAppInstallSalt();
    const iv=userSettings.getAppInstallIv();
    const encryptedFormContent=await enc.encryptContent(memDecrypt(appInstance.id),JSON.stringify(encryptionKeyList),memDecrypt(salt),memDecrypt(iv));
    userSettings.setEncryptionKeyList(encryptedFormContent);
}
export const getActiveEncryptionKey = () => encryptionKeyList.filter((e) => e.role === ACTIVE_ROLE)[0];

export const deleteEncryptionItem = (encryptionItemToDelete) => {
    if (
        encryptionItemToDelete &&
        encryptionItemToDelete.lockedKeyValue &&
        encryptionItemToDelete.role !== ACTIVE_ROLE
    ) {
        const newEncryptionKeyList = encryptionKeyList.filter(
            (e) => e.lockedKeyValue !== encryptionItemToDelete.lockedKeyValue
        );
        setEncryptionKeyList(newEncryptionKeyList);       
    }
};


export const updateEncryptionItem = (encryptionItem) => {
    if (encryptionItem && encryptionItem.lockedKeyValue) {
        const foundIndex = encryptionKeyList.findIndex(
            (e) => e.lockedKeyValue === encryptionItem.lockedKeyValue
        );
        if (foundIndex >= 0) {
            encryptionKeyList[foundIndex] = encryptionItem;
            setEncryptionKeyList(encryptionKeyList);
        }
    }
};


export const activateEncryptionItem = (encryptionItemToActivate) => {
    if (encryptionItemToActivate && encryptionItemToActivate.lockedKeyValue) {
        const foundIndex = encryptionKeyList.findIndex(
            (e) => e.lockedKeyValue === encryptionItemToActivate.lockedKeyValue
        );
        if (foundIndex >= 0) {
            for(let i=0;i<encryptionKeyList.length;i++){
                if(i===foundIndex){
                    encryptionKeyList[i].role=ACTIVE_ROLE;
                }
                else{
                    encryptionKeyList[i].role=DEFAULT_ENCRYPTION_ROLE;
                }                
            }
            setEncryptionKeyList(encryptionKeyList);
        }
    }
}

export const isEncryptionKeyIsActive = (encryptionKey)  => {
    return  encryptionKey.role === ACTIVE_ROLE;
  }