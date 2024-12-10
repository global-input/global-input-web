import React, {useState} from 'react'

import {styles} from '../styles'

import images from '../../configs/images'
import menusConfig from '../../configs/menusConfig'

import ViewWithTabMenu  from '../../components/menu/EditorWithTabMenu';
import IconButton from '../../components/buttons/IconButton';
import ChangePasswordView from '../change-password'
import AppSettingsView from '../app-settings'
import {ManageKeysView} from '../manage-keys'
import {DecryptImportView} from '../restore-data/decrypt-import-view'
import BackupFormData from '../backup-data'
import {HelpScreen} from '../../help-screen'
import DeleteAllDataView from '../delete-all-data'
import {logger} from '../../logging'

const ACT_TYPE = {
  MAIN: 1,
  CHANGEPASSOWRD: 2,
  APP_SETTINGS: 3,
  MANAGEKEYS: 4,
  DECRYPT_IMPORT: 5,
  BACKUPDATA: 6,
  HELP: 7,
  DELETE_ALL_DATA: 8,
}
const OthersView= ({menuItems, logout}) => {
  const [actionType, setActionType] = useState(ACT_TYPE.MAIN)
  const [content, setContent] = useState('')

  const toMain = () => setActionType(ACT_TYPE.MAIN)
  const changePasswordSelected = () => setActionType(ACT_TYPE.CHANGEPASSOWRD)
  const changeSettingsSelected = () => setActionType(ACT_TYPE.APP_SETTINGS)
  const manageKeysSelected = () => setActionType(ACT_TYPE.MANAGEKEYS)
  const restoreDataSelected = () => {
    if(!navigator.clipboard == undefined){
      logger.log("Clipboard not supported");
      return;
    }
    if(!navigator.clipboard.readText){
      logger.log("Clipboard readText not supported");
      return;
    }
    navigator.clipboard.readText().then(clipboardContent => {
      // Clipboard.setString("");
      setContent(clipboardContent ? clipboardContent : '')
      setActionType(ACT_TYPE.DECRYPT_IMPORT)
    })
  }
  const deleteAllDataSelected = () => setActionType(ACT_TYPE.DELETE_ALL_DATA)
  const backupDataSelected = () => setActionType(ACT_TYPE.BACKUPDATA)
  const helpSelected = () => setActionType(ACT_TYPE.HELP)

  switch (actionType) {
    case ACT_TYPE.CHANGEPASSOWRD:
      return <ChangePasswordView onBack={toMain} />
    case ACT_TYPE.APP_SETTINGS:
      return <AppSettingsView onBack={toMain} />
    case ACT_TYPE.MANAGEKEYS:
      return <ManageKeysView onBack={toMain} />
    case ACT_TYPE.DECRYPT_IMPORT:
      return <DecryptImportView onBack={toMain} content={content} />
    case ACT_TYPE.DELETE_ALL_DATA:
      return <DeleteAllDataView onBack={toMain} />
    case ACT_TYPE.BACKUPDATA: {
      var menuItems = [
        {
          menu: menusConfig.back.menu,
          onPress: toMain,
        },
      ]
      return <BackupFormData menuItems={menuItems} onBack={toMain} />
    }
    case ACT_TYPE.HELP: {
      const menuItems = [
        {
          menu: menusConfig.back.menu,
          onPress: toMain,
        },
      ]
      return <HelpScreen menuItems={menuItems} />
    }
    default:
      return (
        <ViewWithTabMenu
          title={menusConfig.others.menu.label}
          menuItems={menuItems}
          selected={menusConfig.others.menu}>
          <div style={styles.iconContainer}>
            <div style={styles.icon}>
              <IconButton
                label={menusConfig.exportButton.menu.label}
                image={menusConfig.exportButton.menu.image}
                onPress={backupDataSelected}
              />
            </div>
            <div style={styles.icon}>
              <IconButton
                label={'Import'}
                image={images.importIcon}
                onPress={restoreDataSelected}
              />
            </div>

            <div style={styles.icon}>
              <IconButton
                label={menusConfig.settings.menu.label}
                image={menusConfig.settings.menu.image}
                onPress={changeSettingsSelected}
              />
            </div>

            <div style={styles.icon}>
              <IconButton
                label={menusConfig.deleteAll.menu.label}
                image={menusConfig.deleteAll.menu.image}
                onPress={deleteAllDataSelected}
              />
            </div>

            <div style={styles.icon}>
              <IconButton
                label={menusConfig.changePassword.menu.label}
                image={menusConfig.changePassword.menu.image}
                onPress={changePasswordSelected}
              />
            </div>

            <div style={styles.icon}>
              <IconButton
                label={menusConfig.logout.menu.label}
                image={menusConfig.logout.menu.image}
                onPress={logout}
              />
            </div>
            <div style={styles.icon}>
              <IconButton
                label={menusConfig.help.menu.label}
                image={menusConfig.help.menu.image}
                onPress={helpSelected}
              />
            </div>
          </div>
        </ViewWithTabMenu>
      )
  }
}

export default OthersView;