import { decrypt } from 'global-input-react';

import * as userSettings from './userSettings';
const safeDecrypt = function (content, encryptionKey) {
  try {
    return decrypt(content, encryptionKey)
  } catch (error) {
    return null
    console.log(error)
  }
}



export default class ApplicationSettingsData {
  store: any
    encryptionKeyPrefix: string
    encryptionKeySuffix: string
    passwordProtectionSuffix: string
    backupKeySuffix: string
    encryptionKeyAppendedPart: string
    contetKeySuffix: string
    encryptedWithEncryptionKeyCodeIdentifier: string
    encryptionKeyIdentifier: string
    protectedKeyIdentifier: string
    JSONIdentifier: string
    encryptionKeyContentType: string
    encryptionKeyExportedAsTextIdentifier: string
    protectEncryptionKeyExportedAsTextIdentifier: string
    formDataIdentifier: string

  constructor (store) {
    this.store = store
    this.encryptionKeyPrefix = 'LrHXyPx6NW'
    this.encryptionKeySuffix = 'rzjjTYkEwd'
    this.passwordProtectionSuffix = 'kE4yPZrJlKCEKGpTPctVzwU'

    this.backupKeySuffix = 'xQV'
    this.encryptionKeyAppendedPart = 'Ekv'
    this.contetKeySuffix = 'eJx'
    this.encryptedWithEncryptionKeyCodeIdentifier = 'P1'

    this.encryptionKeyIdentifier = 'P2'
    this.protectedKeyIdentifier = 'P3C7h1'
    this.JSONIdentifier = 'J'
    this.encryptionKeyContentType = 'master'

    this.encryptionKeyExportedAsTextIdentifier = 'XFyuHTV74za2n6gh'
    this.protectEncryptionKeyExportedAsTextIdentifier = 'HdSMqCszICFT6VOY'

    this.formDataIdentifier = 'BTtHfSSdkQbEjKAD'
  }
  _getLoginUserInfo () {
    return this.loginUserinfo
  }
  _setLoginUserInfo (loginUserinfo) {
    this.loginUserinfo = loginUserinfo
  }
  _getActiveEncryptionKey () {
    var activeEncryptionKey = userSettings.getActiveEncryptionKey()
    if (activeEncryptionKey) {
      return activeEncryptionKey
    } else {
      /*
          In the old version the variable name is masterEncryptionKey.
          In the new version the variable name is activeEncryptionKey;
      */
      return userSettings.getMasterEncryptionKey(this.store)
    }
  }
  _getActiveEncryptionKeyFromLoginUserInfo (loginUserInfo) {
    if (!loginUserInfo) {
      return null
    }
    if (loginUserInfo.activeEncryptionKey) {
      return loginUserInfo.activeEncryptionKey
    } else {
      //try the old version;
      return loginUserInfo.masterEncryptionKey
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

  isActiveEncryptionKeyEncryptedMessage (codedata) {
    return (
      codedata &&
      codedata.startsWith &&
      codedata.startsWith(this.encryptedWithEncryptionKeyCodeIdentifier)
    )
  }
  decryptContentWithAnyEcryptionKey (encryptedContent, encryptionKeySuffix) {
    var activeEncryptionKey = this.getDecryptedActiveEncryptionKey()
    var decryptedContent = safeDecrypt(
      encryptedContent,
      activeEncryptionKey + encryptionKeySuffix,
    )
    if (decryptedContent) {
      return decryptedContent
    }
    var encryptionKeyList = this.getEncryptionKeyList()
    var userEncryptionKey = this.buildUserEncryptionKeyFromPassword(
      this._getLoginUserInfo().password,
    )
    for (var i = 0; i < encryptionKeyList.length; i++) {
      try {
        var decryptedEncryptionKey = safeDecrypt(
          encryptionKeyList[i].encryptionKey,
          userEncryptionKey,
        )
        if (decryptedEncryptionKey === activeEncryptionKey) {
          continue
        }
        if (decryptedEncryptionKey) {
          decryptedContent = safeDecrypt(
            encryptedContent,
            decryptedEncryptionKey + encryptionKeySuffix,
          )
          if (decryptedContent) {
            return decryptedContent
          }
        } else {
          console.log('failed to decryp the key:' + decryptedEncryptionKey)
        }
      } catch (error) {
        console.log('failed to decryp the content with none-active key')
      }
    }
    return null
  }


  decryptCodeDataWithAnyEncryptionKey (encryptedMessage) {
    var encrypted = encryptedMessage.substring(
      this.encryptedWithEncryptionKeyCodeIdentifier.length,
    )
    var decrypted = this.decryptContentWithAnyEcryptionKey(
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
  
  }
