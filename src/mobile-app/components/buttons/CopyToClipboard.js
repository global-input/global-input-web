import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NotificationText from '../display-text/NotificationText';
import deviceInputTextConfig  from '../../../configs/deviceInputTextConfig';

const CopyToClipboard = ({
  content,
  convert,
  style,
  contentContainerStyle,
  children,
  white,
}) => {
  const [notificationMessage, setNotificationMessage] = useState(null);
  let clipboardTimerHandler = null;

  useEffect(() => {
    return () => {
      if (clipboardTimerHandler) {
        clearTimeout(clipboardTimerHandler);
        clipboardTimerHandler = null;
      }
    };
  }, []);

  const displayNotificationMessage = (message) => {
    setNotificationMessage(message);
    clipboardTimerHandler = setTimeout(() => {
      setNotificationMessage(null);
      clipboardTimerHandler = null;
    }, 2000);
  };

  const exportToClipboard = () => {
    let clipboardContent = content;
    if (!clipboardContent) {
      displayNotificationMessage(
        deviceInputTextConfig.clipboardCopyButton.emptyClipboard
      );
      return;
    }
    if (convert) {
      try {
        clipboardContent = convert(clipboardContent);
        if (!clipboardContent) {
          displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert
          );
          return;
        }
      } catch (error) {
        console.error(error);
        displayNotificationMessage(
          `${deviceInputTextConfig.clipboardCopyButton.errorConvert}: ${error}`
        );
        return;
      }
    }

    navigator.clipboard
      .writeText(clipboardContent)
      .then(() => {
        displayNotificationMessage(
          deviceInputTextConfig.clipboardCopyButton.notification
        );
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
        displayNotificationMessage(`Failed to copy text: ${error}`);
      });
  };

  const renderNotificationMessage = () => {
    if (notificationMessage) {
      const labelStyle = white ? 'light' : '';
      return (
        <NotificationText
          message={notificationMessage}
          labelStyle={labelStyle}
        />
      );
    }
    return null;
  };

  return (
    <StyledButton onClick={exportToClipboard} style={style}>
      <ContentContainer style={contentContainerStyle}>
        {renderNotificationMessage()}
        {children}
      </ContentContainer>
    </StyledButton>
  );
};

export default CopyToClipboard;

// Styled Components
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;