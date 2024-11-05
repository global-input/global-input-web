import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  onPress?: () => void;
  image?: string;
  label?: string;
  labelStyle?: 'light' | 'default';
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, image, label, labelStyle }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TopIconContainer>
      <IconButtonWrapper onClick={handlePress}>
        {image && <IconImage src={image} alt="icon" />}
        {label && <IconText light={labelStyle === 'light'}>{label}</IconText>}
      </IconButtonWrapper>
    </TopIconContainer>
  );
};

export default IconButton;

// Styled Components
const TopIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

const IconText = styled.p<{ light: boolean }>`
  font-size: 14px;
  color: ${({ light }) => (light ? '#FFF' : '#000')};
  margin: 0;
  text-align: center;
`;