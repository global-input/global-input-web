import React from 'react';
import styled from 'styled-components';
import InputPicker from '../../components/input/InputPicker';


const RenderInputPickerField = ({ dataitem, onFieldChanged }) => {
    let selectedItem = null;

    if (dataitem.items) {
        selectedItem = dataitem.items.find(item => item.value === dataitem.value) || null;
    }

    return (
        <InputContainer >
            <InputPicker
                selectedItem={selectedItem}
                items={dataitem.items}
                label={dataitem.label}
                onValueChange={(value) => onFieldChanged(value)}
            />
        </InputContainer>
    );
};

export default RenderInputPickerField;

// Styled component
const InputContainer = styled.div`
  padding: 8px;
  margin-bottom: 16px;
`;