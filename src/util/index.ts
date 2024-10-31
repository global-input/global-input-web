


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
  }
