// src/mobile-app/ui/input/GMultiSelector.js

import React from 'react';

import tickOff from './tick-off-icon.png';
import tickOn from './tick-on-icon.png';

const GMultiSelector = ({
  items,
  label,
  selectType,
  selectedItems,
  onValueChange,
}) => {
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
    <div style={styles.selectionFieldContainer}>
      <span style={styles.label}>{label}</span>
      {items.map((item) => (
        <DisplayItem
          key={item.value}
          item={item}
          selectedItems={selectedItems}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};

const DisplayItem = ({ item, selectedItems, onSelected }) => {
  let image = tickOff;
  if (selectedItems) {
    selectedItems.forEach((itm) => {
      if (itm.value === item.value) {
        image = tickOn;
      }
    });
  }
  return (
    <div
      onClick={() => {
        onSelected(item);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div style={styles.optionRow}>
        <span style={styles.optionText}>{item.label}</span>
        <div style={styles.optionLabel}>
          <img src={image} alt="Selection Icon" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  selectionFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottom: '1px solid #B9C3CE',
    width: '100%',
  },
  selectionSelectedRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  selectionSelectedValueText: {
    fontSize: '20px',
    color: '#4880ED',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  optionLabel: {
    width: '35px',
    height: '25px',
    marginLeft: '15px',
  },
  optionText: {
    fontSize: '20px',
    color: '#4880ED',
    margin: 0,
    padding: 0,
  },
  optionRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: '10px',
  },
  label: {
    fontSize: '10px',
    color: '#4880ED',
    height: '15px',
    marginBottom: 0,
    paddingBottom: 0,
    fontFamily: 'Futura-Medium',
  },
};

export default GMultiSelector;