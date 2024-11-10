import React from 'react';

import GItemSelector from '../../ui/input/GItemSelector';

import {styles} from "../styles";
const RenderInputSelection = ({ dataitem, onFieldChanged }) => {
    const selectedItem = dataitem.items?.find(item => item.value === dataitem.value) || null;

    return (
        <div style={styles.inputContainer}>
            <GItemSelector
                selectedItem={selectedItem}
                items={dataitem.items}
                label={dataitem.label}
                onValueChange={(value) => onFieldChanged(value)}
            />
        </div>
    );
};

export default RenderInputSelection;

