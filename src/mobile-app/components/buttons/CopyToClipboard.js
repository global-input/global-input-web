import React, { Component, useState, useEffect } from 'react';
import NotificationText from '../display-text/NotificationText';
import deviceInputTextConfig  from '../../configs/deviceInputTextConfig';

export default class CopyToClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = { notificationMessage: null };
    this.exportToClipboard = this.exportToClipboard.bind(this);
  }

  componentWillUnmount() {
    if (this.clipboardTimerHandler) {
      clearTimeout(this.clipboardTimerHandler);
      this.clipboardTimerHandler = null;
    }
  }

  displayNotificationMessage(notificationMessage) {
    this.setState({ notificationMessage }, () => {
      this.clipboardTimerHandler = setTimeout(() => {
        this.setState({ notificationMessage: null });
      }, 2000);
    });
  }

  async exportToClipboard() {
    let content = this.props.content;
    if (!content) {
      this.displayNotificationMessage(
        deviceInputTextConfig.clipboardCopyButton.emptyClipboard
      );
      return;
    }
    if (this.props.convert) {
      try {
        content = await this.props.convert(content);
        if (!content) {
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert
          );
          return;
        }
      } catch (error) {
        console.log(error);
        this.displayNotificationMessage(
          deviceInputTextConfig.clipboardCopyButton.errorConvert + ':' + error
        );
        return;
      }
    }

    // Copy to clipboard using the web Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.notification
          );
        })
        .catch((error) => {
          console.error('Copy to clipboard failed', error);
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert + ':' + error
          );
        });
    } else {
      // Fallback method for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = content;
      textArea.style.position = 'fixed'; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.notification
          );
        } else {
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert
          );
        }
      } catch (error) {
        console.error('Fallback copy to clipboard failed', error);
        this.displayNotificationMessage(
          deviceInputTextConfig.clipboardCopyButton.errorConvert + ':' + error
        );
      }
      document.body.removeChild(textArea);
    }
  }

  renderNotificationMessage() {
    if (this.state.notificationMessage) {
      var labelStyle = '';
      if (this.props.white) {
        labelStyle = 'light';
      }
      return (
        <NotificationText
          message={this.state.notificationMessage}
          labelStyle={labelStyle}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div
        onClick={this.exportToClipboard}
        style={this.props.style}
      >
        <div style={this.props.contentContainerStyle}>
          {this.renderNotificationMessage()}
          {this.props.children}
        </div>
      </div>
    );
  }
}