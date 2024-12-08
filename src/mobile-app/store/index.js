import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'
import * as domainFormMappings from './localStorage/domainFormMappings'


import * as generalUtil from './generalUtil'



import * as domainFormsAccess from './domainFormsAccess';


import * as globalInputSettings from './localStorage/globalInputSettings';


import {formDataUtil} from "./FormDataUtil";


import * as appInstance from './appInstance';

const safeDecrypt = function (content, encryptionKey) {
    try {
      return globalInputMessage.decrypt(content, encryptionKey)
    } catch (error) {
      return null    
    }
  }
  
  class ApplicationSettingsData {
    constructor () {    
      this.encryptionKeyPrefix = 'LrHXyPx6NW'
      this.encryptionKeySuffix = 'rzjjTYkEwd'
      this.passwordProtectionSuffix = 'kE4yPZrJlKCEKGpTPctVzwU'
  
      this.backupKeySuffix = 'xQV'
      this.encryptionKeyAppendedPart = 'Ekv'
      this.contentKeySuffix = 'eJx'
      this.encryptedWithEncryptionKeyCodeIdentifier = 'P1'
  
      this.encryptionKeyIdentifier = 'P2'
      this.protectedKeyIdentifier = 'P3C7h1'
      this.JSONIdentifier = 'J'
      this.encryptionKeyContentType = 'master'
  
      this.encryptionKeyExportedAsTextIdentifier = 'XFyuHTV74za2n6gh'
      this.protectEncryptionKeyExportedAsTextIdentifier = 'HdSMqCszICFT6VOY'
  
      this.formDataIdentifier = 'BTtHfSSdkQbEjKAD'
    }
    
    
    encryptBackup (content) {
      var activeEncryptionKey = this.getDecryptedActiveEncryptionKey()
      return globalInputMessage.encrypt(content, activeEncryptionKey + this.backupKeySuffix)
    }
  
    isActiveEncryptionKeyEncryptedMessage (codedata) {
      return (
        codedata &&
        codedata.startsWith &&
        codedata.startsWith(this.encryptedWithEncryptionKeyCodeIdentifier)
      )
    }
    isMasterEncryptionKeyCodedata (codedata) {
      return (
        codedata &&
        codedata.startsWith &&
        codedata.startsWith(this.encryptionKeyIdentifier)
      )
    }
    isProtectedMasterEncryptionKey (codedata) {
      return (
        codedata &&
        codedata.startsWith &&
        codedata.startsWith(this.protectedKeyIdentifier)
      )
    }
    encryptWithActiveEncryptionKey (secretMessage) {
      var prefix = globalInputMessage.generateRandomString(3)
      var suffix = globalInputMessage.generateRandomString(7)
      var activeEncryptionKey = this.getDecryptedActiveEncryptionKey()
      var encryptedMessage = globalInputMessage.encrypt(
        prefix + secretMessage + suffix,
        activeEncryptionKey + this.encryptionKeyAppendedPart,
      )
      return this.encryptedWithEncryptionKeyCodeIdentifier + encryptedMessage
    }
    decryptEncryptionKeyText (content) {
      const contentToDecrypt = content.slice(
        this.encryptionKeyExportedAsTextIdentifier.length,
      )
      return this.decryptExportedEncryptionKey(contentToDecrypt, null)
    }
    
  
    async encryptWithAnEncryptionKey (secretMessage, encryptionKeyItem) {
      const decryptedEncryptionKey = await unlockContent(encryptionKeyItem.lockedKeyValue);
      
      if (decryptedEncryptionKey) {
        var prefix = globalInputMessage.generateRandomString(3)
        var suffix = globalInputMessage.generateRandomString(7)  
        var encryptedMessage = globalInputMessage.encrypt(
          prefix + secretMessage + suffix,
          decryptedEncryptionKey + this.encryptionKeyAppendedPart,
        )        
        return this.encryptedWithEncryptionKeyCodeIdentifier + encryptedMessage
      }
    }
    async decryptCodeDataWithAnyEncryptionKey (encryptedMessage) {
      var encrypted = encryptedMessage.substring(
        this.encryptedWithEncryptionKeyCodeIdentifier.length,
      )
      
      var decrypted = await this.decryptContentWithAnyEcryptionKey(
        encrypted,
        this.encryptionKeyAppendedPart,
      )
      if (decrypted) {
        if (decrypted.length > 10) {
          var withoutPRefix = decrypted.substring(3)
          return withoutPRefix.substring(0, withoutPRefix.length - 7)
        } else {
          return null
        }
      } else {
        return null
      }
    }
  
    async decryptContentWithAnyEcryptionKey (encryptedContent, encryptionKeySuffix) {
      
      const activeEncryptionKey = this.getActiveEncryptionKeyItem();
      const decryptedEncryptionKey = await unlockContent(activeEncryptionKey.lockedKeyValue);      
      
      var decryptedContent = safeDecrypt(
        encryptedContent,
        decryptedEncryptionKey + encryptionKeySuffix,
      )      
      if (decryptedContent) {
        return decryptedContent
      }
      var encryptionKeyList = this.getEncryptionKeyList()      
      for (var i = 0; i < encryptionKeyList.length; i++) {
        try {
          if(encryptionKeyList[i].role === userSettings.ACTIVE_ROLE){
            continue;
          }
          const decryptedEncryptionKey = await unlockContent(encryptionKeyList[i].lockedKeyValue);          
          if (decryptedEncryptionKey) {
            decryptedContent = safeDecrypt(
              encryptedContent,
              decryptedEncryptionKey + encryptionKeySuffix,
            )
            if (decryptedContent) {
              return decryptedContent
            }
          } else {
            console.log('failed to decrypt the key:' + i);
          }
        } catch (error) {
          console.log('failed to decrypt the content with none-active key')
        }
      }
      return null
    }
  
    
     getSavedFormContent () {
      return userSettings.getAllForms()
    }
    
  
    updateFormData (formId, formData) {
      if (formId && formData && formData.id) {      
        userSettings.updateFormData(formId, formData)
        domainFormMappings.updateDomains({formData, formId})
      } else {
        console.log('Could not save empty data or the ones without id')
      }
    }
    createFormData (formData) {
      if (formData && formData.id) {      
        userSettings.createFormData(formData);
        domainFormMappings.saveDomains({formData})
      } else {
        console.log('Could not save empty data or the ones without id')
      }
    }    
    deleteFormData (formData) {
      if (formData && formData.id) {     
        userSettings.deleteFormData(formData)
        domainFormMappings.deleteFormData({formData})
      } else {
        console.log('Could not delete empty data or the ones without id')
      }
    }
  
    clearAllForms () {
      userSettings.clearAllForms();
      domainFormMappings.deleteAllData()
    }
    
    mergeFormDataList (formDataList) {
      userSettings.mergeFormDataList(formDataList)
      domainFormMappings.mergeFormDataList({formDataList})
    }
  
    getFormContentById (formId) {
      return userSettings.getFormContentById(formId)
    }
    searchFormDataById (formId) {
      return userSettings.searchFormDataById(formId.toLowerCase())
    }
  
    
    hasFormContent () {
      var savedContent = userSettings.getAllForms()
      return savedContent && savedContent.length   
    }
    cloneFormData (formData) {
      if (!formData) {
        return formData
      }
      var newFormData = Object.assign({}, formData)
      if (formData.fields) {
        newFormData.fields = []
        for (var i = 0; i < formData.fields.length; i++) {
          newFormData.fields.push(Object.assign({}, formData.fields[i]))
        }
      }
      return newFormData
    }
  
    async findEncryptionKeyByDecryptedValue(decryptedKey) {
      const encryptionKeyList = this.getEncryptionKeyList();
      
      for (const ekey of encryptionKeyList) {
        const decryptedEncryptionKey = await unlockContent(ekey.lockedKeyValue);
        if (decryptedEncryptionKey === decryptedKey) {
          return ekey; // Return early if a match is found
        }
      }
    
      return null; // If no match is found, return null
    }
    getActiveEncryptionKeyItem () {
        return  this._getActiveEncryptionKey();
    }
    getEncryptionKeyList () {  
      return userSettings.getEncryptionKeyList()        
    }
    
  
    _getActiveEncryptionKey () {
      var activeEncryptionKey = userSettings.getActiveEncryptionKey()
      if (activeEncryptionKey) {
        return activeEncryptionKey
      } else {
        return null;
      }
    }
    
    
    getDecryptedActiveEncryptionKey () {
      var activeEncruptionKey = this._getActiveEncryptionKeyFromLoginUserInfo(
        this._getLoginUserInfo(),
      )
      if (activeEncruptionKey) {
        return activeEncruptionKey
      } else {
        return this._getActiveEncryptionKey()
      }
    }      
    updateEncryptionKey (encryptionItem) {
      userSettings.updateEncryptionItem(encryptionItem)
    }
      
    decryptPasswordEncryptedEncryptionKeyText (content, protectionPassword) {
      var content = content.slice(
        this.protectEncryptionKeyExportedAsTextIdentifier.length,
      )
      return this.decryptExportedEncryptionKey(content, protectionPassword)
    }
  
    decryptFormDataText (content) {
      try {
        var content = content.slice(this.formDataIdentifier.length)
        var activeEncryptionKey = this.getDecryptedActiveEncryptionKey()
        var globalInputData = safeDecrypt(
          content,
          activeEncryptionKey + this.backupKeySuffix,
        )
        if (!globalInputData) {
          console.log('Failed to decrypt the backup')
          return null
        }
        globalInputData = JSON.parse(globalInputData)
        if (!globalInputData.forms || !globalInputData.forms.length) {
          console.log('data format error')
          return null
        }
        return globalInputData
      } catch (error) {
        console.log(error)
        return null
      }
    }
    exportFormContentAsText () {
      var forms = this.getSavedFormContent()
      if (forms && forms.length) {
        const allDomainMappingRecords =
          domainFormMappings.getAllDomainMappingRecords()
        generalUtil.populateDomainsForAllForms(allDomainMappingRecords, forms)
        var globalInputData = {
          forms,
          randomContent: globalInputMessage.generateRandomString(8),
        }
        var encryptedContent = this.encryptBackup(JSON.stringify(globalInputData))
        return this.formDataIdentifier + encryptedContent
      } else {
        return ''
      }
    }
  
    isPasswordEncryptedEncryptionKeyText (content) {
      if (!content) {
        return false
      }
      return (
        content.startsWith &&
        content.startsWith(this.protectEncryptionKeyExportedAsTextIdentifier)
      )
    }
    isEncryptionKeyText (content) {
      return (
        content.startsWith &&
        content.startsWith(this.encryptionKeyExportedAsTextIdentifier)
      )
    }
    isFormDataText (content) {
      if (!content) {
        return false
      }
      return content.startsWith && content.startsWith(this.formDataIdentifier)
    }
  
    exportActiveEncryptionKeyWithPassword (protectionPassword) {
      var activeEncryptionKey = this.getDecryptedActiveEncryptionKey()
      return this.exportEncryptionKeyWithPassword(
        activeEncryptionKey,
        protectionPassword,
      )
    }
    async exportEncryptionKeyItemWithPassword (encryptionKeyitem, protectionPassword) {
      const decryptedEncryptionKey = await unlockContent(encryptionKeyitem.lockedKeyValue);      
      if (!decryptedEncryptionKey) {
        return null
      }
      return this.exportEncryptionKeyWithPassword(
        decryptedEncryptionKey,
        protectionPassword,
      )
    }
    exportEncryptionKeyWithPassword (
      decryptedEncryptionKeyValue,
      protectionPassword,
    ) {
      var data = {
        random: globalInputMessage.generateRandomString(3),
        key: decryptedEncryptionKeyValue,
        type: this.encryptionKeyContentType,
      }
      var encryptionKey = this.passwordProtectionSuffix
      if (protectionPassword) {
        encryptionKey = protectionPassword + encryptionKey
      }
      var stringvalue = this.JSONIdentifier + JSON.stringify(data)
      var encrypted = globalInputMessage.encrypt(stringvalue, encryptionKey)
  
      if (protectionPassword) {
        return this.protectedKeyIdentifier + encrypted
      } else {
        return this.encryptionKeyIdentifier + encrypted
      }
    }
    exportEncryptionKeyItemAsText (encryptionKeyitem, protectionPassword) {
      var encryptionKeyDecrypted = this.decryptEncryptionKey(encryptionKeyitem)
      if (!encryptionKeyDecrypted) {
        return null
      }
      return this.exportEncryptionKeyValueAsText(
        encryptionKeyDecrypted,
        protectionPassword,
      )
    }
    exportEncryptionKeyValueAsText (
      decryptedEncryptionKeyValue,
      protectionPassword,
    ) {
      var keyEncrypted = this.exportEncryptionKeyWithPassword(
        decryptedEncryptionKeyValue,
        protectionPassword,
      )
      if (protectionPassword) {
        return this.protectEncryptionKeyExportedAsTextIdentifier + keyEncrypted
      } else {
        return this.encryptionKeyExportedAsTextIdentifier + keyEncrypted
      }
    }
  
    decryptExportedEncryptionKey (codedata, protectionPassword) {
      try {
        var encIdentifier = this.encryptionKeyIdentifier
        var encryptionKey = this.passwordProtectionSuffix
  
        if (protectionPassword) {
          encIdentifier = this.protectedKeyIdentifier
          encryptionKey = protectionPassword + encryptionKey
        }
        if (!codedata.startsWith(encIdentifier)) {
          return null
        }
        var encrypted = codedata.substring(encIdentifier.length)
        var decrypted = safeDecrypt(encrypted, encryptionKey)
        if (!decrypted) {
          return null
        }
  
        if (!decrypted.startsWith(this.JSONIdentifier)) {
          return null
        }
        var keystring = decrypted.substring(this.JSONIdentifier.length)
  
        var data = JSON.parse(keystring)
        if (data.type === this.encryptionKeyContentType) {
          return data.key
        } else {
          return null
        }
      } catch (error) {
        console.log('failed to parse the json:' + error)
        return null
      }
    }
  
    
    
  
    
    buildUserEncryptionKeyFromPassword (password) {
      return this.encryptionKeyPrefix + password + this.encryptionKeySuffix
    }
    getLoginUserinfo () {
      return this.loginUserinfo
    }
  
    
    _setLoginUserInfo (loginUserinfo) {
      this.loginUserinfo = loginUserinfo
    }
    _createInitialLoginUserInfo (password, activeEncryptionKey) {
      return {
        application: 'GlobalInput',
        createdAt: new Date().getTime(),
        password,        
        activeEncryptionKey,
      }
    }
  
     
  }
  
  

  const appdata = new ApplicationSettingsData();  



