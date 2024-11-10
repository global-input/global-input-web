import React from 'react';
import styled from 'styled-components';

import images from '../../../configs/images';
import { appdata, formDataUtil } from '../../../store';

interface DisplayKeyDetailsProps {
  encryptionKeyItem: {
    encryptionKey: string;
    createdAt: string;
    name: string;
  };
}

const DisplayKeyDetails: React.FC<DisplayKeyDetailsProps> = ({ encryptionKeyItem }) => {
  const decryptedKeyContent = appdata.decryptedWithPassword(encryptionKeyItem.encryptionKey);
  const createdAt = formDataUtil.getDateString(encryptionKeyItem.createdAt);
  const name = encryptionKeyItem.name;

  return (
    <FormContainer>
      <ItemRow>
        <LabelContainer>
          <Icon src={images.labelIcon} alt="Label Icon" />
        </LabelContainer>
        <FieldValueContainer>
          <FieldValue>{name}</FieldValue>
        </FieldValueContainer>
      </ItemRow>
      <ItemRow>
        <LabelContainer>
          <Icon src={images.key} alt="Key Icon" />
        </LabelContainer>
        <FieldValueContainer>
          <FieldValue>{decryptedKeyContent}</FieldValue>
        </FieldValueContainer>
      </ItemRow>
      <ItemRow>
        <LabelContainer>
          <Icon src={images.timestampIcon} alt="Timestamp Icon" />
        </LabelContainer>
        <FieldValueContainer>
          <FieldValue>{createdAt}</FieldValue>
        </FieldValueContainer>
      </ItemRow>
    </FormContainer>
  );
};

export default DisplayKeyDetails;

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LabelContainer = styled.div`
  margin-right: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const FieldValueContainer = styled.div`
  flex-grow: 1;
`;

const FieldValue = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;