import React from 'react';
import styled from 'styled-components';
import DisplayHeader from './DisplayHeader';
import DisplayBlockText from '../display-text/DisplayBlockText';

interface ViewWithTabMenuProps {
  title?: string;
  titleIcon?: string;
  header?: React.ReactNode;
  menuItems: MenuItemProps[];
  floatingButton?: FloatingButtonProps;
  onPressFloatingIcon?: () => void;
  content?: string;
  message?: string;
  children?: React.ReactNode;
  selected?: any;
}

interface MenuItemProps {
  menu?: {
    label: string;
    image?: string;
    imageSelected?: string;
  };
  onPress: () => void;
}

interface FloatingButtonProps {
  image: string;
}

const ViewWithTabMenu: React.FC<ViewWithTabMenuProps> = ({
  title,
  titleIcon,
  header,
  menuItems,
  floatingButton,
  onPressFloatingIcon,
  content,
  message,
  children,
  selected
}) => {
  const renderHeader = () => {
    if (title) {
      return <DisplayHeader title={title} titleIcon={titleIcon} />;
    } else if (header) {
      return header;
    }
    return null;
  };

  const renderContent = () => {
    if (content) {
      return (
        <TextBlockContainer>
          <DisplayBlockText content={content} />
        </TextBlockContainer>
      );
    } else if (message) {
      return renderMessage(message);
    }
    return null;
  };

  const renderMessage = (msg: string) => (
    <MessageWindowContainer>
      <DisplayBlockText content={msg} />
    </MessageWindowContainer>
  );

  const renderFloatingIcon = () => {
    if (floatingButton && onPressFloatingIcon) {
      return (
        <FloatingIcon onClick={onPressFloatingIcon}>
          <img src={floatingButton.image} alt="Floating Icon" />
        </FloatingIcon>
      );
    }
    return null;
  };

  return (
    <Container>
      <StatusBar />
      {renderHeader()}
      <ContentContainer>
        <div>
          {renderContent()}
          {children}
          <EndSpace />
        </div>
      </ContentContainer>
      {renderFloatingIcon()}
      <Tab>
        <TabScroll>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={`${index}_${menuItem.menu?.label}`}
              menu={menuItem.menu}
              onPress={menuItem.onPress}
              selected={selected}
            />
          ))}
        </TabScroll>
      </Tab>
    </Container>
  );
};

export default ViewWithTabMenu;

const MenuItem: React.FC<MenuItemProps & { selected: any }> = ({ menu, onPress, selected }) => {
  const renderLabel = () => menu?.label && <MenuText selected={selected === menu}>{menu.label}</MenuText>;

  const renderImage = () => {
    if (menu?.image) {
      const imageSrc = selected === menu && menu.imageSelected ? menu.imageSelected : menu.image;
      return <img src={imageSrc} alt={menu.label} />;
    }
    return null;
  };

  return (
    <MenuItemContainer onClick={onPress}>
      <IconContainer selected={selected === menu}>
        {renderImage()}
        {renderLabel()}
      </IconContainer>
    </MenuItemContainer>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StatusBar = styled.div`
  height: 20px;
  background-color: #000;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const TextBlockContainer = styled.div`
  margin: 10px 0;
`;

const MessageWindowContainer = styled.div`
  padding: 15px;
  background-color: #fff5cc;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const EndSpace = styled.div`
  height: 20px;
`;

const FloatingIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 10px;
`;

const TabScroll = styled.div`
  display: flex;
  overflow-x: auto;
`;

const MenuItemContainer = styled.div`
  padding: 10px;
`;

const IconContainer = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
    background-color: #ddd;
  `}
`;

const MenuText = styled.span<{ selected?: boolean }>`
  font-size: 14px;
  color: ${({ selected }) => (selected ? '#007BFF' : '#333')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  margin-top: 5px;
`;