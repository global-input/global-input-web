import React, { useState, useCallback } from 'react';
import { Title, InputWithLabel, TextButton, FormFooter, BasicLayout, FormContainer, RadioButton } from './app-layout';
import { useMobile, FormField } from './mobile';

interface Props {
    formFields: FormField[];
    onFormStructureChanged: (formFields: FormField[]) => void;
    back: () => void;
}
const CreateField: React.FC<Props> = ({ formFields, onFormStructureChanged, back }) => {
    const [label, setLabel] = useState('');
    const [fieldType, setFieldType] = useState(FIELDS.type.items[0].value);
    const initData = {
        form: {
            title: "Creating New Field",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData);
    const onCreateNew = () => {
        const newFormFields = createNewFormFields(formFields, label, fieldType);
        if (newFormFields) {
            onFormStructureChanged(newFormFields);
            back();
        }
    }

    mobile.setOnFieldChange((field) => {
        switch (field.id) {
            case FIELDS.type.id:
                if (!field.value || (!(field.value as string[]).length)) {
                    return -1;
                }
                setFieldType((field.value as string[])[0] as string);
                break;
            case FIELDS.name.id:
                setLabel(field.value as string);
                break;
            case FIELDS.createField.id:
                onCreateNew();
                break;
            case FIELDS.cancel.id:
                back();
        }
    });


    const setFormLabel = useCallback((value: string) => {
        setLabel(value);
        mobile.sendValue(FIELDS.name.id, value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLabel, mobile.sendValue]);
    return (
        <BasicLayout title="Form Manager">
            <FormContainer title="Creating Field">


                <InputWithLabel label="Name of the field" id="newFieldLabel"
                    onChange={setFormLabel}
                    value={label} />
                <FormContainer>
                    <Title>Type:</Title>
                    <RadioButton name="fieldType" checked={fieldType === FIELDS.type.items[0].value} label="Single-line" onChange={() => {
                        setFieldType(FIELDS.type.items[0].value);
                        mobile.sendValue(FIELDS.type.id, FIELDS.type.items[0].value);
                    }} />
                    <RadioButton name="fieldType" checked={fieldType === FIELDS.type.items[1].value} label="Multi-line" onChange={() => {
                        setFieldType(FIELDS.type.items[1].value);
                        mobile.sendValue(FIELDS.type.id, FIELDS.type.items[1].value);
                    }} />
                    <RadioButton name="fieldType" checked={fieldType === FIELDS.type.items[2].value} label="Password" onChange={() => {
                        setFieldType(FIELDS.type.items[2].value);
                        mobile.sendValue(FIELDS.type.id, FIELDS.type.items[2].value);
                    }} />
                </FormContainer>
            </FormContainer>
            <FormFooter>
                <TextButton label="Back" onClick={back} />
                <TextButton label="Create" onClick={onCreateNew} />
            </FormFooter>
        </BasicLayout>



    );
};



const createNewFormFields = (formFields: FormField[], label: string, fieldType: string) => {
    label = label.trim();
    if (!label) {
        return null;
    }
    const nLines = fieldType === FIELDS.type.items[1].value ? 5 : 1;
    const id = label.replace(' ', "_").toLowerCase();
    for (let f of formFields) {
        if (f.id === id) {
            return null;
        }
    }
    const type = fieldType === FIELDS.type.items[2].value ? 'secret' : 'text';
    return [...formFields, { id, label, type, value: '', nLines }];
};

const FIELDS = {
    name: {
        id: "nameOfNewField",
        type: "text",
        value: "",
        label: "Name of the field"
    },
    type: {
        id: "multiLines",
        label: "Type",
        type: "list",
        selectType: "single",
        value: 'single-line',
        items: [
            { value: "single-line", label: "Single-line" },
            { value: "multi-line", label: "Multi-line" },
            { value: "password", label: "Password" }

        ]
    },
    cancel: {
        id: "cancelAdd",
        label: "Cancel",
        type: "button",
        viewId: "row1"
    },
    createField: {
        id: "createNew",
        label: "Create",
        type: "button",
        viewId: "row1"
    }
}

export default CreateField;