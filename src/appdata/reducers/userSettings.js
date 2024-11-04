import * as globalInputMessage from 'global-input-react'
import * as generalUtil from './generalUtil'
const ActionNames = {
  SET_SHOW_WELCOME_PAGE: 'SET_SHOW_WELCOME_PAGE',
  SET_APP_LOGIN_CONTENT: 'SET_APP_LOGIN_CONTENT',
  ADD_ENCRYPTION_KEY_ITEM: 'ADD_ENCRYPTION_KEY_ITEM',
  DELETE_ENCRYPTION_ITEM: 'DELETE_ENCRYPTION_KEY_ITEM',
  UPDATE_ENCRYPTION_ITEM: 'UPDATE_ENCRYPTION_KEY_ITEM',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  CREATE_FORM_DATA: 'CREATE_FORM_DATA',
  CLEAR_ALL_FORMS: 'CLEAR_ALL_FORMS',
  MERGE_FORM_DATA: 'MERGE_FORM_DATA',
  DELETE_FORM_DATA: 'DELETE_FORM_DATA',
  MERGE_FORMS: 'MERGE_FORMS',
  RESET_APP: 'RESET_APP',
}

export function generateRandomString (length = 10) {
  const randPassword = globalInputMessage.generateRandomString(length)
  if (randPassword.startsWith('U2Fsd')) {
    return generateRandomString(length)
  } else {
    return randPassword
  }
}

function createInitialState () {
  return {
    activeEncryptionKey: generateRandomString(23),
    showWelcomePage: true,
    savedFormContent: [],
    appLoginContent: null,
    encryptionKeyList: [],
  }
}

const initialState = createInitialState()

