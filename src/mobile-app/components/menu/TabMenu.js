import React, { Component } from 'react';
import { styles, deviceDetector } from './styles';

export default class TabMenu extends Component {
  renderMenuItem(menuItem, index) {
    const { menu, onPress } = menuItem;
    const key = `${index}_${menu.label}`;
    return (
      <MenuItem
        menu={menu}
        onPress={onPress}
        selected={this.props.selected}
        key={key}
      />
    );
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

  render() {
    return this.renderTab();
  }
}

class MenuItem extends Component {
  renderLabel() {
    if (this.props.menu && this.props.menu.label) {
      let menuTextStyle = styles.menuText;
      if (this.props.selected === this.props.menu) {
        menuTextStyle = styles.menuTextSelected;
      }
      return <span style={menuTextStyle}>{this.props.menu.label}</span>;
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