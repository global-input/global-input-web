import images from "./images";

const menusConfig={
    settings:{
      menu:{label:"Settings",image:images.device.settingsIcon}
    },
    userLogin:{
          menu:{label:"Login"},
    },
    sleeping:{
       menu:"sleeping",
    },
    loading:{
         menu:"loading"
    },
    logout:{
       menu:{label:"Logout", image:images.logoutIcon}
    },
    help:{
       menu:{label:"Help", image:images.helpNotSelected, imageSelected:images.help}
    },
    others:{
       menu:{label:"More",image:images.moreIcon,imageSelected:images.moreIconSelected}
    },
    encryptedQrCode:{
        menu:{image:images.encryptedQR,label:"Encrypt",imageSelected:images.encryptedQRSelected}
    },
    eye:{
      menu:{label:"Scan",image:images.scanIconNotSelected,imageSelected:images.scanIcon}
    },
    form:{
      menu:"global-input"
    },
    manageKeys:{
      menu:{label:"Keys", image:images.keyIcon,imageSelected:images.keyIconSelected}
    },

    protectedEncryptionKey:{
      menu:{image:images.keyIcon,label:"Key"}
    },
    notProtectedEncryptionKey:{
        menu:{image:images.keyIcon,label:"Encryption Key"}
    },
    manageFormData:{
      menu:{label:"Data", image:images.manageFormDataNotSelected, imageSelected:images.manageFormData}
    },

    selectFromFormDataList:{
        menu:{label:"Forms", image:images.manageFormDataNotSelected, imageSelected:images.manageFormData}
    },
    selectFormData:{
        menu:{label:"Select",image:images.selectIcon}
    },
    selectMatched:{
      menu:{image:images.matchedIcon,label:"Matched"}
    },
    generateNewKey:{
      menu:{image:images.addRecord,label:""}
    },
    encrypt:{
      menu:{image:images.encryptIcon,label:"Encrypt"}
    },
    decrypt:{
          menu:{label:"Decrypt",image:images.decryptIconLight}
    },
    save:{
        menu:{image:images.saveWhite,label:"Save"}
    },
    saveButton:{
        menu:{label:"Save",image:images.saveIcon}
    },
    edit:{
        menu:{image:images.editLight, label:"Edit"}
    },
    delete:{
      menu:{image:images.deleteIconLight,label:"Delete"}
    },
    deleteAll:{
      menu:{image:images.deleteIcon,label:"Delete All Data"}
    },
    confirm:{
      menu:{image:images.doneIcon,label:"Confirm"}
    },
    apply:{
      menu:{image:images.doneIcon,label:"Apply"}
    },
    ok:{
      menu:{image:images.doneIcon,label:"OK"}
    },
    continue:{
          menu:{image:images.continueIcon,label:"Continue"}
    },
    send:{
      menu:{image:images.app.buttons.sendIcon,label:"Send"}
    },
    cancel:{
        menu:{image:images.cancelLight,label:"Cancel"}
    },
    discard:{
        menu:{image:images.cancelLight,label:"Discard"}
    },

    unselect:{
        menu:{image:images.cancelLight,label:"Unselect"}
    },
    back:{
        menu:{image:images.back,label:"Back"}
    },
    main:{
        menu:{image:images.home,label:"Main"}
    },
    backHome:{
        menu:{image:images.home,label:"Back"}
    },
    backToList:{
      menu:{label:"Back", image:images.manageFormDataNotSelected}
    },
    dismiss:{
        menu:{label:"Dismiss",image:images.cancelLight}
    },
    addRecord:{
        menu:{image:images.addRecord,label:""}
    },
    addNewField:{
          menu:{label:"Add New Field", image:images.addNewField},
    },
    addField:{
        menu:{label:"Create Field", image:images.addField},
    },
    deleteField:{
       menu:{image:images.deleteIconLight,label:"Delete Field"}
    },
    clearField:{
        menu:{image:images.clearField,label:"Clear"}
    },
    search:{
        menu:{image:images.search}
    },
    connectTransfer:{
        menu:{image:images.qrcodeLight,label:"Transfer"}
    },
    disconnect:{
      menu:{image:images.disconnectIcon,label:"Disconnect"}
    },
    qrcode:{
        menu:{label:"QR Code",image:images.qrcodeLight}
    },
    showSecret:{
        menu:{image:images.revealPasswordLight,label:"Show"}
    },
    hideSecret:{
        menu:{image:images.hidePasswordLight,label:"Hide"}
    },
    serviceData:{
        menu:{image:images.app.buttons.settings,label:"Settings"},
    },
    importAll:{
      menu:{label:"Import All",image:images.importLightIcon}
    },
    importSingle:{
      menu:{label:"Import",image:images.importLightIcon}
    },
    exportText:{
        menu:{label:"Text",image:images.exportText}
    },
    exportButton:{
        menu:{label:"Export", image:images.exportIcon, imageSelected:images.exportIcon}
    },
    export:{
        menu:{label:"Export", image:images.exportLightIcon}
    },

    clipboardCopy:{
        menu:{label:"Copy",image:images.clipboardCopyWhite}
    },
    clipboardPaste:{
        menu:{label:"Paste",image:images.clipboardPaste}
    },
    clipboardCopyButton:{
        menu:{label:"Copy",image:images.clipboardCopy}
    },
    changePassword:{
      menu:{label:"Change Password",image:images.changePassword}
    },

    folders:{
        menu:{image:images.foldersIcon}
    },
    randomGenerator:{
       menu:{image:images.randomIcon,label:"Random"}
    },
    random:{
       menu:{image:images.randomIconLight,label:"Random"}
    },
    activate:{
        menu:{label:"Activate",image:images.activateIcon}
    },
    visiturl:{
      menu:{label:"Open URL",image:images.browser}
    },
    checkbox:{
      options:[{image:images.device.checkbox.unchecked},{image:images.device.checkbox.checked}]
    },





}
export default menusConfig;