export const userSettings = {
  reducer: function (state = initialState, action) {
    switch (action.type) {
      case ActionNames.SET_APP_LOGIN_CONTENT:
        var appLoginContent = action.appLoginContent
        var encryptionKeyList = state.encryptionKeyList
        if (action.encryptionKeyList) {
          encryptionKeyList = action.encryptionKeyList
        }
        var savedFormContent = state.savedFormContent
        if (action.savedFormContent) {
          savedFormContent = action.savedFormContent
        }
        var activeEncryptionKey = state.activeEncryptionKey
        if (action.activeEncryptionKey) {
          activeEncryptionKey = action.activeEncryptionKey
        }
        return Object.assign({}, state, {
          appLoginContent,
          activeEncryptionKey,
          encryptionKeyList,
        })
      case ActionNames.ADD_ENCRYPTION_KEY_ITEM:
        var encryptionKeyList = state.encryptionKeyList
        var encryptionItem = action.encryptionItem
        if (encryptionItem && encryptionItem.encryptionKey) {
          encryptionKeyList = encryptionKeyList.filter(
            e => e.encryptionKey !== encryptionItem.encryptionKey,
          )
          encryptionKeyList.push(encryptionItem)
        }
        return Object.assign({}, state, {encryptionKeyList})
      case ActionNames.DELETE_ENCRYPTION_ITEM:
        var activeEncryptionKey = state.activeEncryptionKey
        var encryptionKeyList = state.encryptionKeyList
        var encryptionItemToDelete = action.encryptionItemToDelete
        if (
          encryptionItemToDelete &&
          encryptionItemToDelete.encryptionKey &&
          encryptionItemToDelete.encryptionKey !== activeEncryptionKey
        ) {
          encryptionKeyList = encryptionKeyList.filter(
            e => e.encryptionKey !== encryptionItemToDelete.encryptionKey,
          )
        }
        return Object.assign({}, state, {encryptionKeyList})
      case ActionNames.UPDATE_ENCRYPTION_ITEM:
        var encryptionItem = action.encryptionItem
        var encryptionKeyList = state.encryptionKeyList
        if (encryptionItem && encryptionItem.encryptionKey) {
          var foundIndex = encryptionKeyList.findIndex(
            e => e.encryptionKey == encryptionItem.encryptionKey,
          )
          if (foundIndex >= 0) {
            encryptionKeyList[foundIndex] = encryptionItem
            return Object.assign({}, state, {encryptionKeyList})
          }
        }
        return state
      case ActionNames.SET_SHOW_WELCOME_PAGE:
        return Object.assign({}, state, {
          showWelcomePage: action.showWelcomePage,
        })

      case ActionNames.MERGE_FORM_DATA:
        var formData = action.formData
        var processed = false
        var savedFormContent = []
        for (var i = 0; i < state.savedFormContent.length; i++) {
          if (state.savedFormContent[i].id === formData.id) {
            var fields = []
            if (state.savedFormContent[i].fields) {
              for (
                var k = 0;
                k < state.savedFormContent[i].fields.length;
                k++
              ) {
                var matchedFields = formData.fields.filter(
                  f => f.id === state.savedFormContent[i].fields[k].id,
                )
                if (matchedFields && matchedFields.length) {
                  for (var t = 0; t < matchedFields.length; t++) {
                    fields.push(matchedFields[t])
                  }
                } else {
                  fields.push(state.savedFormContent[i].fields[k])
                }
              }
            }
            if (formData.fields) {
              for (var k = 0; k < formData.fields.length; k++) {
                var matchedFields = fields.filter(
                  f => f.id === formData.fields[k].id,
                )
                if (!matchedFields || !matchedFields.length) {
                  if (formData.fields[k].type !== 'button') {
                    fields.push(formData.fields[k])
                  }
                }
              }
            }
            formData.fields = fields
            savedFormContent.push(formData)
            processed = true
          } else {
            savedFormContent.push(state.savedFormContent[i])
          }
        }
        if (!processed) {
          savedFormContent.unshift(formData)
        }
        return Object.assign({}, state, {savedFormContent})
      case ActionNames.UPDATE_FORM_DATA:
        var savedFormContent = state.savedFormContent.filter(
          f => f.id !== action.formId,
        )
        savedFormContent.unshift(action.formData)
        return Object.assign({}, state, {savedFormContent})
      case ActionNames.CREATE_FORM_DATA:
        var savedFormContent = state.savedFormContent
        savedFormContent.unshift(action.formData)
        return Object.assign({}, state, {savedFormContent})
      case ActionNames.CLEAR_ALL_FORMS:
        var savedFormContent = []
        return Object.assign({}, state, {savedFormContent})
      case ActionNames.RESET_APP:
        return createInitialState()
      case ActionNames.MERGE_FORMS:
        var formDataList = action.formDataList
        var notmatchedContent = state.savedFormContent.filter(m => {
          for (var i = 0; i < formDataList.length; i++) {
            if (m.id === formDataList[i].id) {
              return false
            }
          }
          return true
        })
        var savedFormContent = [...notmatchedContent, ...formDataList]
        return Object.assign({}, state, {savedFormContent})
      case ActionNames.DELETE_FORM_DATA:
        var formData = action.formData
        var savedFormContent = state.savedFormContent.filter(
          m => m.id !== formData.id,
        )
        return Object.assign({}, state, {savedFormContent})
    }
    return state
  },
  actions: {
    appLoginContent: function (
      appLoginContent,
      activeEncryptionKey,
      encryptionKeyList,
      savedFormContent,
    ) {
      return {
        type: ActionNames.SET_APP_LOGIN_CONTENT,
        appLoginContent,
        activeEncryptionKey,
        encryptionKeyList,
        savedFormContent,
      }
    },
    addEncryptionItem: function (encryptionItem) {
      return {
        type: ActionNames.ADD_ENCRYPTION_KEY_ITEM,
        encryptionItem,
      }
    },
    deleteEncryptionItem: function (encryptionItemToDelete) {
      return {
        type: ActionNames.DELETE_ENCRYPTION_ITEM,
        encryptionItemToDelete,
      }
    },
    updateEncryptionItem: function (encryptionItem) {
      return {
        type: ActionNames.UPDATE_ENCRYPTION_ITEM,
        encryptionItem,
      }
    },

    showWelcomePage: function (showWelcomePage) {
      return {
        type: ActionNames.SET_SHOW_WELCOME_PAGE,
        showWelcomePage,
      }
    },
    updateFormData: function (formId, formData) {
      return {
        type: ActionNames.UPDATE_FORM_DATA,
        formData,
        formId,
      }
    },
    createFormData: function (formData) {
      return {
        type: ActionNames.CREATE_FORM_DATA,
        formData,
      }
    },
    mergeFormData: function (formData) {
      return {
        type: ActionNames.MERGE_FORM_DATA,
        formData,
      }
    },
    clearAllForms: function () {
      return {
        type: ActionNames.CLEAR_ALL_FORMS,
      }
    },
    resetApp: function () {
      return {
        type: ActionNames.RESET_APP,
      }
    },
    mergeFormDataList: function (formDataList) {
      return {
        type: ActionNames.MERGE_FORMS,
        formDataList,
      }
    },
    deleteFormData: function (formData) {
      return {
        type: ActionNames.DELETE_FORM_DATA,
        formData,
      }
    },
  },
}

