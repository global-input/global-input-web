import React from 'react';
import styled from 'styled-components';
import TextInputField from '../../components/input/TextInputField';
import menusConfig from '../../configs/menusConfig';

const RenderFieldSelection = ({ dataitem, fieldSelection, onFieldSelected }) => {
  const isSelected = fieldSelection && fieldSelection.dataitem === dataitem;
  const icon = isSelected ? menusConfig.checkbox.options[1].image : menusConfig.checkbox.options[0].image;

  return (
    <SelectionContainer onClick={() => onFieldSelected(isSelected ? null : dataitem)}>
      <Icon src={icon} alt={isSelected ? 'checked' : 'unchecked'} />
    </SelectionContainer>
  );
};

const RenderTextField = ({ dataitem, fieldSelection, showHideSecret, onFieldChanged, onFieldSelected }) => {
  const value = dataitem.value || '';
  const isSecure = dataitem.type === 'secret' && showHideSecret && !showHideSecret.show;
  const numberOfLines = dataitem.nLines || 1;

  return (
    <InputContainer>
      <TextInputField
        value={value}
        placeholder={dataitem.label}
        dark
        secureTextEntry={isSecure}
        multiline={numberOfLines > 1}
        numberOfLines={numberOfLines}
        onFocus={() => onFieldSelected(null)}
        onChangeTextValue={onFieldChanged}
        autoCapitalize="none"
      >
        <RenderFieldSelection dataitem={dataitem} fieldSelection={fieldSelection} onFieldSelected={onFieldSelected} />
      </TextInputField>
    </InputContainer>
  );
};

export default RenderTextField;

// Styled Components
const InputContainer = styled.div`
  margin: 10px 0;
`;

const SelectionContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-left: 8px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;