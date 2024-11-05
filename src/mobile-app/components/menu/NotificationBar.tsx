import React from 'react';
import styled from 'styled-components';
import NotificationText from '../display-text/NotificationText';

interface NotificationBarProps {
  message?: string;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <NotificationContainer>
      <NotificationText message={message} />
    </NotificationContainer>
  );
};

export default NotificationBar;

// Styled Components
const NotificationContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #ffefc1;
  border: 1px solid #ffdd00;
  border-radius: 5px;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


