import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom'; ////website
import { useMobile, ConnectWidget,FormField, InitData} from './mobile';
import { TextButton} from './app-layout';
import {AppContainer,Title,Form,ConnectedInstruction,Field,Input,TextArea,Label,CopyToClipboardButton,Footer, DarkButton} from './components';
import * as mobileUI from '../../micro-apps/mobile-ui'; ////website
interface Props {
    domain: string;
    formFields: FormField[];
    setFormFields: (formFields: FormField[]) => void;
    manageForm: () => void;
    editDomain: () => void;
};
const TransferFormData: React.FC<Props> = ({ domain, formFields, setFormFields, manageForm, editDomain}) => {
    const [visibility, setVisibility] = useState(FIELDS.visibility.options[0]);
    const initData = () => {
        const initData = {
            id: 'transfer-form',
            form: {
                title: domain,
                domain: domain,
                label: domain,
                fields: [...Object.values(FIELDS), ...formFields]
            }
        }
        userWithDomainAsFormId(initData);
        return initData;
    };
    const history = useHistory();////website
    const mobile = useMobile(initData, true);


    const toggleVisibility = useCallback(() => {
        const vis = visibility === FIELDS.visibility.options[0] ? FIELDS.visibility.options[1] : FIELDS.visibility.options[0];
        setVisibility(vis);
        mobile.sendValue(FIELDS.visibility.id, vis.value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibility, mobile.sendValue]);

    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.visibility.id:
                toggleVisibility();
                break;
            case FIELDS.manage.id:
                manageForm();
                break;
            case FIELDS.editDomain.id:
                editDomain();
                break;
            default:
                let matched = false;
                for (const [index, formField] of formFields.entries()) {
                    if (formField.id === field.id) {
                        matched = true;
                        const changedFormFields = computeChangedFormFields(formFields, formField.id, field.value as string, index);
                        if (changedFormFields) {
                            setFormFields(changedFormFields);
                        }
                    }
                }
            if (!matched) {
            mobileUI.onFieldChange(field, history); ////website
            }

        }
    });

    const onFieldChanged = (formFields: FormField[], formField: FormField, index: number, value: string) => {

        const changedFormFields = computeChangedFormFields(formFields, formField.id, value, index);
        if (changedFormFields) {
            setFormFields(changedFormFields);
            mobile.sendValue(formField.id as string, value, index);
        }
    }

    return (
        <AppContainer>
            <Title>{domain}</Title>

            <ConnectWidget mobile={mobile}/>
            {mobile.isConnected && (
                <Form>
                    {formFields.map((formField, index) => (<DisplayInputField  key={formField.id} index={index}
                        formField={formField} onFieldChanged={onFieldChanged} formFields={formFields} visibility={visibility}/>
                ))}
        {/*
                    <DisplayInputCopyField
                        field={formField}
                        key={formField.id}
                        hideValue={visibility.value === 0} onChange={value => onFieldChanged(formFields, formField, index, value)} />))}
            */}
                </Form>
            )}
            <Footer>
                <DarkButton onClick={editDomain}>Edit Domain</DarkButton>
                {mobile.isConnected && (
                    <DarkButton onClick={toggleVisibility}>{visibility.label}</DarkButton>
                )}
                <DarkButton onClick={manageForm}>Manage</DarkButton>
            </Footer>

        </AppContainer>);


};
const DisplayInputField=({formFields,formField,index,onFieldChanged,visibility})=>{

    if(visibility.value === 0 || (!formField.nLines) || formField.nLines <=1){
        return (<Field>
            <Input id={formField.id}  type={visibility.value === 0?'password':'text'} value={formField.value} placeholder={formField.label}
            onChange={(evt)=>onFieldChanged(formFields, formField, index, evt.target.value)}/>
            <Label htmlFor="decryptedContent">{formField.label}</Label>
            <CopyToClipboardButton value={formField.value} position={2}>Copy</CopyToClipboardButton>
            </Field>);
    }
    else{
        return (<Field>
            <TextArea id={formField.id} value={formField.value} placeholder={formField.label}
                onChange={(evt)=>onFieldChanged(formFields, formField, index, evt.target.value)}/>
                <Label htmlFor="decryptedContent">{formField.label}</Label>
                <CopyToClipboardButton value={formField.value}>Copy</CopyToClipboardButton>
        </Field>);
    }
}




const FIELDS = {
    editDomain: {
        id: "editDomain",
        type: "button",
        label: "Edit Domain",
        viewId: "row1"
    },
    manage: {
        id: "manageForm",
        type: "button",
        label: "Manage",
        viewId: "row1"
    },
    visibility: {
        id: "fieldValueVisibility",
        type: 'button',
        viewId: "row1",
        options: [{ value: 0, label: 'Show' }, { value: 1, label: 'Hide' }],
        value: 0
    }

};
mobileUI.add(FIELDS);////website



const computeChangedFormFields = (formFields: FormField[], fieldId: string | null | undefined, value: string, index: number) => {
    let fieldModified = false;
    const fields = formFields.map((f, ind) => {
        if (fieldId) {
            if (f.id === fieldId) {
                fieldModified = true;
                return { ...f, value };
            }
        }
        else {
            if (index >= 0 && index < formFields.length) {
                if (ind === index) {
                    fieldModified = true;
                    return { ...f, value };
                }
            }
        }
        return f;
    });
    if (fieldModified) {
        return fields;
    }
    return null;
}

export const userWithDomainAsFormId = (initData: InitData) => {
    if (initData?.form?.domain && initData?.form?.fields?.length) {
        const textFields = initData.form.fields.filter(f => {
            if ((!f.type) || f.type === 'text') {
                if (f.nLines && f.nLines > 1) {
                    return false;
                }
                return true;
            }
            return false;
        });
        if (!textFields.length) {
            return null;
        }
        initData.form.id = `###${textFields[0].id}###@${initData.form.domain}`;
    }
};


export default TransferFormData;