import React from 'react';
import styled from 'styled-components';
import DisplayContent from '../../components/display-text/DisplayContent';
import renderButton from './renderButton';
import renderRangeField from './renderRangeField';
import renderInfoContent from './renderInfoContent';
import renderInputSelectionList from './renderInputSelectionList';
import renderInputSelection from './renderInputSelection';
import renderInputPickerField from './renderInputPickerField';
import renderTextField from './renderTextField';
import {formDataUtil} from '../../../appdata';
import { styles, stylesData } from "../styles";

const getStyleFromItem = (item, name) => formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });

const getStyleFromViewItem = (formViews, viewid) => {
    if (formViews && formViews.viewIds) {
        return getStyleFromItem(formViews.viewIds[viewid], 'fieldView');
    } else {
        return styles.fieldView;
    }
};

export const renderFormTitle = ({ initData }) => {
    if (initData?.form?.title) {
        return typeof initData.form.title === 'object' ? (
            <DisplayContent content={initData.form.title} />
        ) : (
            <FormTitle>
                <TitleText>{initData.form.title}</TitleText>
            </FormTitle>
        );
    }
    return null;
};

const getMapItemKey = (item, index) => {
    if (item.id) return item.id;
    if (item.label) return `${index}_${item.label}`;
    if (item.value) return `${index}_${item.value}`;
    return index;
};

const RenderAField = ({ dataitem, fieldSelection, onFieldChanged, onFieldSelected, showHideSecret }) => {
    switch (dataitem.type) {
        case 'button': return renderButton({ dataitem, onFieldChanged });
        case 'range': return renderRangeField({ dataitem, onFieldChanged });
        case 'info': return renderInfoContent({ dataitem });
        case 'list': return renderInputSelectionList({ dataitem, onFieldChanged });
        case 'select': return renderInputSelection({ dataitem, onFieldChanged });
        case 'picker': return renderInputPickerField({ dataitem, onFieldChanged });
        case 'text':
        case 'secret': return renderTextField({ dataitem, fieldSelection, onFieldChanged, onFieldSelected, showHideSecret });
        default:
            if (!dataitem.type) return renderTextField({ dataitem, fieldSelection, onFieldChanged, onFieldSelected, showHideSecret });
            return null;
    }
};

export const renderGlobalInputFields = ({ globalInputdata, viewIds, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret, viewid }) => {
    return globalInputdata.map((dataitem, index) => {
        if (!dataitem) return null;
        if (viewid && dataitem.viewId !== viewid) return null;
        if (!viewid && dataitem.viewId) {
            viewIds.add(dataitem.viewId);
            return null;
        }
        
        const key = getMapItemKey(dataitem, index);
        const onFieldChanged = (value) => onGlobalInputDataChanged(value, index);
        const onFieldSelected = (dataitem) => dataitem ? onSelectField({ dataitem, index }) : onSelectField(null);
        
        return (
            <RenderAField
                key={key}
                dataitem={dataitem}
                onFieldChanged={onFieldChanged}
                fieldSelection={fieldSelection}
                onFieldSelected={onFieldSelected}
                showHideSecret={showHideSecret}
            />
        );
    });
};

const RenderViewItem = ({ globalInputdata, viewid, formViews, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret }) => {
    const fieldViewStyle = getStyleFromViewItem(formViews, viewid);
    
    return (
        <FieldView style={fieldViewStyle}>
            {renderGlobalInputFields({ globalInputdata, viewid, formViews, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret })}
        </FieldView>
    );
};

export const renderViews = ({ initData, globalInputdata, viewIds, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret }) => {
    if (!viewIds.size) return null;
    
    const viewIdArray = Array.from(viewIds);
    const formViews = initData.form.views;
    const contentStyle = getStyleFromItem(formViews, 'formFields');
    
    return (
        <ContentContainer style={contentStyle}>
            {viewIdArray.map((viewid) => (
                <RenderViewItem
                    key={viewid}
                    globalInputdata={globalInputdata}
                    viewid={viewid}
                    formViews={formViews}
                    onGlobalInputDataChanged={onGlobalInputDataChanged}
                    fieldSelection={fieldSelection}
                    onSelectField={onSelectField}
                    showHideSecret={showHideSecret}
                />
            ))}
        </ContentContainer>
    );
};

// Styled Components
const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const TitleText = styled.h1`
    font-size: 1.5em;
    color: #333;
`;

const FieldView = styled.div`
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;