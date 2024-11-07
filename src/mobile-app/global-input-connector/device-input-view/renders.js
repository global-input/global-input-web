import React from 'react';
import { Text, View } from 'react-native';

import { styles, stylesData } from "../styles";
import { DisplayContent } from "../../components";
import { formDataUtil } from "../../store";

import renderButton from './renderButton';
import renderRangeField from './renderRangeField';
import renderInfoContent from './renderInfoContent';
import renderInputSelectionList from './renderInputSelectionList';
import renderInputSelection from './renderInputSelection';
import renderInputPickerField from './renderInputPickerField';
import renderTextField from './renderTextField';

const getStyleFromItem = (item, name) => {
    return formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });
};

const getStyleFromViewItem = (formViews, viewid) => {
    if (formViews && formViews.viewIds) {
        return getStyleFromItem(formViews.viewIds[viewid], "fieldView");
    }
    else {
        return styles.fieldView;
    }
};



export const renderFormTitle = ({ initData }) => {
    if (initData && initData.form && initData.form.title) {

        if (typeof initData.form.title === 'object') {

            return (
                <DisplayContent content={initData.form.title} />
            );
        }
        else {
            return (
                <View style={styles.formTitle}>
                    <Text style={styles.formtitleText}>{initData.form.title}</Text>
                </View>
            );

        }
    }
    else {
        return null;
    }
}


const getMapItemKey = (item, index) => {
    if (item.id) {
        return item.id;
    }
    else if (item.label) {
        return index + "_" + item.label;
    }
    else if (item.value) {
        return index + "_" + item.value;
    }
    else {
        return index;
    }
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
            if (!dataitem.type) {
                return renderTextField({ dataitem, fieldSelection, onFieldChanged, onFieldSelected, showHideSecret });
            }
            else {
                return null;
            }
    }
};

export const renderGlobalInputFields = ({ globalInputdata, viewIds, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret,viewid }) => {
    return globalInputdata.map((dataitem, index) => {
        if (!dataitem) {
            return null;
        }
        if(viewid){
            if (dataitem.viewId !== viewid) {
                return null;
            }
        }
        else{
            if (dataitem.viewId) {
                viewIds.add(dataitem.viewId);
                return null;
            }
        }        
        var key = getMapItemKey(dataitem, index);
        const onFieldChanged = value => onGlobalInputDataChanged(value, index);
        const onFieldSelected=dataitem=>dataitem?onSelectField({dataitem,index}):onSelectField(null);
        return (<RenderAField key={key} dataitem={dataitem} onFieldChanged={onFieldChanged} fieldSelection={fieldSelection} onFieldSelected={onFieldSelected} showHideSecret={showHideSecret} />);
    });
};


const RenderViewItem = ({ globalInputdata, viewid, formViews, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret }) => {
    var fieldViewStyle = getStyleFromViewItem(formViews, viewid);
    return (
        <View style={fieldViewStyle}>
            {renderGlobalInputFields({ globalInputdata, viewid, formViews, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret })}            
        </View>
    );
};

export const renderViews = ({ initData, globalInputdata, viewIds, onGlobalInputDataChanged, fieldSelection, onSelectField, showHideSecret }) => {
    if (!viewIds.size) {
        return null;
    }
    viewIds = Array.from(viewIds);
    var formViews = initData.form.views;
    var contentStyle = getStyleFromItem(formViews, "formFields");
    return (
        <View style={contentStyle}>
            {viewIds.map((viewid, index) => {
                return (<RenderViewItem globalInputdata={globalInputdata} viewid={viewid} formViews={formViews} key={viewid} onGlobalInputDataChanged={onGlobalInputDataChanged}
                    fieldSelection={fieldSelection} onSelectField={onSelectField} showHideSecret={showHideSecret} />);
            })}
        </View>
    );
};
