import React, { Component } from 'react';
import { styles } from './styles';

export default class NotificationText extends Component {
  render() {
    if (this.props.message) {
      var textStyle = styles.notificationText;
      if (this.props.labelStyle === 'light') {
        textStyle = styles.notificationTextLight;
      }
      return (
        <div style={styles.notificationContainer}>
          <div style={textStyle}>{this.props.message}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}