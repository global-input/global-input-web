import React, { useState, useEffect } from 'react';
import { getStyles, deviceDetector } from './styles';

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
  const styles = getStyles();

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
  const handleFocus = () => {
    setKeyboardShowing(true);
  };
  const handleBlur = () => {
    setKeyboardShowing(false);
  };


  const renderMenuItem = (menuItem: MenuItemProps, index: number) => (
    <MenuItem
      key={`${index}_${menuItem.label}`}
      menu={menuItem.menu}
      onPress={menuItem.onPress}
      selected={selected}
    />
  );

  const renderNotificationBar = () => {
    if (notificationMessage) {
      return <NotificationBar message={notificationMessage} />;
    } else {
      return null;
    }
  };

  const renderHeader = () => {
    if (keyboardShowing) {
      return null;
    } else {
      return <DisplayHeader title={title} titleIcon={titleIcon} />;
    }
  };


  const renderTab = () => {
    const isLandscape = deviceDetector.isLandscapeMode();
    const tabStyle = keyboardShowing
      ? isLandscape
        ? styles.tabOnTopLandscape
        : styles.tabOnTop
      : isLandscape
      ? styles.tabLandscape
      : styles.tab;

    return (
      <div style={tabStyle}>
        <div style={styles.scrollContainer}>
          {menuItems.map((menuItem, index) => renderMenuItem(menuItem, index))}
        </div>
      </div>
    );
  };

  const renderEnd = () => {
    if (keyboardShowing) {
      return <div style={styles.endSpaceWhenKeyboardShowing} />;
    } else {
      return <div style={styles.endSpaceWhenKeyboardHiding} />;
    }
  };

  const contentContainerStyle = deviceDetector.isLandscapeMode()
    ? styles.contentContainerLandscape
    : styles.contentContainer;

  return (
    <div style={styles.container}>
      {/* StatusBar Replacement */}
      <div style={{ height: '20px', backgroundColor: '#fff' }}></div>

      {renderHeader()}
      {renderTab()}
      {renderNotificationBar()}

      {/* KeyboardAwareScrollView Replacement */}
      <div
        style={{
          overflowY: 'auto',
          flex: 1,
          padding: '10px',
          ...contentContainerStyle,
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </div>

      {renderEnd()}
    </div>
  );
};
export default EditorWithTabMenu;



/*

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
*/


const MenuItem = ({ menu, onPress, selected }) => {
  const styles = getStyles();

  const renderLabel = () => {
    if (menu && menu.label) {
      const menuTextStyle =
        selected === menu ? styles.menuTextSelected : styles.menuText;
      return <span style={menuTextStyle}>{menu.label}</span>;
    } else {
      return null;
    }
  };

  const renderImage = () => {
    if (menu && menu.image) {
      let imageSrc = menu.image;
      if (menu.imageSelected && selected === menu) {
        imageSrc = menu.imageSelected;
      }
      return <img src={imageSrc} alt={menu.label} />;
    } else {
      return null;
    }
  };

  const iconContainerStyle =
    selected === menu ? styles.iconcontainerSelected : styles.iconcontainer;

  return (
    <div
      onClick={onPress}
      style={styles.menuItem}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onPress();
        }
      }}
    >
      <div style={iconContainerStyle}>
        {renderImage()}
        {renderLabel()}
      </div>
    </div>
  );
};