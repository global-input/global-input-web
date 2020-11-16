
import React, { useState } from 'react';


import { InputWithLabel, P, FormContainer, FormFooter, TextButton, DisplayErrorMessage } from '../app-layout';
import { useMobile } from '../mobile';

interface Props {
        back: () => void;
        next: (content: string, label: string) => void;
}
const ContentLabel: React.FC<Props> = ({ back, next }) => {
        const [content, setContent] = useState('');
        const [label, setLabel] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const initData = {
                dataType: "qrcode",
                form: {
                        title: "QR Code Content",
                        fields: Object.values(FIELDS)
                }
        }
        const mobile = useMobile(initData);
        const onContentChange = (content: string) => {
                setContent(content);
                mobile.sendValue(FIELDS.content.id, content);
        };
        const onLabelChanged = (label: string) => {
                setLabel(label);
                mobile.sendValue(FIELDS.label.id, content);
        }
        const onNext = () => {
                if (content.trim().length) {
                        next(content, label);
                }
                else {
                        setErrorMessage("Content is empty!");
                }

        }
        mobile.setOnFieldChange((field) => {
                switch (field.id) {
                        case FIELDS.content.id:
                                setContent(field.value as string);
                                break;
                        case FIELDS.label.id:
                                setLabel(field.value as string);
                                break;
                        case FIELDS.back.id:
                                back();
                                break;
                        case FIELDS.next.id:
                                onNext();
                                break;
                        default:

                                break;
                }
        });
        return (
                <mobile.ControlledContainer title="QR Code Generator" domain="">
                        <FormContainer>
                                <P>Please provide the content for the QR Code. </P>
                                <P>You can encrypt content using your mobile and send the encrypted content to this application for generating an Encrypted QR Code with it</P>
                                <InputWithLabel label="Content to decrypt" id="content"
                                        onChange={onContentChange}
                                        type="textarea"
                                        value={content} />

                                <InputWithLabel id="label" value={label} label="Label" type="text" onChange={onLabelChanged} />
                                {errorMessage && (<DisplayErrorMessage errorMessage={errorMessage} />)}

                        </FormContainer>
                        <FormFooter>
                                <TextButton onClick={back} label='Back' />
                                <TextButton onClick={onNext} label='Cancel' />
                        </FormFooter>

                </mobile.ControlledContainer>

        );
};

const FIELDS = {
        content: {
                id: "content",
                label: "Content for the QR Code",
                value: ""
        },
        label: {
                id: "label",
                label: "Label for the QR Code",
                value: ""
        },
        back: {
                id: "back",
                label: "Back",
                type: "button",
                icon: "back",
                viewId: "foot"
        },
        next: {
                id: "next",
                label: "Next",
                type: "button",
                icon: "continue",
                viewId: "foot"
        },
        info: {
                type: 'info',
                value: 'You may press the "Encrypt" icon below to generate an encrypted content',
                viewId: 'info'
        }
};




export default ContentLabel;