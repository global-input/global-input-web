import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formDataUtil } from '../../../appdata';
import images from '../../../configs/images';
import menusConfig from '../../../configs/menusConfig';
import renderFormFields from './renderFormFields';
import ViewWithTabMenu from '../../components/menu/ViewWithTabMenu';
import DisplayBlockText from '../../components/display-text/DisplayBlockText';

const FormLabel = ({ formData }) => {
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

const MessageWithFormData = ({ formData, menuItems, title, content1, content2 }) => {
  const [action, setAction] = useState({ show: false, modal: null });

  useEffect(() => {
    setAction({ show: false, modal: null });
  }, [formData]);

  const onShow = () => setAction({ ...action, show: true });
  const onHide = () => setAction({ ...action, show: false });

  const appmenus = action.show
    ? [{ menu: menusConfig.hideSecret.menu, onPress: onHide }]
    : [{ menu: menusConfig.showSecret.menu, onPress: onShow }];

  let formid = '';
  if (formData && formData.id) {
    formid = formDataUtil.getFormIdFromTemplateAndFields(formData.id, formData.fields);
  }

  return (
    <ViewWithTabMenu menuItems={[...menuItems, ...appmenus]} title={title}>
      <Content>
        <DisplayBlockText content={content1} />
        <FormEditField>
          <LabelIcon src={images.idIcon} alt="ID Icon" />
          <ItemRecord>
            <ValueText>{formid}</ValueText>
          </ItemRecord>
        </FormEditField>
        <FormLabel formData={formData} />
        {renderFormFields({ action, formData })}
      </Content>
      <Content>
        <DisplayBlockText content={content2} />
      </Content>
    </ViewWithTabMenu>
  );
};

export default MessageWithFormData;

// Styled Components
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

const Content = styled.div`
  padding: 20px;
`;