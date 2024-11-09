// TextFieldWithDone.js

import React, { useRef } from 'react';
import styled from 'styled-components';

import images from '../../../configs/images';
import IconButton from '../buttons/IconButton';
import TextInputField from './TextInputField';

const TextFieldWithDone = (props) => {
  const textFieldRef = useRef(null);

  const focus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  };

  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const onFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }
  };

  const donePress = () => {
    if (textFieldRef.current) {
      textFieldRef.current.blur();
    }
  };

  const renderFocusedContent = () => {
    if (props.focusedContent) {
      return props.focusedContent;
    } else {
      let imageURL = images.doneIcon;
      if (props.dark) {
        imageURL = images.doneIconDark;
      }
      return (
        <IconContainer>
          <IconButton image={imageURL} onPress={donePress} />
        </IconContainer>
      );
    }
  };

  return (
    <TextInputField
      multiline={props.multiline}
      secureTextEntry={props.secureTextEntry}
      editable={props.editable}
      value={props.value}
      numberOfLines={props.numberOfLines}
      onBlur={onBlur}
      onFocus={onFocus}
      ref={textFieldRef}
      onChangeTextValue={props.onChangeTextValue}
      autoCapitalize={props.autoCapitalize}
      placeholder={props.placeholder}
      notFocusedContent={props.notFocusedContent}
      focusedContent={renderFocusedContent()}
      labelIcon={props.labelIcon}
    />
  );
};

export default TextFieldWithDone;




const IconContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LabelIcon = styled.img`
  margin-right: 5px;
`;

const LabelAndIcon = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-right: 5px;
`;

 const Label = styled.label`
  font-size: 10px;
  color: #4880ED;
  height: 15px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-family: 'Futura-Medium';
`;

const InputText = styled.input`
  flex: 1;
  font-size: 20px;
  color: #4880ED;
  background-color: transparent;
  width: 100%;
  margin: 0;
  padding: 14px 0;
`;

const TextInputContainer = styled.div`
  flex: 1;
  min-height: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-color: #B9C3CE;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const SelectionFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-color: #4880ED;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

 const SelectionSelectedRow = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SelectionSelectedValueText = styled.span`
  font-size: 20px;
  color: #4880ED;
  width: 100%;
  margin: 0;
  padding: 0;
`;

 const OptionRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const OptionLabel = styled.div`
  width: 35px;
  height: 25px;
`;

const OptionText = styled.span`
  font-size: 20px;
  color: #4880ED;
  margin: 0;
  padding: 0;
`;

const Picker = styled.select`
  height: 150px;
  width: 200px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ nlines }) => nlines * 25 + 50}px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const TextArea = styled.textarea`
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  border-color: rgba(72,128,237,1);
  border-width: 1px;
  border-style: solid;
  color: rgba(72,128,237,1);
`;