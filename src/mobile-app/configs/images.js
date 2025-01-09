
const images={
  logo:"/images/logo.png",
  saveWhite:"/images/save-icon-white.png",
  saveIcon:"/images/save-icon.png",


  qrcode:"/images/qr-code.png",
  qrcodeLight:"/images/qr-code-light.png",

  clipboardCopy:"/images/clipboard-copy.png",
  clipboardCopyWhite:"/images/clipboard-copy-white.png",
  clipboardPaste:"/images/clipboard-paste.png",
  addRecord:"/images/add-record.png",
  back:"/images/back.png",
  home:"/images/home.png",

  doneIcon: "/images/done-icon.png",
  doneIconDark:"/images/done-icon-dark.png",
  scanIcon:"/images/scan-icon-selected.png",
  scanIconNotSelected:"/images/scan-icon.png",

  manageFormData:"/images/form-management-icon-selected.png",
  manageFormDataNotSelected:"/images/form-management-icon.png",



  backup:"/images/backup.png",
  backupNotSelected:"/images/backup.png",

  restore:"/images/restore.png",
  restoreDark:"/images/restore-dark.png",
  restoreNotSelected:"/images/restore.png",

  help:"/images/help.png",
  helpNotSelected:"/images/help.png",


  revealPassword:"/images/reveal-password.png",
  revealPasswordLight:"/images/reveal-password-light.png",
  hidePassword:"/images/hide-password.png",
  hidePasswordLight:"/images/hide-password-light.png",
  edit:"/images/edit.png",
  editLight:"/images/edit-light.png",
  cancelLight:"/images/cancel-light.png",
  cancelIcon:"/images/cancel-icon.png",


  deleteIcon:"/images/delete-icon.png",
  deleteIconLight:"/images/delete-icon-light.png",
  addNewField:"/images/add-new-field-icon.png",
  addField:"/images/add-field.png",
  clearField:"/images/clear-field.png",


  search:"/images/search.png",
  selectIcon:"/images/select-icon.png",

  importIcon:"/images/import-icon.png",
  importLightIcon:"/images/import-icon-light.png",
  exportIcon:"/images/export-icon.png",
  exportLightIcon:"/images/export-icon-light.png",
  fillForm:"/images/fill-form.png",
  disconnectIcon:"/images/disconnect-icon.png",
  browser:"/images/browser.png",

  changePassword:"/images/change-password.png",
  encryptIcon:"/images/encrypt-icon.png",
  encryptedQR:"/images/encrypted-qr.png",
  encryptedQRBlack:"/images/encrypted-qr-black.png",
  encryptedQRSelected:"/images/encrypted-qr-selected.png",
  keyIcon:"/images/key-icon.png",
  keyIconSelected:"/images/key-icon-selected.png",
  serviceData:"/images/service-data.png",

  userPreference:"/images/user-preference.png",
  randomIcon:"/images/random-icon.png",
  randomIconLight:"/images/random-icon-light.png",
  foldersIcon:"/images/folders-icon.png",
  folder:"/images/folder.png",
  folderLight:"/images/folder-white.png",
  note:"/images/note.png",
  key:"/images/key.png",
  logoutIcon:"/images/logout-icon.png",
  manageKeyIcon:"/images/manage-key-icon.png",
  resetKeyIcon:"/images/reset-key-icon.png",
  whiteKey:"/images/white-key.png",
  activeIcon:"/images/active-icon.png",
  activeDarkIcon:"/images/activate-icon-dark.png",
  labelIcon:"/images/label-icon.png",
  timestampIcon:"/images/timestamp-icon.png",
  activateIcon:"/images/activate-icon.png",
  activateIconWhite:"/images/active-icon-white.png",
  skipIcon:"/images/skip-icon.png",
  okIcon:"/images/ok-icon.png",
  moreIcon:"/images/more-icon.png",
  moreIconSelected:"/images/more-icon-selected.png",
  passwordIcon:"/images/password-icon.png",
  continueIcon:"/images/continue-icon.png",

  idIcon:"/images/id-icon.png",
  domainSearch:"/images/domain-search.png",
  fieldIcon:"/images/field-icon.png",
  decryptIcon:"/images/decrypt-icon.png",
  decryptIconLight:"/images/decrypt-icon-light.png",
  matchedIcon:"/images/matched-icon.png",
  messsage:"/images/message.png",
  exportText:"/images/export-text.png",
  discardIcon:"/images/discard-icon.png",
  updownIcon:"/images/up-down-icon.png",
  tickonIcon:"/images/tick-on-icon.png",
  tickoffIcon:"/images/tick-off-icon.png",

  device:{
      backIcon:"/images/device/back-icon.png",
      printIcon:"/images/device/print-icon.png",
      sendIcon:"/images/device/send-icon.png",
      signIcon:"/images/device/sign-in.png",
      playIcon:"/images/device/play-icon.png",
      pauseIcon:"/images/device/pause-icon.png",
      skipToEnd:"/images/device/skip-to-end.png",
      skipToBegin:"/images/device/skip-to-begin.png",
      ffIcon:"/images/device/ff-icon.png",
      rwIcon:"/images/device/rw-icon.png",
      disconnectIcon:"/images/device/disconnect-icon.png",
      rightIcon:"/images/device/right-icon.png",
      leftIcon:"/images/device/left-icon.png",
      upIcon:"/images/device/up-icon.png",
      downIcon:"/images/device/down-icon.png",
      resetIcon:"/images/device/reset-icon.png",
      connectedIcon:"/images/device/reset-icon.png",
      settingsIcon:"/images/device/settings-icon.png",
      radio:{
          checked:"/images/radio-button-checked.png",
          unchecked:"/images/radio-button-unchecked.png",
      },
      checkbox:{
          checked:"/images/checked.png",
          unchecked:"/images/not-checked.png",
      },
      encrypt:"/images/device/encrypt.png",
      home:"/images/device/home.png",


  },
  app:{
        icons:{
              connected:"/images/app/icons/connected.png",
        },
        buttons:{
          settings:"/images/app/buttons/settings.png",
          sendIcon:"/images/app/buttons/send-white.png",
        }
  },
  icons:[],
  findImageIcon(name){
        if(!name){
          return null;
        }
        for(var i=0;i<this.icons.length;i++){
            if(this.icons[i].name===name){
              return this.icons[i].image;
            }
        }
        return null;
  }

};
  images.icons=[
    {
      name:"back",
      image:images.device.backIcon
    },{
      name:"print",
      image:images.device.printIcon
    },{
        name:"continue",
        image:images.device.rightIcon
    },{
      name:"cancel",
      image:images.cancelIcon
    },{
      name:"send",
      image:images.device.sendIcon
    },{
      name:"login",
      image:images.device.signIcon
    },{
      name:"save",
      image:images.saveIcon
    },{
      name:"edit",
      image:images.edit
    },{
      name:"delete",
      image:images.deleteIcon
    },{
      name:"add",
      image:images.addField
    },{
      name:"play",
      image:images.device.playIcon
    },{
      name:"pause",
      image:images.device.pauseIcon
    },{
      name:"skip-to-begin",
      image:images.device.skipToBegin
    },{
      name:"skip-to-end",
      image:images.device.skipToEnd
    },{
      name:"ff",
      image:images.device.ffIcon
    },{
      name:"rw",
      image:images.device.rwIcon
    },{
      name:"disconnect",
      image:images.device.disconnectIcon
    },{
      name:"right",
      image:images.device.rightIcon
    },{
      name:"left",
      image:images.device.leftIcon
    },{
      name:"up",
      image:images.device.upIcon
    },{
      name:"down",
      image:images.device.downIcon
    },{
      name:"reset",
      image:images.device.resetIcon
    },{
      name:"settings",
      image:images.device.settingsIcon
    },{
      name:"radio/checked",
      image:images.device.radio.checked
    },{
      name:"radio/unchecked",
      image:images.device.radio.unchecked
    },{
      name:"checkbox/checked",
      image:images.device.checkbox.checked
    },{
      name:"checkbox/unchecked",
      image:images.device.checkbox.unchecked
    },{
      name:"qrcode",
      image:images.qrcode
    },{
      name:'encrypt',
      image:images.device.encrypt
    },{
      name:"decrypt",
      image:images.decryptIcon
    },{
      name:"home",
      image:images.device.home
    },{
      name:"export",
      image:images.exportIcon
    },{
      name:"import",
      image:images.importIcon
    }


  ]






export default images;
