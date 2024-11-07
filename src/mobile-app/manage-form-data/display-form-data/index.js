import React, {useState} from 'react'

import {Text, TextInput, Image, View} from 'react-native'

import {styles} from '../styles'
import {appdata} from '../../store'
import {images, manageFormDataTextConfig, menusConfig} from '../../configs'
import {
  CopyToClipboard,
  ViewWithTabMenu,
  DisplayBlockText,
} from '../../components'

ACT_TYPE = {
  DISPLAY: 1,
  CONFIRM_DELETE: 2,
}
const getMapItemKey = (item, index, label) => {
  if (item.id) {
    return item.id
  } else if (item.label) {
    return index + '_' + item.label
  } else if (label) {
    return index + '_' + label
  } else if (item.value) {
    return index + '_' + item.value
  } else {
    return index
  }
}

const renderAFormFieldWithHideValue = (formField, index, label) => {
  var displayValue = '*********'
  var key = getMapItemKey(formField, index, label)
  return (
    <CopyToClipboard
      key={key}
      style={styles.itemRow}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={content => appdata.decryptContent(content)}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{displayValue}</Text>
      </View>
    </CopyToClipboard>
  )
}
const renderAFormFieldWithShowValue = (formField, index, label) => {
  var displayValue = '*********'
  var errorMessage = null
  try {
    displayValue = appdata.decryptContent(formField.value)
  } catch (error) {
    console.log(error)
    errorMessage = 'failed to decrypt'
  }
  var multiline = false
  var numberOfLines = 1
  if (formField.nLines && formField.nLines > 1) {
    multiline = true
    numberOfLines = parseInt(formField.nLines)
    if (!numberOfLines) {
      numberOfLines = 6
    }
  }
  var key = getMapItemKey(formField, index, label)
  return (
    <CopyToClipboard
      key={key}
      style={styles.itemRow}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={content => appdata.decryptContent(content)}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{displayValue}</Text>
      </View>
    </CopyToClipboard>
  )
}

const RenderErrorMessage = message => {
  if (message) {
    return <Text style={styles.errorMessage}>{message}</Text>
  } else {
    return null
  }
}

const RenderFormFields = ({formData, show}) => {
  var fields = formData.fields

  if (fields && fields.length) {
    return fields.map((formField, index) => {
      var label = formField.id
      if (formField.label && formField.label.trim().length > 1) {
        label = formField.label
      }
      if (show) {
        return renderAFormFieldWithShowValue(formField, index, label)
      } else {
        return renderAFormFieldWithHideValue(formField, index, label)
      }
    })
  } else {
    return null
  }
}
const RenderFormLabel = ({formData}) => {
  if (formData.label) {
    return (
      <View style={styles.formEditField}>
        <Image source={images.folder} style={styles.labelIcon} />
        <View style={styles.itemRecord}>
          <Text style={styles.valueText}>{formData.label}</Text>
        </View>
      </View>
    )
  } else {
    return null
  }
}

export default ({
  onDelete,
  onEdit,
  onBack,
  formData,
  displayFormDataProperties,
}) => {
  const [actionType, setActionType] = useState(ACT_TYPE.DISPLAY)
  const [show, setShow] = useState(false)
  const onShowChanged = show => {
    setShow(show)
  }
  const onDeleteFormData = () => {
    onDelete(formData)
  }
  const toConfirmDelete = () => {
    setActionType(ACT_TYPE.CONFIRM_DELETE)
  }
  const toDisplayFormData = () => {
    setActionType(ACT_TYPE.DISPLAY)
  }

  const renderDisplayFormData = () => {
    var menuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: onBack,
      },
    ]
    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false)
        },
      })
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true)
        },
      })
    }
    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: toConfirmDelete,
      })
    }

    if (onEdit) {
      menuItems.push({
        menu: menusConfig.edit.menu,
        onPress: () => {
          onEdit(formData)
        },
      })
    }
    var title = manageFormDataTextConfig.title
    if (displayFormDataProperties) {
      title = displayFormDataProperties.title
      displayFormDataProperties.menuItems.forEach(m => {
        m.onPress = () => {
          m.onSelect(formData)
        }
        menuItems.push(m)
      })
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={title}>
        <View style={styles.content}>
          <View style={styles.formEditField}>
            <Image source={images.idIcon} style={styles.labelIcon} />
            <View style={styles.itemRecord}>
              <Text style={styles.valueText}>{formData.id}</Text>
            </View>
          </View>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </View>
      </ViewWithTabMenu>
    )
  }

  const renderConfirmDelete = () => {
    var menuItems = []
    menuItems.push({
      menu: menusConfig.cancel.menu,
      onPress: toDisplayFormData,
    })

    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false)
        },
      })
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true)
        },
      })
    }
    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: onDeleteFormData,
      })
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={manageFormDataTextConfig.confirmDelete.title}>
        <View style={styles.content}>
          <DisplayBlockText
            content={manageFormDataTextConfig.confirmDelete.content}
          />

          <View style={styles.formEditField}>
            <Image source={images.idIcon} style={styles.labelIcon} />
            <View style={styles.itemRecord}>
              <Text style={styles.valueText}>{formData.id}</Text>
            </View>
          </View>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </View>
      </ViewWithTabMenu>
    )
  }

  if (actionType === this.ACT_TYPE.CONFIRM_DELETE) {
    return renderConfirmDelete()
  } else {
    return renderDisplayFormData()
  }
}
