import React from 'react';
import styled from 'styled-components';
import GItemSelector from '../../ui/input/GItemSelector';


const RenderInputSelection = ({ dataitem, onFieldChanged }) => {
    const selectedItem = dataitem.items?.find(item => item.value === dataitem.value) || null;

    return (
        <InputContainer>
            <GItemSelector
                selectedItem={selectedItem}
                items={dataitem.items}
                label={dataitem.label}
                onValueChange={(value) => onFieldChanged(value)}
            />
        </InputContainer>
    );
};

export default RenderInputSelection;

// Styled Components
const InputContainer = styled.div`
    padding: 10px;
`;