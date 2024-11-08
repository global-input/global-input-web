import React from 'react';
import styled from 'styled-components';

const RenderRangeLabel = ({ label }) => {
    if (label) {
        return (
            <LabelContainer>
                <Label>{label}</Label>
            </LabelContainer>
        );
    }
    return null;
};

const RenderRangeField = ({ dataitem, key, onFieldChanged }) => {
    let { label = "", value, minimumValue = 0, maximumValue = 100, step = 1 } = dataitem;

    minimumValue = parseFloat(minimumValue);
    maximumValue = parseFloat(maximumValue);
    step = parseInt(step);

    let sliderValue = value ?? 0;
    let sliderLabels = { value, minimumValue, maximumValue };

    if (typeof value === 'object') {
        sliderLabels = value.labels || sliderLabels;
        sliderValue = value.value ?? 0;
    }

    return (
        <InputContainer key={key}>
            <FieldContainer>
                <RenderRangeLabel label={label} />
                <SliderContainer>
                    <Slider
                        type="range"
                        min={minimumValue}
                        max={maximumValue}
                        step={step}
                        value={sliderValue}
                        onChange={(e) => onFieldChanged(parseFloat(e.target.value))}
                    />
                </SliderContainer>
                <SliderRangeValues>
                    <RangeValue>{sliderLabels.minimumValue}</RangeValue>
                    <RangeValue>{sliderLabels.value}</RangeValue>
                    <RangeValue>{sliderLabels.maximumValue}</RangeValue>
                </SliderRangeValues>
            </FieldContainer>
        </InputContainer>
    );
};

export default RenderRangeField;

// Styled Components
const InputContainer = styled.div`
    padding: 10px;
`;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LabelContainer = styled.div`
    margin-bottom: 5px;
`;

const Label = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

const SliderContainer = styled.div`
    margin: 10px 0;
`;

const Slider = styled.input`
    width: 100%;
    appearance: none;
    height: 6px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    &:hover {
        opacity: 1;
    }
`;

const SliderRangeValues = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const RangeValue = styled.span`
    font-size: 12px;
    color: #666;
`;