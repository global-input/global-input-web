import * as globalInputMessage from 'global-input-message';
import * as userSettings from './localStorage/userSettings'
import * as domainFormMappings from './localStorage/domainFormMappings'


import * as generalUtil from './generalUtil'



import * as domainFormsAccess from './domainFormsAccess';


import * as globalInputSettings from './localStorage/globalInputSettings';


import {formDataUtil} from "./FormDataUtil";


import * as appInstance from './appInstance';
import {logger} from 'global-input-logging';

const safeDecrypt = function (content, encryptionKey) {
    try {
      return globalInputMessage.decrypt(content, encryptionKey)
    } catch (error) {
      return null    
    }
  }
  
  class ApplicationSettingsData {
    constructor () {    
      // cspell:disable-next
      this.encryptionKeyPrefix = 'LrHXyPx6NW'
      // cspell:disable-next
      this.encryptionKeySuffix = 'rzjjTYkEwd'
      // cspell:disable-next
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
      // cspell:disable-next
      this.protectEncryptionKeyExportedAsTextIdentifier = 'HdSMqCszICFT6VOY'
  
      this.formDataIdentifier = 'BTtHfSSdkQbEjKAD'
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
      
      var decrypted = await this.decryptContentWithAnyEncryptionKey(
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
  
    async decryptContentWithAnyEncryptionKey (encryptedContent, encryptionKeySuffix) {
      
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
            logger.error('failed to decrypt the key:' + i);
          }
        } catch (error) {
          logger.error('failed to decrypt the content with none-active key')
        }
      }
      return null
    }
  
    
     getSavedFormContent () {
      return appInstance.getAllForms()
    }
    
  
    updateFormData (formId, formData) {
      if (formId && formData && formData.id) {      
        const savedFormContent= appInstance.getAllForms();
        const  resultFormContent = savedFormContent.filter((f) => f.id !== formId);
        resultFormContent.unshift(formData);
        appInstance.saveFormContent(resultFormContent);                    
        domainFormMappings.updateDomains({formData, formId})
      } else {
        logger.error('Could not save empty data or the ones without id')
      }
    }
    createFormData (formData) {
      if (formData && formData.id) {
        const savedFormContent= appInstance.getAllForms();
        savedFormContent.unshift(formData);
        appInstance.saveFormContent(savedFormContent);        
        domainFormMappings.saveDomains({formData})
      } else {
        logger.error('Could not save empty data or the ones without id')
      }
    }    
    deleteFormData (formData) {
      if (formData && formData.id) {     
        let savedFormContent= appInstance.getAllForms();
        savedFormContent = savedFormContent.filter((m) => m.id !== formData.id);
        appInstance.saveFormContent(savedFormContent);        
        domainFormMappings.deleteFormId(formData.id)
      } else {
        logger.error('Could not delete empty data or the ones without id')
      }
    }
  
    clearAllForms () {
      appInstance.clearAllForms();
      domainFormMappings.deleteAllData();
      globalInputSettings.deleteAllData();
    }
    
    
  
    getFormContentById (formId) {
      return appInstance.getFormContentById(formId)
    }
    searchFormDataById (formId) {
      return appInstance.searchFormDataById(formId.toLowerCase())
    }
  
    
    hasFormContent () {
      var savedContent = appInstance.getAllForms()
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
        return userSettings.getActiveEncryptionKey();      
    }
    getEncryptionKeyList () {  
      return userSettings.getEncryptionKeyList()        
    }
                  
    updateEncryptionKey (encryptionItem) {
      userSettings.updateEncryptionItem(encryptionItem)
    }
      
    decryptPasswordEncryptedEncryptionKeyText (content, protectionPassword) {
      content = content.slice(
        this.protectEncryptionKeyExportedAsTextIdentifier.length,
      )
      return this.decryptExportedEncryptionKey(content, protectionPassword)
    }
  
    async decryptFormDataText (encryptedContent) {
      try {
        const content = encryptedContent.slice(this.formDataIdentifier.length)
        const activeEncryptionKey = userSettings.getActiveEncryptionKey();
        const decryptedKey=await unlockContent(activeEncryptionKey.lockedKeyValue);

        var globalInputData = safeDecrypt(
          content,
          decryptedKey + this.backupKeySuffix,
        )
        if (!globalInputData) {
          logger.error('Failed to decrypt the backup')
          return null
        }
        globalInputData = JSON.parse(globalInputData)
        if (!globalInputData.forms || !globalInputData.forms.length) {
          logger.error('data format error')
          return null
        }
        return globalInputData
      } catch (error) {
        logger.log("error:"+error, error);
        return null
      }
    }
    async exportFormContentAsText () {
      var forms = this.getSavedFormContent()
      if (forms && forms.length) {
        const allDomainMappingRecords =
          domainFormMappings.getAllDomainMappingRecords()
        generalUtil.populateDomainsForAllForms(allDomainMappingRecords, forms)
        var globalInputData = {
          forms,
          randomContent: globalInputMessage.generateRandomString(8),
        }      
        const encryptionKey=userSettings.getActiveEncryptionKey();
        const decryptedEncryptionKey = await unlockContent(encryptionKey.lockedKeyValue);      
        const  encryptedContent =globalInputMessage.encrypt(JSON.stringify(globalInputData), decryptedEncryptionKey + this.backupKeySuffix);
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
      
    async exportEncryptionKeyItemWithPassword (encryptionKeyItem, protectionPassword) {
      const decryptedEncryptionKey = await unlockContent(encryptionKeyItem.lockedKeyValue);      
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
      var stringValue = this.JSONIdentifier + JSON.stringify(data)
      var encrypted = globalInputMessage.encrypt(stringValue, encryptionKey)
  
      if (protectionPassword) {
        return this.protectedKeyIdentifier + encrypted
      } else {
        return this.encryptionKeyIdentifier + encrypted
      }
    }
    exportEncryptionKeyItemAsText (encryptionKeyItem, protectionPassword) {
      var encryptionKeyDecrypted = this.decryptEncryptionKey(encryptionKeyItem)
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
        var keyString = decrypted.substring(this.JSONIdentifier.length)
  
        var data = JSON.parse(keyString)
        if (data.type === this.encryptionKeyContentType) {
          return data.key
        } else {
          return null
        }
      } catch (error) {
        logger.error('failed to parse the json:' + error, error);
        return null
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

  
  
  export const encryptData = async (content, encryptionKey) => {
      var prefix = globalInputMessage.generateRandomString(7);
      var suffix = globalInputMessage.generateRandomString(11);      
      const decryptedEncryptionKey = await unlockContent(encryptionKey.lockedKeyValue);      

      return globalInputMessage.encrypt(prefix + content + suffix, keyPrefix + decryptedEncryptionKey + keySuffix);
  };
  
  export const decryptData = async (content, encryptionKey) => {
      const decryptedEncryptionKey = await unlockContent(encryptionKey.lockedKeyValue);          
      const decryptedContent = globalInputMessage.decrypt(content, keyPrefix + decryptedEncryptionKey + keySuffix);
      return decryptedContent.slice(7, decryptedContent.length - 11);
  };
  export const encryptContent = async (content) => {
    const activeEncryptionKey = userSettings.getActiveEncryptionKey();    
    const key=await unlockContent(activeEncryptionKey.lockedKeyValue);
    return encryptContentWithKey(content, key)
  }
  export const decryptContent = async (content)  => {
    if (content && content.length) {
      const encryptionKey = userSettings.getActiveEncryptionKey();
      const keyValue = await unlockContent(encryptionKey.lockedKeyValue);      
      return safeDecrypt(content, keyValue + appdata.contentKeySuffix)
    } else {
      return ''
    }
  }


  

  


  
  export const setupApp = async (password, repeatedPassword, onLoggedIn, onError, rememberPassword) => {      

       if (!password) {
          onError('Password required.');
          return;
        }      
        if (password !== repeatedPassword) {
          onError('Password does not match.');
          return;
        }
        if (appInstance.isSetup()) {      
          onError('It appears that the app has already been set up. Please refresh the app and login to continue.');    
          return;
        }  
        try{
          await appInstance.setupAppInstallationId(password);        
          await appInstance.signin(password);
          await appInstance.setupEncryptionKeys();                        
          userSettings.setStorageVersion("1.0");
          if(rememberPassword){
            try{
              await appInstance.setRememberPassword(password);
            }
            catch(exception){
              logger.error("failed to remember password:"+exception, exception);
            }
              
          }
          onLoggedIn();        
        }
        catch(error){
          logger.error("error:"+error, error);
          onError('Failed to set up the app. Please try again. password should be at least 4 characters long.');
          resetApp();
        }
        
  };


  export const changePassword = async (originalPassword, newPassword) => {      
    if (isAppSignedIn()) {
      try {
        try{
          await appInstance.changePassword(originalPassword, newPassword);
        }
        catch(error){
          logger.log("Error:"+error, error);
          return false;
        }
          return true
      } catch (error) {
        logger.error("error:"+error,error);
        return false
      }
    } else {
      return false
    }
  }
  
  
  
  export const appSignin = async (password, onLoggedIn, onError, rememberPassword) => {  
    if (!password) {
      onError('Password required.');
      return;
    } 
    try{
      await appInstance.signin(password);
      
      if(rememberPassword){
        try{
          await appInstance.setRememberPassword(password);
        }
        catch(exception){
          logger.error("failed to remember password:"+exception, exception);
        }
      }
      else{
        try{
          await appInstance.clearRememberPassword();
        }
        catch(exception){
          logger.error("failed to clear remember password:"+exception, exception);
        }

      }
      onLoggedIn();
    }
    catch(error){
      logger.error("error:"+error, error);
      onError('Failed to sign in. Please try again.');
    }
  };

     
  
  export const resetApp = () => {    
      appInstance.clearAllData();
      domainFormMappings.deleteAllData()
      globalInputSettings.deleteAllData();

  }
  
    export const isUserSignedIn = () =>{
    if(!isAppLoginSetup()){
      return false;
    }
    return appdata.loginUserinfo;
  }  
  
  export const mergeFormData = (formData) => {
    if (formData && formData.id) {     
      const savedFormContent= appInstance.getAllForms();      
      let processed = false;
          let updatedFormContent = [];
      
          for (let i = 0; i < savedFormContent.length; i++) {
              if (savedFormContent[i].id === formData.id) {
                  let fields = [...savedFormContent[i].fields];
                  // Merge fields
                  formData.fields.forEach((newField) => {
                      const index = fields.findIndex((f) => f.id === newField.id);
                      if (index >= 0) {
                          fields[index] = newField;
                      } else if (newField.type !== 'button') {
                          fields.push(newField);
                      }
                  });
                  formData.fields = fields;
                  updatedFormContent.push(formData);
                  processed = true;
              } else {
                  updatedFormContent.push(savedFormContent[i]);
              }
          }
      
          if (!processed) {
              updatedFormContent.unshift(formData);
          }
          appInstance.saveFormContent(updatedFormContent);            
          const domains = generalUtil.buildDomainsFromFormData(formData);
            if (domains) {
              domainFormMappings.attachToDomains(formData.id, domains);
            }      

    } else {
      logger.error('Could not merge empty data or the ones without id');
    }
  }

  export const mergeFormDataList = (formDataList) => {
    const savedFormContent= appInstance.getAllForms();
    const formDataIds = formDataList.map((formData) => formData.id);
    const notMatchedContent = savedFormContent.filter(
      (formData) => !formDataIds.includes(formData.id)
    );
    const resultFormContent = [...notMatchedContent, ...formDataList];
    appInstance.saveFormContent(resultFormContent);            
    formDataList.forEach((formData) => {
          const domains = generalUtil.buildDomainsFromFormData(formData);
          if (domains) {
            domainFormMappings.attachToDomains(formData.id, domains);
          }
      });
  };

  
  

  export const activateEncryptionKey = (encryptionKeyItem) => {
    if (!isAppSignedIn()) {
      logger.error('The user has not logged in')
      return
    }
    
    if (isEncryptionKeyIsActive(encryptionKeyItem)) {
      logger.error('the key is identical to the current one')
      return
    }
    
    userSettings.activateEncryptionItem(encryptionKeyItem);

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
  
  export const getRememberPassword =  (password) => appInstance.getRememberPassword();


  export const getAutoFillData = (initData) => {
    const savedFormContent = appInstance.getAllForms();
    if (!savedFormContent || !savedFormContent.length) {
      return null;
    }
    if (!initData || !initData.form) {
      return null;
    }
    return domainFormsAccess.getAutoFillData(initData, savedFormContent);
  }