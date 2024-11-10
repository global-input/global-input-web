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
  
  const getMapItemKey = (item, index) => {
    if (item.id) {
      return item.id;
    } else if (item.label) {
      return index + '_' + item.label;
    } else if (item.value) {
      return index + '_' + item.value;
    } else {
      return index;
    }
  };
  
  const RenderAField = ({
    dataitem,
    fieldSelection,
    onFieldChanged,
    onFieldSelected,
    showHideSecret,
  }) => {
    switch (dataitem.type) {
      case 'button':
        return renderButton({ dataitem, onFieldChanged });
      case 'range':
        return renderRangeField({ dataitem, onFieldChanged });
      case 'info':
        return renderInfoContent({ dataitem });
      case 'list':
        return renderInputSelectionList({ dataitem, onFieldChanged });
      case 'select':
        return renderInputSelection({ dataitem, onFieldChanged });
      case 'picker':
        return renderInputPickerField({ dataitem, onFieldChanged });
      case 'text':
      case 'secret':
        return renderTextField({
          dataitem,
          fieldSelection,
          onFieldChanged,
          onFieldSelected,
          showHideSecret,
        });
      default:
        if (!dataitem.type) {
          return renderTextField({
            dataitem,
            fieldSelection,
            onFieldChanged,
            onFieldSelected,
            showHideSecret,
          });
        } else {
          return null;
        }
    }
  };
  
  export const renderGlobalInputFields = ({
    globalInputdata,
    viewIds,
    onGlobalInputDataChanged,
    fieldSelection,
    onSelectField,
    showHideSecret,
    viewid,
  }) => {
    return globalInputdata.map((dataitem, index) => {
      if (!dataitem) {
        return null;
      }
      if (viewid) {
        if (dataitem.viewId !== viewid) {
          return null;
        }
      } else {
        if (dataitem.viewId) {
          viewIds.add(dataitem.viewId);
          return null;
        }
      }
      const key = getMapItemKey(dataitem, index);
      const onFieldChanged = (value) => onGlobalInputDataChanged(value, index);
      const onFieldSelected = (dataitem) =>
        dataitem ? onSelectField({ dataitem, index }) : onSelectField(null);
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
  
  const RenderViewItem = ({
    globalInputdata,
    viewid,
    formViews,
    onGlobalInputDataChanged,
    fieldSelection,
    onSelectField,
    showHideSecret,
  }) => {
    const fieldViewStyle = getStyleFromViewItem(formViews, viewid);
    return (
      <div style={fieldViewStyle}>
        {renderGlobalInputFields({
          globalInputdata,
          viewid,
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
    viewIds = Array.from(viewIds);
    const formViews = initData.form.views;
    const contentStyle = getStyleFromItem(formViews, 'formFields');
    return (
      <div style={contentStyle}>
        {viewIds.map((viewid) => (
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
      </div>
    );
  };