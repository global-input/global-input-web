import React, { Component } from 'react';

import IconButton from "./IconButton";

import NotificationText from "../display-text/NotificationText";
import { styles } from "./styles";


import deviceInputTextConfig  from '../../configs/deviceInputTextConfig';
import menusConfig  from '../../configs/menusConfig';



export default class ClipboardCopyButton extends Component {
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

  exportToClipboard() {
    let content = this.props.content;
    if (!content) {
      this.displayNotificationMessage(
        deviceInputTextConfig.clipboardCopyButton.emptyClipboard
      );
      return;
    }
    if (this.props.convert) {
      try {
        content = this.props.convert(content);
        if (!content) {
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert
          );
          return;
        }
      } catch (error) {
        console.log(error);
        this.displayNotificationMessage(
          deviceInputTextConfig.clipboardCopyButton.errorConvert + ":" + error
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
          console.error("Copy to clipboard failed", error);
          this.displayNotificationMessage(
            deviceInputTextConfig.clipboardCopyButton.errorConvert + ":" + error
          );
        });
    } else {
      // Fallback method for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = content;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
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
        console.error("Fallback copy to clipboard failed", error);
        this.displayNotificationMessage(
          deviceInputTextConfig.clipboardCopyButton.errorConvert + ":" + error
        );
      }
      document.body.removeChild(textArea);
    }
  }

  renderNotificationMessage() {
    if (this.state.notificationMessage) {
      let labelStyle = "";
      if (this.props.white) {
        labelStyle = "light";
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
    let image = menusConfig.clipboardCopyButton.menu.image;
    let labelStyle = null;
    if (this.props.white) {
      image = menusConfig.clipboardCopy.menu.image;
      labelStyle = "light";
    }
    return (
      <div style={styles.clipboardButtonContainer}>
        {this.renderNotificationMessage()}
        <IconButton
          image={image}
          labelStyle={labelStyle}
          label={menusConfig.clipboardCopy.menu.label}
          onClick={this.exportToClipboard}
        />
      </div>
    );
  }
}