// src/mobile-app/manage-form-data/display-form-data/index.js

import React, { useState } from 'react';
import { styles } from '../styles'; // Ensure styles are adjusted for React.js
import { appdata } from '../../store';

import images from '../../configs/images';
import manageFormDataTextConfig from '../../configs/manageFormDataTextConfig';
import menusConfig from '../../configs/menusConfig';


import CopyToClipboard from '../../components/buttons/CopyToClipboard';
import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
// Define action types
const ACT_TYPE = {
  DISPLAY: 1,
  CONFIRM_DELETE: 2,
};

// Utility function to generate unique keys for items
const getMapItemKey = (item, index, label) => {
  if (item.id) {
    return item.id;
  } else if (item.label) {
    return `${index}_${item.label}`;
  } else if (label) {
    return `${index}_${label}`;
  } else if (item.value) {
    return `${index}_${item.value}`;
  } else {
    return index;
  }
};

// Function to render a form field with hidden value
const renderAFormFieldWithHideValue = (formField, index, label) => {
  const displayValue = '*********';
  const key = getMapItemKey(formField, index, label);
  return (
    <CopyToClipboard
      key={key}
      style={styles.itemRow}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={(content) => appdata.decryptContent(content)}
    >
      <span style={styles.label}>{label}</span>
      <div style={styles.valueContainer}>
        <span style={styles.valueText}>{displayValue}</span>
      </div>
    </CopyToClipboard>
  );
};

// Function to render a form field with shown value
const renderAFormFieldWithShowValue = (formField, index, label) => {
  let displayValue = '*********';
  let errorMessage = null;
  try {
    displayValue = appdata.decryptContent(formField.value);
  } catch (error) {
    console.error(error);
    errorMessage = 'Failed to decrypt';
  }
  const key = getMapItemKey(formField, index, label);
  return (
    <CopyToClipboard
      key={key}
      style={styles.itemRow}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={(content) => appdata.decryptContent(content)}
    >
      <span style={styles.label}>{label}</span>
      <div style={styles.valueContainer}>
        <span style={styles.valueText}>{displayValue}</span>
      </div>
      {errorMessage && <span style={styles.errorMessage}>{errorMessage}</span>}
    </CopyToClipboard>
  );
};

// Function to render form fields
const RenderFormFields = ({ formData, show }) => {
  const fields = formData.fields;

  if (fields && fields.length) {
    return fields.map((formField, index) => {
      let label = formField.id;
      if (formField.label && formField.label.trim().length > 1) {
        label = formField.label;
      }
      if (show) {
        return renderAFormFieldWithShowValue(formField, index, label);
      } else {
        return renderAFormFieldWithHideValue(formField, index, label);
      }
    });
  } else {
    return null;
  }
};

// Function to render form label
const RenderFormLabel = ({ formData }) => {
  if (formData.label) {
    return (
      <div style={styles.formEditField}>
        <img src={images.folder} style={styles.labelIcon} alt="Folder Icon" />
        <div style={styles.itemRecord}>
          <span style={styles.valueText}>{formData.label}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// Main component
const DisplayFormData = ({
  onDelete,
  onEdit,
  onBack,
  formData,
  displayFormDataProperties,
}) => {
  const [actionType, setActionType] = useState(ACT_TYPE.DISPLAY);
  const [show, setShow] = useState(false);

  const onShowChanged = (newShow) => {
    setShow(newShow);
  };

  const onDeleteFormData = () => {
    onDelete(formData);
  };

  const toConfirmDelete = () => {
    setActionType(ACT_TYPE.CONFIRM_DELETE);
  };

  const toDisplayFormData = () => {
    setActionType(ACT_TYPE.DISPLAY);
  };

  const renderDisplayFormData = () => {
    const menuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: onBack,
      },
    ];

    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false);
        },
      });
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true);
        },
      });
    }

    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: toConfirmDelete,
      });
    }

    if (onEdit) {
      menuItems.push({
        menu: menusConfig.edit.menu,
        onPress: () => {
          onEdit(formData);
        },
      });
    }

    let title = manageFormDataTextConfig.title;
    if (displayFormDataProperties) {
      title = displayFormDataProperties.title;
      displayFormDataProperties.menuItems.forEach((m) => {
        m.onPress = () => {
          m.onSelect(formData);
        };
        menuItems.push(m);
      });
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={title}
      >
        <div style={styles.content}>
          <div style={styles.formEditField}>
            <img src={images.idIcon} style={styles.labelIcon} alt="ID Icon" />
            <div style={styles.itemRecord}>
              <span style={styles.valueText}>{formData.id}</span>
            </div>
          </div>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </div>
      </ViewWithTabMenu>
    );
  };

  const renderConfirmDelete = () => {
    const menuItems = [
      {
        menu: menusConfig.cancel.menu,
        onPress: toDisplayFormData,
      },
    ];

    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false);
        },
      });
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true);
        },
      });
    }

    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: onDeleteFormData,
      });
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={manageFormDataTextConfig.confirmDelete.title}
      >
        <div style={styles.content}>
          <DisplayBlockText content={manageFormDataTextConfig.confirmDelete.content} />

          <div style={styles.formEditField}>
            <img src={images.idIcon} style={styles.labelIcon} alt="ID Icon" />
            <div style={styles.itemRecord}>
              <span style={styles.valueText}>{formData.id}</span>
            </div>
          </div>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </div>
      </ViewWithTabMenu>
    );
  };

  if (actionType === ACT_TYPE.CONFIRM_DELETE) {
    return renderConfirmDelete();
  } else {
    return renderDisplayFormData();
  }
};

export default DisplayFormData;