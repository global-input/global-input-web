// RenderButton.jsx
import React from 'react';
import styled from 'styled-components';
import images from '../../configs/images';
import { formDataUtil } from '../../store';
import IconButton from '../../components/buttons/IconButton';
import { styles, stylesData } from '../styles';

const getContentAndStyle = (content, name) => {
  return formDataUtil.getContentAndStyle({
    content,
    name,
    styles,
    data: stylesData,
  });
};

const getStyleFromItem = (item, name) =>
  formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });

const createButtonProperties = (dataitem) => {
  var buttonProps = {
    label: dataitem.label,
    value: dataitem.value,
    iconText: dataitem.iconText,
  };
  if (dataitem.icon) {
    if (typeof dataitem.icon === 'object') {
      if (dataitem.icon.iconText) {
        buttonProps.iconText = dataitem.icon.iconText;
      }
      if (dataitem.icon.name) {
        buttonProps.iconImage = images.findImageIcon(dataitem.icon.name);
      }
    } else {
      buttonProps.iconImage = images.findImageIcon(dataitem.icon);
    }
  }
  if (!dataitem.options) {
    return buttonProps;
  }
  for (var i = 0; i < dataitem.options.length; i++) {
    if (dataitem.options[i].value === dataitem.value) {
      return createButtonProperties(dataitem.options[i]);
    }
  }
  return buttonProps;
};

const renderButtonLabel = (label) => {
  if (label) {
    var buttonLabel = getContentAndStyle(label, 'buttonText');
    return <span style={buttonLabel.style}>{buttonLabel.content}</span>;
  } else {
    return null;
  }
};

const RenderButton = ({ dataitem, onFieldChanged }) => {
  var buttonProps = createButtonProperties(dataitem);
  if (buttonProps.iconImage) {
    return (
      <div style={getStyleFromItem(buttonProps.container, 'iconContainer')}>
        <IconButton
          image={buttonProps.iconImage}
          label={buttonProps.label}
          onPress={() => onFieldChanged(buttonProps.value)}
        />
      </div>
    );
  } else if (buttonProps.iconText) {
    var iconText = getContentAndStyle(buttonProps.iconText, 'buttonText');
    return (
      <button
        onClick={() => onFieldChanged(buttonProps.value)}
        style={{
          ...getStyleFromItem(dataitem.container, 'buttonContainer'),
          cursor: 'pointer',
          border: 'none',
          background: 'none',
        }}
      >
        <div style={getStyleFromItem(dataitem, 'button')}>
          <span style={iconText.style}>{iconText.content}</span>
        </div>
        {renderButtonLabel(buttonProps.label)}
      </button>
    );
  } else {
    var buttonLabel = getContentAndStyle(buttonProps.label, 'buttonText');
    return (
      <button
        onClick={() => onFieldChanged(buttonProps.value)}
        style={{
          ...getStyleFromItem(dataitem.container, 'buttonContainer'),
          cursor: 'pointer',
          border: 'none',
          background: 'none',
        }}
      >
        <div style={getStyleFromItem(dataitem, 'button')}>
          <span style={buttonLabel.style}>{buttonLabel.content}</span>
        </div>
      </button>
    );
  }
};

export default RenderButton;