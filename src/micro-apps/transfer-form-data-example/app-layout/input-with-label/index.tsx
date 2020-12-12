import React, { useRef, useState, useCallback } from 'react';

import { styles } from './styles';

interface StyleStatus {
    label: string;
    field: string;
}
interface Props {
    id?: string;
    readOnly?: boolean;
    type?: string;
    value?: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    help?: string;
    onChange?: (value: string, id?: string) => void;
}
const InputWithLabel: React.FC<Props> = (props) => {
    const [focus, setFocus] = useState(false);
    const elem = useRef<HTMLInputElement>(null);

    let styleStatus: StyleStatus = {
        label: "",
        field: ""
    }
    if (elem.current) {
        if ((!focus) && (!elem.current.value)) {
            styleStatus.label = "placeholder"
        }
    }
    else if ((!focus) && (!props.value)) {
        styleStatus.label = "placeholder"
    }
    if (props.readOnly) {
        styleStatus.field = "readOnly"
    }

    const labelClicked = useCallback(() => {
        const el = props.id && document.getElementById(props.id);
        el && el.focus();
    }, [props.id]);

    if (props.type === "textarea") {
        return (
            <div style={styles.container}>
                <label htmlFor={props.id} onClick={labelClicked}>
                    <span style={styles.arealabel.get(styleStatus.label)}>{props.label}</span>
                </label>

                <textarea
                    id={props.id}
                    style={styles.field.get(styleStatus.field)}
                    readOnly={props.readOnly}
                    rows={6}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(evt) => {
                        if (props.onChange) {
                            props.onChange(evt.target.value, props.id);
                        }
                    }} value={props.value} />
            </div>
        );

    }
    else {
        return (
            <div style={styles.container}>
                <label htmlFor={props.id} onClick={labelClicked}>
                    <span style={styles.label.get(styleStatus.label)}>{props.label}</span>
                </label>
                <input
                    id={props.id}
                    ref={elem => elem}
                    type={props.type}
                    style={styles.field.get(styleStatus.field)}
                    readOnly={props.readOnly}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(evt) => {
                        if (props.onChange) {
                            props.onChange(evt.target.value, props.id);
                        }

                    }} value={props.value} />

                {props.help && (
                    <div style={styles.help}>{props.help}</div>
                )}
            </div>
        );
    }
};

export default InputWithLabel;