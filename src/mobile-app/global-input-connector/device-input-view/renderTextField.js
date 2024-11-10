import React from 'react';
import {styles} from "../styles";
import TextInputField from '../../components/input/TextInputField';
import menusConfig from '../../configs/menusConfig';

const renderFieldSelection = ({ dataitem, fieldSelection, onFieldSelected }) => {
  let icon = menusConfig.checkbox.options[0].image;
  let checked = false;
  if (fieldSelection && fieldSelection.dataitem === dataitem) {
    icon = menusConfig.checkbox.options[1].image;
    checked = true;
  }
  return (
    <button
      onClick={() => {
        if (checked) {
          onFieldSelected(null);
        } else {
          onFieldSelected(dataitem);
        }
      }}
      style={{ border: 'none', background: 'none', padding: 0, margin: 0 }}
    >
      <img src={icon} style={styles.itemIcon} alt="" />
    </button>
  );
};

const TextInputComponent = ({
  dataitem,
  fieldSelection,
  showHideSecret,
  onFieldChanged,
  onFieldSelected,
}) => {
  const value = dataitem.value ? dataitem.value : '';
  const secureTextEntry =
    dataitem && dataitem.type === 'secret' && showHideSecret && !showHideSecret.show;
  const nLines = dataitem.nLines ? dataitem.nLines : 1;

  if (nLines > 1) {
    return (
      <TextInputField
        value={value}
        label={dataitem.label}
        dark={true}
        secureTextEntry={secureTextEntry}
        multiline={true}
        numberOfLines={nLines}
        onFocus={() => onFieldSelected(null)}
        onChangeTextValue={(data) => onFieldChanged(data)}
        placeholder={dataitem.label}
      >
        {renderFieldSelection({ dataitem, fieldSelection, onFieldSelected })}
      </TextInputField>
    );
  } else {
    return (
      <div style={styles.inputContainer}>
        <TextInputField
          value={value}
          placeholder={dataitem.label}
          dark={true}
          secureTextEntry={secureTextEntry}
          onFocus={() => onFieldSelected(null)}
          onChangeTextValue={(data) => onFieldChanged(data)}
          autoCapitalize={'none'}
        >
          {renderFieldSelection({ dataitem, fieldSelection, onFieldSelected })}
        </TextInputField>
      </div>
    );
  }
};

export default TextInputComponent;