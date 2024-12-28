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
  // Handle the display value based on visibility
  const displayValue = isVisible ? value : '•'.repeat(value.length);

  return (
    <InputWrapper>
      <TextInputField
        placeholder={placeholder}
        value={displayValue}
        onChangeTextValue={(newValue) => {
          // If hidden, we need to handle the dots-to-actual conversion
          if (!isVisible) {
            // If the new length is greater, append the last character
            if (newValue.length > value.length) {
              const lastChar = newValue.charAt(newValue.length - 1);
              if (lastChar !== '•') {
                onChangeTextValue(value + lastChar);
              }
            } 
            // If the new length is less, remove the last character
            else if (newValue.length < value.length) {
              onChangeTextValue(value.slice(0, -1));
            }
          } else {
            // When visible, just pass through the value
            onChangeTextValue(newValue);
          }
        }}
      />
      <ToggleButton 
        type="button"
        onClick={onToggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        {isVisible ? (
          <EyeOff size={20} color="#000000" />
        ) : (
          <Eye size={20} color="#000000" />
        )}
      </ToggleButton>
    </InputWrapper>
  );
};

export default PasswordInputField;