export const getEncryptionKeyList = store =>
  store.getState().userSettings.encryptionKeyList

export const getActiveEncryptionKey = store =>
  store.getState().userSettings.activeEncryptionKey

export const getMasterEncryptionKey = store =>
  store.getState().userSettings.masterEncryptionKey

export const deleteEncryptionItem = (store, encryptionItemToDelete) =>
  store.dispatch(
    userSettings.actions.deleteEncryptionItem(encryptionItemToDelete),
  )

export const updateEncryptionItem = (store, encryptionItem) =>
  store.dispatch(userSettings.actions.updateEncryptionItem(encryptionItem))

export const addEncryptionItem = (store, encryptionItem) =>
  store.dispatch(userSettings.actions.addEncryptionItem(encryptionItem))

export const appLoginContent = (
  store,
  appLoginContent,
  activeEncryptionKey,
  encryptionKeyList,
  savedFormContent,
) =>
  store.dispatch(
    userSettings.actions.appLoginContent(
      appLoginContent,
      activeEncryptionKey,
      encryptionKeyList,
      savedFormContent,
    ),
  )

export const getAppLoginContent = store =>
  store.getState().userSettings.appLoginContent

export const getAppLoginPassword = store =>
  store.getState().userSettings.appLoginPassword

export const getAllForms = store =>
  store.getState().userSettings.savedFormContent

export const getShowWelcomePage = store =>
  store.getState().userSettings.showWelcomePage

export const setShowWelcomePage = (store, showWelcomePage) =>
  store.dispatch(userSettings.actions.showWelcomePage(showWelcomePage))

export const updateFormData = (store, formId, formData) =>
  store.dispatch(userSettings.actions.updateFormData(formId, formData))

export const createFormData = (store, formData) =>
  store.dispatch(userSettings.actions.createFormData(formData))

export const mergeFormData = (store, formData) =>
  store.dispatch(userSettings.actions.mergeFormData(formData))

export const deleteFormData = (store, formData) =>
  store.dispatch(userSettings.actions.deleteFormData(formData))

export const clearAllForms = store =>
  store.dispatch(userSettings.actions.clearAllForms())

export const resetApp = store => store.dispatch(userSettings.actions.resetApp())

export const mergeFormDataList = (store, formDataList) =>
  store.dispatch(userSettings.actions.mergeFormDataList(formDataList))

export const getFormContentById = (store, formId) =>
  generalUtil.findFormDataById(getAllForms(store), formId)

export const searchFormDataById = (store, formId) =>
  generalUtil.searchFormDataById(getAllForms(store), formId)
