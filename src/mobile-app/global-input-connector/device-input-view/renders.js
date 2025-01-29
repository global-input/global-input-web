import React from 'react';
import DisplayContent from '../../components/display-text/DisplayContent';
import renderButton from './renderButton';
import renderRangeField from './renderRangeField';
import renderInfoContent from './renderInfoContent';
import renderInputSelectionList from './renderInputSelectionList';
import renderInputSelection from './renderInputSelection';
import renderInputPickerField from './renderInputPickerField';
import renderTextField from './renderTextField';
import {formDataUtil} from '../../store';
import { styles, stylesData } from "../styles";

const getStyleFromItem = (item, name) => {
    return formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });
  };
  
  const getStyleFromViewItem = (formViews, viewid) => {
    if (formViews && formViews.viewIds) {
      return getStyleFromItem(formViews.viewIds[viewid], 'fieldView');
    } else {
      return styles.fieldView;
    }
  };
  
  export const renderFormTitle = ({ initData }) => {
    if (initData && initData.form && initData.form.title) {
      if (typeof initData.form.title === 'object') {
        return <DisplayContent content={initData.form.title} />;
      } else {
        return (
          <div style={styles.formTitle}>
            <span style={styles.formtitleText}>{initData.form.title}</span>
          </div>
        );
      }
    } else {
      return null;
    }
  };
  
  
  const getMapItemKey = (item, index, prefix = '') => {
    if (item.id) {
      return `${prefix}${item.id}`;
    } else if (item.label) {
      return `${prefix}${index}_${item.label}`;
    } else if (item.value) {
      return `${prefix}${index}_${item.value}`;
    } else {
      return `${prefix}${index}`;
    }
  };
  const RenderAField = ({
    dataitem,
    fieldSelection,
    onFieldChanged,
    onFieldSelected,
    showHideSecret,
    viewId
  }) => {
    // Ensure each field gets a unique key based on its viewId context
    const uniqueKey = `${viewId}_${getMapItemKey(dataitem, dataitem.index || 0)}`;
    
    switch (dataitem.type) {
      case 'button':
        return renderButton({ dataitem, onFieldChanged, key: uniqueKey });
      case 'range':
        return renderRangeField({ dataitem, onFieldChanged, key: uniqueKey });
      case 'info':
        return renderInfoContent({ dataitem, key: uniqueKey });
      case 'list':
        return renderInputSelectionList({ dataitem, onFieldChanged, key: uniqueKey });
      case 'select':
        return renderInputSelection({ dataitem, onFieldChanged, key: uniqueKey });
      case 'picker':
        return renderInputPickerField({ dataitem, onFieldChanged, key: uniqueKey });
      case 'text':
      case 'secret':
        return renderTextField({
          dataitem,
          fieldSelection,
          onFieldChanged,
          onFieldSelected,
          showHideSecret,
          key: uniqueKey
        });
      default:
        if (!dataitem.type) {
          return renderTextField({
            dataitem,
            fieldSelection,
            onFieldChanged,
            onFieldSelected,
            showHideSecret,
            key: uniqueKey
          });
        }
        return null;
    }
  };
  
  export const renderGlobalInputFields = ({
    globalInputdata,
    viewIds,
    onGlobalInputDataChanged,
    fieldSelection,
    onSelectField,
    showHideSecret,
    viewId
  }) => {
    return globalInputdata.map((dataitem, index) => {
      if (!dataitem) {
        return null;
      }
      
      if (viewId) {
        if (dataitem.viewId !== viewId) {
          return null;
        }
      } else {
        if (dataitem.viewId) {
          viewIds.add(dataitem.viewId);
          return null;
        }
      }
      
      const onFieldChanged = (value) => onGlobalInputDataChanged(value, index);
      const onFieldSelected = (dataitem) =>
        dataitem ? onSelectField({ dataitem, index }) : onSelectField(null);
      
      return (
        <RenderAField
          key={`${viewId || 'main'}_field_${index}`}
          dataitem={{...dataitem, index}}
          onFieldChanged={onFieldChanged}
          fieldSelection={fieldSelection}
          onFieldSelected={onFieldSelected}
          showHideSecret={showHideSecret}
          viewId={viewId}
        />
      );
    });
  };
  
  const RenderViewItem = ({
    globalInputdata,
    viewId,
    formViews,
    onGlobalInputDataChanged,
    fieldSelection,
    onSelectField,
    showHideSecret,
  }) => {
    const fieldViewStyle = getStyleFromViewItem(formViews, viewId);
    
    return (
      <div style={fieldViewStyle} key={`view_${viewId}`}>
        {renderGlobalInputFields({
          globalInputdata,
          viewId,
          formViews,
          onGlobalInputDataChanged,
          fieldSelection,
          onSelectField,
          showHideSecret,
        })}
      </div>
    );
  };
  
  export const renderViews = ({
    initData,
    globalInputdata,
    viewIds,
    onGlobalInputDataChanged,
    fieldSelection,
    onSelectField,
    showHideSecret,
  }) => {
    if (!viewIds.size) {
      return null;
    }
    
    const uniqueViewIds = Array.from(new Set(viewIds));
    const formViews = initData.form.views;
    const contentStyle = getStyleFromItem(formViews, 'formFields');
    
    return (
      <div style={contentStyle}>
        {uniqueViewIds.map((viewId) => (
          <RenderViewItem
            key={`view_container_${viewId}`}
            globalInputdata={globalInputdata}
            viewId={viewId}
            formViews={formViews}
            onGlobalInputDataChanged={onGlobalInputDataChanged}
            fieldSelection={fieldSelection}
            onSelectField={onSelectField}
            showHideSecret={showHideSecret}
          />
        ))}
      </div>
    );
  };