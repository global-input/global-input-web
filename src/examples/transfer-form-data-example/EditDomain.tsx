import React, { useState, useCallback } from 'react';
import { InputWithLabel, TextButton, FormFooter, BasicLayout, FormContainer } from './app-layout';
import { useMobile, FormField } from './mobile';

interface Props {
    domain: string;
    changeDomain: (domain: string) => void;
    back: () => void;
}
const EditDomain: React.FC<Props> = ({ domain, changeDomain, back }) => {
    const [content, setContent] = useState(domain);
    const mobile = useMobile({
        action: "input",
        dataType: "form",
        form: {
            title: "Edit Domain",
            fields: [{ ...FIELDS.domain, value: domain }, FIELDS.back, FIELDS.createField]
        }
    });
    const onDomainChanged = () => {
        changeDomain(content.trim());
    };

    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.domain.id:
                setContent(field.value as string);
                break;
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.createField.id:
                onDomainChanged();
                break;
            default:
        }
    });

    return (
        <BasicLayout title="Edit Domain">
            <FormContainer title="Please provide the domain (hostname) that the form is used for">
                <InputWithLabel label="Domain" id="domainId"
                    onChange={setContent}
                    value={content} />
            </FormContainer>
            <FormFooter>
                <TextButton label="Back" onClick={back} />
                <TextButton label="Update" onClick={onDomainChanged} />
            </FormFooter>
        </BasicLayout>
    );
};

const FIELDS = {
    domain: {
        id: "domain",
        type: "text",
        value: "",
        label: "Domain"
    },
    back: {
        id: "back",
        label: "Back",
        type: "button",
        viewId: "row1"
    },
    createField: {
        id: "update",
        label: "Update",
        type: "button",
        viewId: "row1"
    }
}

export default EditDomain;