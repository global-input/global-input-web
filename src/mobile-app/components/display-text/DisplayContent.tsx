import React from 'react';
import styled from 'styled-components';



interface DisplayContentProps {
  content: any;
}

const MAX_ARRAY_LENGTH = 500;
const MAX_URL_LENGTH = 500;
const MAX_CONTENT_LENGTH = 1000;

const DisplayContent: React.FC<DisplayContentProps> = ({ content }) => {
  const isValidContent = (content: string, maxLength: number = MAX_CONTENT_LENGTH) => {
    return !!content && content.length < maxLength;
  };

  const isValidURL = (url: string) => {
    return (
      url &&
      url.length <= MAX_URL_LENGTH &&
      (url.startsWith('http://') || url.startsWith('https://'))
    );
  };

  const renderTextContent = (content: any, key?: string | number) => {
    return (
      <StyledText key={key}>
        {typeof content === 'object' ? renderItem(content) : content}
      </StyledText>
    );
  };

  const renderLinkTextContent = (content: any, url: string,  key?: string | number) => {
    if (!isValidURL(url)) {
      return renderTextContent(content,  key);
    }

    return (
      <StyledLink href={url} key={key} target="_blank" rel="noopener noreferrer">
        {typeof content === 'object' ? renderItem(content) : content}
      </StyledLink>
    );
  };

  const renderViewContent = (content: any, viewStyle: any, key?: string | number) => {
    return (
      <StyledView style={viewStyle} key={key}>
        {typeof content === 'object' ? renderItem(content) : content}
      </StyledView>
    );
  };

  const renderItem = (item: any, index?: number) => {
    const key = buildKey(item, index);

    if (typeof item === 'object') {
      if (Array.isArray(item)) {
        if (item.length > MAX_ARRAY_LENGTH) {
          console.warn('Array is too large');
          return null;
        }
        return (
          <StyledView key={key}>
            {item.map((subItem, subIndex) => renderItem(subItem, subIndex))}
          </StyledView>
        );
      }

      
   

      switch (item.type) {
        case 'view':
        case 'row':
        case 'col':
        case 'paragraph':
          return renderViewContent(item.content, key);
        case 'text':
        default:
          return item.url
            ? renderLinkTextContent(item.content, item.url,  key)
            : renderTextContent(item.content, key);
      }
    } else {
      return renderTextContent(item,  key);
    }
  };

  const buildKey = (item: any, index?: number) => {
    if (typeof index === 'undefined') return index;
    return item?.id || item?.key || `${index}_${item}`;
  };

  if (Array.isArray(content)) {
    if (content.length > MAX_ARRAY_LENGTH) {
      console.warn('Array is too large');
      return null;
    }
    return <StyledColumn>{content.map((item, index) => renderItem(item, index))}</StyledColumn>;
  } else if (content) {
    return renderItem(content);
  } else {
    return null;
  }
};

export default DisplayContent;

// Styled Components
const StyledText = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 14px;
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;