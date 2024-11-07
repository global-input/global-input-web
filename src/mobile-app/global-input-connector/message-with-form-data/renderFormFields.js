import React from 'react';
import {
    Text,
    TextInput,    
    View    
  } from 'react-native';
import { styles } from "./styles";
import { appdata } from "../../store";
import {CopyToClipboard} from "../../components";

const renderAFormFieldWithHideValue = ({ formField, index, label }) => {
    const displayValue = "*********";
    return (
        <CopyToClipboard key={index} style={styles.itemRow} contentContainerStyle={styles.showFieldContainer}
            content={formField.value} convert={appdata.decryptContent.bind(appdata)}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{displayValue}</Text>
            </View>
        </CopyToClipboard>

    );
};


const renderAFormFieldWithShowValue = ({ formField, index, label }) => {
    var displayValue = "*********";
    var errorMessage = null;
    displayValue = formField.value;

    var multiline = false;
    var numberOfLines = 1;
    if (formField.nLines && formField.nLines > 1) {
        multiline = true;
        numberOfLines = parseInt(formField.nLines);
        if (!numberOfLines) {
            numberOfLines = 6;
        }
    }
    return (


        <CopyToClipboard key={index} contentContainerStyle={styles.showFieldContainer}
            content={formField.value} convert={appdata.decryptContent.bind(appdata)}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textarea} multiline={multiline}
                secureTextEntry={false}
                editable={false}
                value={displayValue}
                numberOfLines={numberOfLines} />            
        </CopyToClipboard>


    );

};


const getFieldLabe = formField => {
    if (formField.label && formField.label.trim().length > 1) {
        return formField.label;
    }
    else {
        return formField.id;
    }
}

const renderAFormFieldWithShow = (formField, index) => renderAFormFieldWithShowValue({ formField, index, label: getFieldLabe(formField) });
const renderAFormFieldWithHide = (formField, index) => renderAFormFieldWithHideValue({ formField, index, label: getFieldLabe(formField) });


export default ({ action, formData}) => {
    var fields = formData.fields;
    if (fields && fields.length) {
        if (action.show) {
            return fields.map(renderAFormFieldWithShow);
        }
        else {
            return fields.map(renderAFormFieldWithHide);
        }
    }
    else {
        return null;
    }
}