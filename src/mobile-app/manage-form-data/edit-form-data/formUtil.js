// app/manage-form-data/edit-form-data/formUtil.js

import React from 'react';
import { generateRandomString } from 'global-input-message';
import { styles } from '../styles';

import images from '../../configs/images';
import manageFormDataTextConfig from '../../configs/manageFormDataTextConfig';
import menusConfig from '../../configs/menusConfig';

import { appdata, domainForms } from '../../store';
import TextInputField from '../../components/input/TextInputField';
import EditorWithTabMenu from '../../components/menu/EditorWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';
import CheckBoxButton from '../../components/buttons/CheckBoxButton';

import ACT_TYPE from './ACT_TYPE.js';

// Utility function to get the default form ID
export const getDefaultFormId = () => {
  const formDatalist = appdata.getSavedFormContent();
  if (formDatalist && formDatalist.length) {
    return 'username@service' + (formDatalist.length + 1);
  } else {
    return 'username@service';
  }
};

// Function to initialize data
export const getInitData = ({ formData, errorMessage = '', label }) => {
  const initData = {
    formData: {
      id: '',
      label,
      domains: '',
      fields: [
        { id: 'username', label: 'Username', value: '' },
        { id: 'password', label: 'Password', value: '' },
      ],
    },
    newFieldId: '',
    multiLine: false,
    errorMessage: '',
    actionType: ACT_TYPE.EDIT,
    globalInputState: null,
    fieldSelection: null,
    notificationMessage: null,
  };
  if (formData) {
    domainForms.forFormData(formData);
    return { ...initData, formData, errorMessage };
  } else {
    return initData;
  }
};

// Function to build initial data
export const buildInitData = ({ formData, label }) => {
  if (!formData) {
    return getInitData({ label });
  }
  let errorMessage = null;
  const fields = [];
  formData.fields &&
    formData.fields.forEach((f) => {
      let decryptedValue = null;
      try {
        decryptedValue = appdata.decryptContent(f.value);
      } catch (error) {
        console.error(error);
        decryptedValue = 'Failed to decrypt the content';
        errorMessage = 'Failed to decrypt the field content of: ' + f.label;
      }
      fields.push({
        id: f.id,
        label: f.label,
        nLines: f.nLines,
        value: decryptedValue,
      });
    });
  return getInitData({ formData: { ...formData, fields }, errorMessage });
};

// Utility function to generate a unique key for list items
const getMapItemKey = (item, index) => {
  if (item.id) {
    return item.id;
  } else if (item.label) {
    return `${index}_${item.label}`;
  } else if (item.value) {
    return `${index}_${item.value}`;
  } else {
    return index;
  }
};

// Function to add a new field to the form
const addANewField = ({ data, setData }) => {
  const setErrorMessage = (errorMessage) => setData({ ...data, errorMessage });

  let newFieldId = data.newFieldId.trim();
  if (!newFieldId) {
    setErrorMessage(
      manageFormDataTextConfig.errorMessages.newField.newFieldMissing
    );
    return;
  }
  const newLabel = newFieldId;
  newFieldId = newFieldId.replace(' ', '_').toLowerCase();
  const formData = data.formData;
  const existsFields = formData.fields.filter((f) => f.id === newFieldId);
  if (existsFields && existsFields.length > 0) {
    setErrorMessage(
      manageFormDataTextConfig.errorMessages.newField.fieldExists
    );
    return;
  }
  const nField = {
    id: newFieldId,
    label: newLabel,
    value: '',
  };
  if (data.multiLine) {
    nField.nLines = 5;
  }
  formData.fields.push(nField);
  setData(getInitData({ formData }));
};

// Function to render the "Create New Field" view
export const renderCreateNewField = ({ data, setData }) => {
  const onAddNewField = () => addANewField({ data, setData });
  const toEditView = () => setData({ ...data, actionType: ACT_TYPE.EDIT });
  const menuItems = [
    {
      menu: menusConfig.cancel.menu,
      onPress: toEditView,
    },
    {
      menu: menusConfig.apply.menu,
      onPress: onAddNewField,
    },
  ];
  const title = manageFormDataTextConfig.addAField.title;
  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.manageFormData.menu}
    >
      <div style={styles.formEditor}>
        <div style={styles.createNewFieldRow}>
          <DisplayBlockText
            content={manageFormDataTextConfig.addAField.content}
          />
          <div style={styles.formEditField}>
            <TextInputField
              placeholder={
                manageFormDataTextConfig.addAField.idField.placeHolder
              }
              value={data.newFieldId}
              onChangeTextValue={(value) => {
                setData({ ...data, newFieldId: value });
              }}
              dark={true}
            />
          </div>
          {renderError(data.errorMessage)}
        </div>
        <div style={styles.createNewFieldRow}>
          <DisplayBlockText
            content={manageFormDataTextConfig.addAField.content2}
          />
          <div style={styles.formEditField}>
            <CheckBoxButton
              value={data.multiLine}
              display={menusConfig.checkbox.options}
              onChanged={(multiLine) => {
                setData({ ...data, multiLine });
              }}
            />
            <span style={styles.multilineLabel}>
              {manageFormDataTextConfig.addAField.multiLine.label}
            </span>
          </div>
        </div>
        <div style={styles.createNewFieldRow}>
          <DisplayBlockText
            content={manageFormDataTextConfig.addAField.content3}
          />
        </div>
      </div>
    </EditorWithTabMenu>
  );
};

