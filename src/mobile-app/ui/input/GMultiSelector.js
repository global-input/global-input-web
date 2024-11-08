// GMultiSelector.js

import React from 'react';
import styled from 'styled-components';

import tickOff from './tick-off-icon.png';
import tickOn from './tick-on-icon.png';

const GMultiSelector = ({ items, label, selectType, selectedItems, onValueChange }) => {
  const onSelected = (item) => {
    const isAlreadySelected =
      selectedItems && selectedItems.some((itm) => itm.value === item.value);
    if (selectType === 'single') {
      if (isAlreadySelected) {
        onValueChange([]);
      } else {
        onValueChange([item]);
      }
    } else {
      if (isAlreadySelected) {
        onValueChange(selectedItems.filter((itm) => itm.value !== item.value));
      } else {
        if (selectedItems) {
          onValueChange([...selectedItems, item]);
        } else {
          onValueChange([item]);
        }
      }
    }
  };

  return (
    <SelectionFieldContainer>
      <Label>{label}</Label>
      {items.map((item) => (
        <DisplayItem
          key={item.value}
          item={item}
          selectedItems={selectedItems}
          onSelected={onSelected}
        />
      ))}
    </SelectionFieldContainer>
  );
};

const DisplayItem = ({ item, selectedItems, onSelected }) => {
  const isSelected = selectedItems && selectedItems.some((itm) => itm.value === item.value);
  const image = isSelected ? tickOn : tickOff;

  return (
    <ClickableArea onClick={() => onSelected(item)}>
      <OptionRow>
        <OptionText>{item.label}</OptionText>
        <OptionLabel>
          <ImageIcon src={image} alt="Selection Icon" />
        </OptionLabel>
      </OptionRow>
    </ClickableArea>
  );
};

export default GMultiSelector;

// Styled Components

const SelectionFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #b9c3ce;
  width: 100%;
`;

const Label = styled.p`
  font-size: 10px;
  color: #4880ed;
  height: 15px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-family: 'Futura-Medium', sans-serif;
`;

const OptionRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 10px;
`;

const OptionText = styled.p`
  font-size: 20px;
  color: #4880ed;
  margin: 0;
  padding: 0;
`;

const OptionLabel = styled.div`
  width: 35px;
  height: 25px;
  margin-left: 15px;
`;

const ClickableArea = styled.div`
  cursor: pointer;
`;

const ImageIcon = styled.img`
  width: 100%;
  height: auto;
`;