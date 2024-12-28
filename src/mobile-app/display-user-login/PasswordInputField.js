import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styled from 'styled-components';
import TextInputField from '../components/input/TextInputField';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #4880ED;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
  }
`;

const PasswordInputField = ({
  placeholder,
  value,
  onChangeTextValue,
  isVisible,
  onToggleVisibility,
  autoComplete = "off"
}) => {
  return (
    <InputWrapper>
      <TextInputField
        placeholder={placeholder}
        value={value}
        type={isVisible ? 'text' : 'password'}
        onChangeTextValue={onChangeTextValue}
        autoComplete={autoComplete}
        style={{ width: '100%', paddingRight: '40px' }}
      />
      <ToggleButton 
        type="button"
        onClick={onToggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        {isVisible ? (
          <EyeOff size={20} color="black" />
        ) : (
          <Eye size={20} color="black" />
        )}
      </ToggleButton>
    </InputWrapper>
  );
};

export default PasswordInputField;