import React from 'react';
import styled from 'styled-components';

interface NotificationTextProps {
  message?: string;
  labelStyle?: 'light' | 'default';
}

const NotificationText: React.FC<NotificationTextProps> = ({ message, labelStyle }) => {
  if (!message) {
    return null;
  }

  return (
    <NotificationContainer>
      <NotificationMessage light={labelStyle === 'light'}>{message}</NotificationMessage>
    </NotificationContainer>
  );
};

export default NotificationText;

// Styled Components
const NotificationContainer = styled.div`
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const NotificationMessage = styled.p<{ light?: boolean }>`
  font-size: 16px;
  color: ${({ light }) => (light ? '#ffffff' : '#333333')};
  background-color: ${({ light }) => (light ? '#333333' : 'transparent')};
  padding: 10px;
  border-radius: 3px;
  margin: 0;
`;