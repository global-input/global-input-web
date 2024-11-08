import React from 'react';
import styled from 'styled-components';
import GMultiSelector from '../../ui/input/GMultiSelector';


const RenderInputSelectionList = ({ dataitem, onFieldChanged }) => {
    let selectedItems = [];

    if (dataitem.items && dataitem.items.length > 0 && dataitem.value) {
        if (Array.isArray(dataitem.value)) {
            selectedItems = dataitem.items.filter(itm => dataitem.value.includes(itm.value));
        } else {
            selectedItems = dataitem.items.filter(itm => itm.value === dataitem.value);
        }
    }

    return (
        <InputContainer>
            <GMultiSelector
                selectType={dataitem.selectType}
                selectedItems={selectedItems}
                items={dataitem.items}
                label={dataitem.label}
                onValueChange={(items) => {
                    const values = items.map(itm => itm.value);
                    onFieldChanged(values);
                }}
            />
        </InputContainer>
    );
};

export default RenderInputSelectionList;

// Styled Components
const InputContainer = styled.div`
    padding: 10px;
`;