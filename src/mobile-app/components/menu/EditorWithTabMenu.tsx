import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NotificationBar from './NotificationBar';
import DisplayHeader from './DisplayHeader';

interface MenuItemProps {
  label?: string;
  menu: any;
  onPress: () => void;
  image?: string;
  imageSelected?: string;
}

interface EditorWithTabMenuProps {
  title?: string;
  titleIcon?: string;
  notificationMessage?: string;
  menuItems: MenuItemProps[];
  selected: any;
  children: React.ReactNode;
}

const EditorWithTabMenu: React.FC<EditorWithTabMenuProps> = ({
  title,
  titleIcon,
  notificationMessage,
  menuItems,
  selected,
  children,
}) => {
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardShowing = window.innerHeight < 500; // Adjust as needed
      setKeyboardShowing(isKeyboardShowing);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderMenuItem = (menuItem: MenuItemProps, index: number) => (
    <MenuItem
      key={`${index}_${menuItem.label}`}
      menu={menuItem.menu}
      onClick={menuItem.onPress}
      selected={selected}
    />
  );

  const renderHeader = () => {
    if (!keyboardShowing) {
      return <DisplayHeader title={title} titleIcon={titleIcon} />;
    }
    return null;
  };

  const renderNotificationBar = () => {
    return notificationMessage ? <NotificationBar message={notificationMessage} /> : null;
  };

  const renderTab = () => {
    const TabStyle = keyboardShowing ? TabOnTop : Tab;
    return (
      <TabStyle>
        <ScrollContainer>
          {menuItems.map(renderMenuItem)}
        </ScrollContainer>
      </TabStyle>
    );
  };

  const contentContainerStyle = keyboardShowing ? ContentContainer : ContentContainerLandscape;

  return (
    <Container>
      <StatusBar />
      {renderHeader()}
      {renderTab()}
      {renderNotificationBar()}
      <ScrollContainer>
        <ContentContainer>{children}</ContentContainer>
      </ScrollContainer>
    </Container>
  );
};

export default EditorWithTabMenu;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StatusBar = styled.div`
  height: 20px;
  background-color: #000;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 10px;
`;

const TabOnTop = styled(Tab)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentContainerLandscape = styled(ContentContainer)`
  flex-direction: row;
`;

const EndSpaceWhenKeyboardShowing = styled.div`
  height: 100px;
`;

const EndSpaceWhenKeyboardHiding = styled.div`
  height: 20px;
`;

const MenuItemContainer = styled.div<{ selected: boolean }>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#ddd' : 'transparent')};
`;

const MenuItemText = styled.p<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#007BFF' : '#000')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  margin-top: 5px;
`;

const MenuItemImage = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuItem: React.FC<{ menu: any; onClick: () => void; selected: any }> = ({ menu, onClick, selected }) => {
  const isSelected = selected === menu;
  const image = isSelected && menu.imageSelected ? menu.imageSelected : menu.image;

  return (
    <MenuItemContainer onClick={onClick} selected={isSelected}>
      {image && <MenuItemImage src={image} alt={menu.label} />}
      <MenuItemText selected={isSelected}>{menu.label}</MenuItemText>
    </MenuItemContainer>
  );
};