// src/mobile-app/ui/input/GItemSelector.js

import React, { useState } from 'react';

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
      <div style={styles.selectionFieldContainer}>
        <div
          onClick={() => {
            setShowListMode(false);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div style={styles.selectionSelectedRow}>
            <div>
              <span style={styles.label}>{label}</span>
            </div>
          </div>
        </div>

        {items.map((item) => (
          <DisplayItem
            key={item.value}
            item={item}
            selectedItem={selectedItem}
            onSelected={onSelected}
          />
        ))}
      </div>
    );
  } else {
    let valueLabel = '';
    if (selectedItem) {
      valueLabel = selectedItem.label ? selectedItem.label : selectedItem.value;
    }
    return (
      <div style={styles.selectionFieldContainer}>
        <div
          onClick={() => {
            setShowListMode(true);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div style={styles.selectionSelectedRow}>
            <div>
              <span style={styles.label}>{label}</span>
              <span style={styles.selectionSelectedValueText}>
                {valueLabel}
              </span>
            </div>
            <img src={updownIcon} alt="Toggle Icon" />
          </div>
        </div>
      </div>
    );
  }
};

const DisplayItem = ({ item, selectedItem, onSelected }) => {
  const { value, label } = item;
  const image = selectedItem && selectedItem.value === value ? tickOn : tickOff;
  return (
    <div
      onClick={() => {
        onSelected(value);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div style={styles.optionRow}>
        <div style={styles.optionLabel}>
          <img src={image} alt="Selection Icon" />
        </div>
        <span style={styles.optionText}>{label}</span>
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
  },
  optionText: {
    fontSize: '20px',
    color: '#4880ED',
    margin: 0,
    padding: 0,
  },
  optionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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

export default GItemSelector;