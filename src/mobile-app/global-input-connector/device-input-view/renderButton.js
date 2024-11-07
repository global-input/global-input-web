import React from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import { styles, stylesData } from "../styles";
import { images } from "../../configs";
import { formDataUtil } from "../../store";
import { IconButton } from "../../components";


const getContentAndStyle = (content, name) => {
    return formDataUtil.getContentAndStyle({ content, name, styles, data: stylesData });
};



const getStyleFromItem = (item, name) => formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });

const createButtonProperties = dataitem => {
    var buttonProps = {
        label: dataitem.label,
        value: dataitem.value,
        iconText: dataitem.iconText,
    };
    if (dataitem.icon) {
        if (typeof dataitem.icon === 'object') {
            if (dataitem.icon.iconText) {
                buttonProps.iconText = dataitem.icon.iconText;
            }
            if (dataitem.icon.name) {
                buttonProps.iconImage = images.findImageIcon(dataitem.icon.name);
            }
        }
        else {
            buttonProps.iconImage = images.findImageIcon(dataitem.icon);
        }
    }
    if (!dataitem.options) {
        return buttonProps;
    }
    for (var i = 0; i < dataitem.options.length; i++) {
        if (dataitem.options[i].value === dataitem.value) {
            return createButtonProperties(dataitem.options[i]);
        }
    }
    return buttonProps;
};


const renderButtonLabel = label => {
    if (label) {
        var buttonLabel = getContentAndStyle(label, "buttonText");
        return (
            <Text style={buttonLabel.style}>{buttonLabel.content}</Text>
        );
    }
    else {
        return null;
    }
};


export default ({ dataitem, onFieldChanged }) => {
    var buttonProps = createButtonProperties(dataitem);
    if (buttonProps.iconImage) {
        return (
            <View style={getStyleFromItem(buttonProps.container, "iconContainer")}>
                <IconButton image={buttonProps.iconImage}
                    label={buttonProps.label}
                    onPress={() => onFieldChanged(buttonProps.value)} />
            </View>
        );
    }
    else if (buttonProps.iconText) {
        var iconText = getContentAndStyle(buttonProps.iconText, "buttonText");
        return (
            <TouchableHighlight onPress={() => onFieldChanged(buttonProps.value)}>
                <View style={getStyleFromItem(dataitem.container, "buttonContainer")}>
                    <View style={getStyleFromItem(dataitem, "button")}>
                        <Text style={iconText.style}>{iconText.content}</Text>
                    </View>
                    {renderButtonLabel(buttonProps.label)}
                </View>
            </TouchableHighlight>
        );

    }
    else {
        var buttonLabel = getContentAndStyle(buttonProps.label, "buttonText");
        return (
            <TouchableHighlight onPress={() => onFieldChanged(buttonProps.value)}>
                <View style={getStyleFromItem(dataitem.container, "buttonContainer")}>
                    <View style={getStyleFromItem(dataitem, "button")}>
                        <Text style={buttonLabel.style}>{buttonLabel.content}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
};