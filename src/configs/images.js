
const images={
  logo:require("../images/logo.png"),
  saveWhite:require("../images/save-icon-white.png"),
  saveIcon:require("../images/save-icon.png"),


  qrcode:require("../images/qr-code.png"),
  qrcodeLight:require("../images/qr-code-light.png"),

  clipboardCopy:require("../images/clipboard-copy.png"),
  clipboardCopyWhite:require("../images/clipboard-copy-white.png"),
  clipboardPaste:require("../images/clipboard-paste.png"),
  addRecord:require("../images/add-record.png"),
  back:require("../images/back.png"),
  home:require("../images/home.png"),

  doneIcon: require("../images/done-icon.png"),
  doneIconDark:require("../images/done-icon-dark.png"),
  scanIcon:require("../images/scan-icon-selected.png"),
  scanIconNotSelected:require("../images/scan-icon.png"),

  manageFormData:require("../images/form-management-icon-selected.png"),
  manageFormDataNotSelected:require("../images/form-management-icon.png"),



  backup:require("../images/backup.png"),
  backupNotSelected:require("../images/backup.png"),

  restore:require("../images/restore.png"),
  restoreDark:require("../images/restore-dark.png"),
  restoreNotSelected:require("../images/restore.png"),

  help:require("../images/help.png"),
  helpNotSelected:require("../images/help.png"),


  revealPassword:require("../images/reveal-password.png"),
  revealPasswordLight:require("../images/reveal-password-light.png"),
  hidePassword:require("../images/hide-password.png"),
  hidePasswordLight:require("../images/hide-password-light.png"),
  edit:require("../images/edit.png"),
  editLight:require("../images/edit-light.png"),
  cancelLight:require("../images/cancel-light.png"),
  cancelIcon:require("../images/cancel-icon.png"),


  deleteIcon:require("../images/delete-icon.png"),
  deleteIconLight:require("../images/delete-icon-light.png"),
  addNewField:require("../images/add-new-field-icon.png"),
  addField:require("../images/add-field.png"),
  clearField:require("../images/clear-field.png"),


  search:require("../images/search.png"),
  selectIcon:require("../images/select-icon.png"),

  importIcon:require("../images/import-icon.png"),
  importLightIcon:require("../images/import-icon-light.png"),
  exportIcon:require("../images/export-icon.png"),
  exportLightIcon:require("../images/export-icon-light.png"),
  fillForm:require("../images/fill-form.png"),
  disconnectIcon:require("../images/disconnect-icon.png"),
  browser:require("../images/browser.png"),

  changePassword:require("../images/change-password.png"),
  encryptIcon:require("../images/encrypt-icon.png"),
  encryptedQR:require("../images/encrypted-qr.png"),
  encryptedQRSelected:require("../images/encrypted-qr-selected.png"),
  keyIcon:require("../images/key-icon.png"),
  keyIconSelected:require("../images/key-icon-selected.png"),
  serviceData:require("../images/service-data.png"),

  userPreference:require("../images/user-preference.png"),
  randomIcon:require("../images/random-icon.png"),
  randomIconLight:require("../images/random-icon-light.png"),
  foldersIcon:require("../images/folders-icon.png"),
  folder:require("../images/folder.png"),
  folderLight:require("../images/folder-white.png"),
  note:require("../images/note.png"),
  key:require("../images/key.png"),
  logoutIcon:require("../images/logout-icon.png"),
  manageKeyIcon:require("../images/manage-key-icon.png"),
  resetKeyIcon:require("../images/reset-key-icon.png"),
  whiteKey:require("../images/white-key.png"),
  activeIcon:require("../images/active-icon.png"),
  activeDarkIcon:require("../images/activate-icon-dark.png"),
  labelIcon:require("../images/label-icon.png"),
  timestampIcon:require("../images/timestamp-icon.png"),
  activateIcon:require("../images/activate-icon.png"),
  activateIconWhite:require("../images/active-icon-white.png"),
  skipIcon:require("../images/skip-icon.png"),
  okIcon:require("../images/ok-icon.png"),
  moreIcon:require("../images/more-icon.png"),
  moreIconSelected:require("../images/more-icon-selected.png"),
  passwordIcon:require("../images/password-icon.png"),
  continueIcon:require("../images/continue-icon.png"),

  idIcon:require("../images/id-icon.png"),
  domainSearch:require("../images/domain-search.png"),
  fieldIcon:require("../images/field-icon.png"),
  decryptIcon:require("../images/decrypt-icon.png"),
  decryptIconLight:require("../images/decrypt-icon-light.png"),
  matchedIcon:require("../images/matched-icon.png"),
  messsage:require("../images/message.png"),
  exportText:require("../images/export-text.png"),
  discardIcon:require("../images/discard-icon.png"),
  updownIcon:require("../images/up-down-icon.png"),
  tickonIcon:require("../images/tick-on-icon.png"),
  tickoffIcon:require("../images/tick-off-icon.png"),

  device:{
      backIcon:require("../images/device/back-icon.png"),
      printIcon:require("../images/device/print-icon.png"),
      sendIcon:require("../images/device/send-icon.png"),
      signIcon:require("../images/device/sign-in.png"),
      playIcon:require("../images/device/play-icon.png"),
      pauseIcon:require("../images/device/pause-icon.png"),
      skipToEnd:require("../images/device/skip-to-end.png"),
      skipToBegin:require("../images/device/skip-to-begin.png"),
      ffIcon:require("../images/device/ff-icon.png"),
      rwIcon:require("../images/device/rw-icon.png"),
      disconnectIcon:require("../images/device/disconnect-icon.png"),
      rightIcon:require("../images/device/right-icon.png"),
      leftIcon:require("../images/device/left-icon.png"),
      upIcon:require("../images/device/up-icon.png"),
      downIcon:require("../images/device/down-icon.png"),
      resetIcon:require("../images/device/reset-icon.png"),
      connectedIcon:require("../images/device/reset-icon.png"),
      settingsIcon:require("../images/device/settings-icon.png"),
      radio:{
          checked:require("../images/radio-button-checked.png"),
          unchecked:require("../images/radio-button-unchecked.png"),
      },
      checkbox:{
          checked:require("../images/checked.png"),
          unchecked:require("../images/not-checked.png"),
      },
      encrypt:require("../images/device/encrypt.png"),
      home:require("../images/device/home.png"),


  },
  app:{
        icons:{
              connected:require("../images/app/icons/connected.png"),
        },
        buttons:{
          settings:require("../images/app/buttons/settings.png"),
          sendIcon:require("../images/app/buttons/send-white.png"),
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
