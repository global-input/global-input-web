import React from 'react';
import { styles } from './styles';
import {appdata} from '../../store';
import CopyToClipboard from '../../components/buttons/CopyToClipboard';

const renderAFormFieldWithHideValue = ({ formField, index, label }) => {
  const displayValue = '*********';
  return (
    <CopyToClipboard
      key={index}
      style={styles.itemRow}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={appdata.decryptContent.bind(appdata)}
    >
      <span style={styles.label}>{label}</span>
      <div style={styles.valueContainer}>
        <span style={styles.valueText}>{displayValue}</span>
      </div>
    </CopyToClipboard>
  );
};

const renderAFormFieldWithShowValue = ({ formField, index, label }) => {
  const displayValue = formField.value || '*********';

  let multiline = false;
  let numberOfLines = 1;
  if (formField.nLines && formField.nLines > 1) {
    multiline = true;
    numberOfLines = parseInt(formField.nLines, 10);
    if (!numberOfLines) {
      numberOfLines = 6;
    }
  }

  return (
    <CopyToClipboard
      key={index}
      contentContainerStyle={styles.showFieldContainer}
      content={formField.value}
      convert={appdata.decryptContent.bind(appdata)}
    >
      <span style={styles.label}>{label}</span>
      {multiline ? (
        <textarea
          style={styles.textarea}
          readOnly
          value={displayValue}
          rows={numberOfLines}
        />
      ) : (
        <input
          style={styles.textarea}
          type="text"
          readOnly
          value={displayValue}
        />
      )}
    </CopyToClipboard>
  );
};

const getFieldLabel = (formField) => {
  if (formField.label && formField.label.trim().length > 1) {
    return formField.label;
  } else {
    return formField.id;
  }
};

const renderAFormFieldWithShow = (formField, index) =>
  renderAFormFieldWithShowValue({
    formField,
    index,
    label: getFieldLabel(formField),
  });

const renderAFormFieldWithHide = (formField, index) =>
  renderAFormFieldWithHideValue({
    formField,
    index,
    label: getFieldLabel(formField),
  });

const FormFields = ({ action, formData }) => {
  const fields = formData.fields;
  if (fields && fields.length) {
    if (action.show) {
      return <>{fields.map(renderAFormFieldWithShow)}</>;
    } else {
      return <>{fields.map(renderAFormFieldWithHide)}</>;
    }
  } else {
    return null;
  }
};

export default FormFields;