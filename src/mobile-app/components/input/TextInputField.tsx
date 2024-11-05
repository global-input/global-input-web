import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface TextInputFieldProps {
  value?: string;
  onChangeTextValue?: (text: string) => void;
  placeholder?: string;
  label?: string;
  labelIcon?: string;
  selectTextOnFocus?: boolean;
  secureTextEntry?: boolean;
  editable?: boolean;
  autoCapitalize?: string;
  numberOfLines?: number;
  focusedContent?: React.ReactNode;
  notFocusedContent?: React.ReactNode;
  children?: React.ReactNode;
  onBlur?: () => void;
  onFocus?: () => void;
  multiline?: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  onChangeTextValue,
  placeholder,
  label,
  labelIcon,
  selectTextOnFocus,
  secureTextEntry = false,
  editable = true,
  autoCapitalize,

  numberOfLines = 1,
  focusedContent,
  notFocusedContent,
  children,
  onBlur,
  onFocus,
  multiline = false,
}) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(false);
    if (onBlur) onBlur();
  };

  const handleFocus = () => {
    setFocused(true);
    if (onFocus) onFocus();
  };

  const renderFocusContent = () => (focused ? focusedContent : notFocusedContent);

  const renderLabelIcon = () => labelIcon && <Icon src={labelIcon} alt="icon" />;

  const renderLabel = () =>
    value && placeholder ? <Label>{placeholder}</Label> : null;

  return numberOfLines > 1 ? (
    <TextAreaContainer>
      <LabelContainer>
        <LabelAndIcon>
          {renderLabelIcon()}
          {label && <Label>{label}</Label>}
        </LabelAndIcon>
        {renderFocusContent()}
        {children}
      </LabelContainer>
      <TextArea
        value={value}
        onChange={(e) => onChangeTextValue && onChangeTextValue(e.target.value)}
        placeholder={placeholder}
        onBlur={handleBlur}
        onFocus={handleFocus}
        rows={numberOfLines}
        disabled={!editable}        
      />
    </TextAreaContainer>
  ) : (
    <FieldContainer>
      {renderLabelIcon()}
      <TextInputContainer>
        {renderLabel()}
        <Input
          type={secureTextEntry ? 'password' : 'text'}
          value={value}
          onChange={(e) => onChangeTextValue && onChangeTextValue(e.target.value)}
          placeholder={placeholder}
          selectTextOnFocus={selectTextOnFocus}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={!editable}
          autoComplete={autoCapitalize ? 'on' : 'off'}
          
        />
      </TextInputContainer>
      {renderFocusContent()}
      {children}
    </FieldContainer>
  );
};

export default TextInputField;

// Styled Components
const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TextAreaContainer = styled.div`
  padding: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const LabelAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #555;
`;

const Input = styled.input<{ selectTextOnFocus?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  ${({ selectTextOnFocus }) =>
    selectTextOnFocus &&
    css`
      ::selection {
        background-color: #cce4ff;
      }
    `}
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  resize: none;
`;