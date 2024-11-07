import React from 'react';
import { Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from "../styles";



const renderRangeLabel = dataitem => {
    if (dataitem.label) {
        return (
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{dataitem.label}</Text>
            </View>
        );
    }
    else {
        return null;
    }
};


export default ({ dataitem, key, onFieldChanged }) => {

    var { label, value, minimumValue, maximumValue, step } = dataitem;
    if (!label) {
        label = "";
    }
    if (!minimumValue) {
        minimumValue = 0;
    }
    else {
        minimumValue = parseFloat(minimumValue);
    }
    if (!maximumValue) {
        maximumValue = 100;
    }
    else {
        maximumValue = parseFloat(maximumValue);
    }

    if (!step) {
        step = 1;
    }
    else {
        step = parseInt(step);
    }


    var sliderValue = value;
    var sliderLabels = {
        value,
        minimumValue,
        maximumValue
    }
    if (typeof value === 'object') {
        if (value.labels) {
            sliderLabels = value.labels;
        }
        sliderValue = value.value;
    }
    if (!sliderValue) {
        sliderValue = 0;
    }
    else {
        sliderValue = parseFloat(sliderValue);
    }


    return (
        <View style={styles.inputContainer} key={key}>
            <View style={styles.fieldContainer}>
                {renderRangeLabel(dataitem)}
                <View style={styles.sliderContainer}>
                    <Slider value={sliderValue} minimumValue={minimumValue} maximumValue={maximumValue} step={step} onSlidingComplete={(value) => {
                        onFieldChanged(value);
                    }} />
                </View>
                <View style={styles.sliderRangeValues}>
                    <Text style={styles.rangeValue}>{sliderLabels.minimumValue}</Text>
                    <Text style={styles.rangeValue}>{sliderLabels.value}</Text>
                    <Text style={styles.rangeValue}>{sliderLabels.maximumValue}</Text>
                </View>

            </View>
        </View>
    );
};
