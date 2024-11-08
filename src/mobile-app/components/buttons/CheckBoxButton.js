import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxButton = ({ value, onChanged, display }) => {
  const [stateValue, setStateValue] = useState(value !== undefined ? value : false);

  const onPress = () => {
    if (value === undefined) {
      if (onChanged) {
        onChanged(!stateValue);
      }
      setStateValue(!stateValue);
    } else {
      if (onChanged) {
        onChanged(!value);
      }
    }
  };

  const getCheckBoxState = () => {
    return value !== undefined ? value : stateValue;
  };

  const renderImage = (data) => {
    if (data.image) {
      return <Icon src={data.image} alt="" />;
    }
    return null;
  };

  const renderLabel = (data) => {
    if (data.label) {
      return <IconText>{data.label}</IconText>;
    }
    return null;
  };

  let displayItems = [{ label: '' }, { label: '✓' }];
  if (display) {
    displayItems = display;
  }

  const item = getCheckBoxState() ? displayItems[1] : displayItems[0];

  return (
    <IconContainer onClick={onPress}>
      {renderImage(item)}
      {renderLabel(item)}
    </IconContainer>
  );
};

export default CheckBoxButton;

// Styled Components
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const IconText = styled.span`
  font-size: 16px;
`;