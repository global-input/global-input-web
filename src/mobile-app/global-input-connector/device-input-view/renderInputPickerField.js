// MyComponent.jsx
import React from 'react';
import { styles } from '../styles';
import InputPicker from '../../components/input/InputPicker';

const RenderInputPickerField = ({ dataitem, onFieldChanged }) => {
  let selectedItem = null;
  if (dataitem.items) {
    for (let i = 0; i < dataitem.items.length; i++) {
      if (dataitem.items[i].value === dataitem.value) {
        selectedItem = dataitem.items[i];
        break;
      }
    }
  }

  return (
    <div style={styles.inputContainer}>
      <InputPicker
        selectedItem={selectedItem}
        items={dataitem.items}
        label={dataitem.label}
        onValueChange={(value) => {
          onFieldChanged(value);
        }}
      />
    </div>
  );
};

export default RenderInputPickerField;