// Function to render error messages
const renderError = (errorMessage) => {
  if (!errorMessage) {
    return null;
  }
  return (
    <div style={styles.formEditor}>
      <div style={styles.formEditField}>
        <span style={styles.errorMessage}>{errorMessage}</span>
      </div>
    </div>
  );
};

// Function to render the editor view
export const renderEditor = ({
  data,
  setData,
  formIdField,
  menuItems,
  title,
  selectTextOnFocusOnId,
  onFormFieldChanged,
}) => {
  const unselectFieldSelection = () =>
    setData({ ...data, fieldSelection: null });
  const changeForm = (formData) =>
    setData({ ...data, formData, errorMessage: '', fieldSelection: null });
  const onFormIdChanged = (id) => changeForm({ ...data.formData, id });
  const onFormLabelChanged = (label) => changeForm({ ...data.formData, label });
  const onFormDomainChanged = (domains) =>
    changeForm({ ...data.formData, domains });
  return (
    <EditorWithTabMenu
      title={title}
      menuItems={menuItems}
      selected={menusConfig.manageFormData.menu}
      notificationMessage={data.notificationMessage}
    >
      {renderError(data.errorMessage)}
      <div style={styles.formEditor}>
        <div style={styles.formEditField}>
          <TextInputField
            labelIcon={images.idIcon}
            dark={true}
            placeholder={manageFormDataTextConfig.idPlaceHolder}
            value={data.formData.id}
            selectTextOnFocus={selectTextOnFocusOnId}
            onChangeTextValue={onFormIdChanged}
            onFocus={unselectFieldSelection}
            ref={(ref) => (formIdField.current = ref)}            
          />
        </div>
        <div style={styles.formEditField}>
          <TextInputField
            dark={true}
            labelIcon={images.folder}
            placeholder={manageFormDataTextConfig.labelPlaceHolder}
            value={data.formData.label}
            onFocus={unselectFieldSelection}            
            onChangeTextValue={onFormLabelChanged}
          />
        </div>
        <div style={styles.formEditField}>
          <TextInputField
            dark={true}
            labelIcon={images.domainSearch}
            placeholder={manageFormDataTextConfig.domainSearchPlaceHolder}
            value={data.formData.domains}
            onFocus={unselectFieldSelection}            
            onChangeTextValue={onFormDomainChanged}
          />
        </div>
        {data.formData.fields.map((formField, index) => {
          const key = getMapItemKey(formField, index);
          return (
            <RenderAFormField
              formField={formField}
              index={index}
              key={key}
              data={data}
              setData={setData}
              onFormFieldChanged={onFormFieldChanged}
            />
          );
        })}
      </div>
    </EditorWithTabMenu>
  );
};

// Function to build the menu items
export const buildMenu = ({
  data,
  setData,
  onBack,
  messageTimerHandler,
  onDisconnected,
  onConnectTransfer,
  formIdField,
  formData,
  updateFormData,
  createFormData,
}) => {
  const toAddNewField = () =>
    setData({ ...data, actionType: ACT_TYPE.NEW_FIELD });
  const onCancelEditFormData = () => onBack(formData);

  const displayNotificationMessage = (notificationMessage) => {
    setData((prevData) => ({ ...prevData, notificationMessage }));
    messageTimerHandler.current = setTimeout(() => {
      setData((d) => ({ ...d, notificationMessage: null }));
      messageTimerHandler.current = null;
    }, 2000);
  };

  const onFieldValueChanged = (index, value) => {
    const formData = { ...data.formData };
    formData.fields[index].value = value;
    setData({ ...data, formData, errorMessage: '' });
  };

  const onSaveFormData = () =>
    saveFormData({
      data,
      setData,
      formIdField,
      formData,
      updateFormData,
      createFormData,
    });

  if (data.fieldSelection) {
    const { formField, index } = data.fieldSelection;
    const clipboardCopy = () => {
      const content = formField.value;
      if (content) {
        // Use the Clipboard API
        navigator.clipboard
          .writeText(content)
          .then(() => {
            displayNotificationMessage(
              manageFormDataTextConfig.clipboard.message
            );
          })
          .catch((err) => {
            console.error('Could not copy text: ', err);
          });
      }
    };
    const deleteAField = () => {
      const formData = data.formData;
      formData.fields = formData.fields.filter((f) => f !== formField);
      setData({
        ...data,
        formData,
        errorMessage: '',
        fieldSelection: null,
      });
    };
    const randomise = () => {
      const randomValue = generateRandomString(11);
      onFieldValueChanged(index, randomValue);
    };
    const clearField = () => onFieldValueChanged(index, '');
    const unselectFieldSelection = () =>
      setData({ ...data, fieldSelection: null });

    return [
      { menu: menusConfig.clipboardCopy.menu, onPress: clipboardCopy },
      { menu: menusConfig.deleteField.menu, onPress: deleteAField },
      { menu: menusConfig.random.menu, onPress: randomise },
      { menu: menusConfig.clearField.menu, onPress: clearField },
      { menu: menusConfig.unselect.menu, onPress: unselectFieldSelection },
    ];
  }
  const menuItems = [
    { menu: menusConfig.cancel.menu, onPress: onCancelEditFormData },
  ];
  if (data.globalInputState) {
    menuItems.push({
      menu: menusConfig.disconnect.menu,
      onPress: onDisconnected,
    });
  } else if (
    data.formData &&
    data.formData.id &&
    data.formData.fields.length
  ) {
    menuItems.push({
      menu: menusConfig.connectTransfer.menu,
      onPress: onConnectTransfer,
    });
  }
  menuItems.push({
    menu: menusConfig.addNewField.menu,
    onPress: toAddNewField,
  });

  menuItems.push({
    menu: menusConfig.save.menu,
    onPress: onSaveFormData,
  });
  return menuItems;
};

