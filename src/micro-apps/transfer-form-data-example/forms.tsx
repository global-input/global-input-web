import React, { useState } from 'react';
import {
    Field, Input, TextArea, Label, CopyToClipboardButton,
    InputGroup, CheckBox,Form,Form2,Title,Select,Option,DarkButton,Footer2
} from './components';

const isFieldChecked= (formField,selectedFields) => selectedFields.filter(s => s === formField).length;

export const DisplayInputField = ({
    formField, onChange, visibility,
    selectedFields, setSelectedFields }) => {

    const [focused, setFocused] = useState(false);
    const checked = isFieldChecked(formField,selectedFields);
    const showCheckbox=(!focused) && (!formField.value);
    const type=visibility.value === 0 ? 'password' : 'text'
    const setChecked = () => {
            setSelectedFields([...selectedFields, formField]);
    };
    const setUnchecked = () => {
            setSelectedFields(selectedFields.filter(s => s !== formField));
    };
    const toggleSelect = () => {
        if (checked) {
            setUnchecked();
        }
        else {
            setChecked();
        }
    };
    const onFocus=()=>{
        setFocused(true);
        setUnchecked();
    }
    const onBlur=()=>{
        setFocused(false)
    }
    if (visibility.value === 0 || (!formField.nLines) || formField.nLines <= 1) {
        return (
            <InputGroup>
                {showCheckbox && (<CheckBox label="" checked={checked} onChange={toggleSelect} />)}
                <Field>
                    <Input id={formField.id} type={type}
                    value={formField.value}
                    placeholder={formField.label}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur} />
                    <Label htmlFor={formField.id}>{formField.label}</Label>
                </Field>
                <CopyToClipboardButton value={formField.value} position={3}>Copy</CopyToClipboardButton>
            </InputGroup>
        );


    }
    else {
        return (
            <InputGroup>
            {showCheckbox && (<CheckBox checked={checked} onChange={toggleSelect} />)}
            <Field>
                <TextArea id={formField.id} value={formField.value} placeholder={formField.label}
                    onChange={onChange} />
                <Label htmlFor={formField.id}>{formField.label}</Label>
            </Field>
            <CopyToClipboardButton value={formField.value} position={3}>Copy</CopyToClipboardButton>

        </InputGroup>
        );

    }
};





const FIELD_TYPES=[{value:'single-line', label:'Single Line Field'},
                 {value:'multi-line', label:'Multi Line Field'},
                 {value:'password', label:'Password Field'}]

export const AddNewField=({formFields,onFormModified})=>{
    const [label, setLabel] = useState('');
    const [fieldType, setFieldType] = useState(FIELD_TYPES[0]);
    const onChange=(evt)=>{
        setLabel(evt.target.value);
    };
    const onAddNewField=()=>{
        const fieldName = label.trim();
        if (!fieldName) {
            return;
        }
        const nLines = fieldType === FIELD_TYPES[1] ? 5 : 1;
        const id = label.replace(' ', "_").toLowerCase();
        for (let f of formFields) {
            if (f.id === id) {
                return;
            }
        }
        const type = fieldType === FIELD_TYPES[2] ? 'secret' : 'text';
      const newFormFields=[...formFields, { id, label, type, value: '', nLines }];
      onFormModified(newFormFields,true);
    }
    const onSelectChange=(evt)=>{
        const matched=FIELD_TYPES.filter(f=>f.value===evt.target.value);
        if(matched.length){
            setFieldType(matched[0]);
        }
    }

    return (
        <Form>
        <Form2>
            <Title>Add new field</Title>
            <Field>
            <Input id="addFieldLabel" type="text"
                        value={label}
                        placeholder="Field Name"
                        onChange={onChange}/>
                        <Label htmlFor="addFieldLabel">Field Name</Label>
            </Field>
            <Select value={fieldType.value} onChange={onSelectChange}>
                {FIELD_TYPES.map(f=>( <Option key={f.value} value={f.value}>{f.label}</Option>))}
              </Select>
              <Footer2>
            <DarkButton onClick={onAddNewField}>Add</DarkButton>
            </Footer2>
        </Form2>
        </Form>

    );
}