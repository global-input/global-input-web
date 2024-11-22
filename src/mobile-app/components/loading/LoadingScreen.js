// LoadingScreen.js

import React, { Component } from 'react';

import { styles } from './styles';
import CancelButton from './CancelButton';

export default class LoadingScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingMessageContainer}>
            <div style={styles.loadingMessageText}>{this.props.message}</div>
          </div>
          {/* Loading Indicator */}
          <div style={styles.loadingSpinner}></div>
          <CancelButton onCancel={this.props.onCancel} />
        </div>
      </div>
    );
  }
}