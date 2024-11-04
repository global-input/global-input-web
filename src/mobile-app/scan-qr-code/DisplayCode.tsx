import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  title?: string | null;
  content?: string | null;
}

const StylishMessage: React.FC<MessageProps> = ({ title = "Code Data", content = "Error Message" }) => {
  if (!title && !content) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #007BFF;
  margin-bottom: 16px;
  text-align: center;
`;

const Content = styled.div`
  min-height: 200px;
  overflow-y: auto;
  font-size: 16px;
  color: red;
  line-height: 1.6;
  padding-right: 10px; // space for scrollbar

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #007BFF;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export default StylishMessage;