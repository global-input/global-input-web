import React, { Component } from 'react';
import { styles, deviceDetector } from './styles';
import DisplayHeader from './DisplayHeader';
import DisplayBlockText from '../display-text/DisplayBlockText';

// Since LogBox is specific to React Native, we can omit it in React.js
// If you need to suppress warnings, you can configure them in your development environment

export default class ViewWithTabMenu extends Component {
  

  renderMenuItem(menuItem, index) {
    const key = `${index}_${menuItem.label}`;
    if (menuItem.menu) {
      return (
        <MenuItem
          menu={menuItem.menu}
          onPress={menuItem.onPress}
          selected={this.props.selected}
          key={key}
        />
      );
    } else {
      return <div style={styles.menuItem} key={key}></div>;
    }
  }

  renderTitleIcon() {
    if (this.props.titleIcon) {
      return <img src={this.props.titleIcon} style={styles.titleIcon} alt="" />;
    } else {
      return null;
    }
  }

  renderHeader() {
    if (this.props.title) {      
      return (
        <DisplayHeader
          title={this.props.title}
          titleIcon={this.props.titleIcon}
        />
      );
    } else if (this.props.header) {      
      return this.props.header;
    } else {
      return null;
    }
  }

  renderTab() {
    let tabStyle = styles.tab;
    if (deviceDetector.isLandscapeMode()) {
      tabStyle = styles.tabLandscape;
    }
    return (
      <div style={tabStyle}>
        <div style={styles.scrollContainer}>
          {this.props.menuItems.map(this.renderMenuItem.bind(this))}
        </div>
      </div>
    );
  }

  renderFloatingIcon() {
    if (this.props.floatingButton && this.props.onPressFloatingIcon) {
      let iconStyle = styles.floatingIcon;
      if (deviceDetector.isLandscapeMode()) {
        iconStyle = styles.floatingIconLandscape;
      }
      return (
        <div
          onClick={this.props.onPressFloatingIcon}
          style={{ ...iconStyle, cursor: 'pointer' }}
        >
          <div style={styles.iconcontainer}>
            <img src={this.props.floatingButton.image} alt="" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderContent() {
    if (this.props.content) {
      return (
        <div style={styles.textBlockContainer}>
          <DisplayBlockText content={this.props.content} />
        </div>
      );
    } else if (this.props.message) {
      return this.renderMessage(this.props.message);
    } else {
      return null;
    }
  }

  renderMessage(message) {
    return (
      <div style={styles.messageWindowContainer}>
        <DisplayBlockText content={message} />
      </div>
    );
  }

  renderEnd() {
    return <div style={styles.endSpaceWhenKeyboardHiding}></div>;
  }

  render() {
    let contentContainerStyle = styles.contentContainer;
    if (deviceDetector.isLandscapeMode()) {
      contentContainerStyle = styles.contentContainerLandscape;
    }
    return (
      <div style={styles.container}>
        {/* StatusBar is specific to mobile apps; it's omitted here */}
        {this.renderHeader()}
        <div style={contentContainerStyle} onScroll={this.props.onScroll}>
          <div>
            {this.renderContent()}
            {this.props.children}
            {this.renderEnd()}
          </div>
        </div>
        {this.renderFloatingIcon()}
        {this.renderTab()}
      </div>
    );
  }
}

// MenuItem Component
class MenuItem extends Component {
  renderLabel() {
    if (this.props.menu && this.props.menu.label) {
      let menuText = styles.menuText;
      if (this.props.selected === this.props.menu) {
        menuText = styles.menuTextSelected;
      }
      return <span style={menuText}>{this.props.menu.label}</span>;
    } else {
      return null;
    }
  }

  renderImage() {
    if (this.props.menu && this.props.menu.image) {
      let imageSrc = this.props.menu.image;
      if (
        this.props.menu.imageSelected &&
        this.props.selected === this.props.menu
      ) {
        imageSrc = this.props.menu.imageSelected;
      }
      return <img src={imageSrc} alt="" />;
    } else {
      return null;
    }
  }

  render() {
    let iconContainerStyle = styles.iconcontainer;
    if (this.props.selected === this.props.menu) {
      iconContainerStyle = styles.iconcontainerSelected;
    }
    return (
      <div
        onClick={this.props.onPress}
        style={{ ...styles.menuItem, cursor: 'pointer' }}        
      >
        <div style={iconContainerStyle}>
          {this.renderImage()}
          {this.renderLabel()}
        </div>
      </div>
    );
  }
}