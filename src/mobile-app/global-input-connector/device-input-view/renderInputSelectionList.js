// MyComponent.jsx
import React from 'react';
import GMultiSelector from '../../ui/input/GMultiSelector'; // Adjust the import path as needed
import {styles} from '../styles';

const MyComponent = ({dataitem, onFieldChanged}) => {
  let selectedItems = [];

  if (dataitem.items && dataitem.items.length > 0 && dataitem.value) {
    if (typeof dataitem.value === 'object') {
      selectedItems = dataitem.items.filter(itm => {
        return dataitem.value.includes(itm.value);
      });
    } else {
      selectedItems = dataitem.items.filter(
        itm => itm.value === dataitem.value,
      );
    }
  }

  return (
    <div style={styles.inputContainer}>
      <GMultiSelector
        selectType={dataitem.selectType}
        selectedItems={selectedItems}
        items={dataitem.items}
        label={dataitem.label}
        onValueChange={items => {
          const values = items.map(itm => itm.value);
          onFieldChanged(values);
        }}
      />
    </div>
  );
};

export default MyComponent;
