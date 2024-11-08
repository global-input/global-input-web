// GItemSelector.js

import React, { useState } from 'react';
import styled from 'styled-components';

import tickOff from './tick-off-icon.png';
import tickOn from './tick-on-icon.png';
import updownIcon from './up-down-icon.png';

const GItemSelector = ({ items, selectedItem, onValueChange, label }) => {
  const [showListMode, setShowListMode] = useState(false);

  if (showListMode) {
    const onSelected = (value) => {
      setShowListMode(false);
      onValueChange(value);
    };
    return (
      <SelectionFieldContainer>
        <ClickableArea onClick={() => setShowListMode(false)}>
          <SelectionSelectedRow>
            <div>
              <Label>{label}</Label>
            </div>
          </SelectionSelectedRow>
        </ClickableArea>
        {items.map((item) => (
          <DisplayItem
            key={item.value}
            item={item}
            selectedItem={selectedItem}
            onSelected={onSelected}
          />
        ))}
      </SelectionFieldContainer>
    );
  } else {
    let valueLabel = '';
    if (selectedItem) {
      valueLabel = selectedItem.label ? selectedItem.label : selectedItem.value;
    }
    return (
      <SelectionFieldContainer>
        <ClickableArea onClick={() => setShowListMode(true)}>
          <SelectionSelectedRow>
            <div>
              <Label>{label}</Label>
              <SelectionSelectedValueText>{valueLabel}</SelectionSelectedValueText>
            </div>
            <ImageIcon src={updownIcon} alt="Toggle Icon" />
          </SelectionSelectedRow>
        </ClickableArea>
      </SelectionFieldContainer>
    );
  }
};

const DisplayItem = ({ item, selectedItem, onSelected }) => {
  const { value, label } = item;
  const image = selectedItem && selectedItem.value === value ? tickOn : tickOff;
  return (
    <ClickableArea onClick={() => onSelected(value)}>
      <OptionRow>
        <OptionLabel>
          <ImageIcon src={image} alt="Selection Icon" />
        </OptionLabel>
        <OptionText>{label}</OptionText>
      </OptionRow>
    </ClickableArea>
  );
};

export default GItemSelector;

// Styled Components

const SelectionFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #b9c3ce;
  width: 100%;
`;

const SelectionSelectedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SelectionSelectedValueText = styled.p`
  font-size: 20px;
  color: #4880ed;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const OptionLabel = styled.div`
  width: 35px;
  height: 25px;
`;

const OptionText = styled.p`
  font-size: 20px;
  color: #4880ed;
  margin: 0;
  padding: 0;
`;

const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Label = styled.p`
  font-size: 10px;
  color: #4880ed;
  height: 15px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-family: 'Futura-Medium', sans-serif;
`;

const ClickableArea = styled.div`
  cursor: pointer;
`;

const ImageIcon = styled.img`
  margin-left: 5px;
`;