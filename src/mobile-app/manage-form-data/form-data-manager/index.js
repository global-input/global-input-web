import React, {useState} from 'react';


import images from '../../configs/images';
import menusConfig from '../../configs/menusConfig';
import ListFormData from '../list-form-data';
import NotFormDataView from './NotFormDataView';
import EditFormData from '../edit-form-data';
import DisplayFormData from '../display-form-data';
import ListFormLabels from '../list-form-labels';
import {formDataUtil} from '../../store';
const ACT_TYPE = {
  NO_DATA: 1,
  LIST_ITEMS: 2,
  LIST_LABELS: 3,
  CREATE_NEW_FORM: 4,
  VIEW_FORM_DATA: 5,
  EDIT_FORM_DATA: 6,
  LABEL_ITEMS_BY_LABEL: 7,
};

const getStateFromProps = formDataStorage => {
  var data = {
    type: ACT_TYPE.LIST_ITEMS,
    formData: null,
    label: null,
  };
  if (
    !formDataStorage.getSavedFormContent() ||
    formDataStorage.getSavedFormContent().length < 1
  ) {
    data.type = ACT_TYPE.NO_DATA;
  }
  return data;
};


const FormDataManager= ({
  formDataStorage,
  menuItems,
  title,
  displayFormDataProperties
}) => {
  const [data, setData] = useState(()=>getStateFromProps(formDataStorage));
  const onCreateFormData = () => {
    setData({...data, type: ACT_TYPE.CREATE_NEW_FORM});;
  };
  const getOnCreateFormData = () => {
    if (formDataStorage.createFormData) {
      return onCreateFormData;
    } else {
      return null;
    }
  };
  const createFormData = formData => {
    formDataStorage.createFormData(formData);
    var newData = {...data};
    if (formData.label && formData.label === data.label) {
      newData.type = ACT_TYPE.LABEL_ITEMS_BY_LABEL;
    } else {
      newData.type = ACT_TYPE.LIST_ITEMS;
      newData.label = '';
    }
    setData(newData);
  };;
  const updateFormData = (id, formData) => {
    formDataStorage.updateFormData(id, formData);
    onFormDataSelected(formData);
  };;
  const deleteFormData = formData => {
    formDataStorage.deleteFormData(formData);
    setData(getStateFromProps(formDataStorage));
  };;
  const toList = () => {
    setData(getStateFromProps(formDataStorage));
  };;
  const onFormDataSelected = formData => {
    setData({...data, type: ACT_TYPE.VIEW_FORM_DATA, formData: formData});
  };;
  const onLabelSelected = label => {
    var newData = getStateFromProps(formDataStorage);
    newData.type = ACT_TYPE.LABEL_ITEMS_BY_LABEL;
    newData.label = label;
    setData(newData);
  };;
  const onEdit = formData => {
    setData({...data, type: ACT_TYPE.EDIT_FORM_DATA, formData: formData});
  };;
  const getOnEdit = () => {
    if (formDataStorage.updateFormData) {
      return onEdit;
    } else {
      return null;
    }
  };;
  const getOnDelete = () => {
    if (formDataStorage.deleteFormData) {
      return deleteFormData;
    } else {
      return null;
    }
  };

  const toListLabels = () => {
    var newData = getStateFromProps(formDataStorage);
    newData.type = ACT_TYPE.LIST_LABELS;
    setData(newData);
  };;
  const backToLabel = () => {
    setData({...data, type: ACT_TYPE.LABEL_ITEMS_BY_LABEL});
  };;
  const backFromViewData = () => {
    if (
      data.formData &&
      data.formData.label &&
      data.formData.label === data.label
    ) {
      backToLabel();
    } else {
      toList();
    }
  };;
  const backFromCreateData = () => {
    if (data.label) {
      backToLabel();
    } else {
      toList();
    }
  };

  const renderNoFormData = () => {
    return (
      <NotFormDataView
        menuItems={menuItems}
        onCreateFormData={getOnCreateFormData()}
      />
    );;
  };;
  const renderItemList = () => {
    var formDataList = formDataStorage.getSavedFormContent();

    return (
      <ListFormData
        formDataList={formDataList}
        title={title}
        menuItems={menuItems}
        onCreateFormData={getOnCreateFormData()}
        onFormDataSelected={onFormDataSelected}
        toListLabels={toListLabels}
      />
    );
  };;
  const renderItemListByLabels = () => {
    menuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: toListLabels,
      }
    ];
    var formDataList = formDataUtil.searchByLabel(
      formDataStorage.getSavedFormContent(),
      data.label
    );
    return (
      <ListFormData
        formDataList={formDataList}
        title={data.label}
        titleIcon={images.folderLight}
        menuItems={menuItems}
        onCreateFormData={getOnCreateFormData()}
        onFormDataSelected={onFormDataSelected}
        toListLabels={toListLabels}
      />
    );
  };
  const renderListFormLabels = () => {
    var labels = formDataStorage.getAllLabels();    
    return (
      <ListFormLabels
        labels={labels}
        menuItems={menuItems}
        onCreateFormData={getOnCreateFormData()}
        toList={toList}
        onLabelSelected={onLabelSelected}
      />
    );
  };;
  const renderCreateNewFormData = () => {
    return (
      <EditFormData
        createFormData={createFormData}
        onBack={backFromCreateData}
        label={data.label}
      />
    );
  };
  const renderViewFormData = () => {
    return (
      <DisplayFormData
        formData={data.formData}
        onBack={backFromViewData}
        onEdit={getOnEdit()}
        onDelete={getOnDelete()}
        displayFormDataProperties={displayFormDataProperties}
      />
    );
  };
  const renderEditFormData = () => {
    return (
      <EditFormData
        formData={data.formData}
        updateFormData={updateFormData}
        onBack={() => {
          onFormDataSelected(data.formData);
        }}
      />
    );
  };
  switch (data.type) {
    case ACT_TYPE.LIST_ITEMS:
      return renderItemList();
    case ACT_TYPE.CREATE_NEW_FORM:
      return renderCreateNewFormData();
    case ACT_TYPE.VIEW_FORM_DATA:
      return renderViewFormData();
    case ACT_TYPE.EDIT_FORM_DATA:
      return renderEditFormData();
    case ACT_TYPE.LIST_LABELS:
      return renderListFormLabels();
    case ACT_TYPE.LABEL_ITEMS_BY_LABEL:
      return renderItemListByLabels();
    default:
      return renderNoFormData();
  }
};
export default FormDataManager;