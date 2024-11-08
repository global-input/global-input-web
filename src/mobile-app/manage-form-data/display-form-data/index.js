import React, { useState } from 'react';
import styled from 'styled-components';
import {appdata} from '../../../appdata';
import images from '../../../configs/images';
import manageFormDataTextConfig from '../../../configs/manageFormDataTextConfig';
import menusConfig from '../../../configs/menusConfig';
import CopyToClipboard from '../../components/buttons/CopyToClipboard';
import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';

const ACT_TYPE = {
  DISPLAY: 1,
  CONFIRM_DELETE: 2,
};

const getMapItemKey = (item, index, label) => {
  if (item.id) {
    return item.id;
  } else if (item.label) {
    return `${index}_${item.label}`;
  } else if (label) {
    return `${index}_${label}`;
  } else if (item.value) {
    return `${index}_${item.value}`;
  } else {
    return index;
  }
};

const renderAFormFieldWithHideValue = (formField, index, label) => {
  const displayValue = '*********';
  const key = getMapItemKey(formField, index, label);

  return (
    <CopyToClipboard
      key={key}
      content={formField.value}
      convert={(content) => appdata.decryptContent(content)}
    >
      <ItemRow>
        <Label>{label}</Label>
        <ValueContainer>
          <ValueText>{displayValue}</ValueText>
        </ValueContainer>
      </ItemRow>
    </CopyToClipboard>
  );
};

const renderAFormFieldWithShowValue = (formField, index, label) => {
  let displayValue = '*********';
  let errorMessage = null;
  try {
    displayValue = appdata.decryptContent(formField.value);
  } catch (error) {
    console.error(error);
    errorMessage = 'Failed to decrypt';
  }

  const key = getMapItemKey(formField, index, label);

  return (
    <CopyToClipboard
      key={key}
      content={formField.value}
      convert={(content) => appdata.decryptContent(content)}
    >
      <ItemRow>
        <Label>{label}</Label>
        <ValueContainer>
          <ValueText>{displayValue}</ValueText>
        </ValueContainer>
      </ItemRow>
    </CopyToClipboard>
  );
};

const RenderErrorMessage = (message) => {
  if (message) {
    return <ErrorMessage>{message}</ErrorMessage>;
  } else {
    return null;
  }
};

const RenderFormFields = ({ formData, show }) => {
  const fields = formData.fields;

  if (fields && fields.length) {
    return fields.map((formField, index) => {
      let label = formField.id;
      if (formField.label && formField.label.trim().length > 1) {
        label = formField.label;
      }
      if (show) {
        return renderAFormFieldWithShowValue(formField, index, label);
      } else {
        return renderAFormFieldWithHideValue(formField, index, label);
      }
    });
  } else {
    return null;
  }
};

const RenderFormLabel = ({ formData }) => {
  if (formData.label) {
    return (
      <FormEditField>
        <LabelIcon src={images.folder} alt="Folder Icon" />
        <ItemRecord>
          <ValueText>{formData.label}</ValueText>
        </ItemRecord>
      </FormEditField>
    );
  } else {
    return null;
  }
};

const DisplayFormData = ({
  onDelete,
  onEdit,
  onBack,
  formData,
  displayFormDataProperties,
}) => {
  const [actionType, setActionType] = useState(ACT_TYPE.DISPLAY);
  const [show, setShow] = useState(false);

  const onShowChanged = (show) => {
    setShow(show);
  };

  const onDeleteFormData = () => {
    onDelete(formData);
  };

  const toConfirmDelete = () => {
    setActionType(ACT_TYPE.CONFIRM_DELETE);
  };

  const toDisplayFormData = () => {
    setActionType(ACT_TYPE.DISPLAY);
  };

  const renderDisplayFormData = () => {
    const menuItems = [
      {
        menu: menusConfig.back.menu,
        onPress: onBack,
      },
    ];

    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false);
        },
      });
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true);
        },
      });
    }
    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: toConfirmDelete,
      });
    }

    if (onEdit) {
      menuItems.push({
        menu: menusConfig.edit.menu,
        onPress: () => {
          onEdit(formData);
        },
      });
    }

    let title = manageFormDataTextConfig.title;
    if (displayFormDataProperties) {
      title = displayFormDataProperties.title;
      displayFormDataProperties.menuItems.forEach((m) => {
        m.onPress = () => {
          m.onSelect(formData);
        };
        menuItems.push(m);
      });
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={title}
      >
        <Content>
          <FormEditField>
            <LabelIcon src={images.idIcon} alt="ID Icon" />
            <ItemRecord>
              <ValueText>{formData.id}</ValueText>
            </ItemRecord>
          </FormEditField>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </Content>
      </ViewWithTabMenu>
    );
  };

  const renderConfirmDelete = () => {
    const menuItems = [
      {
        menu: menusConfig.cancel.menu,
        onPress: toDisplayFormData,
      },
    ];

    if (show) {
      menuItems.push({
        menu: menusConfig.hideSecret.menu,
        onPress: () => {
          onShowChanged(false);
        },
      });
    } else {
      menuItems.push({
        menu: menusConfig.showSecret.menu,
        onPress: () => {
          onShowChanged(true);
        },
      });
    }
    if (onDelete) {
      menuItems.push({
        menu: menusConfig.delete.menu,
        onPress: onDeleteFormData,
      });
    }

    return (
      <ViewWithTabMenu
        menuItems={menuItems}
        selected={menusConfig.manageFormData.menu}
        title={manageFormDataTextConfig.confirmDelete.title}
      >
        <Content>
          <DisplayBlockText
            content={manageFormDataTextConfig.confirmDelete.content}
          />
          <FormEditField>
            <LabelIcon src={images.idIcon} alt="ID Icon" />
            <ItemRecord>
              <ValueText>{formData.id}</ValueText>
            </ItemRecord>
          </FormEditField>
          <RenderFormLabel formData={formData} />
          <RenderFormFields formData={formData} show={show} />
        </Content>
      </ViewWithTabMenu>
    );
  };

  if (actionType === ACT_TYPE.CONFIRM_DELETE) {
    return renderConfirmDelete();
  } else {
    return renderDisplayFormData();
  }
};

export default DisplayFormData;

// Styled Components
const Content = styled.div`
  padding: 20px;
`;

const FormEditField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LabelIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const ItemRecord = styled.div`
  display: flex;
  align-items: center;
`;

const ValueText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 8px;
`;

const ValueContainer = styled.div`
  flex: 1;
`;

const ErrorMessage = styled.p`
  color: red;
`;