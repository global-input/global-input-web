// SliderComponent.jsx
import React from 'react';
import { styles } from '../styles';

const renderRangeLabel = (dataitem) => {
  if (dataitem.label) {
    return (
      <div style={styles.labelContainer}>
        <span style={styles.label}>{dataitem.label}</span>
      </div>
    );
  } else {
    return null;
  }
};

const SliderComponent = ({ dataitem, onFieldChanged }) => {
  let { label, value, minimumValue, maximumValue, step } = dataitem;

  label = label || '';

  minimumValue = minimumValue !== undefined ? parseFloat(minimumValue) : 0;
  maximumValue = maximumValue !== undefined ? parseFloat(maximumValue) : 100;
  step = step !== undefined ? parseFloat(step) : 1;

  let sliderValue = value;
  let sliderLabels = {
    value,
    minimumValue,
    maximumValue,
  };

  if (typeof value === 'object') {
    if (value.labels) {
      sliderLabels = value.labels;
    }
    sliderValue = value.value;
  }

  sliderValue = sliderValue !== undefined ? parseFloat(sliderValue) : 0;

  return (
    <div style={styles.inputContainer}>
      <div style={styles.fieldContainer}>
        {renderRangeLabel(dataitem)}
        <div style={styles.sliderContainer}>
          <input
            type="range"
            value={sliderValue}
            min={minimumValue}
            max={maximumValue}
            step={step}
            onChange={(event) => {
              onFieldChanged(event.target.value);
            }}
          />
        </div>
        <div style={styles.sliderRangeValues}>
          <span style={styles.rangeValue}>{sliderLabels.minimumValue}</span>
          <span style={styles.rangeValue}>{sliderLabels.value}</span>
          <span style={styles.rangeValue}>{sliderLabels.maximumValue}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;