const encryptContentWithKey = (content, encryptionKey) => {
    if (content && content.length) {
      return globalInputMessage.encrypt(content, encryptionKey + appdata.contentKeySuffix)
    } else {
      return ''
    }
}
  




export const isAppLoginSetup = () => appInstance.isSetup();
export const isAppSignedIn = () => appInstance.isUserSignedIn();





  
  const keyPrefix = 'mzMWz2mDmr';
  const keySuffix = 'aYSsU44h9f';
  

  function generateRandomString(length = 10) {
    return generalUtil.generateRandomString(length);   
   }


  
  export {appdata};
  export { generateRandomString };
  export { formDataUtil, globalInputSettings, domainFormsAccess };

  
  
  export const encryptData = (content, encryptionKey) => {
      var prefix = globalInputMessage.generateRandomString(7);
      var suffix = globalInputMessage.generateRandomString(11);
      const decryptedKey = appdata.decryptEncryptionKey(encryptionKey);
      return globalInputMessage.encrypt(prefix + content + suffix, keyPrefix + decryptedKey + keySuffix);
  };
  
  export const decryptData = (content, encryptionKey) => {
      const decryptedKey = appdata.decryptEncryptionKey(encryptionKey);
      const decryptedContent = globalInputMessage.decrypt(content, keyPrefix + decryptedKey + keySuffix);
      return decryptedContent.slice(7, decryptedContent.length - 11);
  };
  export const encryptContent = (content) => {
    const activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey()
    return encryptContentWithKey(content, activeEncryptionKey)
  }
  export const decryptContent = (content)  => {
    if (content && content.length) {
      var activeEncryptionKey = appdata.getDecryptedActiveEncryptionKey()
      return safeDecrypt(content, activeEncryptionKey + appdata.contentKeySuffix)
    } else {
      return ''
    }
  }


  export const decryptedWithPassword = (encryptedContent) => {
    var userEncryptionKey = appdata.buildUserEncryptionKeyFromPassword(
      appdata.getLoginUserinfo().password,
    )
    return safeDecrypt(encryptedContent, userEncryptionKey)
  }


  


  
  export const setupApp = async (password, repeatedPassword, onLoggedIn, onError) => {      

       if (!password) {
          onError('Password required.');
        }      
        if (password !== repeatedPassword) {
          onError('Password does not match.');
        }
        if (appInstance.isSetup()) {      
          onError('It appears that the app has already been set up. Please refresh the app and login to continue.');    
        }  
        try{
          await appInstance.setupAppInstallationId(password);        
          await appInstance.setupEncryptionKeys();                              
        }
        catch(error){
          console.log(error)
          onError('Failed to set up the app. Please try again.');
        }
        onLoggedIn();        
  };


  export const changePassword = async (originalPassword, newPassword) => {
       

    if (isAppSignedIn()) {
      try {
        try{
          await appInstance.changePassword(originalPassword, newPassword);
        }
        catch(error){
          console.log(error)
          return false;
        }
          return true
      } catch (error) {
        console.log(error)
        return false
      }
    } else {
      return false
    }
  }
  
  
  
  export const appSignin = async (password, onLoggedIn, onError) => {  
    
    if (!password) {
      onError('Password required.');
      return;
    } 
    try{
      await appInstance.signin(password);
      onLoggedIn();
    }
    catch(error){
      console.log(error)
      onError('Incorrect password.');
    } 
     
     
  }
  
  export const resetApp = () => {    
      userSettings.clearAllData();
      domainFormMappings.deleteAllData()
  }
  
    export const isUserSignedIn = () =>{
    if(!isAppLoginSetup()){
      return false;
    }
    return appdata.loginUserinfo;
  }  
  
  export const mergeFormData = (formData) => {
    if (formData && formData.id) {     
      userSettings.mergeFormData(formData);
      domainFormMappings.mergeFormData({formData})
    } else {
      console.log('Could not merge empty data or the ones without id')
    }
  }

  
  

  export const activateEncryptionKey = (encryptionKeyitem) => {
    if (!isAppSignedIn()) {
      console.log('The user has not logged in')
      return
    }
    
    if (isEncryptionKeyIsActive(encryptionKeyitem)) {
      console.log('the key is identical to the current one')
      return
    }
    encryptionKeyitem.role=userSettings.ACTIVE_ROLE;
    userSettings.updateEncryptionItem(encryptionKeyitem);
  }

  
  export const unlockContent = async (content) => appInstance.unlockWithAppInstallInstanceId(content);

  

  export const addNewEncryptionKey = async (name, key) => {
    return await appInstance.addNewEncryptionKey(name, key);
  }

  export const  deleteEncryptionKeyItem  = async (encryptionItemToDelete)  =>{    
    userSettings.deleteEncryptionItem(encryptionItemToDelete)
  }

  export const isEncryptionKeyIsActive = (encryptionKey)  => {
    return  encryptionKey.role === userSettings.ACTIVE_ROLE;
  }
  