import React from 'react';
import styled from 'styled-components';
import {appdata} from '../../store';
import CopyToClipboard from '../../components/buttons/CopyToClipboard';

const renderAFormFieldWithHideValue = ({ formField, index, label }) => {
  const displayValue = '*********';
  return (
    <CopyToClipboard
      key={index}
      content={formField.value}
      convert={appdata.decryptContent.bind(appdata)}
    >
      <ItemRow>
        <Label>{label}</Label>
        <ValueContainer>
          <ValueText>{displayValue}</ValueText>
        </ValueContainer>
      </ItemRow>
    </CopyToClipboard>
  );
};

const renderAFormFieldWithShowValue = ({ formField, index, label }) => {
  let displayValue = formField.value || '*********';
  let numberOfLines = 1;

  if (formField.nLines && formField.nLines > 1) {
    numberOfLines = parseInt(formField.nLines, 10) || 6;
  }

  return (
    <CopyToClipboard
      key={index}
      content={formField.value}
      convert={appdata.decryptContent.bind(appdata)}
    >
      <Label>{label}</Label>
      <TextArea
        readOnly
        value={displayValue}
        rows={numberOfLines}
      />
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

const renderFormFields = ({ action, formData }) => {
  const fields = formData.fields;
  if (fields && fields.length) {
    if (action.show) {
      return fields.map((formField, index) => renderAFormFieldWithShow(formField, index));
    } else {
      return fields.map((formField, index) => renderAFormFieldWithHide(formField, index));
    }
  } else {
    return null;
  }
};

export default renderFormFields;

// Styled Components
const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 8px;
`;

const ValueContainer = styled.div`
  flex: 1;
`;

const ValueText = styled.span`
  font-size: 16px;
  color: #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  resize: none;
`;