import React from 'react';
import { FormField } from 'global-input-react';
import InputWithCopy from '../input-with-copy';

interface DisplayInputCopyFieldProps {
    field: FormField;
    hideValue: boolean;
    onChange?: (value: string, id?: string) => void;
    onCopied?: () => void;
}

const DisplayInputCopyField: React.FC<DisplayInputCopyFieldProps> = ({ field, hideValue, onChange, onCopied }) => {
    var fieldType = "text";
    if (field.nLines && field.nLines > 1) {
        fieldType = "textarea";
    }
    if (hideValue) {
        fieldType = "password";
    }
    let value = field.value as string;
    if (!value) {
        value = '';
    }
    return (
        <InputWithCopy label={field.label} id={field.id} type={fieldType}
            value={value} onCopied={onCopied}
            onChange={onChange} />
    );
};

export default DisplayInputCopyField;
