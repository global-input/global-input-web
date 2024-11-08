import React from 'react';
import styled from 'styled-components';



const InputPicker = ({ selectedItem, items, onValueChange }) => {
    const selectedValue = selectedItem ? selectedItem.value : '';

    if (!items) {
        return null;
    }

    return (
        <SelectionFieldContainer>
            <Picker
                value={selectedValue}
                onChange={(e) => onValueChange(e.target.value)}
            >
                {items.map((item, index) => (
                    <option key={`${index}_${item.value}`} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Picker>
        </SelectionFieldContainer>
    );
};

export default InputPicker;

// Styled Components
const SelectionFieldContainer = styled.div`
  padding: 8px;
  margin-bottom: 16px;
`;

const Picker = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;