import React, { Component } from 'react';
import { styles, deviceDector } from './styles';

export default class DisplayHeader extends Component {
  renderTitleIcon() {
    if (this.props.titleIcon) {
      return <img src={this.props.titleIcon} style={styles.titleIcon} alt="" />;
    } else {
      return null;
    }
  }

  render() {
    var headerStyle = styles.header;
    if (deviceDector.isLandscapeMode()) {
      headerStyle = styles.headerLandscape;
    }
    if (this.props.title) {
      return (
        <div style={headerStyle}>
          <div style={styles.centerHeader}>
            {this.renderTitleIcon()}
            <span style={styles.titleText}>
              {this.props.title}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div style={headerStyle}>
          {this.props.children}
        </div>
      );
    }
  }
}