// Function to save the form data
const saveFormData = ({
  data,
  setData,
  formIdField,
  formData,
  updateFormData,
  createFormData,
}) => {
  const setError = (errorMessage) => setData({ ...data, errorMessage });
  if (data.formData.id.trim().length < 3) {
    setError(manageFormDataTextConfig.errorMessages.formId.tooShort);
    if (formIdField.current) {
      formIdField.current.focus();
    }
    return;
  }
  data.formData.id = data.formData.id.trim();
  if (data.formData.id.length > 255) {
    setError(manageFormDataTextConfig.errorMessages.formId.tooLong);
    if (formIdField.current) {
      formIdField.current.focus();
    }
    return;
  }
  if (!data.formData.fields.length) {
    setError(manageFormDataTextConfig.errorMessages.formFields.noneExist);
    return;
  }
  if (formData) {
    if (formData.id !== data.formData.id) {
      if (appdata.getFormContentById(data.formData.id)) {
        setError(
          manageFormDataTextConfig.errorMessages.formId
            .alreadyExistsForNewFormId
        );
        if (formIdField.current) {
          formIdField.current.focus();
        }
        return;
      }
    }
  } else {
    const existingItem = appdata.searchFormDataById(data.formData.id);
    if (existingItem) {
      setError(
        manageFormDataTextConfig.errorMessages.formId.alreadyExists +
          ' The data already exists: ' +
          existingItem.id
      );
      if (formIdField.current) {
        formIdField.current.focus();
      }
      return;
    }
  }
  const form = {
    id: data.formData.id,
    label: data.formData.label,
    domains: data.formData.domains,
  };
  form.fields = data.formData.fields.map((f) => {
    return {
      id: f.id,
      label: f.label,
      nLines: f.nLines,
      value: appdata.encryptContent(f.value),
    };
  });
  if (formData) {
    updateFormData(formData.id, form);
  } else {
    createFormData(form);
  }
};

// Function to render the field selection checkbox
const renderFieldSelection = ({ formField, index, data, setData }) => {
  let icon = menusConfig.checkbox.options[0].image;
  let checked = false;
  let fieldSelection = data.fieldSelection;
  if (fieldSelection && fieldSelection.formField === formField) {
    icon = menusConfig.checkbox.options[1].image;
    checked = true;
  }

  return (
    <div
      onClick={() => {
        if (checked) {
          setData({ ...data, fieldSelection: null });
        } else {
          fieldSelection = { formField, index };
          setData({ ...data, fieldSelection });
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <img src={icon} style={styles.itemIcon} alt="Checkbox Icon" />
    </div>
  );
};

// Function to handle field value changes
export const changeGlobalInputFieldAction = ({ data, index, value }) => {
  const formData = { ...data.formData };
  formData.fields = [...formData.fields];
  formData.fields[index].value = value;
  return { ...data, formData, errorMessage: '' };
};

// Component to render a form field
const RenderAFormField = ({
  formField,
  index,
  data,
  setData,
  onFormFieldChanged,
}) => {
  let label = formField.id;
  let multiline = false;

  if (formField.label && formField.label.trim().length > 1) {
    label = formField.label;
  }

  if (formField.nLines && formField.nLines > 1) {
    multiline = true;
  }
  const unselectFieldSelection = () =>
    setData({ ...data, fieldSelection: null });

  return (
    <div style={styles.formEditField}>
      <TextInputField
        placeholder={label}
        label={label}
        value={formField.value}
        dark={true}
        numberOfLines={formField.nLines}
        multiline={multiline}
        onChangeTextValue={(value) => {
          setData(changeGlobalInputFieldAction({ data, index, value }));
          onFormFieldChanged({ formField, index, value });
        }}
        onFocus={unselectFieldSelection}
        
      >
        {renderFieldSelection({
          formField,
          index,
          data,
          setData,
        })}
      </TextInputField>
    </div>
  );
};