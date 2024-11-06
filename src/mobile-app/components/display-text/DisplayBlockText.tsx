import React from 'react';
import styled from 'styled-components';
import DisplayContent from './DisplayContent';

interface DisplayBlockTextProps {
  title?: string;
  content?: any;
}

const DisplayBlockText: React.FC<DisplayBlockTextProps> = ({ title, content }) => {
  const renderTitle = () => {
    return title ? <BlockTitle>{title}</BlockTitle> : null;
  };

  if (!content) {
    return null;
  }

  return (
    <TextBlockContainer>
      {renderTitle()}
      <DisplayContent content={content} />
    </TextBlockContainer>
  );
};

export default DisplayBlockText;

// Styled Components
const TextBlockContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const blockContentTextStyle = {
  fontSize: '16px',
  color: '#555',
  lineHeight: '1.5',
};